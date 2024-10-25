import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Dashboard from "./Dashboard";
import Nav from "../../Nav";

function MyWallet({ Toggle }) {
  const [userData, setUserData] = useState(null);

  const handleSearch = (query) => {
    // Lógica de busca para buscar informações do usuário e atualizar userData
    // Exemplo: setUserData(fetchedData);
  };

  return (
    <div className="my-wallet">
      <Nav Toggle={Toggle} />
      <SearchBar onSearch={handleSearch} />
      <Dashboard userData={userData} />
    </div>
  );
}

export default MyWallet;
