import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./Sidebar";
import Home from "./components/Home/Home";
import Wallet from "./components/mywallet/Wallet";
import Transactions from "./components/Transaction/Transactions";
import Notifications from "./components/Notifications/Notifications";
import AI from "./components/AI/AI";
import FAQ from "./components/FAQ/FAQ";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Home");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const Toggle = () => {
    setToggle(!toggle);
  };

  const onSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <Router>
      <div className="container-fluid bg-secondary min-vh-100">
        <div className="row">
          {isLoggedIn ? (
            <>
              {toggle && (
                <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
                  <Sidebar
                    onSelect={onSelect}
                    Toggle={Toggle}
                    handleLogout={handleLogout}
                  />
                </div>
              )}
              {toggle && <div className="col-4 col-md-2"></div>}

              <div className="col">
                <Routes>
                  <Route path="/" element={<Home Toggle={Toggle} />} />
                  <Route path="/wallet" element={<Wallet Toggle={Toggle} />} />
                  <Route
                    path="/transactions"
                    element={<Transactions Toggle={Toggle} />}
                  />
                  <Route
                    path="/notifications"
                    element={<Notifications Toggle={Toggle} />}
                  />
                  <Route path="/ai-assist" element={<AI Toggle={Toggle} />} />
                  <Route path="/faq" element={<FAQ Toggle={Toggle} />} />
                  <Route
                    path="/settings"
                    element={<Settings Toggle={Toggle} />}
                  />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </div>
            </>
          ) : (
            <Routes>
              <Route
                path="/login"
                element={<Login handleLogin={handleLogin} />}
              />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
