// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import PropertiesPageByInternalId from './pages/PropertiesPageByInternalId/PropertiesPageByInternalId';
import ListingPageByInternalId from './pages/ListingPageByInternalId/ListingPageByInternalId';
import Contact from './pages/Contact/ContactPage';
import NavigationHeader from './components/NavigationHeader/NavigationHeader'; // Updated import

function App() {
  return (
    <Router>
      <NavigationHeader /> {/* Include the NavigationHeader component */}
      <Routes>
        <Route path="/testing-website-mpa/" element={<Home />} />
        <Route path="/testing-website-mpa/properties-id" element={<PropertiesPageByInternalId />} />
        <Route path="/testing-website-mpa/properties-id/:id" element={<ListingPageByInternalId />} />
        <Route path="/testing-website-mpa/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
