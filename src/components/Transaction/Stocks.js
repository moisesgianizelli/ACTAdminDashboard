import React from "react";
import Nav from "../../Nav";

function Stocks() {
  const stockData = [
    { id: 1, value: 230, name: "Stock 1" },
    { id: 2, value: 150, name: "Stock 2" },
    { id: 3, value: 400, name: "Stock 3" },
    { id: 4, value: 320, name: "Stock 4" },
    { id: 5, value: 210, name: "Stock 5" },
    { id: 6, value: 180, name: "Stock 6" },
    { id: 7, value: 500, name: "Stock 7" },
    { id: 8, value: 300, name: "Stock 8" },
    { id: 8, value: 300, name: "Stock 8" },
  ];

  return (
    <div className="row g-3">
      {" "}
      {stockData.map((stock) => (
        <div className="col-6 col-md-4" key={stock.id}>
          {" "}
          <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
            <div>
              <h3 className="fs-2">{stock.value}</h3>
              <p className="fs-5">{stock.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stocks;
