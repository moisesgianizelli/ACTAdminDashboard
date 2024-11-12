import React, { useState } from "react";

function PieCard({ pie, onBuy, onSell, isBought, balance }) {
  const [amount, setAmount] = useState(0);

  const handleBuy = () => {
    if (amount > 0) {
      onBuy(amount);
    } else {
      alert("Please enter a valid amount.");
    }
  };

  return (
    <div className="p-3 bg-white shadow-sm d-flex justify-content-between align-items-center rounded my-2">
      <div>
        <h5>{pie.name}</h5>
        <p>{pie.description}</p>
        <p>Objective: {pie.objective}</p>
        {isBought ? (
          <button className="btn btn-danger" onClick={() => onSell(pie)}>
            Sell
          </button>
        ) : (
          <div>
            <input
              type="number"
              className="form-control mb-2"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              min="1"
              max={balance}
            />
            <button className="btn btn-primary" onClick={handleBuy}>
              Buy
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PieCard;
