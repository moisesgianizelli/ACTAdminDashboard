import React from "react";
import Nav from "../../Nav";
import "./HomeStyle/Home.css";

const Home = ({ Toggle }) => {
  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />
      <div className="container-fluid">
        <header className="mt-4 text-center">
          <h1>Welcome to ACT App</h1>
          <h5>Your one-stop solution for managing investments.</h5>
          <a href="#" className="btn btn-primary btn-lg">
            Get Started
          </a>
        </header>
        <hr />

        <section className="features mt-5">
          <h2 className="text-center mb-4">Features</h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="feature-card text-center">
                <i className="bi bi-graph-up fs-2"></i>
                <h3>Investment Tracking</h3>
                <p>Monitor your investments in real-time.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <i className="bi bi-basket fs-2"></i>
                <h3>Diverse Portfolio</h3>
                <p>Manage stocks, bonds, and cryptocurrencies.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <i className="bi bi-chat-dots fs-2"></i>
                <h3>AI Assistance</h3>
                <p>Get insights and advice on your investments.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
