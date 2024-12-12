import React from "react";
import Nav from "../../Nav";
import "./HomeStyle/Home.css";

const HomePage = ({ user, Toggle }) => {
  return (
    <div className="home-page">
      <div className="welcome-section">
        <div className="profile-container">
          <img
            src={user?.profilePicture || "https://via.placeholder.com/150"}
            alt="Profile"
            className="profile-picture"
          />
        </div>
        <div className="welcome-message">
          <h1>Welcome, {user?.name || "User"}!</h1>
          <p>
            We're thrilled to have you here. Explore the features, track your
            progress, and customize your experience.
          </p>
        </div>
      </div>

      <div className="info-section">
        <div className="info-card">
          <h3>Your Role</h3>
          <p>{user?.role || "Not specified"}</p>
        </div>
        <div className="info-card">
          <h3>Account Created On</h3>
          <p>{user?.createdAt || "N/A"}</p>
        </div>
        <div className="info-card">
          <h3>Quick Actions</h3>
          <div className="actions">
            <button onClick={() => alert("Navigate to Profile")}>
              Profile
            </button>
            <button onClick={() => alert("Navigate to Settings")}>
              Settings
            </button>
            <button onClick={() => alert("Log out")}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
