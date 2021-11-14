import mysql.connector
import match

class User:
    def __init__(self, user_id, username, password, email, dob, last_active, last_updated):
        self.user_id = user_id
        self.username = username
        self.password = password
        self.email = email
        self.dob = dob
        self.last_active = last_active
        self.last_updated = last_updated

mydb = None

def createConnection():
    global mydb
    mydb = mysql.connector.connect(
        host = "localhost",
        user = "root",
        passwd = "password",
        database = "CS196db"
    )
    print(mydb)


def get_users():
    """
    Connect to SQL server and return all users

    return a list of all users as the user object.
    """
    
    createConnection()
    global mydb
    cursor = mydb.cursor()
    query = "SELECT * FROM users"
    cursor.execute(query)
    user_rows = cursor.fetchall()
    user_list = []

    for row in user_rows:
        user_list.append(User(row[0], row[1], row[2], row[3], row[4], row[5], row[6]))

    return user_list


def get_user(user_id = None, username = None, email = None):
    """
    Connect to SQL server and return the user. One of user_id, username or email will be passed in.

    Return the user object.
    """
    createConnection()
    global mydb
    cursor = mydb.cursor()
    query = "SELECT * FROM users WHERE user_id = %s OR email = %s OR username = %s"
    cursor.execute(query, (user_id, email, username))
    user_row = cursor.fetchall()
    user_object = User(user_row[0][0], user_row[0][1], user_row[0][2], user_row[0][3], user_row[0][4], user_row[0][5], user_row[0][6])

    return user_object


def update_user(user, user_id = None, username = None, email = None):
    """
    Connect to SQL server and update the user. One identification factor will be provided and the user object with all the user details will be provided.

    Return True or False based on the success or failure of the operation
    """
    createConnection()
    global mydb
    cursor = mydb.cursor()
    query = "UPDATE users SET user_id = %s, username = %s, password = %s, email = %s, dob = %s, last_active = %s, last_updated = %s WHERE user_id = %s OR username = %s OR email = %s"

    try:
        cursor.execute(query, (user.user_id, user.username, user.password, user.email, user.dob, user.last_active, user.last_updated, user_id, username, email))
    except Exception as e:
        print('Error: ', e)
        return False
    
    mydb.commit()

    return True

def delete_user(user_id = None, username = None, email = None):
    """
    Connect to SQL server and delete the user. One of user_id, username or email will be passed in.

    Return True or False based on the success or failure of the operation
    """
    createConnection()
    global mydb
    cursor = mydb.cursor()
    query = "DELETE FROM users WHERE user_id = %s OR email = %s OR username = %s"
    try:
        cursor.execute(query, (user_id, email, username))
    except Exception as e:
        print("Error, ", e)
        return False
    
    mydb.commit()

    return True

def add_user(user):
    """
    Connect to SQL server and add the user.

    Return True or False based on the success or failure of the operation
    """
    createConnection()
    global mydb
    cursor = mydb.cursor()
    query = "INSERT INTO users (user_id, username, password, email, dob, last_active) VALUES (%s, %s, %s, %s, %s, %s, %s)"
    try:
        cursor.execute(query, (user.user_id, user.username, user.password, user.email, user.dob, user.last_active, user.last_updated))
    except Exception as e:
        print("Error, ", e)
        return False

    return True


def read_questions():
    """
    Return a list of questions
    """
    createConnection()
    global mydb
    cursor = mydb.cursor()
    query = "SELECT question FROM question_text"
    cursor.execute(query)
    question_data = cursor.fetchall()
    question_list = []
    for row in question_data:
        question_list.append(row[0])
    return question_list


def add_questions(question):
    """
    Connect to SQL server and add the question.

    Return True or False based on the success or failure of the operation
    """
    return True

def delete_question(qid = None, qtxt = None):
    """
    Connect to SQL server and delete the question. Either the question id or question text will be provided.

    Return True or False based on the success or failure of the operation
    """
    createConnection()
    global mydb
    cursor = mydb.cursor()
    query = "DELETE FROM question_text WHERE question_id = %s or question = %s"
    try:
        cursor.execute(query, (qid, qtxt))
    except Exception as e:
        print("Error, ", e)
        return False
    
    mydb.commit()

    return True

def run_ranker():
    """
    Runs the ranking function for all the users.

    Returns True or False based on the success or failure of the operation.
    """
    return True


    
