import React, { useState } from "react";
import "./style/AI.css";
import Nav from "../../Nav";

function AI({ Toggle }) {
  const [agent, setAgent] = useState("stock-recommendation");
  const [messages, setMessages] = useState([
    {
      sender: "user",
      text: "Hello! Can you help me with investment questions?",
    },
    {
      sender: "ai",
      text: "Of course! What would you like to know about investments?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleAgentChange = (e) => {
    setAgent(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      // Simulate AI response
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "ai", text: "Processing your request with agent: " + agent },
      ]);
      setInput("");
    }
  };

  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />
      <div className="container-fluid">
        <div className="chat-header mt-4">
          <h2>AI Assist</h2>
          <div className="d-flex align-items-center justify-content-between">
            <select
              className="form-select w-auto"
              value={agent}
              onChange={handleAgentChange}
            >
              <option value="stock-recommendation">Stock Recommendation</option>
              <option value="company-research">Company Research</option>
              <option value="performance-history">Performance History</option>
            </select>
            <button className="btn btn-secondary">View History</button>
          </div>
          <hr />
        </div>

        {/* <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.sender === "user" ? "user-message" : "ai-message"
              }`}
            >
              <p>{message.text}</p>
            </div>
          ))}
        </div> */}
        {/* 
        <hr />
        <div className="chat-input d-flex align-items-center">
          <input
            type="text"
            placeholder="Type your message here..."
            className="input-field form-control me-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="send-button btn btn-primary"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default AI;
