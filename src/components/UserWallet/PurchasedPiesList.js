import React from "react";

function PurchasedPiesList({ purchasedPies }) {
  return (
    <div className="p-3 bg-light shadow-sm rounded">
      <h4 style={{ color: "black" }}>Purchased Stocks</h4>
      {purchasedPies.length > 0 ? (
        <ul className="list-unstyled">
          {purchasedPies.map((pie) => (
            <li key={pie.id} className="mb-2">
              <div className="p-2 bg-white shadow-sm rounded">
                <h5 className="fs-6" style={{ color: "black" }}>
                  {pie.name}
                </h5>
                <p className="mb-1" style={{ color: "black" }}>
                  Amount Invested: €{pie.invested}
                </p>
                <span className="badge bg-success">Purchased</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "black" }}>No stocks purchased yet.</p>
      )}
    </div>
  );
}

export default PurchasedPiesList;
