import React, { useState } from "react";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  console.log(query);

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
