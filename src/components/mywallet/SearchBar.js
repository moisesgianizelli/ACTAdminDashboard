import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for users"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form-control"
      />
      <button onClick={handleSearch} className="btn btn-primary mt-2">
        Confirm
      </button>
    </div>
  );
}

export default SearchBar;
