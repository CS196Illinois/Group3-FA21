"""
/api/v1/users (GET, POST, DELETE, PUT)
/api/v1/questions (GET, POST, DELETE)
/api/v1/rank (GET)
"""


import flask
import handler as db
app = flask.Flask(__name__)
app.config["DEBUG"] = True
PASSCODE_VALUE = "something"

"""
PRODUCTION READY ROUTES
"""

@app.route('/api/test', methods=['GET'])
def home():
    return "UP"


"""
DEVELOPMENT ROUTES
"""

def response_handler(code, message=None):
    if code == 400:
        desc = message if message is not None else "Did not pass one of the required variables of username, password, dob or email or passed in a wrong format"
        return json.dumps({
            "code": 400,
            "name": "Bad Request",
            "Description": desc
        })
    elif code == 405:
        desc = message if message is not None else "The request method is known by the server but is not supported by the target resource. For example, an API may not allow calling DELETE to remove a resource."
        return json.dumps({
            "code": 405,
            "name": "Bad Request",
            "Description": desc
        })
    elif code == 501:
        desc = message if message is not None else "The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD."
        return json.dumps({
            "code": 405,
            "name": "Bad Request",
            "Description": desc
        })


@app.route('/api/v1/users', methods=['GET', 'POST', 'DELETE', 'PUT'])
def users():
    if request.method == "GET":
        """
        Use the backend database to fetch a list of users and return it if a passcode value is passed. 

        If the username or the email of a particular user is passed, we can get just that particular user as well.
        """
        try:
            assert request.args.get("username") is not None or request.args.get("email") is not None
        except:
            response.data = response_handler(400)
            return response
        # if we want a list of all users for some reason, we just pass in a passcode value in place of our username, and return all
        if request.args.get("username") == PASSCODE_VALUE or request.args.get("email") == PASSCODE_VALUE:
            
            return db.get_all_users()
        else:
            if request.args.get("username"):
                db.find_user(username=request.args.get("username"))
            else:
                db.find_user(email=request.args.get("email"))
                
    elif request.method == "POST":
        """
        Takes the specified parameters and makes some shit up!!!!
        """
        try:
            assert request.args.get("username") is not None
            assert request.args.get("password") is not None
            assert request.args.get("email") is not None
            assert request.args.get("dob") is not None
        except:
            response.data = response_handler(400)
            return response
        response.data = response_handler(501)
        return response
    elif request.method == "DELETE":
        response.data = response_handler(501)
        return response
    else:
        # handle any unexpected requests
        response.data = response_handler(405)
        return response

    return ""

@app.route('/api/v1/questions', methods=['GET', 'POST', 'DELETE'])
def questions():
    return ""


@app.route('/api/v1/rank', methods=['GET'])
def rank():
    """
    TODO: Refine to HTTP Error Codes.
    """
    if request.method == "GET":
        if 'user1' in request.args and 'user2' in request.args:
            u1 = int(request.args['user1'])
            u2 = int(request.args['user2'])
        else:
            return "ERROR. USER FIELD NOT ACCURATE"
    else:
        return "INVALID METHOD"



app.run()
