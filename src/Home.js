import React from "react";
import Nav from "./Nav";

function Home({ Toggle }) {
  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />
      <div className="container-fluid">
        <div className="row g-3 my-2">
          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">230</h3>
                <p className="fs-5">Products</p>
              </div>
              <i className="bi bi-cart-plus p-3 fs-1"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
