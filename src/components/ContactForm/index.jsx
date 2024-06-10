import React from 'react';
import './contactform.css';

const ContactForm = () => {
  return (
    <form className="contact-form">
      <input type="email" placeholder="Email Address" className="email-input" />
      <button type="submit" className="contact-button">Contact Me</button>
    </form>
  );
};

export default ContactForm;