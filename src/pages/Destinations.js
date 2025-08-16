import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Destinations = ({ addToVisitList, visitList }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const destinations = [
    {
      id: 1,
      name: 'Paris, France',
      description: 'The City of Light with iconic landmarks like the Eiffel Tower, Louvre Museum, and charming cafes.',
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,299',
      rating: 4.8,
      category: 'europe',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral']
    },
    {
      id: 2,
      name: 'Tokyo, Japan',
      description: 'Modern metropolis blending traditional culture with cutting-edge technology and amazing cuisine.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,599',
      rating: 4.9,
      category: 'asia',
      highlights: ['Shibuya Crossing', 'Mount Fuji', 'Traditional Temples']
    },
    {
      id: 3,
      name: 'Bali, Indonesia',
      description: 'Tropical paradise with stunning beaches, ancient temples, and vibrant cultural experiences.',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$899',
      rating: 4.7,
      category: 'asia',
      highlights: ['Beautiful Beaches', 'Rice Terraces', 'Hindu Temples']
    },
    {
      id: 4,
      name: 'Santorini, Greece',
      description: 'Stunning Greek island with white-washed buildings, blue domes, and breathtaking sunsets.',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,199',
      rating: 4.6,
      category: 'europe',
      highlights: ['Sunset Views', 'White Buildings', 'Wine Tasting']
    },
    {
      id: 5,
      name: 'New York City, USA',
      description: 'The city that never sleeps, featuring iconic skylines, Broadway shows, and world-class dining.',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,399',
      rating: 4.5,
      category: 'america',
      highlights: ['Times Square', 'Central Park', 'Statue of Liberty']
    },
    {
      id: 6,
      name: 'Sydney, Australia',
      description: 'Harbor city with iconic opera house, beautiful beaches, and diverse cultural attractions.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,799',
      rating: 4.8,
      category: 'oceania',
      highlights: ['Opera House', 'Harbor Bridge', 'Bondi Beach']
    },
    {
      id: 7,
      name: 'Rome, Italy',
      description: 'Eternal city with ancient history, magnificent architecture, and incredible cuisine.',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,099',
      rating: 4.6,
      category: 'europe',
      highlights: ['Colosseum', 'Vatican City', 'Trevi Fountain']
    },
    {
      id: 8,
      name: 'Dubai, UAE',
      description: 'Modern marvel with luxury shopping, futuristic architecture, and desert adventures.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,699',
      rating: 4.5,
      category: 'asia',
      highlights: ['Burj Khalifa', 'Desert Safari', 'Luxury Shopping']
    },
    {
      id: 9,
      name: 'Iceland Highlands',
      description: 'Land of fire and ice with dramatic landscapes, Northern Lights, and natural wonders.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$1,899',
      rating: 4.9,
      category: 'europe',
      highlights: ['Northern Lights', 'Blue Lagoon', 'Waterfalls']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Destinations' },
    { id: 'europe', name: 'Europe' },
    { id: 'asia', name: 'Asia' },
    { id: 'america', name: 'America' },
    { id: 'oceania', name: 'Oceania' }
  ];

  const filteredDestinations = destinations.filter(destination => {
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const isInVisitList = (destinationId) => {
    return visitList.some(item => item.id === destinationId);
  };

  return (
    <div className="destinations-page">
      <section className="section-padding">
        <div className="container">
          <h1 className="section-title">Explore Destinations</h1>
          <p className="section-subtitle">
            Discover amazing places around the world and plan your next adventure
          </p>

          {/* Search and Filter */}
          <div className="search-filter-section">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="category-filter">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-2">
            {filteredDestinations.map((destination) => (
              <div key={destination.id} className="card destination-card">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="destination-image"
                />
                <div className="destination-content">
                  <h3 className="destination-title">{destination.name}</h3>
                  <p className="destination-description">{destination.description}</p>
                  
                  <div className="destination-highlights">
                    <h4>Highlights:</h4>
                    <ul>
                      {destination.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
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

          {filteredDestinations.length === 0 && (
            <div className="no-results">
              <h3>No destinations found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Destinations;
