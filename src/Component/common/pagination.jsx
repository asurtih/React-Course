import React, { Component } from "react";
import _ from "lodash"; //optimize version of javascript library called undescored
import PropTypes from "prop-types";

const Pagination = props => {
  const { pageSize, itemsCount, onPageChange, currentPage } = props;
  console.log(currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) {
    return null;
  }
  const pages = _.range(1, pagesCount + 1); //this is using lodash

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a onClick={() => onPageChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

//type checking to make sure that any required props is passed
//and the props is of the correct type
Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};
export default Pagination;
