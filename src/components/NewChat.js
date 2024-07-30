import React from "react";
import { useNavigate } from "react-router-dom";
import "./NewChat.css";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatIcon from "@mui/icons-material/Chat";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";

const NewChat = () => {
  const navigate = useNavigate();

  return (
    <div className="new-chat-page">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>AASIA</h1>
          <p>Automated AI-based Student Inquiry Assistant</p>
          <button className="new-chat-btn">New Chat</button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li onClick={() => navigate("/dashboard")}>
              <DashboardIcon />
              Dashboard
            </li>
            <li>
              <GridViewIcon />
              Data Center
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
      </aside>
      <main className="main-content">
        <header className="header">
          <h2>Welcome Alice Smith</h2>
          <div className="header-info">
            <div className="time-date">
              <div className="time">10:45</div>
              <div className="date">11/7/2024</div>
            </div>
            <div className="header-icons">
              <GridViewIcon />
              <SettingsIcon />
              <NotificationsIcon />
              <AccountCircleIcon />
            </div>
          </div>
        </header>
        <div className="chat-window">
          <div className="chat-message student">
            <div className="message-content">
              <p>How to install Netbeans on my personal computer?</p>
              <span className="message-time">08:16 AM</span>
            </div>
          </div>
          <div className="chat-message response">
            <div className="message-content">
              <p>
                This question has been answered by your lecturer in the
                discussion forum:
                <br />
                "I have already provided the download link, please find it from
                the blackboard - lecture notes - Week 1 - resources. Once you
                click that link, and you can see the download page, click the
                download button of Java EE. You also need to install JDK 8,
                please refer to the link under the resources.
                <br />
                Furthermore, this has been mentioned in Lecture slides on Week
                1: Introduction to COMP603. I have attached the links on the
                bottom to see this."
              </p>
              <div className="links">
                <button>Lecture slides</button>
                <button>Discussion Forum</button>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <input type="text" placeholder="Reply ..." />
          <button>Send</button>
        </footer>
      </main>
    </div>
  );
};

export default NewChat;
