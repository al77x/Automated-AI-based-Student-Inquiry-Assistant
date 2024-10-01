import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

// material  UI icons imports
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// header with welcome message, TODO: update to show signed in user name
const Header = ({ showWelcomeMessage = true }) => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.header}>
      {showWelcomeMessage && <h2>Welcome, Alice Smith.</h2>}
      <div className={styles.headerInfo}>
        {/* display real-time clock and date */}
        <div className={styles.timeDate}>
          <div className={styles.time}>{currentTime.toLocaleTimeString()}</div>
          <div className={styles.date}>{currentTime.toLocaleDateString()}</div>
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
