import React from "react";
import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatIcon from "@mui/icons-material/Chat";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import FeedbackIcon from "@mui/icons-material/Feedback";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>AASIA</h1>
        <p>Automated AI-based Student Inquiry Assistant</p>
        <button className="new-chat-btn">New Chat</button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <DashboardIcon />
            Dashboard
          </li>
          <li>
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
          <li>
            <SettingsIcon />
            Settings
          </li>
          <li>
            <FeedbackIcon />
            Feedback
          </li>
          <li>Help Center</li>
          <li>Privacy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
