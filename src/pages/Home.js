import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Carousel from '../components/Carousel';
import Features from '../components/Features';
import { farmData, features, carouselItems } from '../data/data';

export default function Home() {
  // Function to style the tagline
  const renderStyledTagline = (tagline) => {
    // Split the tagline to find and style specific words
    const parts = tagline.split(/(YOU|FOOD)/g);

    return parts.map((part, index) => {
      if (part === 'YOU') {
        return <strong key={index} style={{ fontWeight: '900', color: 'rgba(3, 103, 174, 1)' }}>{part}</strong>;
      } else if (part === 'FOOD') {
        return <span key={index} style={{ color: 'green', fontWeight: 'bold' }}>{part}</span>;
      } else {
        return <React.Fragment key={index}>{part}</React.Fragment>;
      }
    });
  };

   
  return (
    <div>
      <SearchBar />

      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis custom-color">
          {farmData.name}
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            {renderStyledTagline(farmData.tagline)} {farmData.description}
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <Link to="/contact" className="btn btn-outline-secondary btn-lg px-4">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: '900vh' }}>
          <div className="container px-5">
            <img 
              src="/images/corn.jpg" 
              className="img-fluid border rounded-3 shadow-lg mb-4" 
              alt="corn" 
              width="700" 
              height="900" 
              loading="lazy" 
            />
          </div>
        </div>
      </div>

      <Features features={features} />
      <Carousel items={carouselItems} />
    </div>
  );
};