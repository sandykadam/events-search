import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './Pages/HomePage';
import ContactUsPage from './Pages/ContactUsPage';
import AboutUsPage from './Pages/AboutUsPage';
import AddEventPage from './Pages/AddEventPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/add-event">Add Event</a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/contact" element={<ContactUsPage/>} />
          <Route path="/add-event" element={<AddEventPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
