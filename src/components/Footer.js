import React from 'react'
import PropTypes from 'prop-types'

export default function Footer({ companyName, socialLinks }) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <span className="mb-3 mb-md-0 text-body-secondary">
          © {currentYear} {companyName}, Inc
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        {socialLinks.map((link) => (
          <li key={link.name} className="ms-3">
            <a className="text-body-secondary" href={link.url}>
              <img src={link.icon} alt={link.name} width="24" height="24" />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

Footer.propTypes = {
  companyName: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
}