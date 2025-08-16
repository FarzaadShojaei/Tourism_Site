import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ addToVisitList, visitList }) => {
  const featuredDestinations = [
    {
      id: 1,
      name: 'Paris, France',
      description: 'The City of Light awaits with its iconic landmarks, world-class museums, and romantic atmosphere.',
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,299',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Tokyo, Japan',
      description: 'Experience the perfect blend of traditional culture and cutting-edge technology in Japan\'s capital.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,599',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Bali, Indonesia',
      description: 'Tropical paradise with stunning beaches, ancient temples, and vibrant cultural experiences.',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$899',
      rating: 4.7
    }
  ];

  const isInVisitList = (destinationId) => {
    return visitList.some(item => item.id === destinationId);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Discover Your Next Adventure</h1>
          <p className="hero-subtitle">
            Explore breathtaking destinations around the world and create unforgettable memories
          </p>
          <div className="hero-actions">
            <Link to="/destinations" className="btn">
              Explore Destinations
            </Link>
            <Link to="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Featured Destinations</h2>
          <p className="section-subtitle">
            Handpicked destinations that offer extraordinary experiences
          </p>
          
          <div className="grid grid-3">
            {featuredDestinations.map((destination) => (
              <div key={destination.id} className="card destination-card">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="destination-image"
                />
                <div className="destination-content">
                  <h3 className="destination-title">{destination.name}</h3>
                  <p className="destination-description">{destination.description}</p>
                  <div className="destination-meta">
                    <span className="destination-price">{destination.price}</span>
                    <span className="destination-rating">⭐ {destination.rating}</span>
                  </div>
                  <div className="destination-actions">
                    <Link 
                      to={`/destination/${destination.id}`}
                      className="btn btn-outline view-details-btn"
                    >
                      👁️ View Details
                    </Link>
                    <button 
                      className={`btn add-to-visit-btn ${isInVisitList(destination.id) ? 'added-to-visit' : ''}`}
                      onClick={() => addToVisitList(destination)}
                      disabled={isInVisitList(destination.id)}
                    >
                      {isInVisitList(destination.id) ? '✓ Added to Visit List' : '+ Add to Visit List'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Tourism Explorer?</h2>
          <div className="grid grid-3">
            <div className="card feature-card">
              <div className="feature-icon">🌍</div>
              <h3 className="feature-title">Global Destinations</h3>
              <p className="feature-description">
                Access to over 500+ destinations worldwide with detailed guides and insider tips.
              </p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">💰</div>
              <h3 className="feature-title">Best Prices</h3>
              <p className="feature-description">
                Competitive pricing with exclusive deals and discounts for our community members.
              </p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">🏆</div>
              <h3 className="feature-title">Expert Guides</h3>
              <p className="feature-description">
                Professional tour guides with local expertise to enhance your travel experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding stats-section">
        <div className="container">
          <div className="grid grid-3">
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Happy Travelers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Destinations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
