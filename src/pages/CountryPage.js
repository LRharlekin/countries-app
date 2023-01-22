import React, { useState } from "react";
import { useParams } from "react-router-dom";

import createUrl from "../utils/createUrl";
import { useFetch } from "../hooks/useFetchJHERR";
import { formatCountry } from "../utils/formatData";

import Navbar from "../components/Navbar";

function CountryPage() {
  const params = useParams();
  const { cioc: name } = params;

  const url = createUrl(name);

  // const { data, isLoading, error } = useFetch(url);
  const { data } = useFetch({
    url,
    onSuccess: () => {
      console.log("success");
    },
  });

  console.log("CountryPage rendering");
  console.log(data);

  return (
    <div>
      <Navbar />
      <div className="country-container">
        <h1 className="country-headline">Greece</h1>
        <div className="country-main">
          <div className="country-card">
            <p>
              Greece, officially referred to as the{" "}
              <strong>Hellenic Republic</strong>, is a country with a{" "}
              <strong>population of XXXXXX</strong> located in{" "}
              <strong>Southern Europe</strong>.
            </p>
          </div>

          <div className="country-card">
            <h3>Quick Facts</h3>
            <ul>
              <li>Capital: Athens</li>
              <li>Population: XXXXXX</li>
              <li>Language(s): YYYYYY</li>
              <li>Currency/ies: Euro (€)</li>
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
          <div className="country-geography country-card">
            <h5>Geography</h5>
            <p>
              <strong>Area:</strong> 52093 km2
            </p>
            <p>
              <strong>Neighbouring countries:</strong>
            </p>
            <ul>
              <li>Mazedonia</li>
              <li>Turkey</li>
              <li>Albania</li>
            </ul>
            <div className="country-map">google maps embed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
//   if (isLoading) return <h1>Country Page is LOADING...</h1>;
//   if (error)
//     return (
//       <React.Fragment>
//         <h1>Error on Country Page:</h1>
//         <p>{error}</p>
//       </React.Fragment>
//     );
//   console.log(data);
//   const c = formatCountry(data);

//   return (
//     <div>
//       <p>Country Page of</p>
//     </div>
//   );
// }

// createUrl
// fetchData
// formatData
// display data

export default CountryPage;
