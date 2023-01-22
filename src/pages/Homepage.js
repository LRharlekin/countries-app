import React, { useState, useEffect } from "react";
// import { useFetch } from "../hooks/useFetchTRAV";

import axios from "axios";

import { SearchBar } from "../components/SearchBar";
import SortTable from "../components/SortTable";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";
import { sortAsc, sortDesc } from "../utils/compareFuncs";

const COUNTRIES_PER_PAGE = 5;

export default function Homepage() {
  // const [url, setUrl] = useState(
  //  "https://restcountries.com/v3.1/all?fields=latlng,borders,area,flag,continents,maps,population,currencies,capital,region,subregion,languages,name,cioc,ccn3"
  // );
  const url =
    "https://restcountries.com/v3.1/all?fields=latlng,borders,area,flag,continents,maps,population,currencies,capital,region,subregion,languages,name,cioc,ccn3";
  const [currentPage, setCurrentPage] = useState(1);

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
    console.log(sorted.map((c) => c.name.common));
  };

  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      const res = await axios.get(url);
      setCountries(res.data);
      setIsLoading(false);
    };
    fetchCountries();
  }, []);

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
