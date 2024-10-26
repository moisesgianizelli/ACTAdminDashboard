import React from "react";
import Nav from "../../Nav";
import Stocks from "./Stocks";
import RecentTransactions from "./RecentTransactions";
import DownloadReport from "./DownloadReports";

function Transactions({ Toggle }) {
  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />
      <div className="container-fluid">
        <h2 className="mt-4">Transactions</h2>
        <hr />

        <h3>Stocks</h3>
        <div className="row g-3">
          <Stocks />
        </div>
        <hr />

        <h3>Recent Transactions</h3>
        <div className="row g-3">
          <RecentTransactions />
        </div>
        <DownloadReport />
      </div>
    </div>
  );
}

export default Transactions;
