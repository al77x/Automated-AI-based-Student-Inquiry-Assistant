from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(backend)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'  # Need to replace with actual database link
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Creating of the SQLAlchemy db instance
db = SQLAlchemy(app)

# Defining a User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

# Creating the database
with app.app_context():
    db.create_all()

# Add a new user
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    new_user = User(
        first_name=data['first_name'],
        last_name=data['last_name'],
        email=data['email'],
        password=data['password']  # Note: Never store plain passwords in production; use hashing!
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User registered successfully"}), 201

# All users
@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    users_list = [{"first_name": user.first_name, "last_name": user.last_name, "email": user.email} for user in users]
    return jsonify(users_list)

if __name__ == '__main__':
    app.run(debug=True)
