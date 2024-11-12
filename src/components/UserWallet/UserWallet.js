import React, { useState } from "react";
import PieCard from "./PieCard";
import Nav from "../../Nav";
import PurchasedPiesList from "./PurchasedPiesList";

function UserWallet({ Toggle }) {
  const [balance, setBalance] = useState(1000);
  const [purchasedPies, setPurchasedPies] = useState([]);

  const pies = [
    {
      id: 1,
      name: "High Risk",
      description: "Aggressive investment",
      objective: "High Risk",
    },
    {
      id: 2,
      name: "Diary Dividends",
      description: "Diary dividends",
      objective: "Passive Dividends",
    },
    {
      id: 3,
      name: "Trend Stocks",
      description: "Hot Stocks",
      objective: "Safe Investment",
    },
    {
      id: 4,
      name: "Specialist",
      description: "Specialist",
      objective: "Safe Investment",
    },
    {
      id: 5,
      name: "Bitcoin",
      description: "Bitcoin",
      objective: "Bitcoin",
    },
  ];

  const buyPie = (pie, amount) => {
    if (balance >= amount) {
      setBalance(balance - amount);

      const existingPie = purchasedPies.find((p) => p.id === pie.id);

      if (existingPie) {
        setPurchasedPies(
          purchasedPies.map((p) =>
            p.id === pie.id ? { ...p, invested: p.invested + amount } : p
          )
        );
      } else {
        setPurchasedPies([...purchasedPies, { ...pie, invested: amount }]);
      }
    } else {
      alert("Insufficient balance for this purchase.");
    }
  };

  const sellPie = (pie) => {
    const pieToSell = purchasedPies.find((p) => p.id === pie.id);
    if (pieToSell) {
      setBalance(balance + pieToSell.invested);
      setPurchasedPies(purchasedPies.filter((p) => p.id !== pie.id));
    }
  };

  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />
      <div className="container-fluid">
        <h2 className="mt-4">My Wallet</h2>
        <div className="row">
          <div className="col-12 mb-4">
            <div className="p-3 bg-white shadow-sm rounded">
              <h4>Balance: ${balance}</h4>
            </div>
          </div>
          <div className="col-12">
            <h4>Options:</h4>
            <div className="row g-3">
              {pies.map((pie) => (
                <div key={pie.id} className="col-md-4">
                  <PieCard
                    key={pie.id}
                    pie={pie}
                    onBuy={(amount) => buyPie(pie, amount)}
                    onSell={() => sellPie(pie)}
                    isBought={purchasedPies.some((p) => p.id === pie.id)}
                    balance={balance}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 mt-4">
            <PurchasedPiesList purchasedPies={purchasedPies} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserWallet;
