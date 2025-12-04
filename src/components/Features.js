import React from 'react'
import PropTypes from 'prop-types'

export default function Features({ features }) {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="custom-color2 pb-2 border-bottom">Why Manuel Farms?</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {features.map((feature) => (
          <div key={feature.id} className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img src={feature.icon} alt={feature.title} height="30" />
            </div>
            <h3 className="fs-2 text-body-emphasis">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}  
      </div>
    </div>
  )
}

Features.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired
}