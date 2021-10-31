def get_users():
    """
    Connect to SQL server and return all users

    return a list of all users as the user object.
    """
    return []


def get_user(user_id = None, username = None, email = None):
    """
    Connect to SQL server and return the user. One of user_id, username or email will be passed in.

    Return the user object.
    """
    return {}

def update_user(user, user_id = None, username = None, email = None):
    """
    Connect to SQL server and update the user. One identification factor will be provided and the user object with all the user details will be provided.

    Return True or False based on the success or failure of the operation
    """
    return True

def delete_user(user_id = None, username = None, email = None):
    """
    Connect to SQL server and delete the user. One of user_id, username or email will be passed in.

    Return True or False based on the success or failure of the operation
    """
    return True

def add_user(user, user_id = None, username = None, email = None):
    """
    Connect to SQL server and add the user. One identification factor will be provided and the user object with all the user details will be provided.

    Return True or False based on the success or failure of the operation
    """
    return True