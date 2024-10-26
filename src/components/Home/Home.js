// Home.js
import React from "react";
import Nav from "../../Nav";
import "./HomeStyle/Home.css";

const Home = ({ Toggle }) => {
  return (
    <div className="home-container">
      <Nav Toggle={Toggle} />
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                My Wallet
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Transactions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="hero-section text-center">
        <h1>Welcome to ACT App</h1>
        <p>Your one-stop solution for managing investments.</p>
        <a href="#" className="btn btn-primary btn-lg">
          Get Started
        </a>
      </header>

      <section className="features mt-5">
        <div className="container">
          <h2 className="text-center mb-4">Features</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-card text-center">
                <i className="bi bi-graph-up"></i>
                <h3>Investment Tracking</h3>
                <p>Monitor your investments in real-time.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <i className="bi bi-basket"></i>
                <h3>Diverse Portfolio</h3>
                <p>Manage stocks, bonds, and cryptocurrencies.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <i className="bi bi-chat-dots"></i>
                <h3>AI Assistance</h3>
                <p>Get insights and advice on your investments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer text-center mt-5">
        <p>&copy; 2024 MyInvestmentApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
