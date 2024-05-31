import React from 'react';

const EventFilter = ({ searchQuery, onSearchChange, topics, onTopicClick }) => {
  return (

<div class="search-job">
            <div class="container">
                <div class="search-nner">
                    <div class="row">
                      <div class="col-lg-2 col-md-5 col-xs-12">
                        Search
                      </div>
                        <div class="col-lg-5 col-md-5 col-xs-12">
                            <input
                              type="text"
                              placeholder="Search by event title..."
                              value={searchQuery}
                              onChange={(e) => onSearchChange(e.target.value)}
                            />
                        </div>
                    </div>
                     <div class="row">
                      <div class="col-lg-2 col-md-5 col-xs-12">
                        Topics: 
                      </div>
                        <div class="col-lg-5 col-md-5 col-xs-12">
                             <ul>
                                {topics.map(topic => {
                                  const eventCount = topic.eventCount;
                                  if (eventCount > 0) {
                                    return (
                                      <li key={topic.topic_id}>
                                        <a href={`?event_topic_slug=${topic.topic_slug}`} onClick={() => onTopicClick(topic.topic_slug)}>
                                          {topic.topic_name} ({eventCount})
                                        </a>
                                      </li>
                                    );
                                  }
                                  return null;
                                })}
                              </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default EventFilter;
