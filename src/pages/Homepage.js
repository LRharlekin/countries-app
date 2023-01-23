import React, { useState } from "react";

// components
import { SearchBar } from "../components/SearchBar";
import SortTable from "../components/SortTable";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";

// custom hook
import useFetch from "../hooks/useFetch";

// utils
import { sortAsc, sortDesc } from "../utils/compareFuncs";
import createUrl from "../utils/createUrl";
import getFilteredCountries from "../utils/getFilteredCountries";

const COUNTRIES_PER_PAGE = 5;

export default function Homepage() {
  const [currentPage, setCurrentPage] = useState(1);

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [order, setOrder] = useState(null);
  const [query, setQuery] = useState("");

  const url = createUrl("all");

  useFetch({
    url,
    setData: setCountries,
    setIsLoading,
    setError,
  });

  const filteredCountries = getFilteredCountries(query, countries);

  // Get slice of currently displayed countries
  const indexOfLastCountry = currentPage * COUNTRIES_PER_PAGE;
  const indexOfFirstCountry = indexOfLastCountry - COUNTRIES_PER_PAGE;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const sortByName = (order) => {
    const sorted = [...countries];
    if (order != "ASC") {
      sorted.sort(sortAsc);
      setOrder("ASC");
    } else {
      sorted.sort(sortDesc);
      setOrder("DESC");
    }
    setCountries(sorted);
    setCurrentPage(1);
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      <SearchBar setQuery={setQuery} />
      <div className="table-container">
        <SortTable
          countries={currentCountries}
          isLoading={isLoading}
          switchOrder={sortByName}
          order={order}
        />
        <Pagination
          countriesPerPage={COUNTRIES_PER_PAGE}
          totalCountries={filteredCountries.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
