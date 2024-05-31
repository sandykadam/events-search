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
    <div>

  <div className="privacy-policy section">
        <div className="container">
            <div className="row mb-n5">
                <div className="col-lg-10 offset-lg-1 col-12">
                    <div className="policy-inner">
                        <div className="policy-details-body">
                            <h6 className="mb-3">Add event</h6>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea.</p>
                            <h6 className="mb-3">Who Is Responsible For Your Information?</h6>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores earebum.
                            </p>
                            <p>

                            <form onSubmit={handleSubmit}>
                              <input type="text" name="title" placeholder="Event Title" onChange={handleChange} />
                              <input type="date" name="startDate" onChange={handleChange} />
                              <input type="date" name="endDate" onChange={handleChange} />
                              <input type="text" name="location" placeholder="Location" onChange={handleChange} />
                              <input type="text" name="city" placeholder="City" onChange={handleChange} />
                              <input type="url" name="eventLink" placeholder="Event Link" onChange={handleChange} />
                              <button type="submit">Submit</button>
                            </form>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  );
};

export default AddEventPage;
