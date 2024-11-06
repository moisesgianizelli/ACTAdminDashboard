import React from "react";
import "./style/AI.css";
import Nav from "../../Nav";

function AI({ Toggle }) {
  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />
      <div className="container-fluid">
        <div className="chat-header mt-4">
          <h2>AI Assist</h2>
          <hr />
        </div>

        <div className="chat-messages row g-3">
          <div className="message user-message col-md-12">
            <p>Hello! Can you help me with my investment questions?</p>
          </div>
          <div className="message ai-message col-md-12">
            <p>Of course! What would you like to know about investments?</p>
          </div>
          <div className="message user-message col-md-12">
            <p>What are the best stocks to invest in right now?</p>
          </div>
          <div className="message ai-message col-md-12">
            <p>
              It depends on various factors. Would you like to focus on
              technology stocks or more traditional options?
            </p>
          </div>
        </div>

        <hr />
        <div className="chat-input d-flex align-items-center">
          <input
            type="text"
            placeholder="Type your message here..."
            className="input-field form-control me-2"
          />
          <button className="send-button btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  );
}

export default AI;
