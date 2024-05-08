// src/data/propertyData.js

const propertiesData = [
    {
      id: 1,
      name: '835 Forest Street',
      status: 'For Sale',
      price: '$729,500',
      address: '835 Forest Street, Denver, CO 80220',
      mls_id: '11444068', // Pattern 1: All numeric (6-9 digits)
      amenities: '3 Beds | 3 Baths | 1,708 Sq.Ft.',
      image: 'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/kkle2teftbd9ixrhsjro/33a',
    },
    {
      id: 2,
      name: '1156 S Steele Street',
      status: 'Pending',
      price: '$725,000',
      address: '1156 S Steele Street, Denver, CO 80210',
      mls_id: 'PRC7729217', // Pattern 2: Alphanumeric (0-3 letters followed by 4-8 digits)
      amenities: '4 Beds | 2 Baths | 1,660 Sq.Ft.',
      image: 'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/oznaqorazdhwoxeh67hs/46a',
    },
    {
      id: 3,
      name: '1038 S Race Street',
      status: 'Pending',
      price: '$4,275,000',
      address: '1038 S Race Street, Denver, CO 80209',
      amenities: '5 Beds | 6 Baths | 5,894 Sq.Ft.',
      mls_id: 'PRC-7729217', // Pattern 3: Hyphenated (0-3 letters, hyphen, 4-8 digits)
      image: 'https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/jrvh8jcnsv8wegs65ptz/100',
    },
    // Add more properties as needed
  ];
  
  export default propertiesData;
  