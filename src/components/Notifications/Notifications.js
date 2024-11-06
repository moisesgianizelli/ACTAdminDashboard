import React from "react";
import Nav from "../../Nav";

function NotificationsList({ Toggle }) {
  const notifications = [
    {
      id: 1,
      message: "Your purchase of AAPL has been completed!",
      date: "02/10/2024",
    },
    {
      id: 2,
      message: "The price of TSLA has dropped by 5%.",
      date: "01/10/2024",
    },
    {
      id: 3,
      message: "New report available on stocks.",
      date: "30/09/2024",
    },
    { id: 4, message: "You have a new follower.", date: "29/09/2024" },
    {
      id: 5,
      message: "Your payment has been successfully received.",
      date: "28/09/2024",
    },
  ];

  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />
      <div className="container-fluid">
        <h2 className="mt-4">Notifications</h2>
        <div className="row g-3 my-2">
          {notifications.map((notification) => (
            <div className="col-md-12" key={notification.id}>
              <div className="p-3 bg-white shadow-sm d-flex justify-content-between align-items-center rounded">
                <div>
                  <h4 className="fs-5">{notification.message}</h4>
                  <p className="fs-6">Date: {notification.date}</p>
                </div>
                <span className="badge bg-info fs-6">New</span>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotificationsList;
