import React from "react";
import "./style.css";

function Sidebar({ onSelect }) {
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
        <a
          className="list-group-item py-2"
          onClick={() => onSelect("Home")}
          style={{ cursor: "pointer" }}
        >
          <i className="bi bi-house fs-5 me-3"></i>
          <span>Home</span>
        </a>
        <a
          className="list-group-item py-2"
          onClick={() => onSelect("My Wallet")}
          style={{ cursor: "pointer" }}
        >
          <i className="bi bi-wallet2 fs-5 me-2"></i>
          <span>My Wallet</span>
        </a>
        <a
          onClick={() => {
            onSelect("Transactions");
          }}
          className="list-group-item py-2"
          style={{ cursor: "pointer" }}
        >
          <i className="bi bi-arrow-left-right fs-5 me-2"></i>
          <span>Transactions</span>
        </a>
        <a
          onClick={() => {
            onSelect("Notifications");
          }}
          className="list-group-item py-2"
          style={{ cursor: "pointer" }}
        >
          <i className="bi bi-bell fs-5 me-2"></i>
          <span>Notifications</span>
        </a>
        <a
          onClick={() => {
            onSelect("AI Assist");
          }}
          className="list-group-item py-2"
          style={{ cursor: "pointer" }}
        >
          <i className="bi bi-robot fs-5 me-2"></i>
          <span>AI Assist</span>
        </a>
        <a
          onClick={() => {
            onSelect("FAQ");
          }}
          className="list-group-item py-2"
          style={{ cursor: "pointer" }}
        >
          <i className="bi bi-question-circle fs-5 me-2"></i>
          <span>FAQ</span>
        </a>
      </div>

      <div className="list-group list-group-flush">
        <a
          onClick={() => {
            onSelect("Settings");
          }}
          className="list-group-item py-2 mt-auto"
          style={{ cursor: "pointer" }}
        >
          <i className="bi bi-gear fs-5 me-2"></i>
          <span>Settings</span>
        </a>
        <a
          onClick={() => {
            onSelect("Logout");
          }}
          className="list-group-item py-2"
          style={{ cursor: "pointer" }}
        >
          <i className="bi bi-box-arrow-right fs-5 me-2"></i>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
