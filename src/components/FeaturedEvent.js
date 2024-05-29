import React from 'react';

const FeaturedEvent = ({ events }) => {
  // Assuming the first event in the sorted list is the featured event.
  const featuredEvent = events[0];

  return (
    <div>
      <h2>Featured Event</h2>
      {featuredEvent ? (
        <div key={featuredEvent.event_id} style={styles.featuredContainer}>
          <h3>{featuredEvent.event_title}</h3>
          <p>{new Date(featuredEvent.event_start_date).toLocaleDateString()}</p>
          <p><a href={featuredEvent.event_url} target="_blank" rel="noopener noreferrer">{featuredEvent.event_url}</a></p>
          <p>Topic ID: {featuredEvent.event_topic_ref_id}</p>
          <p>Twitter: {featuredEvent.event_twitter_id}</p>
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
