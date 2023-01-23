import React from "react";

export const SearchBar = ({ setQuery }) => {
  // Filter
  // countries.filter((c) => c.name.common.toLowerCase().includes(query));

  return (
    <div className="searchbar-container">
      <input
        id="searchbar"
        type="text"
        placeholder="Search for a country..."
        className="search"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    </div>
  );
};
