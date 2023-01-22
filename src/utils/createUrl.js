import React from "react";

function createUrl(endpoint) {
  const BASE_URL_WITH_PARAMS =
    "https://restcountries.com?fields=name,cioc,ccn3,currencies,capital,capitalInfo,continents,subregion,area,maps,languages,population,flag,flags,coatOfArms";

  const newUrl = new URL(BASE_URL_WITH_PARAMS);

  if (endpoint === "all") {
    newUrl.pathname = "/v3.1/all";
  } else {
    newUrl.pathname = "/v3.1/alpha/" + endpoint;
  }

  return newUrl;
}

export default createUrl;
