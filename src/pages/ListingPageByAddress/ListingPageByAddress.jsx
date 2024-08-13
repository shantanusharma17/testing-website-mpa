import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/ContactForm';
import propertiesData from '../../data/propertiesData';
import formatAddress from '../../utils/formatAddress';
import './ListingPageByAddress';

const ListingPageByAddress = () => {
  const { address } = useParams();
  const property = propertiesData.find((item) => formatAddress(item.address) === address);

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
  // - ['h3,h5'] selector with 'Area & Lot' to verify pixel mls id collection
  // - ['h1'] selector to verify pixel listing address collection
  return (
    <div className="container">
      <div>
        <h1>{property.name}</h1>
        <p>{property.address}</p>
      </div>
      <div className="property-details">
        <img src={property.image} alt={property.name} />
        <div>
          <h3>Area & Lot</h3>
          <ul>
            <li>
              <p>Status</p>
              <p>{property.status}</p>
            </li>
            <li>
              <p>Price</p>
              <p>{property.price}</p>
            </li>
            <li>
              <p>Address</p>
              <p>{property.address}</p>
            </li>
            <li>
              <p>MLS ID</p>
              <p>{property.mls_id || '-'}</p>
            </li>
            <li>
              <p>Amenities</p>
              <p>{property.amenities}</p>
            </li>
          </ul>
        </div>
        {/* Add more details as needed */}
      </div>
      <br />
      <h2>Request more information</h2>
      <ContactForm />
    </div>
  );
};

export default ListingPageByAddress;
