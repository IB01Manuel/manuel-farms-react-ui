import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { searchItems } from '../services/api';

export default function SearchResults() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q');

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) {
        setItems([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const results = await searchItems(query);
        setItems(results.items);
      } catch (error) {
        console.error('Search error:', error);
        setError('Failed to fetch search results');
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border custom-color2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Searching for "{query}"...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
        <Link to="/" className="btn custom-color2" style={{ backgroundColor: 'rgba(3, 103, 174, 1)', color: 'white' }}>
          Back to Search
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="search-container" style={{
        background: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: 'auto'
      }}>
        <h1 className="mb-4" style={{ color: 'rgba(3, 103, 174, 1)' }}>
          Search Results for "<span style={{ color: 'green' }}>{query}</span>"
        </h1>
        
        {items.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {items.map((item, index) => (
              <li key={index} className="item-card" style={{
                display: 'flex',
                alignItems: 'flex-start',
                background: '#fff',
                padding: '20px',
                margin: '20px 0',
                borderRadius: '10px',
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
                border: '1px solid #e9ecef'
              }}>
                <img 
                  src={item.image_url} 
                  alt={item.name}
                  className="search-result-image" /* Add a specific class */
                  style={{
                    width: '300px',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginRight: '20px'
                  }}
                  onError={(e) => {
                    e.target.src = '/images/placeholder.jpg';
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h2 style={{ 
                    margin: '0 0 10px 0', 
                    fontSize: '22px',
                    color: 'rgba(3, 103, 174, 1)'
                  }}>
                    {item.name}
                  </h2>
                  <p style={{ margin: '5px 0', fontSize: '16px' }}>
                    <strong style={{ color: 'green' }}>Price:</strong> 
                    <span style={{ 
                      fontWeight: 'bold', 
                      marginLeft: '5px',
                      color: '#333'
                    }}>
                      ₦{item.formatted_price}
                    </span>
                  </p>
                  <p style={{ 
                    margin: '15px 0 0 0', 
                    color: '#666',
                    lineHeight: '1.6',
                    fontSize: '15px'
                  }}>
                    <strong style={{ color: 'green' }}>Description:</strong> {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-5">
            <p className="lead" style={{ fontSize: '18px', color: '#666' }}>
              No items found for "{query}"
            </p>
            <p style={{ color: '#888', marginTop: '10px' }}>
              Try searching with different keywords.
            </p>
          </div>
        )}
        
        <div className="text-center mt-4 pt-3" style={{ borderTop: '1px solid #e9ecef' }}>
          <Link 
            to="/" 
            className="btn" 
            style={{
              backgroundColor: 'rgba(3, 103, 174, 1)',
              color: 'white',
              padding: '10px 30px',
              textDecoration: 'none',
              display: 'inline-block',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'green'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(3, 103, 174, 1)'}
          >
            Back to Search
          </Link>
        </div>
      </div>
    </div>
  );
} 