import React from "react";
import "./ProfilePage.css";
import Sidebar from "./Sidebar";
import Header from "./Header";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Sidebar />

      <div className="main-content">
        {/* header component, with the welcome message disabled for this page */}
        <Header showWelcomeMessage={false} />

        <div className="profile-container">
          {/* header for the profile details section */}
          <div className="profile-details-header">
            <h2>User Details</h2>
            <nav className="profile-nav">
              {/* navigation buttons to switch between different profile sections */}
              <button className="active">User Details</button>
              <button>Language & Accessibility</button>
              <button>Academic Enrolment</button>
            </nav>
          </div>

          {/* main section for displaying and editing user information */}
          <section className="user-info">
            <div className="avatar-section">
              {/* placeholder avatar with user initials */}
              <div className="avatar">AS</div>
              <h2>Alice Smith</h2> {/* Display the user's name */}
            </div>

            {/* form for editing user details */}
            <form>
              <label>Full name</label>
              <div className="name-inputs">
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
              <button type="submit" className="save-btn">
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
