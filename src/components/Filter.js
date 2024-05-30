import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    keyword: '',
    date: '',
    country: '',
    topic: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <div className="search-job">
            <div className="container">
              <form onSubmit={handleSubmit}>
                <div className="search-nner">
                    <div className="row">
                      
                        <div className="col-lg-5 col-md-5 col-xs-12">
                             <input
                                type="text"
                                className="form-control"
                                name="keyword"
                                placeholder="Search by keyword"
                                value={filters.keyword}
                                onChange={handleChange}
                              />
                        </div>
                       
                        <div className="col-lg-5 col-md-5 col-xs-12">
                                 <input
                                    type="text"
                                    className="form-control"
                                    name="topic"
                                    placeholder="Topic ID"
                                    value={filters.topic}
                                    onChange={handleChange}
                                  />
                        </div>
                        <div className="col-lg-2 col-md-2 col-xs-12 button">
                            <button type="submit" className="btn btn-common float-right">Filter</button>
                        </div>
                    </div>
                    <div className="row">
                       <div className="col-xs-12">
                       <ul className="browse-resumes resume-item skills">
                          <li>PHP</li>
                          <li><a href="/php"> Javascript <span className="notifi">15</span></a></li>
                          <li><a href="/php"> Angular <span className="notifi">5</span></a></li>
                        </ul> 
                       </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
  );
};
export default Filter;
