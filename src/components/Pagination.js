import React from "react";

const Pagination = ({
  countriesPerPage,
  totalCountries,
  currentPage,
  paginate,
}) => {
  return (
    <div className="pagination">
      <button
        className="pagination-button"
        disabled={currentPage === 1}
        onClick={() => paginate(currentPage - 1)}
      >
        ⬅️
      </button>
      <p id="page-number">
        <strong>{currentPage}</strong> /{" "}
        {Math.ceil(totalCountries / countriesPerPage)}
      </p>
      <button
        className="pagination-button"
        disabled={currentPage === Math.ceil(totalCountries / countriesPerPage)}
        onClick={() => paginate(currentPage + 1)}
      >
        ➡️
      </button>
    </div>
  );
};

export default Pagination;
