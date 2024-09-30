import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Login/Login.module.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the login data to the Flask backend
      const response = await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        alert("Login successful!");
        navigate("/dashboard"); // Redirect to dashboard after successful login
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          alert("Login failed: Invalid credentials!");
        } else if (error.response.status === 404) {
          alert("Login failed: Account not found!");
        } else {
          alert("Login failed: Server error.");
        }
      } else {
        alert("Login failed: Network error.");
      }
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h1>AASIA</h1>
        <p>Automated AI-based Student Inquiry Assistant</p>
        <div className={styles.loginBox}>
          <h2>Log in to your account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.inputField}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.inputField}
            />
            {/* direct to register or forgot password page */}
            <a href="/register" className={styles.registerLink}>
              Register as a new user{" "}
            </a>
            <a href="/forgot-password" className={styles.forgotPassword}>
              forgot your password, <span>please click here</span>
            </a>
            <button type="submit" className={styles.submitButton}>
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
