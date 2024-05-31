import React from 'react';
import moment from 'moment';

const FeaturedEvent = ({ event }) => {
  return (
      <div className="single-job" key={event.event_id}>                    
          <div className="job-content">
              <h4><a href="{event.event_url}">{event.event_title}</a> FEATURED </h4>
             <ul>
                <li><i className="lni lni-website"></i><a href="#"> {event.event_topic}</a></li>
                <li><i className="lni lni-dollar"></i> {moment(event.event_start_date).format('MMMM Do, YYYY')} - {moment(event.event_end_date).format('MMMM Do, YYYY')}
</li>
                <li><i className="lni lni-map-marker"></i> {event.event_city_name} {event.event_country}</li>
            </ul>
          </div>
          { event.event_virtual === 1 ?
          <div className="job-button">
              <ul>
                  <li><span>Virtual</span></li>
              </ul>
          </div>
          :
          <div></div>
          }
        </div>
    );
};


export default FeaturedEvent;
