import React, { useState, useEffect } from "react";
import Nav from "../../Nav";
import "../Transaction/Transaction.css";

function Transaction({ Toggle }) {
  const [users, setUsers] = useState([]);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Added for search functionality

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

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.profile_data?.display_name
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to download a report as CSV
  const downloadReport = () => {
    if (selectedPortfolio && selectedPortfolio.purchased_pies.length > 0) {
      const transactionData = selectedPortfolio.purchased_pies.map((pie) => ({
        Name: pie.name,
        Invested: pie.invested.toFixed(2),
        Date: new Date(pie.purchase_date).toLocaleDateString(),
      }));

      const header = ["Name", "Invested", "Date"];
      const rows = transactionData.map((row) => [
        row.Name,
        row.Invested,
        row.Date,
      ]);

      const csvContent = [
        header.join(","),
        ...rows.map((row) => row.join(",")),
      ].join("\n");

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "transaction_report.csv");
      link.click();
    } else {
      alert("No transactions to download.");
    }
  };

  return (
    <div className="transaction-container">
      <Nav Toggle={Toggle} />
      <h1 style={{ color: "white" }}>Transaction History</h1>

      {/* Search bar for users */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* User list filtered by search, only show if search query is not empty */}
      {searchQuery && (
        <div className="user-list">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <TransactionUserCard
                key={user.uid}
                user={user}
                isActive={user.uid === selectedUserId}
                onViewPortfolio={fetchPortfolio}
              />
            ))
          ) : (
            <p>No users found.</p>
          )}
        </div>
      )}

      {/* Show selected user's portfolio details */}
      {selectedPortfolio && (
        <>
          <TransactionPortfolioDetails portfolio={selectedPortfolio} />
          {/* Download report button */}
          <button onClick={downloadReport}>Download Report</button>
        </>
      )}
    </div>
  );
}

const TransactionUserCard = ({ user, isActive, onViewPortfolio }) => {
  const displayName = user.profile_data?.display_name || user.email;
  const { uid } = user;

  return (
    <div
      className={`transaction-user-card ${isActive ? "active" : ""}`}
      onClick={() => onViewPortfolio(uid)}
    >
      <h4>{displayName}</h4>
      <button>View Transactions</button>
    </div>
  );
};

const TransactionPortfolioDetails = ({ portfolio }) => {
  const { balance, purchased_pies } = portfolio;

  return (
    <div className="transaction-portfolio-details">
      <div className="transaction-balance-card">
        <h3>Account Balance</h3>
        <p>${balance.toFixed(2)}</p>
      </div>
      <h3>Transaction History:</h3>
      {purchased_pies.length === 0 ? (
        <p>No transactions recorded.</p>
      ) : (
        <div className="transaction-list">
          {purchased_pies.map((pie) => (
            <TransactionCard key={pie.id} pie={pie} />
          ))}
        </div>
      )}
    </div>
  );
};

const TransactionCard = ({ pie }) => {
  const { name, invested, purchase_date } = pie;

  return (
    <div className="transaction-card long-card">
      <div className="transaction-card-header">
        <h4>{name}</h4>
        <p>${invested.toFixed(2)}</p>
      </div>
      <div className="transaction-card-body">
        <p>
          <strong>Date:</strong> {new Date(purchase_date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Transaction;
