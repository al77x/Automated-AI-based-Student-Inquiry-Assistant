import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
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
            <a href="#" className={styles.forgotPassword}>
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
