import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "./Sidebar.css";

function Sidebar({ onSelect, activeItem: propActiveItem, userType }) {
  const [activeItem, setActiveItem] = useState(propActiveItem || "Home");

  const handleSelect = (item) => {
    setActiveItem(item);
    onSelect(item);
  };

  return (
    <div
      className="bg-white sidebar d-flex flex-column p-2"
      style={{ height: "100vh" }}
    >
      <div className="m-2">
        <i className="bi bi-bootstrap-fill me-3 fs-4"></i>
        <span className="brand-name fs-4">ACT</span>
      </div>
      <hr className="text-dark" />

      <div className="list-group list-group-flush flex-grow-1">
        {/* Common Links for All Users */}
        <Link
          to="/home"
          onClick={() => handleSelect("Home")}
          className={`list-group-item py-2 ${
            activeItem === "Home" ? "active" : ""
          }`}
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <i className="bi bi-house fs-5 me-2"></i>
          <span>Home</span>
        </Link>

        {/* Manager-Only Links */}
        {userType === "manager" && (
          <>
            <Link
              to="/wallet"
              onClick={() => handleSelect("Wallet")}
              className={`list-group-item py-2 ${
                activeItem === "Wallet" ? "active" : ""
              }`}
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <i className="bi bi-wallet2 fs-5 me-2"></i>
              <span>Wallet</span>
            </Link>
            <Link
              to="/transactions"
              onClick={() => handleSelect("Transactions")}
              className={`list-group-item py-2 ${
                activeItem === "Transactions" ? "active" : ""
              }`}
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <i className="bi bi-arrow-left-right fs-5 me-2"></i>
              <span>Transactions</span>
            </Link>
          </>
        )}

        {/* User-Only Link */}
        {userType === "user" && (
          <Link
            to="/user-wallet"
            onClick={() => handleSelect("User Wallet")}
            className={`list-group-item py-2 ${
              activeItem === "User Wallet" ? "active" : ""
            }`}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <i className="bi bi-wallet fs-5 me-2"></i>
            <span>User Wallet</span>
          </Link>
        )}

        {/* Common Links for All Users */}
        <Link
          to="/notifications"
          onClick={() => handleSelect("Notifications")}
          className={`list-group-item py-2 ${
            activeItem === "Notifications" ? "active" : ""
          }`}
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <i className="bi bi-bell fs-5 me-2"></i>
          <span>Notifications</span>
        </Link>
        <Link
          to="/ai-assist"
          onClick={() => handleSelect("AI Assist")}
          className={`list-group-item py-2 ${
            activeItem === "AI Assist" ? "active" : ""
          }`}
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <i className="bi bi-robot fs-5 me-2"></i>
          <span>AI Assist</span>
        </Link>
        <Link
          to="/faq"
          onClick={() => handleSelect("FAQ")}
          className={`list-group-item py-2 ${
            activeItem === "FAQ" ? "active" : ""
          }`}
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <i className="bi bi-question-circle fs-5 me-2"></i>
          <span>FAQ</span>
        </Link>
      </div>

      {/* Bottom Links */}
      <div className="list-group list-group-flush">
        <Link
          to="/settings"
          onClick={() => handleSelect("Settings")}
          className={`list-group-item py-2 mt-auto ${
            activeItem === "Settings" ? "active" : ""
          }`}
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <i className="bi bi-gear fs-5 me-2"></i>
          <span>Settings</span>
        </Link>
        <Link
          to="/logout"
          onClick={() => handleSelect("Logout")}
          className={`list-group-item py-2 ${
            activeItem === "Logout" ? "active" : ""
          }`}
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <i className="bi bi-box-arrow-right fs-5 me-2"></i>
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
