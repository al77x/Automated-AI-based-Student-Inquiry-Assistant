import React from "react";
import "./DashboardContent.css";

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
      <div className="latest-message">
        <h3>the latest message</h3>
        <div className="message-content">...</div>
      </div>
    </div>
  );
};

export default DashboardContent;
