import React from 'react';

const EventList = ({ events }) => (
  <div>
    {events.map(event => (
      <div className="single-job" key={event.event_id}>                        
        <div className="job-content">
            <h4><a href="{event.event_url}">{event.event_title}</a></h4>
            <p><span class="time">Full-Time</span></p>
            <ul>
                <li><i className="lni lni-website"></i><a href="#"> {event.event_topic}</a></li>
                <li><i className="lni lni-dollar"></i> {event.event_start_date}</li>
                <li><i className="lni lni-map-marker"></i> {event.event_city_name} {event.event_country}</li>
            </ul>
        </div>
      </div>
    ))}
  </div>
);

export default EventList;
