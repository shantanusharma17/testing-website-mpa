import React from 'react';
import './PropertiesPageByAddressMls';
import propertiesData from '../../data/propertiesData';
import formatAddress from '../../utils/formatAddress';
import formatMLSId from '../../utils/formatMLSId';

const PropertiesPageByAddressMls = () => {
  return (
    <div className="container">
      <h2>Featured Properties By Address + MLS ID</h2>
      <div className="properties-grid">
        {propertiesData.map((property) => (
          <div key={property.id} className="properties-grid__item-wrap">
            <a
              href={`/testing-website-mpa#/properties-address-mls/${formatAddress(property.address)}-${formatMLSId(
                property.mls_id || 'null' // Use 'null' if mls_id is undefined
              )}`}
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
              <div className="properties-grid__footer">{/* Add footer content if needed */}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesPageByAddressMls;
