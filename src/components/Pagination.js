import React from 'react';

const Pagination = ({ totalEvents, eventsPerPage, currentPage, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.map(number => (
        <button key={number} onClick={() => onPageChange(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
