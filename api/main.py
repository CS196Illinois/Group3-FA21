from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel
import db


tg = [
    {
        "name": "users",
        "description": "API route for users."
    },
    {
        "questions": "questions",
        "description": "ok"
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

@app.get("/api/v1")
def read_root():
    return {"App is active and running!"}

@app.get('/api/v1/users', tags=['users'])
def read_users(user_id: Optional[int] = None, username: Optional[str] = None, email: Optional[str] = None):
    if user_id is not None:
        return db.get_user(user_id = user_id)
    elif username is not None:
        return db.get_user(username = username)
    elif email is not None:
        return db.get_user(email = email)
    else:
        return db.get_users()


@app.post('/api/v1/users', tags=['users'])
def add_users(usr: User, user_id: Optional[int] = None, username: Optional[str] = None, email: Optional[str] = None):
    if user_id is not None:
        return db.add_user(user_id = user_id)
    elif username is not None:
        return db.add_user(username = username)
    elif email is not None:
        return db.add_user(email = email)

@app.put('/api/v1/users', tags=['users'])
def update_users(usr: User, user_id: Optional[int] = None, username: Optional[str] = None, email: Optional[str] = None):
    if user_id is not None:
        return db.update_user(user_id = user_id)
    elif username is not None:
        return db.update_user(username = username)
    elif email is not None:
        return db.update_user(email = email)



@app.delete('/api/v1/users', tags=['users'])
def delete_users(usr: User, user_id: Optional[int] = None, username: Optional[str] = None, email: Optional[str] = None):
    if user_id is not None:
        return db.delete_user(user_id = user_id)
    elif username is not None:
        return db.delete_user(username = username)
    elif email is not None:
        return db.delete_user(email = email)


# @app.get('/api/v1/questions', tags=['questions'])