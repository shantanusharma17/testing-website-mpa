// src/utils/formatAddress.js

const formatAddress = (address) => {
    // Remove commas and points, replace spaces with hyphens, and convert to lowercase
    return address.replace(/[,.]/g, '').replace(/\s+/g, '-').toLowerCase();
  };
  
  export default formatAddress;
  