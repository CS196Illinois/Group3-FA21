"""
/api/v1/users (GET, POST, DELETE, PUT)
/api/v1/questions (GET, POST, DELETE)
/api/v1/rank (GET)
"""


import flask

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return "BACKEND FUNCTIONAL AND READY TO GO."

app.run()


@app.route('/api/v1/users', methods=['GET', 'POST', 'DELETE', 'PUT'])
def users():
    return ""

@app.route('/api/v1/questions', methods=['GET', 'POST', 'DELETE'])
def questions():
    return ""


@app.route('/api/v1/rank', methods=['GET'])
def rank():
    return ""