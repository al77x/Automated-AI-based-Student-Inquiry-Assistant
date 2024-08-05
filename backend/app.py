from flask import Flask, request, jsonify # type: ignore
from flask_cors import CORS # type: ignore
from chatbot import get_response

# initialise the flask application
app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Welcome to the AI-based Student Inquiry Assistant"

@app.route('/api/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message') # get the message from the request
    response = get_response(user_message) # get the AI response
    return jsonify({'response': response}) # return the response as JSON

if __name__ == '__main__':
    app.run(debug=True)
