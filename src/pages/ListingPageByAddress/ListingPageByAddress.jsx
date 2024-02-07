import React from 'react';
import { useParams } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/ContactForm';
import propertiesData from '../../data/propertiesData';
import formatAddress from '../../utils/formatAddress';
import './ListingPageByAddress';

const ListingPageByAddress = () => {
  const { address } = useParams();
  // Use formatAddress to get the property with formatted address
  const property = propertiesData.find((item) => formatAddress(item.address) === address);

  if (!property) {
    // Handle the case when the property is not found
    return <div>Property not found</div>;
  }

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

export default ListingPageByAddress;
