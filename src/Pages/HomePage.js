import React, { useState, useEffect } from 'react';
import FeaturedEvent from '../components/FeaturedEvent';
import EventList from '../components/EventList';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';
import events from '../data/events.json'; // Assume the events JSON is stored locally for simplicity

const HomePage = () => {
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 10;

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]; // Get YYYY-MM-DD format for today
    const upcomingEvents = events.filter(event => new Date(event.event_start_date).toISOString().split('T')[0] >= today);
    const sortedEvents = upcomingEvents.sort((a, b) => new Date(a.event_start_date) - new Date(b.event_start_date));
    const nonFeaturedEvents = sortedEvents.filter(event => event.featured_event !== 1);
    const featured = sortedEvents.filter(event => event.featured_event === "1"); // Check for featured_event value of 1
    setFeaturedEvents(featured);
    setFilteredEvents(nonFeaturedEvents);
  }, []);

  const handleFilter = (filters) => {
    let filtered = events;

    if (filters.keyword) {
      filtered = filtered.filter(event => 
        event.event_title.toLowerCase().includes(filters.keyword.toLowerCase())
      );
    }

    if (filters.date) {
      const selectedDate = new Date(filters.date);
      filtered = filtered.filter(event => {
        const eventDate = new Date(event.event_start_date);
        return eventDate.getFullYear() === selectedDate.getFullYear() &&
               eventDate.getMonth() === selectedDate.getMonth();
      });
    }

    if (filters.country) {
      filtered = filtered.filter(event => 
        event.event_country_ref_id === filters.country
      );
    }

    if (filters.topic) {
      filtered = filtered.filter(event => 
        event.event_topic_ref_id === filters.topic
      );
    }

    setFilteredEvents(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  return (
    <div>
      <section className="find-job section">
        <Filter onFilter={handleFilter} />
        <div className="container">
          <div className="single-head">
                <div className="row">
                  <div className="col-12">
                      {featuredEvents.length > 0 ? (
                        featuredEvents.map(event => (
                            <FeaturedEvent key={event.id} event={event} />
                          ))
                        ) : (
                        null
                      )}
                    <EventList events={currentEvents} />
                  </div>
                </div>
          </div>
          <Pagination
            totalEvents={filteredEvents.length}
            eventsPerPage={eventsPerPage}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
