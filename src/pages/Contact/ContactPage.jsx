// src/pages/ContactPage/ContactPage.jsx

import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '../../components/ContactForm/ContactForm';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Contact Us | Compass Real Estate</title>
      </Helmet>
      <h2>Contact Us</h2>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
