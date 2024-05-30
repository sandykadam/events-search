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
<div>
    <div className="breadcrumbs overlay">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumbs-content">
                        <h1 className="page-title">Contact Us</h1>
                        <p>contact us page text.</p>
                    </div>
                    <ul className="breadcrumb-nav">
                        <li><a href="/">Home</a></li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <section id="contact-us" className="contact-us section">
        <div className="container">
            <div className="contact-head wow fadeInUp" data-wow-delay=".4s">
                <div className="row">
                    <div className="col-lg-7 col-12">
                        <div className="form-main">
                            <form className="form" method="post" action="#">
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <input name="name" type="text" placeholder="Your Name" required="required"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <input name="subject" type="text" placeholder="Your Subject"
                                                required="required"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <input name="email" type="email" placeholder="Your Email"
                                                required="required"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <input name="phone" type="text" placeholder="Your Phone"
                                                required="required"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group message">
                                            <textarea name="message" placeholder="Your Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group button">
                                            <button type="submit" className="btn ">Submit Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <p></p>
    </div>
  );
};

export default ContactUsPage;
