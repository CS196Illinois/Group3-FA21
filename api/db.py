import mysql.connector
import numpy as np
import match as m

class User:
    def __init__(self, user_id, username, password, email, dob, last_active, last_updated):
        self.user_id = user_id
        self.username = username
        self.password = password
        self.email = email
        self.dob = dob
        self.last_active = last_active
        self.last_updated = last_updated

class Question:
    def __init__(self, question_id, question_text, dimension_id):
        self.question_id = question_id
        self.question_text = question_text
        self.dimension_id = dimension_id

class Results:
    def __init__(self, o, c, e, a, n, user_id):
        self.o = o
        self.c = c
        self.e = e
        self.a = a
        self.n = n
        self.user_id = user_id


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
    query = "INSERT INTO users (user_id, username, password, email, dob, last_active, last_updated) VALUES (%s, %s, %s, %s, %s, %s, %s)"
    try:
        cursor.execute(query, (user.user_id, user.username, user.password, user.email, user.dob, user.last_active, user.last_updated))
    except Exception as e:
        print("Error, ", e)
        return False

    mydb.commit()

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
    createConnection()
    global mydb
    cursor = mydb.cursor()
    query = "INSERT INTO question_text (question_id, question, dimension_id) VALUES (%s, %s, %s)"
    try:
        cursor.execute(query, (question.question_id, question.question_text, question.dimension_id))
    except Exception as e:
        print("Error, ", e)
        return False

    mydb.commit()

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


def get_results():
    """
    Returns a list of results objects
    """
    createConnection()
    global mydb
    cursor = mydb.cursor()
    query = "SELECT * FROM results"
    cursor.execute(query)
    results = cursor.fetchall()
    result_list = []
    for row in results:
        result_list.append(Results(row[0], row[1], row[2], row[3], row[4], row[5]))

    return result_list

def get_result(user_id = None):
    """
    Connect to SQL server and return the user result. user_id will be passed in.

    Return the result object.
    """
    createConnection()
    global mydb
    cursor = mydb.cursor()
    query = "SELECT * FROM results WHERE user_id = %s"
    cursor.execute(query, (user_id))
    result_row = cursor.fetchall()
    result_object = Results(result_row[0][0], result_row[0][1], result_row[0][2], result_row[0][3], result_row[0][4], result_row[0][5])

    return result_object



def add_result(results):
    """
    Connect to SQL server and add a user result given a Results object.

    Return True or False based on the success or failure of the operation
    """
    createConnection()
    global mydb
    cursor = mydb.cursor()
    query = "INSERT INTO results (openness, conscientiousness, extraversion, agreeableness, neuroticism, user_id) VALUES (%s, %s, %s, %s, %s, %s)"
    
    try:
        cursor.execute(query, (results.o, results.c, results.e, results.a, results.n, results.user_id))
    except Exception as e:
        print("Error, ", e)
        return False
    
    return True
        

def run_ranker():
    """
    Runs the ranking function for all the users.

    Returns True or False based on the success or failure of the operation.
    """
    createConnection()
    result_list = get_results()
    cursor = mydb.cursor()
    rank = []
    for user_result in result_list:
        user = [user_result.o, user_result.c, user_result.e, user_result.a, user_result.n]
        scores = []
        for row in result_list:
            scores.append([row.o, row.c, row.e, row.a, row.n])
        try:
            rank.append(m.distance(np.array(user), np.array(scores)))
        except Exception as e:
            print("Error in ranking, ", e)
            return False
    for i in range(0, len(rank)):
        for j in range(0, len(rank[i])):
            user_id1 = i + 1
            user_id2 = j + 1
            distance = float(rank[i][j])
            query = "INSERT INTO matches (user_id1, user_id2, distance) VALUES (%s, %s, %s) ON DUPLICATE KEY UPDATE distance = %s"

            try:
                cursor.execute(query, (user_id1, user_id2, distance, distance))
            except Exception as e:
                print("Error, ", e)
                return False
                
    mydb.commit()
    return True


