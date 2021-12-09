from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel
import db
import uuid

tg = [
    {
        "name": "Test Routes",
        "description": "Routes meant for the testing and development of related services and applications"
    },
    {
        "name": "User Routes",
        "description": "To deal with user retrieval, sign up, updation and deletion"
    },
    {
        "name": "Question Routes",
        "description": "Routes dealing with the questions for the sign up process"
    },

    {
        "name": "Ranking",
        "description": "Routes related to rankings"
    },
    {
        "Login": "Login Endpoint",
        "description": "A single postable route to allow logins"
    },
    {
        "Register": "Registration Routes",
        "description": "A single postable route to allow registration of new users"
    }
]
description = "The backend API for the Magic personality based friend finder application"
app = FastAPI(
    title = "Magic Backend",
    description = description,
    version = "0.0.1alpha",
    openapi_tags=tg
    )

class User(BaseModel):
    user_id: int
    username: str
    password: str
    email: str

class Question(BaseModel):
    question_id: int
    question_text: str
    dimension_id: int

@app.get("/api/v1", tags=['Test Routes'])
def read_root():
    return {"App is active and running!"}

@app.get('/api/v1/users', tags=['User Routes'])
def read_users(user_id: Optional[int] = None, username: Optional[str] = None, email: Optional[str] = None):
    if user_id is not None:
        return db.get_user(user_id = user_id)
    elif username is not None:
        return db.get_user(username = username)
    elif email is not None:
        return db.get_user(email = email)
    else:
        return db.get_users()


@app.post('/api/v1/users', tags=['User Routes'])
def add_users(usr: User, user_id: Optional[int] = None, username: Optional[str] = None, email: Optional[str] = None):
    if user_id is not None:
        return db.add_user(user_id = user_id)
    elif username is not None:
        return db.add_user(username = username)
    elif email is not None:
        return db.add_user(email = email)

@app.put('/api/v1/users', tags=['User Routes'])
def update_users(usr: User, user_id: Optional[int] = None, username: Optional[str] = None, email: Optional[str] = None):
    if user_id is not None:
        return db.update_user(user_id = user_id)
    elif username is not None:
        return db.update_user(username = username)
    elif email is not None:
        return db.update_user(email = email)



@app.delete('/api/v1/users', tags=['User Routes'])
def delete_users(usr: User, user_id: Optional[int] = None, username: Optional[str] = None, email: Optional[str] = None):
    if user_id is not None:
        return db.delete_user(user_id = user_id)
    elif username is not None:
        return db.delete_user(username = username)
    elif email is not None:
        return db.delete_user(email = email)


@app.get('/api/v1/questions', tags=['Question Routes'])
def read_questions():
    return db.get_questions()

@app.post('/api/v1/questions', tags=['Question Routes'])
def post_questions(q: Question):
    return db.add_questions(question=q)

@app.delete('/api/v1/questions', tags=['Question Routes'])
def delete_questions(qid: Optional[int] = None, qtxt: Optional[str] = None):
    """
    Pass one of these
    """
    if qid:
        db.delete_question(qid=qid)
    elif qtxt:
        db.delete_question(qtxt=qtxt)

@app.get('/api/v1/rank', tags=['Ranking'])
def rank():
    """
    Runs the ranking function against all users in the database and outputs whether it was successful.
    """
    return db.run_ranker()


@app.post('/api/v1/login', tags=['Login'])
def login(email: Optional[str] = None, password: Optional[str] = None):
    """
    Login function
    """
    if email is not None and password is not None:
        # both need to be defined
        userobj = db.get_user(email = email)
        if userobj == True:
            return userobj # the user object itself
        else:
            return False
    else:
        return False

@app.post('/api/v1/signup', tags=['Register'])
def signup(email: Optional[str] = None, password: Optional[str] = None, username: Optional[str] = None):
    """
    Signup function
    """
    if email is not None and password is not None and username is not None:
        # all are defined
        usrx = User()
        usrx.user_id = str(uuid.uuid4())
        usrx.email = email
        usrx.username = username
        usrx.password = password
        return db.add_user(usrx)
    else:
        return False
