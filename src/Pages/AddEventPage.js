import React, { useState } from 'react';

const AddEventPage = () => {
  const [eventData, setEventData] = useState({
    title: '',
    startDate: '',
    endDate: '',
    location: '',
    city: '',
    eventLink: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation and email sending logic

    alert('Thank you!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Event Title" onChange={handleChange} />
      <input type="date" name="startDate" onChange={handleChange} />
      <input type="date" name="endDate" onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} />
      <input type="text" name="city" placeholder="City" onChange={handleChange} />
      <input type="url" name="eventLink" placeholder="Event Link" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddEventPage;
