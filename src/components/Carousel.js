import React from 'react';
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types'

export default function MyCarousel({ items }) {
  return (
    <div className="container">
      <Carousel>
        {items.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.image}
              alt={item.title}
            />
            <Carousel.Caption className={item.textColor === 'dark' ? 'carousel-caption-dark' : ''}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

MyCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      textColor: PropTypes.string
    })
  ).isRequired
}