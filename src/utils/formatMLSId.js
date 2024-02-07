// utils/formatMLSId.js

const formatMLSId = (mlsId) => {
    if (!mlsId) {
      return ''; // Return an empty string if MLS ID is not provided
    }
  
    // Remove non-alphanumeric characters and convert to lowercase
    return mlsId.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  };
  
  export default formatMLSId;
  