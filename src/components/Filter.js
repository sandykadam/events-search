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
               <section class="all-categories section">
        <div class="container">
            <h2 class="categories-title">Filter by topic</h2>
            <div class="row">
                <div class=" ">
                    <ul className="list-group list-group-horizontal-md fixed-columns-ul">
                        <li className="list-group-item flex-fill"><a href="#">Accounting &amp; Finance <span class="badge text-bg-primary rounded-pill">33</span></a></li>
                        <li className="list-group-item flex-fill"><a href="browse-jobs.html">Asset Management</a></li>
                        <li className="list-group-item flex-fill"><a href="browse-jobs.html">Capital Markets</a></li>
                        <li className="list-group-item flex-fill"><a href="browse-jobs.html">Commercial Banking</a></li>
                        <li className="list-group-item flex-fill"><a href="browse-jobs.html">Commodities</a></li>
                        <li className="list-group-item flex-fill"><a href="browse-jobs.html">Consultiong</a></li>
                        <li className="list-group-item flex-fill"><a href="browse-jobs.html">Corporate</a></li>
                        <li className="list-group-item flex-fill"><a href="browse-jobs.html">Credit</a></li>
                    </ul>
                </div>
               
              
            </div>
        </div>
    </section>
                </div>
                </form>
            </div>
        </div>
  );
};
export default Filter;
