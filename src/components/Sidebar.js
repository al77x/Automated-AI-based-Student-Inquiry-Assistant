import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatIcon from "@mui/icons-material/Chat";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import FeedbackIcon from "@mui/icons-material/Feedback";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>AASIA</h1>
        <p>Automated AI-based Student Inquiry Assistant</p>
        <button className="new-chat-btn" onClick={() => navigate("/newchat")}>
          New Chat
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li onClick={() => navigate("/dashboard")}>
            <DashboardIcon />
            Dashboard
          </li>
          <li onClick={() => navigate("/newchat")}>
            <ChatIcon />
            Chatbot
          </li>
          <li>
            <HelpIcon />
            Frequently-Asked Questions
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <ul>
          <li onClick={() => navigate("/settings")}>
            <SettingsIcon />
            Settings
          </li>
          <li onClick={() => navigate("/feedback")}>
            <FeedbackIcon />
            Feedback
          </li>
          <li onClick={() => navigate("/help")}>Help Center</li>
          <li onClick={() => navigate("/privacy")}>Privacy</li>
          <li onClick={() => navigate("/terms")}>Terms of Service</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
