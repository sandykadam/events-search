import React from 'react';

const EventList = ({ events }) => (
  <div>
    {events.map(event => (
      <div key={event.event_id}>
        <h3>{event.event_title}</h3>
        <p>{event.event_start_date}</p>
        <p><a href={event.event_url}>{event.event_url}</a></p>
        <p>{event.event_topic_ref_id}</p>
        <p>{event.event_twitter_id}</p>
      </div>
    ))}
  </div>
);

export default EventList;
