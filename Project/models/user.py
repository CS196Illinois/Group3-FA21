class User:
    def __init__(self, username, email, password, dob):
        self.username = username
        self.email = email
        self.password = password
        self.dob = dob

    def compare_password(password=password):
        """
        If we are hashing users, we can have this function automatically compare the password and help with the login.
        """
        if self.password == password:
            return True
        return False