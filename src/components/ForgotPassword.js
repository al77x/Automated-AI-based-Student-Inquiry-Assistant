import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // logic for handling forgot password request
    console.log("Password reset email sent to:", email);
    navigate("/login"); // redirect to login page after submission
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h1>AASIA</h1>
        <p>Automated AI-based Student Inquiry Assistant</p>
        <div className={styles.loginBox}>
          <h2>Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.inputField}
            />
            <button type="submit" className={styles.submitButton}>
              Send Reset Link
            </button>
          </form>
          <p className={styles.existingAccountText}>
            Remembered your password? <a href="/">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
