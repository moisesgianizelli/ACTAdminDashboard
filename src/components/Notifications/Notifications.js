import React from "react";
import { useNotifications } from "../../components/NotificationContext";
import Nav from "../../Nav";
import "./Notifications.css";

function Notifications({ Toggle }) {
  const { notifications } = useNotifications();

  return (
    <div className="notifications-container">
      <Nav Toggle={Toggle} />
      <h1 style={{ color: "white" }}>Notifications</h1>
      <div className="notification-list">
        {notifications.length === 0 ? (
          <p>No notifications found.</p>
        ) : (
          notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              message={notification.message}
              type={notification.type}
            />
          ))
        )}
      </div>
    </div>
  );
}

const NotificationCard = ({ message, type }) => {
  return (
    <div className="notification-card">
      <h4>{type === "stock" ? "Stock Purchase" : "Crypto Purchase"}</h4>
      <p>{message}</p>
    </div>
  );
};

export default Notifications;
