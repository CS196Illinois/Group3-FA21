"""
/api/v1/users (GET, POST, DELETE, PUT)
/api/v1/questions (GET, POST, DELETE)
/api/v1/rank (GET)
"""


import flask

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/api/test', methods=['GET'])
def home():
    return "UP"


@app.route('/api/v1/users', methods=['GET', 'POST', 'DELETE', 'PUT'])
def users():
    if request.method == "GET":
        """
        Use the backend database to fetch a list of users and return it. Not sure about the implementation yet.
        """
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
            response.data = json.dumps({
                "code": 400,
                "name": "Bad Request",
                "Description": "Did not pass one of the required variables of username, password, dob or email or passed in a wrong format"
            })
            return 

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
