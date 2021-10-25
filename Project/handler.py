"""
The database handler for the application. Interfaces with MySQL and provides a layer of abstraction
"""
from models.user import User


def get_all_users() -> list(User()):
    """
    Returns a list of all users in our database in python list format to the function call.
    Each user in this list is in the python model of a user.
    """
    return []

def find_user(username=None, email=None) -> User:
    """
    Returns all details about the user based on either the username or email or both.
    """
    assert username is not None or email is not None
    return User()