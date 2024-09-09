import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS
import bcrypt

app = Flask(__name__)
CORS(app)

# helper function to connect to the SQLite db
def get_db_connection():
    conn = sqlite3.connect('users.db')
    conn.row_factory = sqlite3.Row  # makes the rows behave like dictionaries
    return conn

# register route
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    name = data['fullName']
    email = data['email']
    password = data['password']

    # hash the password
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    # insert the user into the db
    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", 
                       (name, email, hashed_password))
        conn.commit()
    except sqlite3.IntegrityError:
        return jsonify(message="User with this email already exists"), 400
    finally:
        conn.close()

    return jsonify(message="User registered successfully"), 200

# login Route
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']

    # query the user by email
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
    user = cursor.fetchone()
    conn.close()

    if user:
        # compare the entered password with the stored hashed password
        if bcrypt.checkpw(password.encode('utf-8'), user['password']):
            return jsonify(message="Login successful"), 200
        else:
            return jsonify(message="Invalid credentials"), 401
    else:
        return jsonify(message="Account not found"), 404

# forgot password route 
@app.route('/forgot-password', methods=['POST'])
def forgot_password():
    data = request.get_json()
    email = data['email']
    new_password = data['newPassword']

    # query the user by email
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
    user = cursor.fetchone()

    if user:
        # hash the new password
        hashed_password = bcrypt.hashpw(new_password.encode('utf-8'), bcrypt.gensalt())

        # update the user's password in the db
        cursor.execute("UPDATE users SET password = ? WHERE email = ?", (hashed_password, email))
        conn.commit()
        conn.close()
        return jsonify(message="Password updated successfully!"), 200
    else:
        conn.close()
        return jsonify(message="Email address not found"), 404

if __name__ == '__main__':
    app.run(debug=True)
