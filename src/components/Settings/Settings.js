import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SettingStyle/Settings.css";
import Nav from "../../Nav";

const Settings = ({ Toggle }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("");
  const [premium, setPremium] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleNotificationChange = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUpgradeToPremium = () => {
    setPremium(true);
    alert("Congratulations! Your account has been upgraded to Premium.");
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
      alert("Profile photo updated successfully!");
    }
  };

  const handleSaveChanges = () => {
    alert("Your changes have been saved successfully!");
  };

  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />
      <div className="container-fluid">
        <h2 className="text-center mt-4">Settings</h2>
        <hr />
        <div className="card mb-4">
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

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter new password"
              />
            </div>
          </div>
        </div>
        <div className="card mb-4">
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
        <div className="card mb-4">
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

        <div className="card mb-4">
          <div className="card-header">Account Upgrade</div>
          <div className="card-body text-center">
            {premium ? (
              <p className="text-success">You are a Premium user!</p>
            ) : (
              <button
                className="btn btn-warning"
                onClick={handleUpgradeToPremium}
              >
                Upgrade to Premium
              </button>
            )}
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="text-center mb-4">
          <button className="btn btn-primary" onClick={handleSaveChanges}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
