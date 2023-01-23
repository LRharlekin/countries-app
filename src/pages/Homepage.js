import React, { useState } from "react";

import { SearchBar } from "../components/SearchBar";
import SortTable from "../components/SortTable";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";
import { sortAsc, sortDesc } from "../utils/compareFuncs";
import createUrl from "../utils/createUrl";
import useFetch from "../hooks/useFetch";

const COUNTRIES_PER_PAGE = 5;

export default function Homepage() {
  const url = createUrl("all");
  const [currentPage, setCurrentPage] = useState(1);

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [order, setOrder] = useState(null);

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

  useFetch({
    url,
    setData: setCountries,
    setIsLoading,
    setError,
  });

  // Get current countries
  const indexOfLastCountry = currentPage * COUNTRIES_PER_PAGE;
  const indexOfFirstCountry = indexOfLastCountry - COUNTRIES_PER_PAGE;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="table-container">
        <SortTable
          countries={currentCountries}
          isLoading={isLoading}
          switchOrder={sortByName}
          order={order}
        />
        <Pagination
          countriesPerPage={COUNTRIES_PER_PAGE}
          totalCountries={countries.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
