// src/pages/Home.jsx

import React from 'react';
import './HomePage.css';

const Home = () => {
  return (
    <div className="container">
      <div className="agent-intro">
        <img
          src="https://placekitten.com/200/200"  // Placeholder image, replace with actual photo URL
          alt="Agent"
          className="agent-photo"
        />
        <div className="agent-info">
          <h2>Meet Your Compass Real Estate Agent</h2>
          <p>
            Hi, I'm Elga Tito, your dedicated real estate professional at Compass. With 99+ years of experience
            in the industry, I am committed to helping you find the perfect home.
          </p>
          <div className="ratings-section">
            <h3>Ratings and Reviews</h3>
            <div className="star-ratings">
              <span role="img" aria-label="Star">⭐</span>
              <span role="img" aria-label="Star">⭐</span>
              <span role="img" aria-label="Star">⭐</span>
              <span role="img" aria-label="Star">⭐</span>
              <span role="img" aria-label="Star">⭐</span>
            </div>
            <p>
              Based on 352 reviews
            </p>
          </div>
          <p>
            Whether you're looking to buy, sell, or just explore the market, I'm here to guide you every step of the way.
          </p>
          <p>
            <a href="/testing-website-mpa/contact" className="cta-link">Talk with me</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
