from flask import Flask, request, jsonify  # import Flask, request handling, and JSON
from flask_cors import CORS  # import CORS for handling cross-origin requests
from chatbot import get_response  # import the function to get AI responses

# initialize the flask application
app = Flask(__name__)
CORS(app)  # enable CORS to allow requests from other domains

# define the home route
@app.route('/')
def home():
    return "Welcome to the AI-based Student Inquiry Assistant"  # simple welcome message

# define the chat API route
@app.route('/api/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')  # extract the message from the incoming request
    response = get_response(user_message)  # generate a response using the AI chatbot
    return jsonify({'response': response})  # return the response as a JSON object

# run the application
if __name__ == '__main__':
    app.run(debug=True)  # start the Flask app in debug mode for easier development