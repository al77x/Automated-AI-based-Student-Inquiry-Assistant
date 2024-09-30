import React from "react";
import styles from "../ProfilePage/ProfilePage.module.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const ProfilePage = () => {
  return (
    <div className={styles.profilePage}>
      <Sidebar />

      <div className={styles.mainContent}>
        {/* header component, with the welcome message disabled for this page */}
        <Header showWelcomeMessage={false} />

        <div className={styles.profileContainer}>
          {/* header for the profile details section */}
          <div className={styles.profileDetailsHeader}>
            <h2>User Details</h2>
            <nav className={styles.profileNav}>
              {/* navigation buttons to switch between different profile sections */}
              <button className={styles.active}>User Details</button>
              <button>Language & Accessibility</button>
              <button>Academic Enrolment</button>
            </nav>
          </div>

          {/* main section for displaying and editing user information */}
          <section className={styles.userInfo}>
            <div className={styles.avatarSection}>
              {/* placeholder avatar with user initials */}
              <div className={styles.avatar}>AS</div>
              <h2>Alice Smith</h2> {/* Display the user's name */}
            </div>

            {/* form for editing user details */}
            <form>
              <label>Full name</label>
              <div className={styles.nameInputs}>
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
              </div>
              <label>Student ID</label>
              <input type="text" placeholder="Student ID" />
              <label>Network ID</label>
              <input type="text" placeholder="Network ID" />
              <label>Email</label>
              <input type="email" placeholder="alice.smith@email.com" />
              <label>Residential Address</label>
              <textarea placeholder="123 Laneway Avenue"></textarea>
              <button type="submit" className={styles.saveBtn}>
                Save
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
