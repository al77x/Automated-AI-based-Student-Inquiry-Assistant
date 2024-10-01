import React from "react";
import styles from "../Settings/Settings.module.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Settings = () => {
  return (
    <div className={styles.settingsPage}>
      <Sidebar />

      <div className={styles.mainContent}>
        {/* Header component, with the welcome message disabled for this page */}
        <Header showWelcomeMessage={false} />

        <div className={styles.settingsContainer}>
          {/* header for the settings section */}
          <div className={styles.settingsDetailsHeader}>
            <h2>Settings</h2>
            <nav className={styles.settingsNav}>
              {/* navigation buttons to switch between different settings sections */}
              <button className={styles.active}>Account Settings</button>
              <button>Privacy</button>
              <button>Notifications</button>
            </nav>
          </div>

          {/* Placeholder for the actual settings content */}
          <section className={styles.settingsContent}>
            <p>
              Here, the settings options will be displayed according to user
              selection.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;
