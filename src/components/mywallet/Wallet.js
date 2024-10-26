import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "./MyWallet.css";
import Nav from "../../Nav";

// Dados simulados para o gráfico de pizza
const sampleData = [
  { name: "Ação A", value: 400 },
  { name: "Ação B", value: 300 },
  { name: "Ação C", value: 300 },
  { name: "Ação D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function Wallet({ Toggle }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSearch = () => {
    // Simulação de busca de usuário
    setSelectedUser({
      name: "John Doe",
      portfolio: sampleData,
      totalInvested: 1200,
    });
  };

  return (
    <div className="my-wallet-container">
      <Nav Toggle={Toggle} />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for clients..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Seção do Dashboard */}
      {selectedUser && (
        <div className="dashboard">
          <h2>Dashboard - {selectedUser.name}</h2>
          <p>Total Invested: ${selectedUser.totalInvested}</p>

          {/* Gráfico de Pizza */}
          <div className="chart-container">
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
      )}
    </div>
  );
}

export default Wallet;
