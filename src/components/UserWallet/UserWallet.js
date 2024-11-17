import React, { useState } from "react";
import PieCard from "./PieCard";
import Nav from "../../Nav";
import PurchasedPiesList from "./PurchasedPiesList";

function UserWallet({ Toggle }) {
  const [balance, setBalance] = useState(1000);
  const [purchasedStocks, setPurchasedStocks] = useState([]);
  const [purchasedCrypto, setPurchasedCrypto] = useState([]);

  const techStocks = [
    { id: 1, name: "Apple", ticker: "AAPL", description: "Technology" },
    { id: 2, name: "Microsoft", ticker: "MSFT", description: "Technology" },
    { id: 3, name: "Google", ticker: "GOOGL", description: "Technology" },
    { id: 4, name: "Amazon", ticker: "AMZN", description: "E-commerce" },
    { id: 5, name: "Tesla", ticker: "TSLA", description: "Electric Vehicles" },
    {
      id: 6,
      name: "NVIDIA",
      ticker: "NVDA",
      description: "Graphics Processing",
    },
    { id: 7, name: "Meta", ticker: "META", description: "Social Media" },
    { id: 8, name: "Adobe", ticker: "ADBE", description: "Creative Software" },
    { id: 9, name: "Intel", ticker: "INTC", description: "Semiconductors" },
    { id: 10, name: "Cisco", ticker: "CSCO", description: "Networking" },
  ];

  const cryptoAssets = [
    { id: 11, name: "Bitcoin", ticker: "BTC", description: "Cryptocurrency" },
    { id: 12, name: "Ethereum", ticker: "ETH", description: "Cryptocurrency" },
    { id: 13, name: "Ripple", ticker: "XRP", description: "Cryptocurrency" },
  ];

  const buyAsset = (asset, amount, type) => {
    if (balance >= amount) {
      setBalance(balance - amount);

      if (type === "stock") {
        if (purchasedStocks.length < 10) {
          const existingStock = purchasedStocks.find((s) => s.id === asset.id);

          if (existingStock) {
            setPurchasedStocks(
              purchasedStocks.map((s) =>
                s.id === asset.id ? { ...s, invested: s.invested + amount } : s
              )
            );
          } else {
            setPurchasedStocks([
              ...purchasedStocks,
              { ...asset, invested: amount },
            ]);
          }
        } else {
          alert("You can only purchase up to 10 tech stocks.");
        }
      } else if (type === "crypto") {
        if (purchasedCrypto.length < 3) {
          const existingCrypto = purchasedCrypto.find((c) => c.id === asset.id);

          if (existingCrypto) {
            setPurchasedCrypto(
              purchasedCrypto.map((c) =>
                c.id === asset.id ? { ...c, invested: c.invested + amount } : c
              )
            );
          } else {
            setPurchasedCrypto([
              ...purchasedCrypto,
              { ...asset, invested: amount },
            ]);
          }
        } else {
          alert("You can only purchase up to 3 crypto assets.");
        }
      }
    } else {
      alert("Insufficient balance for this purchase.");
    }
  };

  const sellAsset = (asset, type) => {
    if (type === "stock") {
      const stockToSell = purchasedStocks.find((s) => s.id === asset.id);
      if (stockToSell) {
        setBalance(balance + stockToSell.invested);
        setPurchasedStocks(purchasedStocks.filter((s) => s.id !== asset.id));
      }
    } else if (type === "crypto") {
      const cryptoToSell = purchasedCrypto.find((c) => c.id === asset.id);
      if (cryptoToSell) {
        setBalance(balance + cryptoToSell.invested);
        setPurchasedCrypto(purchasedCrypto.filter((c) => c.id !== asset.id));
      }
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
              <h4>Balance: €{balance}</h4>
            </div>
          </div>
          <div className="col-12">
            <h4>Tech Stocks:</h4>
            <div className="row g-3">
              {techStocks.map((stock) => (
                <div key={stock.id} className="col-md-4">
                  <PieCard
                    key={stock.id}
                    pie={stock}
                    onBuy={(amount) => buyAsset(stock, amount, "stock")}
                    onSell={() => sellAsset(stock, "stock")}
                    isBought={purchasedStocks.some((s) => s.id === stock.id)}
                    balance={balance}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 mt-4">
            <h4>Crypto Assets:</h4>
            <div className="row g-3">
              {cryptoAssets.map((crypto) => (
                <div key={crypto.id} className="col-md-4">
                  <PieCard
                    key={crypto.id}
                    pie={crypto}
                    onBuy={(amount) => buyAsset(crypto, amount, "crypto")}
                    onSell={() => sellAsset(crypto, "crypto")}
                    isBought={purchasedCrypto.some((c) => c.id === crypto.id)}
                    balance={balance}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 mt-4">
            <PurchasedPiesList
              purchasedPies={[...purchasedStocks, ...purchasedCrypto]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserWallet;
