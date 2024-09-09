import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // logic to register user (to be implemented)
    console.log("User registered:", {
      fullName,
      email,
      password,
      confirmPassword,
    });
    navigate("/login"); // redirect to login page after registration
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h1>AASIA</h1>
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
            Already have an account? <a href="/">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
