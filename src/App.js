import React, { useState, useEffect } from "react";
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
import Register from "./components/Register/Register";
import { NotificationProvider } from "./components/NotificationContext";
import { loginUser, getUserProfile } from "./utils/api";
import Logout from "./components/Logout/Logout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Home");

  const handleLogin = async (user) => {
    setIsLoggedIn(true);
    console.log(user);
    setUserType(user.is_manager);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setUserType(null);
  };

  const Toggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    let token = localStorage.getItem("authToken");
    if (token) {
      let user = getUserProfile(token).then((user) => {
        setIsLoggedIn(true);
        setUserType(user.is_manager);
        console.log(user);
      });
    }
  }, []);

  return (
    <NotificationProvider>
      <Router>
        <div
          className="container-fluid min-vh-100"
          style={{
            background: "linear-gradient(to right, #0d3b66, #1e5f74)",
            minHeight: "100vh",
          }}
        >
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
                        userType ? (
                          <Wallet Toggle={Toggle} />
                        ) : (
                          <Navigate to="/" />
                        )
                      }
                    />
                    <Route
                      path="/transactions"
                      element={
                        userType ? (
                          <Transactions Toggle={Toggle} />
                        ) : (
                          <Navigate to="/" />
                        )
                      }
                    />
                    <Route
                      path="/user-wallet"
                      element={
                        !userType ? (
                          <UserWallet Toggle={Toggle} />
                        ) : (
                          <Navigate to="/" />
                        )
                      }
                    />
                    <Route
                      path="/notifications"
                      element={
                        !userType ? (
                          <Notifications Toggle={Toggle} />
                        ) : (
                          <Navigate to="/" />
                        )
                      }
                    />
                    <Route path="/ai-assist" element={<AI Toggle={Toggle} />} />
                    <Route path="/faq" element={<FAQ Toggle={Toggle} />} />
                    <Route
                      path="/settings"
                      element={<Settings Toggle={Toggle} />}
                    />
                    <Route path="/logout" element={<Logout />} />
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
                <Route path="/register" element={<Register />} />
                {/* <Route path="*" element={<Navigate to="/login" />} /> */}
              </Routes>
            )}
          </div>
        </div>
      </Router>
    </NotificationProvider>
  );
}

export default App;
