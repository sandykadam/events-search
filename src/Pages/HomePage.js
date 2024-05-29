import React, { useState, useEffect } from 'react';
import FeaturedEvent from '../components/FeaturedEvent';
import EventList from '../components/EventList';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';
import events from '../data/events.json'; // Assume the events JSON is stored locally for simplicity

const HomePage = () => {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

  useEffect(() => {
    setFilteredEvents(events);
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
      <FeaturedEvent events={filteredEvents} />
      <Filter onFilter={handleFilter} />
      <EventList events={currentEvents} />
      <Pagination
        totalEvents={filteredEvents.length}
        eventsPerPage={eventsPerPage}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default HomePage;
