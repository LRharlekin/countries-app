import React, { useState } from "react";
import { useParams } from "react-router-dom";

import createUrl from "../utils/createUrl";
import useFetch from "../hooks/useFetch";
import { formatCountry } from "../utils/formatData";

import Navbar from "../components/Navbar";

function CountryPage() {
  const [countryObj, setCountryObj] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const { cioc: name } = params;

  const url = createUrl(name);

  useFetch({
    url: url,
    setData: setCountryObj,
    setIsLoading,
  });

  return (
    <div>
      <Navbar />
      <div className="country-container">
        <h1 className="country-headline placeholder-glow">
          {countryObj ? (
            countryObj.name.common
          ) : (
            <span className="placeholder col-3"></span>
          )}
        </h1>
        <div className="country-main">
          <div className="country-card">
            <p>
              {countryObj ? (
                countryObj.name.common
              ) : (
                <span className="placeholder col-2"></span>
              )}
              , officially referred to as the{" "}
              <strong>
                {countryObj ? (
                  countryObj.name.official
                ) : (
                  <span className="placeholder col-3"></span>
                )}
              </strong>
              , is a country with a{" "}
              <strong>
                population of{" "}
                {countryObj ? (
                  countryObj.population
                ) : (
                  <span className="placeholder col-1"></span>
                )}
              </strong>{" "}
              located in{" "}
              <strong>
                {countryObj ? (
                  countryObj.subregion
                ) : (
                  <span className="placeholder col-2"></span>
                )}
              </strong>
              .
            </p>
          </div>

          <div className="country-card">
            <h3>Quick Facts</h3>
            <ul>
              <li>
                Capital:{" "}
                {countryObj ? (
                  countryObj.capital
                ) : (
                  <span className="placeholder col-2"></span>
                )}
              </li>
              <li>
                Population:{" "}
                {countryObj ? (
                  countryObj.population
                ) : (
                  <span className="placeholder col-1"></span>
                )}
              </li>
              <li>
                Area:{" "}
                {countryObj ? (
                  countryObj.area
                ) : (
                  <span className="placeholder col-2"></span>
                )}{" "}
                km2
              </li>
            </ul>
          </div>
        </div>
        <div className="country-sidebar">
          <div className="country-flag country-card">
            <h5>National Flag</h5>
            <div>nationalflag.png</div>
          </div>
          <div className="country-coat-of-arms country-card">
            <h5>Coat of Arms</h5>
            <div>coatofarms.png</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
