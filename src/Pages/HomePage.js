import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import FeaturedEvent from '../components/FeaturedEvent';
import EventList from '../components/EventList';
import EventFilter from '../components/EventFilter';
import Pagination from '../components/Pagination';
import events from '../data/events.json'; // Assume the events JSON is stored locally for simplicity
import EventTopicsList from '../data/events_topics.json'; // Assume the events-topics JSON is stored locally for simplicity

const HomePage = () => {
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [topics, setTopics] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();
  const history = useNavigate();

  const EVENTS_PER_PAGE = 10;


  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]; // Get YYYY-MM-DD format for today
    const upcomingEvents = events.filter(event => new Date(event.event_start_date).toISOString().split('T')[0] >= today);
    const sortedEvents = upcomingEvents.sort((a, b) => new Date(a.event_start_date) - new Date(b.event_start_date));
    const nonFeaturedEvents = sortedEvents.filter(event => event.featured_event !== 1);
    const featured = sortedEvents.filter(event => event.featured_event === "1"); // Check for featured_event value of 1
    setFeaturedEvents(featured);
    setFilteredEvents(nonFeaturedEvents);
    // Count events for each topic
    const topicsWithCount = EventTopicsList.map(topic => ({
      ...topic,
      eventCount: events.filter(event => event.event_topic_slug === topic.topic_slug).length
    }));
    // Set topics
    setTopics(topicsWithCount);
    // Calculate total pages
    setTotalPages(Math.ceil(upcomingEvents.length / EVENTS_PER_PAGE));

  }, []);

useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const topicSlug = queryParams.get('event_topic_slug') || '';
    setSearchQuery(topicSlug.toLowerCase());
    setCurrentPage(1); // Reset to first page on new search
  }, [location.search]);

  const handleSearchChange = (searchTerm) => {
    setSearchQuery(searchTerm.toLowerCase());
        setCurrentPage(1); // Reset to first page on new search

  };

  const handleTopicClick = (topicSlug) => {
    history.push(`/?event_topic_slug=${topicSlug}`);
  };

  const filterEvents = (events) => {
    return events.filter(event =>
      event.event_topic_slug.toLowerCase().includes(searchQuery) ||
      event.event_title.toLowerCase().includes(searchQuery)
    );
  };

const handlePageChange = (page) => {
    setCurrentPage(page);
  };

    const paginateEvents = (events) => {
    const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
    const endIndex = startIndex + EVENTS_PER_PAGE;
    return events.slice(startIndex, endIndex);
  };
  const filteredFeaturedEvents = paginateEvents(filterEvents(featuredEvents));
  const filteredRegularEvents = paginateEvents(filterEvents(filteredEvents));


  return (
    <div>
      <section className="find-job section">
        <EventFilter
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          topics={topics}
          onTopicClick={handleTopicClick}
        />

        <div className="container">
          <div className="single-head">
                <div className="row">
                  <div className="col-12">
                      {filteredFeaturedEvents.length > 0 ? (
                        filteredFeaturedEvents.map(event => (
                          <div className="featured-job">
                            <FeaturedEvent key={event.id} event={event} />
                          </div>
                          ))
                        ) : (
                        null
                      )}

                      {filteredRegularEvents.length > 0 ? (
                        filteredRegularEvents.map(event => (
                          <EventList key={event.id} event={event} />

                        ))
                      ) : (
                      <p>No upcoming events available.</p>
                    )}
                  </div>
                </div>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
