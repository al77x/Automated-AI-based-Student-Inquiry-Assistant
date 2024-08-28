import React from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardContent = () => {
  return (
    <div className={styles.dashboardContent}>
      {/* section for recent activities */}
      <div className={styles.activities}>
        <h3>Recent Activities:</h3>
        <ul>
          <li>*Interactions*</li>
          <li>*Updates on inquiries*</li>
          <li>*Messages*</li>
        </ul>
      </div>

      {/* section for recent chats */}
      <div className={styles.recentChats}>
        <h3>Recent Chats</h3>
        {/* individual chat cards showing chat history */}
        <div className={styles.chatCard}>
          Chat 1<br />3 days ago
        </div>
        <div className={styles.chatCard}>
          Chat 2<br />
          Today
        </div>
        <div className={styles.chatCard}>
          Chat 3<br />1 day ago
        </div>
        <div className={styles.chatCard}>
          Chat 4<br />1 day ago
        </div>
      </div>

      <div className={styles.calendar}>
        <h3>date</h3>
        <div className={styles.calendarWidget}>
          {/* TODO: Find a date picker library here or change this feature, added a placeholder for now */}
          <p>M T W T F S S</p>
          <p>
            ... 10 11 <span className={styles.selectedDate}>12</span> 13 14 15
          </p>
        </div>
      </div>

      {/* section for notifications */}
      <div className={styles.notifications}>
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
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
