import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Certifique-se de adicionar o estilo modernizado no arquivo CSS
import { loginUser } from "../../utils/api";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { user } = await loginUser({ email, password });
      handleLogin(user);
      navigate("/");
    } catch (err) {
      setError(err.message || "Failed to authenticate. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLoginSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
        <div className="signup-option">
          <p>
            Don't have an account?{" "}
            <span className="signup-link" onClick={() => navigate("/register")}>
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
