import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/ContactForm';
import propertiesData from '../../data/propertiesData';
import formatAddress from '../../utils/formatAddress';
import './ListingPageByAddressMls';

const ListingPageByAddressMls = () => {
  const { addressmls } = useParams();

  const lastHyphenIndex = addressmls.lastIndexOf('-');
  const formattedAddress = addressmls.slice(0, lastHyphenIndex);

  const property = propertiesData.find((item) => formatAddress(item.address) === formattedAddress);

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

  return (
    <div className="container">
      <h2>{property.name} Details</h2>
      <div className="property-details">
        <img src={property.image} alt={property.name} />
        <p>Status: {property.status}</p>
        <p>Price: {property.price}</p>
        <p>Address: {property.address}</p>
        <p>MLS ID: {property.mls_id || '-'}</p>
        <p>Amenities: {property.amenities}</p>
        {/* Add more details as needed */}
      </div>
      <br />
      <h2>Request more information</h2>
      <ContactForm />
    </div>
  );
};

export default ListingPageByAddressMls;
