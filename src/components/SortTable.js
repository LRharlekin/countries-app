import React from "react";
import { Link } from "react-router-dom";

const SortTable = ({ countries, isLoading, switchOrder, order }) => {
  return (
    <div>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th
              className="col-country cursor-pointer"
              id="th-country"
              scope="col"
              onClick={() => switchOrder(order)}
            >
              Country ↕️
            </th>
            <th scope="col" className="col-flag">
              Flag
            </th>
            <th scope="col" className="col-continents">
              Continents
            </th>
            <th scope="col" className="col-population">
              Population
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {countries.map((c) => (
            <tr key={c.cioc ? c.cioc : c.name.official}>
              <td className="col-country">{c.name.common}</td>
              <td className="col-flag">{c.flag}</td>
              <td className="col-continents">{c.continents[0]}</td>
              <td className="col-population">{c.population}</td>
              <td>
                <Link
                  key={c.cioc ? c.cioc : c.ccn3}
                  to={
                    "/country/" +
                    (c.cioc ? c.cioc : c.name.common.replace(/ .*/, ""))
                  }
                >
                  More info
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortTable;
