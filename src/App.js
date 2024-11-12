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
import UserWallet from "./components/UserWallet/UserWallet";
import AI from "./components/AI/AI";
import FAQ from "./components/FAQ/FAQ";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Home");

  const handleLogin = (type) => {
    setIsLoggedIn(true);
    setUserType(type);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType(null);
  };

  const Toggle = () => {
    setToggle(!toggle);
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
                    onSelect={setSelectedOption}
                    activeItem={selectedOption}
                    Toggle={Toggle}
                    handleLogout={handleLogout}
                    userType={userType}
                  />
                </div>
              )}
              <div className={`col ${toggle ? "offset-md-2" : ""}`}>
                <Routes>
                  <Route path="/" element={<Home Toggle={Toggle} />} />
                  <Route
                    path="/wallet"
                    element={
                      userType === "manager" ? (
                        <Wallet Toggle={Toggle} />
                      ) : (
                        <Navigate to="/" />
                      )
                    }
                  />
                  <Route
                    path="/transactions"
                    element={
                      userType === "manager" ? (
                        <Transactions Toggle={Toggle} />
                      ) : (
                        <Navigate to="/" />
                      )
                    }
                  />
                  <Route
                    path="/user-wallet" // Nova rota para o UserWallet
                    element={
                      userType === "user" ? ( // Verifica se o tipo de usuário é "user"
                        <UserWallet Toggle={Toggle} />
                      ) : (
                        <Navigate to="/" />
                      )
                    }
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
                element={<Login handleLogin={(type) => handleLogin(type)} />}
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
