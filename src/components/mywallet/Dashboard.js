import React from "react";
import PieChart from "./PieChart";

function Dashboard({ userData }) {
  if (!userData) return null;

  return (
    <div className="dashboard mt-4">
      <h2>Dashboard</h2>
      <PieChart data={userData.stocks} />
      <div className="portfolio mt-3">
        <h4>Portfolio</h4>
        <ul>
          {userData.stocks.map((stock, index) => (
            <li key={index}>{`${stock.name}: ${stock.percentage}%`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
