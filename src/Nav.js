import React from "react";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";

function Nav({ Toggle }) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
      <i
        className="navbar-brand bi bi-justify-left fs-4 toggle-icon"
        onClick={Toggle}
        style={{ color: "black" }} // Apply black color directly
      ></i>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="bi bi-justify" style={{ color: "black" }}></i>{" "}
        {/* Apply black color to the toggle icon here */}
      </button>
    </nav>
  );
}

export default Nav;
