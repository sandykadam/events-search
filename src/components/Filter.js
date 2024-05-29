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
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="keyword"
        placeholder="Search by keyword"
        value={filters.keyword}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="month"
        name="date"
        value={filters.date}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="text"
        name="country"
        placeholder="Country ID"
        value={filters.country}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="text"
        name="topic"
        placeholder="Topic ID"
        value={filters.topic}
        onChange={handleChange}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Filter</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px'
  },
  input: {
    margin: '5px 0',
    padding: '10px',
    fontSize: '16px'
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#FFFFFF',
    border: 'none',
    cursor: 'pointer',
    marginTop: '10px'
  }
};

export default Filter;
