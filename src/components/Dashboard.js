import React from "react";
import "./Sidebar.css";
import "./Header.css";
import "./DashboardContent.css";
import "./Dashboard.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import FeedbackIcon from "@mui/icons-material/Feedback";
import GridViewIcon from "@mui/icons-material/GridView";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
            <HomeIcon />
            Homepage
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

const Header = () => {
  return (
    <div className="header">
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
    </div>
  );
};

const DashboardContent = () => {
  return (
    <div className="dashboard-content">
      <div className="activities">
        <h3>Recent Activities:</h3>
        <ul>
          <li>*Interactions*</li>
          <li>*Updates on inquiries*</li>
          <li>*Messages*</li>
        </ul>
      </div>
      <div className="recent-chats">
        <h3>Recent Chats</h3>
        <div className="chat-card">
          Chat 1<br />3 days ago
        </div>
        <div className="chat-card">
          Chat 2<br />
          Today
        </div>
        <div className="chat-card">
          Chat 3<br />1 day ago
        </div>
        <div className="chat-card">
          Chat 4<br />1 day ago
        </div>
      </div>
      <div className="calendar">
        <h3>date</h3>
        <div className="calendar-widget">
          {/* Find a date picker library here */}
          <p>M T W T F S S</p>
          <p>
            ... 10 11 <span>12</span> 13 14 15
          </p>
        </div>
      </div>
      <div className="notifications">
        <h3>Notifications</h3>
        <ul>
          <li>
            <b>System Update</b>
            <br />
            Scheduled maintenance on 22/07/2024 (2 days ago)
          </li>
          <li>
            <b>New Feature Release</b>
            <br />
            New chatbot functionality added (3 days ago)
          </li>
        </ul>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
