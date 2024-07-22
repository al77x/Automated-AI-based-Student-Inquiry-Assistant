import React from "react";
import "./Header.css";
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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

export default Header;
