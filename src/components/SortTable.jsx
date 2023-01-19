import React, { useState } from "react";
import MOCK_DATA from "../data/MOCK_DATA.json";

function SortTable() {
  const [data, setData] = useState(null);
  return (
    <React.Fragment>
      <table>
        <thead>
          <th>Country</th>
          <th>Flag</th>
          <th>Continents</th>
          <th>Population</th>
          <th>Languages</th>
        </thead>
        <tbody></tbody>
      </table>
    </React.Fragment>
  );
}

export default SortTable;
