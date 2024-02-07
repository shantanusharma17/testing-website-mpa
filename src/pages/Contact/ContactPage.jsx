// src/pages/ContactPage/ContactPage.jsx

import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="container">
      <h2>Contact Us</h2>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
