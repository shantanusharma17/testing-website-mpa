import React from 'react';
import { Helmet } from 'react-helmet';
import './PropertiesPageByAddress';
import propertiesData from '../../data/propertiesData';
import formatAddress from '../../utils/formatAddress';

const PropertiesPageByAddress = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Listings | Compass Real Estate</title>
      </Helmet>
      <h2>Featured Properties By Address</h2>
      <div className="properties-grid">
        {propertiesData.map((property) => (
          <div key={property.id} className="properties-grid__item-wrap">
            <a
              href={`/testing-website-mpa#/listings/${formatAddress(property.address)}`}
              className="properties-grid__item"
            >
              <div className="properties-grid__img">
                <span className="status-tile">{property.status}</span>
                <img src={property.image} alt={property.name} />
              </div>
              <h3>{property.name}</h3>
              <div className="properties-grid__price serif">{property.price}</div>
              <p className="properties-grid__address">{property.address}</p>
              <div className="properties-grid__amenities">{property.amenities}</div>
              <div className="properties-grid__footer"></div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesPageByAddress;
