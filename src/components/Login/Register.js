import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Login/Login.module.css";
import axios from "axios";
import logo from "../../assets/aasia-logo.png";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [popupMessage, setPopupMessage] = useState(""); // Custom popup message
  const [showPopup, setShowPopup] = useState(false); // Toggle popup visibility
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPopupMessage("Passwords do not match!"); // Password mismatch
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/register", {
        fullName: fullName,
        email: email,
        password: password,
      });

      if (response.status === 200) {
        setPopupMessage("Account registered successfully!"); // Success message
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          navigate("/login"); // Redirect after 3 seconds
        }, 3000);
      }
    } catch (error) {
      setPopupMessage(
        error.response
          ? error.response.data.message
          : "Registration failed! Please try again."
      );
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Auto-hide after 3 seconds
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <img src={logo} alt="AASIA Logo" className={styles.logo} />
        <p>Register for an account</p>
        <div className={styles.loginBox}>
          <h2>Register for an account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className={styles.inputField}
            />
            <input
              type="email"
              placeholder="Email"
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={styles.inputField}
            />
            <button type="submit" className={styles.submitButton}>
              Register
            </button>
          </form>
          <p className={styles.existingAccountText}>
            Already have an account? <a href="/login">Log in</a>
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

export default Register;
