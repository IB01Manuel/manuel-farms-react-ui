import React from 'react';
import PropTypes from 'prop-types';

export default function About({ aboutInfo }) {
  return (
    <div className="container mt-4">
      <h1>About</h1>
      <p>{aboutInfo.establishment}</p>
      <p>{aboutInfo.mission}</p>

      <h2>Vision</h2> 
      <p>{aboutInfo.vision}</p>
    </div>
  );
};

About.propTypes = {
  aboutInfo: PropTypes.shape({
    establishment: PropTypes.string,
    mission: PropTypes.string,
    vision: PropTypes.string
  }).isRequired
};