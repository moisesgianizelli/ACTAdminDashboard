import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SettingStyle/Settings.css";
import Nav from "../../Nav";

const Settings = ({ Toggle }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("user@example.com");

  const handleNotificationChange = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="container mt-5">
      <Nav Toggle={Toggle} />
      <h2 className="text-center mb-4">Settings</h2>

      <div className="card mb-3">
        <div className="card-header">Profile Settings</div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header">Notification Settings</div>
        <div className="card-body">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="notifications"
              checked={notificationsEnabled}
              onChange={handleNotificationChange}
            />
            <label className="form-check-label" htmlFor="notifications">
              Enable Notifications
            </label>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header">Appearance</div>
        <div className="card-body">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="darkMode"
              checked={darkMode}
              onChange={handleDarkModeChange}
            />
            <label className="form-check-label" htmlFor="darkMode">
              Dark Mode
            </label>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="btn btn-primary">Save Changes</button>
      </div>
    </div>
  );
};

export default Settings;
