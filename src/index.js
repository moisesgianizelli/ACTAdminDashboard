import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./components/AI/style/AI.css";
import "./components/Settings/SettingStyle/Settings.css";
import "./components/FAQ/FAQstyle/FAQ.css";
import "./components/Home/HomeStyle/Home.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
