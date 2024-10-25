import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./Sidebar";
import Home from "./components/Home/Home";
import MyWallet from "./components/mywallet/MyWallet";
import Transactions from "./components/Transaction/Transactions";
import Notifications from "./components/Notifications/Notifications";
import AI from "./components/AI/AI";
import FAQ from "./components/FAQ/FAQ";
import Settings from "./components/Settings/Settings";

function App() {
  const [toggle, setToggle] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Home");

  const Toggle = () => {
    setToggle(!toggle);
  };

  const onSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar onSelect={onSelect} Toggle={Toggle} />{" "}
            {/* Passa Toggle como prop */}
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}

        <div className="col">
          {selectedOption === "Home" && <Home Toggle={Toggle} />}
          {selectedOption === "My Wallet" && <MyWallet Toggle={Toggle} />}
          {selectedOption === "Transactions" && (
            <Transactions Toggle={Toggle} />
          )}
          {selectedOption === "Notifications" && (
            <Notifications Toggle={Toggle} />
          )}
          {selectedOption === "AI Assist" && <AI Toggle={Toggle} />}
          {selectedOption === "FAQ" && <FAQ Toggle={Toggle} />}
          {selectedOption === "Settings" && <Settings Toggle={Toggle} />}
          {/* Adicione outros componentes conforme necessário */}
        </div>
      </div>
    </div>
  );
}

export default App;
