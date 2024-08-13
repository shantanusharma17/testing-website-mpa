// src/pages/ListingPageByInternalId.jsx

import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import ContactForm from '../Contact/ContactPage';
import propertiesData from '../../data/propertiesData';
import './ListingPageByInternalId.css';

const ListingPageByInternalId = () => {
  const { id } = useParams();
  const property = propertiesData.find((item) => String(item.id) === id);

  if (!property) {
    return (
      <div>
        <Helmet>
          <title>Property Not Found | Compass Real Estate</title>
        </Helmet>
        Property not found
      </div>
    );
  }

  return (
    <div className="container">
      <Helmet>
        <title>{`${property.name} | Compass Real Estate`}</title>
      </Helmet>

  // update template to match
  // - [#description h5] selector to verify pixel mls id collection
  // - [section#map] selector to verify pixel listing address collection
  return (
    <div className="container">
      <section id="map">
        <h2>{property.name} Details</h2>
        {/* collected at properties.cxlp.listingAddress */}
        <p>{property.address}</p>
      </section>
      <div className="property-details" id="description">
        <img src={property.image} alt={property.name}/>
        <div>
          <h5>Status</h5>
          <span>{property.status}</span>
        </div>
        <div>
          <h5>Price</h5>
          <span>{property.price}</span>
        </div>
        <div>
          <h5>Address</h5>
          <span>{property.address}</span>
        </div>
        <div>
          <h5>MLS ID</h5>
          <span>{property.mls_id || '-'}</span>
        </div>
        <div>
          <h5>Amenities</h5>
          <span>{property.amenities}</span>
        </div>
        {/* Add more details as needed */}
      </div>
      <br/>
      <h2>Request more information</h2>
      <ContactForm/>
    </div>
  );
};

export default ListingPageByInternalId;
