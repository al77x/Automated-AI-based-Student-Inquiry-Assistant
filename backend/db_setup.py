import sqlite3

# connect to the SQLite db (create the db file if it doesn't exist)
conn = sqlite3.connect('users.db')

# create a cursor object to execute sql queries
cursor = conn.cursor()

# create users table
cursor.execute('''
CREATE TABLE IF NOT EXISTS users(
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               name TEXT NOT NULL,
               email TEXT NOT NULL UNIQUE,
               password TEXT NOT NULL
               );
''')

# create password_resets table
cursor.execute('''
CREATE TABLE IF NOT EXISTS password_resets (
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               email TEXT NOT NULL,
               token TEXT NOT NULL,
               created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
''')

# commit changes and close connection
conn.commit()
conn.close()

print("Database and tables created successfully!")