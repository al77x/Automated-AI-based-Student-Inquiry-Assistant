import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Sidebar/Sidebar.module.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatIcon from "@mui/icons-material/Chat";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import FeedbackIcon from "@mui/icons-material/Feedback";
import logo from "../../assets/aasia-logo.png";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <img src={logo} alt="AASIA Logo" className={styles.logo} />
        <p>Automated AI-based Student Inquiry Assistant</p>
        {/* app description */}
        <button
          className={styles.newChatBtn}
          onClick={() => navigate("/newchat")}
        >
          New Chat
        </button>
      </div>

      {/* main navigation section */}
      <nav className={styles.sidebarNav}>
        <ul>
          <li onClick={() => navigate("/dashboard")}>
            <DashboardIcon />
            Dashboard
          </li>
          <li onClick={() => navigate("/newchat")}>
            <ChatIcon />
            Chatbot
          </li>
          <li onClick={() => navigate("/faq")}>
            <HelpIcon />
            Frequently-Asked Questions
          </li>
        </ul>
      </nav>

      {/* footer navigation section */}
      <div className={styles.sidebarFooter}>
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
