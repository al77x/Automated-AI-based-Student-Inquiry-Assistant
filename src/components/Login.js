import React from "react";
import "../Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>AASIA</h1>
        <p>Automated AI-based Student Inquiry Assistant</p>
        <div className="login-box">
          <h2>Log in to your account</h2>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <a href="#" className="forgot-password">
              forgot your password, <span>please click here</span>
            </a>
            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
