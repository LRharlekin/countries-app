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

  return (
    <div>
      <Navbar />
      <div>hello</div>
      <div>{name}</div>
      <div>
        <button>Jack</button>
        <button>Sally</button>
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
