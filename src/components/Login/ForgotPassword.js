import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Login/Login.module.css";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // send the email and new password to the backend to reset the password
      const response = await axios.post(
        "http://localhost:5000/forgot-password",
        {
          email: email,
          newPassword: newPassword,
        }
      );

      if (response.status === 200) {
        alert("Password updated successfully!");
        navigate("/login"); // redirect to login page after success
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Account not found!");
      } else {
        alert("Password reset failed! Please try again.");
      }
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h1>AASIA</h1>
        <p>Automated AI-based Student Inquiry Assistant</p>
        <div className={styles.loginBox}>
          <h2>Reset Password</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.inputField}
            />
            <input
              type="password"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className={styles.inputField}
            />
            <button type="submit" className={styles.submitButton}>
              Reset Password
            </button>
          </form>
          <p className={styles.existingAccountText}>
            Remembered your password? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
