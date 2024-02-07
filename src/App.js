// src/App.js

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import PropertiesPageByInternalId from './pages/PropertiesPageByInternalId/PropertiesPageByInternalId';
import ListingPageByInternalId from './pages/ListingPageByInternalId/ListingPageByInternalId';
import PropertiesPageByAddress from './pages/PropertiesPageByAddress/PropertiesPageByAddress';
import ListingPageByAddress from './pages/ListingPageByAddress/ListingPageByAddress';
import Contact from './pages/Contact/ContactPage';
import NavigationHeader from './components/NavigationHeader/NavigationHeader'; // Updated import

function App() {
  return (
    <Router>
      <NavigationHeader /> {/* Include the NavigationHeader component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties-id" element={<PropertiesPageByInternalId />} />
        <Route path="/properties-id/:id" element={<ListingPageByInternalId />} />
        <Route path="/properties-address" element={<PropertiesPageByAddress />} />
        <Route path="/properties-address/:address" element={<ListingPageByAddress />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
