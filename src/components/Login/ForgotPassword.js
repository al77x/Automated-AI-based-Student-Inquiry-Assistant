import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Login/Login.module.css";
import axios from "axios";
import logo from "../../assets/aasia-logo.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [popupMessage, setPopupMessage] = useState(""); // Custom popup message
  const [showPopup, setShowPopup] = useState(false); // Toggle popup visibility
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/forgot-password",
        {
          email: email,
          newPassword: newPassword,
        }
      );

      if (response.status === 200) {
        setPopupMessage("Password updated successfully!"); // Success message
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          navigate("/login"); // Redirect after 3 seconds
        }, 3000);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setPopupMessage("Account not found!");
      } else {
        setPopupMessage("Password reset failed! Please try again.");
      }
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Auto-hide after 3 seconds
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <img src={logo} alt="AASIA Logo" className={styles.logo} />
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

      {/* Popup Component */}
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <p>{popupMessage}</p>
            <button
              onClick={() => setShowPopup(false)}
              className={styles.popupButton}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
