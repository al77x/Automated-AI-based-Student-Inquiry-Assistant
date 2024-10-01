import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

// material  UI icons imports
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// header with welcome message, update later to show signed in user name
const Header = ({ showWelcomeMessage = true }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      {/* displaying current date and time, hardcoded for now */}
      {showWelcomeMessage && <h2>Welcome, Alice Smith</h2>}
      <div className={styles.headerInfo}>
        <div className={styles.timeDate}>
          <div className={styles.time}>10:45</div>
          <div className={styles.date}>11/7/2024</div>
        </div>

        {/* icons for navigation and settings */}
        <div className={styles.headerIcons}>
          <DashboardIcon onClick={() => navigate("/dashboard")} />
          <SettingsIcon onClick={() => navigate("/settings")} />
          <NotificationsIcon />
          <AccountCircleIcon onClick={() => navigate("/profile")} />
        </div>
      </div>
    </div>
  );
};

export default Header;
