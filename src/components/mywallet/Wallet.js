import React, { useState, useEffect } from "react";
import Nav from "../../Nav";
import "./MyWallet.css";

function Wallet({ Toggle }) {
  const [users, setUsers] = useState([]);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null); // Estado para o card ativo
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("Token not found. Try again.");
      }
      const response = await fetch(
        "http://127.0.0.1:5000/api/users/admin/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Users not found");
      }
      const data = await response.json();
      setUsers(data.users || []);
    } catch (err) {
      setError(err.message);
      if (err.message.includes("Token not found")) {
        window.location.href = "/login";
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchPortfolio = async (uid) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("Token not found.");
      }
      const response = await fetch(
        `http://127.0.0.1:5000/api/clients/${uid}/portfolio`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Error");
      }
      const data = await response.json();
      setSelectedPortfolio(data.data || null);
      setSelectedUserId(uid);
    } catch (err) {
      setError(err.message);
      if (err.message.includes("Token not found")) {
        window.location.href = "/login";
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wallet-container">
      <Nav Toggle={Toggle} />
      <h1 style={{ color: "white" }}>User Management</h1>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="user-list">
        {users.map((user) => (
          <UserCard
            key={user.uid}
            user={user}
            isActive={user.uid === selectedUserId}
            onViewPortfolio={fetchPortfolio}
          />
        ))}
      </div>

      {selectedPortfolio && <PortfolioDetails portfolio={selectedPortfolio} />}
    </div>
  );
}

const UserCard = ({ user, isActive, onViewPortfolio }) => {
  const displayName = user.profile_data?.display_name || user.email; // Usa o display_name se existir, caso contrário, usa o email
  const { uid } = user;

  return (
    <div
      className={`user-card ${isActive ? "active" : ""}`}
      onClick={() => onViewPortfolio(uid)}
    >
      <p>{displayName}</p>
      <button>View Portfolio</button>
    </div>
  );
};

const PortfolioDetails = ({ portfolio }) => {
  const { balance, purchased_pies } = portfolio;

  return (
    <div className="portfolio-details">
      <div className="portfolio-balance-card">
        <h3>Balance</h3>
        <p>${balance.toFixed(2)}</p>
      </div>
      <h3>Purchased Investments:</h3>
      {purchased_pies.length === 0 ? (
        <p>No investments purchased.</p>
      ) : (
        <div className="pie-cards">
          {purchased_pies.map((pie) => (
            <PieCard key={pie.id} pie={pie} />
          ))}
        </div>
      )}
    </div>
  );
};

const PieCard = ({ pie }) => {
  const { name, description, invested, objective, purchase_date } = pie;

  return (
    <div className="pie-card">
      <h4>{name}</h4>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Invested:</strong> ${invested}
      </p>
      <p>
        <strong>Objective:</strong> {objective}
      </p>
      <p>
        <strong>Purchase Date:</strong>{" "}
        {new Date(purchase_date).toLocaleDateString()}
      </p>
    </div>
  );
};

export default Wallet;
