import React from "react";
import "./ProfilePage.css";
import Sidebar from "./Sidebar";
import Header from "./Header";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="profile-container">
          <div className="profile-details-header">
            <h2>User Details</h2>
            <nav className="profile-nav">
              <button className="active">User Details</button>
              <button>Language & Accessibility</button>
              <button>Academic Enrolment</button>
            </nav>
          </div>
          <section className="user-info">
            <div className="avatar-section">
              <div className="avatar">AS</div>
              <h2>Alice Smith</h2>
            </div>
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
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
