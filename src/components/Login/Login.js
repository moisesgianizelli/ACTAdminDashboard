import React, { useState } from "react";
import "./Login.css";

function Login({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const adminUsername = "admin";
  const adminPassword = "admin123";
  const userUsername = "user";
  const userPassword = "user123";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === adminUsername && password === adminPassword) {
      handleLogin("manager");
    } else if (username === userUsername && password === userPassword) {
      handleLogin("user");
    } else {
      setError("Incorrect password.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label>User</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
