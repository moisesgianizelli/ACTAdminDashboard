import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login", { replace: true });
    window.location.reload();
  };

  return (
    <div className="logout-container text-center">
      <h2>Are you sure you want to logout?</h2>
      <button className="btn btn-danger m-2" onClick={handleLogout}>
        Logout
      </button>
      <button className="btn btn-secondary m-2" onClick={() => navigate(-1)}>
        Cancel
      </button>
    </div>
  );
};

export default Logout;
