import React from "react";

function RecentTransactions() {
  return (
    <div className="row g-3 my-2">
      <div className="col-md-12">
        <div className="p-3 bg-white shadow-sm d-flex justify-content-between align-items-center rounded">
          <div>
            <h4 className="fs-5">Purchase: AAPL</h4>
            <p className="fs-6">Date: 01/01/2024</p>
            <p className="fs-6">Quantity: 10</p>
          </div>
          <span className="badge bg-success fs-6">Completed</span>
        </div>
      </div>
      {/* Adicione mais registros conforme necessário */}
    </div>
  );
}

export default RecentTransactions;
