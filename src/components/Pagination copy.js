import React from 'react';

const Pagination = ({ totalEvents, eventsPerPage, currentPage, onPageChange }) => {
  var totalPages = Math.ceil(totalEvents / eventsPerPage);
  var renderPrevBtn, renderNextBtn, prevPage, nextPage;
  // Prev page
  if(currentPage === 1) {
    renderPrevBtn = <li key={currentPage}><i className="lni lni-arrow-left"></i></li>
  }
  else{
    prevPage = currentPage -1;
    renderPrevBtn = <li key={prevPage}><a href="#" onClick={() => onPageChange(prevPage)}><i className="lni lni-arrow-left"></i></a></li>
  }
  // Next page
  if(currentPage === totalPages) {
    renderNextBtn = <li key={totalPages}><i className="lni lni-arrow-right"></i></li>
  }
  else{
    nextPage = currentPage +1;
    renderNextBtn = <li key={nextPage}><a href="#" onClick={() => onPageChange(nextPage)}><i className="lni lni-arrow-right"></i></a></li>
  }
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="row">
        <div className="col-12">
            <div className="pagination center">
                <ul className="pagination-list">
                    { renderPrevBtn }
                      {pageNumbers.map(number => (
                      <li key={number} className={`${currentPage === number ? "active" : ""}`}><a href="#" onClick={() => onPageChange(number)}>{number}</a></li>
                      ))}
                    { renderNextBtn }
                </ul>
            </div>
        </div>
    </div>       
  );
};

export default Pagination;
