import React, { useState } from 'react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation and email sending logic

    alert('Thank you!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactUsPage;
