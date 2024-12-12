import React, { useState, useEffect } from "react";
import PieCard from "./PieCard";
import Nav from "../../Nav";
import PurchasedPiesList from "./PurchasedPiesList";
import { getUserWallet, getPiesApi, buyPieApi } from "../../utils/api";

function UserWallet({ Toggle }) {
  const [balance, setBalance] = useState(0);
  const [techStocks, setTechStocks] = useState([]);
  const [purchasedStocks, setPurchasedStocks] = useState([]);
  const [purchasedCrypto, setPurchasedCrypto] = useState([]);

  const getBalance = async () => {
    let returnData = await getUserWallet(
      JSON.parse(localStorage.getItem("user"))["uid"]
    );
    setBalance(returnData.balance);
  };

  const getPies = async () => {
    let returnData = await getPiesApi(
      JSON.parse(localStorage.getItem("user"))["uid"]
    );
    setTechStocks(returnData.data);
  };

  const buyPie = async (pie_id, amount) => {
    await buyPieApi({
      pie_id: pie_id,
      amount: amount,
    });

    getBalance();
  };

  useEffect(() => {
    getBalance();
    getPies();
  }, []);

  const cryptoAssets = [
    { id: 11, name: "Bitcoin", ticker: "BTC", description: "Cryptocurrency" },
    { id: 12, name: "Ethereum", ticker: "ETH", description: "Cryptocurrency" },
    { id: 13, name: "Ripple", ticker: "XRP", description: "Cryptocurrency" },
  ];

  const buyAsset = (asset, amount, type) => {
    if (balance < amount) {
      alert("Insufficient balance for this purchase.");
      return;
    }

    // setBalance(balance - amount);
    if (type === "stock") {
      buyPie(asset.id, amount);

      // useEffect(() => {
      //   buyPie(asset.id, amount);
      // }, []);
      // if (purchasedStocks.length < 10) {
      //   const existingStock = purchasedStocks.find((s) => s.id === asset.id);

      //   if (existingStock) {
      //     setPurchasedStocks(
      //       purchasedStocks.map((s) =>
      //         s.id === asset.id ? { ...s, invested: s.invested + amount } : s
      //       )
      //     );
      //   } else {
      //     setPurchasedStocks([
      //       ...purchasedStocks,
      //       { ...asset, invested: amount },
      //     ]);
      //   }
      // } else {
      //   alert("You can only purchase up to 10 tech stocks.");
      // }
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
