import React from 'react';

const FeaturedEvent = ({ events }) => {
  // Assuming the first event in the sorted list is the featured event.
  const featuredEvent = events[0];

  return (
    <div>
     {featuredEvent ? (
      <div className="single-job" key={featuredEvent.event_id}>                    
          <div className="job-content">
              <h4><a href="{featuredEvent.event_url}">{featuredEvent.event_title}</a></h4>
              <ul>
                  <li><i className="lni lni-website"></i><a href="#"> {featuredEvent.event_topic}</a></li>
                  <li><i className="lni lni-dollar"></i> {featuredEvent.event_start_date}</li>
                  <li><i className="lni lni-map-marker"></i> {featuredEvent.event_city_name} {featuredEvent.event_country}</li>
              </ul>
          </div>
        </div>
        ) : (
          <p>No featured event available.</p>
        )}
        </div>
  );
};

const styles = {
  featuredContainer: {
    border: '2px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px 0',
    backgroundColor: '#f9f9f9'
  }
};

export default FeaturedEvent;
