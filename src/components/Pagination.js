import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
 <div className="row">
        <div className="col-12">
            <div className="pagination center">
                <ul className="pagination-list">
                <li key={currentPage}><a href="#" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}><i className="lni lni-arrow-left"></i></a></li>
                  {pageNumbers.map(number => (
                 <li key={number} className={`${currentPage === number ? "active" : ""}`}><a href="#" onClick={() => onPageChange(number)}>{number}</a></li>
               ))}
              <li key={currentPage + 1}><a href="#"  onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}><i className="lni lni-arrow-right"></i></a></li>
    
                </ul>
            </div>
        </div>
    </div>       


      
  );
};

export default Pagination;
