import React from "react";
import styles from "./MentorDashboard.module.css";
import Sidebar from "../Sidebar";
import Header from "../Header";

const MentorDashboard = () => {
  return (
    <div className={styles.mentorDashboard}>
      <Sidebar />

      <div className={styles.mainContent}>
        <Header showWelcomeMessage={false} />

        <div className={styles.dashboardGrid}>
          {/* publish announcements */}
          <div className={styles.announcements}>
            <h3>Publish Announcements</h3>
            <button className={styles.newAnnouncementBtn}>
              New Announcement
            </button>
          </div>

          {/* discussion forums */}
          <div className={styles.discussionForums}>
            <h3>Discussion Forums</h3>
            <div className={styles.forumCard}>
              <p>
                <b>COMP703</b> - What is the relevance of x in context of y
              </p>
              <span>13:42</span>
            </div>
            <div className={styles.forumCard}>
              <p>
                <b>COMP718</b> - How can we approach this specific problem?
              </p>
              <span>13:55</span>
            </div>
          </div>

          {/* personal message notifications */}
          <div className={styles.notifications}>
            <h3>Personal Message Notifications</h3>
            <div className={styles.notificationCard}>
              <p>
                <b>Anna Walker</b> - Hello teacher, I have a question...
              </p>
              <span>12:31</span>
            </div>
            <div className={styles.notificationCard}>
              <p>
                <b>Carrie Mariah</b> - Hey there, how do you put the...
              </p>
              <span>12:35</span>
            </div>
            <div className={styles.notificationCard}>
              <p>
                <b>Chris Kardasim</b> - Where is the material for...
              </p>
              <span>17:22</span>
            </div>
          </div>

          {/* content upload */}
          <div className={styles.contentUpload}>
            <h3>Content Upload</h3>
            <button className={styles.uploadBtn}>
              Upload Lecture and Tutorial Material Here
            </button>
            <p>Accepted files: .jpeg, .jpg, .png, .pdf.</p>
          </div>

          {/* calendar */}
          <div className={styles.calendar}>
            <h3>Calendar</h3>
            <div className={styles.calendarWidget}>
              <p>M T W T F S S</p>
              <p>
                ... 10 11 <span className={styles.selectedDate}>12</span> 13 14
                15
              </p>
            </div>
          </div>

          {/* system notifications */}
          <div className={styles.systemNotifications}>
            <h3>System Notifications</h3>
            <ul>
              <li>
                <b>System Update</b> - Scheduled maintenance on 22/07/2024
              </li>
              <li>
                <b>New Feature Release</b> - New chatbot functionality added
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;
