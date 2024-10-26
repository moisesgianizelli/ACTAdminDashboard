import React from "react";
import "./style/AI.css";
import Nav from "../../Nav";

function AI({ Toggle }) {
  return (
    <div className="chat-container">
      <Nav Toggle={Toggle} />
      <div className="chat-header">
        <h2>AI Assist</h2>
      </div>
      <div className="chat-messages">
        <div className="message user-message">
          <p>Hello! Can you help me with my investment questions?</p>
        </div>
        <div className="message ai-message">
          <p>Of course! What would you like to know about investments?</p>
        </div>
        <div className="message user-message">
          <p>What are the best stocks to invest in right now?</p>
        </div>
        <div className="message ai-message">
          <p>
            It depends on various factors. Would you like to focus on technology
            stocks or more traditional options?
          </p>
        </div>
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message here..."
          className="input-field"
        />
        <button className="send-button">Send</button>
      </div>
    </div>
  );
}

export default AI;
