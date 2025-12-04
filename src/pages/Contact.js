import React from 'react';
import PropTypes from 'prop-types';
import { farmData } from '../data/data';

export default function Contact({ contactInfo }) {
    return (
        <div className="container mt-4">
            <h1>Contact Us</h1>
            <p>Tel: {contactInfo.phone}</p>
            <p>Email: {contactInfo.email}</p>
        </div>
    );
};

// You can use default props
Contact.defaultProps = {
  contactInfo: farmData.contact
};

Contact.propTypes = {
  contactInfo: PropTypes.shape({
    phone: PropTypes.string,
    email: PropTypes.string
  })
};