import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "./MyWallet.css";
import Nav from "../../Nav";

const sampleData = [
  { name: "Stock A", value: 400 },
  { name: "Stock B", value: 300 },
  { name: "Stock C", value: 300 },
  { name: "Stock D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function Wallet({ Toggle }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSearch = () => {
    if (searchQuery) {
      setSelectedUser({
        name: "John Doe",
        portfolio: sampleData,
        totalInvested: 1200,
      });
    } else {
      alert("Please enter a search query.");
    }
  };

  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />
      <div className="container-fluid">
        <h2 className="mt-4">Client's Wallet</h2>
        <hr />

        <div className="search-bar mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search for clients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-primary mt-2" onClick={handleSearch}>
            Search
          </button>
        </div>
        {selectedUser ? (
          <div className="dashboard">
            <h3>Dashboard - {selectedUser.name}</h3>
            <p>Total Invested: ${selectedUser.totalInvested}</p>
            <div className="chart-container my-4">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={selectedUser.portfolio}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    fill="#8884d8"
                  >
                    {selectedUser.portfolio.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          <p className="text-muted">
            No user selected. Please perform a search.
          </p>
        )}
      </div>
    </div>
  );
}

export default Wallet;
