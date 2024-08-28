import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  // state variables to handle email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload
    // for now, just navigate to the dashboard after login
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>AASIA</h1>
        <p>Automated AI-based Student Inquiry Assistant</p>
        <div className="login-box">
          <h2>Log in to your account</h2>
          {/* form to capture email and password */}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#" className="forgot-password">
              {" "}
              {/* add forgot password page */}
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
