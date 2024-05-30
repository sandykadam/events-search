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
    <header className="header other-page">
        <div className="navbar-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand logo" href="index.html">
                                <img className="logo1" src="assets/images/logo/techconfs-events-logo.png" alt="Techconfs.events Logo"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" className="navbar-nav ml-auto">
                                   <li className="nav-item">
                                    <a href="/" className="nav-link">Home</a>
                                  </li>
                                  <li className="nav-item">
                                    <a href="/about" className="nav-link">About Us</a>
                                  </li>
                                  <li className="nav-item">
                                    <a href="/contact" className="nav-link">Contact Us</a>
                                  </li>
                                  <li className="nav-item">
                                    <a href="/add-event" className="nav-link">Add Event</a>
                                  </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/contact" element={<ContactUsPage/>} />
          <Route path="/add-event" element={<AddEventPage/>} />
        </Routes>
    </Router>
  );
}

export default App;
