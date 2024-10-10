import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Login/Login.module.css";
import axios from "axios";
import logo from "../../assets/aasia-logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popupMessage, setPopupMessage] = useState(""); // State for custom popup message
  const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        setPopupMessage("Login successful!"); // Set success message
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          navigate("/dashboard");
        }, 3000); // 3-second delay before redirect
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setPopupMessage("Login failed: Invalid credentials!");
        } else if (error.response.status === 404) {
          setPopupMessage("Login failed: Account not found!");
        } else {
          setPopupMessage("Login failed: Server error.");
        }
      } else {
        setPopupMessage("Login failed: Network error.");
      }
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false); // Hide the popup after 3 seconds
      }, 3000); // 3-second delay before hiding the popup
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <img src={logo} alt="AASIA Logo" className={styles.logo} />
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
            <a href="/register" className={styles.registerLink}>
              Register as a new user{" "}
            </a>
            <a href="/forgot-password" className={styles.forgotPassword}>
              forgot your password, <span>please click here</span>
            </a>
            <a href="/mentor-dashboard" className={styles.mentorLogin}>
              Mentor Login
            </a>
            <button type="submit" className={styles.submitButton}>
              Log in
            </button>
          </form>
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

export default Login;
