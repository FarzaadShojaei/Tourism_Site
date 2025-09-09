import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DestinationDetail.css';
import ImageWithFallback from '../components/ImageWithFallback';

const DestinationDetail = ({ addToVisitList, visitList }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [selectedDate, setSelectedDate] = useState('');
  const [numberOfTravelers, setNumberOfTravelers] = useState(2);
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Extended destination data with detailed information
  const destinations = {
    1: {
      id: 1,
      name: 'Paris, France',
      shortDescription: 'The City of Light awaits with its iconic landmarks, world-class museums, and romantic atmosphere.',
      longDescription: 'Paris, the capital of France, is globally renowned for its art, fashion, gastronomy, and culture. The city of light has been a beacon of romance and sophistication for centuries. From the iconic Eiffel Tower to the world-famous Louvre Museum, Paris offers an unparalleled blend of history, culture, and modern luxury.',
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1522582324369-2ddd63a7df4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.8,
      reviews: 2847,
      category: 'europe',
      country: 'France',
      duration: '5-7 days',
      bestTime: 'April to October',
      highlights: [
        'Eiffel Tower',
        'Louvre Museum',
        'Notre-Dame Cathedral',
        'Champs-Élysées',
        'Arc de Triomphe',
        'Montmartre District'
      ],
      packages: {
        basic: {
          name: 'Essential Paris',
          price: 1299,
          duration: '5 days',
          includes: ['Hotel accommodation', 'Daily breakfast', 'Airport transfers', 'City tour guide']
        },
        standard: {
          name: 'Classic Paris Experience',
          price: 1899,
          duration: '7 days',
          includes: ['4-star hotel', 'Daily breakfast', 'Airport transfers', 'Museum passes', 'Seine river cruise', 'Professional guide']
        },
        premium: {
          name: 'Luxury Paris Getaway',
          price: 2799,
          duration: '7 days',
          includes: ['5-star hotel', 'All meals', 'Private transfers', 'VIP museum access', 'Champagne cruise', 'Personal concierge']
        }
      },
      itinerary: [
        {
          day: 1,
          title: 'Arrival & City Introduction',
          activities: ['Airport pickup', 'Hotel check-in', 'Welcome dinner', 'Evening Seine walk']
        },
        {
          day: 2,
          title: 'Classic Paris Icons',
          activities: ['Eiffel Tower visit', 'Trocadéro photo session', 'Lunch at local bistro', 'Arc de Triomphe', 'Champs-Élysées shopping']
        },
        {
          day: 3,
          title: 'Art & Culture Day',
          activities: ['Louvre Museum tour', 'Mona Lisa viewing', 'Lunch in Tuileries Garden', 'Orsay Museum visit', 'Latin Quarter exploration']
        },
        {
          day: 4,
          title: 'Montmartre & Sacred Heart',
          activities: ['Sacré-Cœur Basilica', 'Artists\' square', 'Traditional French lunch', 'Moulin Rouge area', 'Sunset from Montmartre']
        }
      ],
      facts: [
        'Paris receives over 30 million visitors annually',
        'The city has over 130 museums and monuments',
        'French cuisine is UNESCO World Heritage',
        'Paris Metro has 14 lines and 302 stations'
      ]
    },
    2: {
      id: 2,
      name: 'Tokyo, Japan',
      shortDescription: 'Experience the perfect blend of traditional culture and cutting-edge technology in Japan\'s capital.',
      longDescription: 'Tokyo, Japan\'s bustling capital, mixes ultramodern and traditional, from neon-lit skyscrapers to historic temples. The city offers an incredible journey through time, where ancient traditions coexist with futuristic innovations. From world-class cuisine to cutting-edge technology, Tokyo provides an unforgettable cultural immersion.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.9,
      reviews: 3256,
      category: 'asia',
      country: 'Japan',
      duration: '7-10 days',
      bestTime: 'March to May, September to November',
      highlights: [
        'Shibuya Crossing',
        'Tokyo Skytree',
        'Senso-ji Temple',
        'Tsukiji Fish Market',
        'Mount Fuji Day Trip',
        'Traditional Ryokan Experience'
      ],
      packages: {
        basic: {
          name: 'Tokyo Essentials',
          price: 1599,
          duration: '7 days',
          includes: ['Hotel accommodation', 'JR Pass', 'Airport transfers', 'Cultural guide']
        },
        standard: {
          name: 'Complete Tokyo Adventure',
          price: 2299,
          duration: '10 days',
          includes: ['Premium hotel', 'All transportation', 'Traditional meals', 'Mount Fuji tour', 'Cultural experiences']
        },
        premium: {
          name: 'Luxury Japan Experience',
          price: 3599,
          duration: '10 days',
          includes: ['Luxury accommodation', 'Private guide', 'Michelin dining', 'Ryokan stay', 'Exclusive experiences']
        }
      },
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Modern Tokyo',
          activities: ['Airport arrival', 'Hotel check-in', 'Shibuya Crossing', 'Tokyo Skytree visit']
        },
        {
          day: 2,
          title: 'Traditional Culture',
          activities: ['Senso-ji Temple', 'Traditional breakfast', 'Imperial Palace', 'Tea ceremony experience']
        },
        {
          day: 3,
          title: 'Culinary Adventure',
          activities: ['Tsukiji Fish Market', 'Sushi making class', 'Ramen tasting tour', 'Izakaya experience']
        }
      ],
      facts: [
        'Tokyo is the most populous metropolitan area in the world',
        'The city has more Michelin stars than any other city',
        'Tokyo Station is the busiest train station globally',
        'The city hosted the 2020 Olympics'
      ]
    },
    3: {
      id: 3,
      name: 'Bali, Indonesia',
      shortDescription: 'Tropical paradise with stunning beaches, ancient temples, and vibrant cultural experiences.',
      longDescription: 'Bali, Indonesia\'s most famous island, is known for its volcanic mountains, iconic rice paddies, beaches, and coral reefs. The island\'s rich culture, evident in traditional dance, music, and ceremonies, creates a mystical atmosphere that captivates every visitor. From spiritual temples to world-class surf breaks, Bali offers the perfect blend of adventure and relaxation.',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1555400901-759b51674200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      rating: 4.7,
      reviews: 1923,
      category: 'asia',
      country: 'Indonesia',
      duration: '7-14 days',
      bestTime: 'April to October',
      highlights: [
        'Ubud Rice Terraces',
        'Tanah Lot Temple',
        'Seminyak Beach',
        'Mount Batur Sunrise',
        'Traditional Spa Treatments',
        'Balinese Cooking Classes'
      ],
      packages: {
        basic: {
          name: 'Bali Beach Escape',
          price: 899,
          duration: '7 days',
          includes: ['Beach resort', 'Daily breakfast', 'Airport transfers', 'Temple tours']
        },
        standard: {
          name: 'Cultural Bali Journey',
          price: 1399,
          duration: '10 days',
          includes: ['Boutique hotels', 'Half board', 'Cultural tours', 'Spa treatments', 'Cooking classes']
        },
        premium: {
          name: 'Luxury Bali Retreat',
          price: 2199,
          duration: '14 days',
          includes: ['5-star resorts', 'All inclusive', 'Private villa', 'Personal butler', 'Helicopter tours']
        }
      },
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Beach Relaxation',
          activities: ['Airport pickup', 'Resort check-in', 'Beach time', 'Welcome dinner']
        },
        {
          day: 2,
          title: 'Cultural Ubud',
          activities: ['Drive to Ubud', 'Rice terrace visit', 'Traditional lunch', 'Monkey Forest', 'Art market shopping']
        },
        {
          day: 3,
          title: 'Spiritual Journey',
          activities: ['Temple hopping', 'Tanah Lot sunset', 'Traditional ceremony', 'Balinese dinner']
        }
      ],
      facts: [
        'Bali has over 20,000 temples',
        'The island celebrates Nyepi (Day of Silence) annually',
        'Rice terraces are over 1,000 years old',
        'Bali is known as the "Island of the Gods"'
      ]
    }
  };

  const destination = destinations[id];

  if (!destination) {
    return (
      <div className="destination-not-found">
        <div className="container">
          <h1>Destination Not Found</h1>
          <p>The destination you're looking for doesn't exist.</p>
          <button className="btn" onClick={() => navigate('/destinations')}>
            Back to Destinations
          </button>
        </div>
      </div>
    );
  }

  const isInVisitList = visitList.some(item => item.id === destination.id);
  const selectedPackageData = destination.packages[selectedPackage];

  const handleBookNow = () => {
    setShowBookingForm(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert(`Booking request submitted for ${destination.name}!\nPackage: ${selectedPackageData.name}\nDate: ${selectedDate}\nTravelers: ${numberOfTravelers}`);
    setShowBookingForm(false);
  };

  return (
    <div className="destination-detail">
      {/* Hero Section */}
      <section className="destination-hero" style={{
        backgroundImage: `linear-gradient(135deg, rgba(102, 126, 234, 0.7), rgba(118, 75, 162, 0.7)), url(${destination.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <button className="back-btn" onClick={() => navigate('/destinations')}>
                ← Back to Destinations
              </button>
              <h1 className="destination-title">{destination.name}</h1>
              <div className="destination-meta">
                <span className="rating">⭐ {destination.rating} ({destination.reviews} reviews)</span>
                <span className="duration">📅 {destination.duration}</span>
                <span className="country">📍 {destination.country}</span>
              </div>
              <p className="destination-description">{destination.shortDescription}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="destination-content">
          {/* Action Buttons */}
          <section className="action-section">
            <div className="action-buttons">
              <button 
                className={`btn ${isInVisitList ? 'added-to-visit' : ''}`}
                onClick={() => addToVisitList(destination)}
                disabled={isInVisitList}
              >
                {isInVisitList ? '✓ Added to Wishlist' : '❤️ Add to Wishlist'}
              </button>
              <button className="btn btn-secondary" onClick={handleBookNow}>
                📅 Book Now
              </button>
              <button className="btn btn-outline">
                📤 Share Destination
              </button>
              <button className="btn btn-outline">
                📞 Contact Expert
              </button>
            </div>
          </section>

          <div className="content-grid">
            {/* Left Column */}
            <div className="main-content">
              {/* About Section */}
              <section className="about-destination">
                <h2>About {destination.name}</h2>
                <p>{destination.longDescription}</p>
                
                <div className="quick-facts">
                  <h3>Quick Facts</h3>
                  <ul>
                    {destination.facts.map((fact, index) => (
                      <li key={index}>{fact}</li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Gallery */}
              <section className="gallery-section">
                <h2>Photo Gallery</h2>
                <div className="photo-gallery">
                  {destination.gallery.map((image, index) => (
                    <ImageWithFallback 
                      key={index} 
                      src={image} 
                      fallbackSrc="/images/placeholder-destination.svg"
                      alt={`${destination.name} ${index + 1}`} 
                    />
                  ))}
                </div>
              </section>

              {/* Highlights */}
              <section className="highlights-section">
                <h2>Must-See Highlights</h2>
                <div className="highlights-grid">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="highlight-card">
                      <span className="highlight-icon">📍</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Itinerary */}
              <section className="itinerary-section">
                <h2>Sample Itinerary</h2>
                <div className="itinerary-list">
                  {destination.itinerary.map((day, index) => (
                    <div key={index} className="itinerary-day">
                      <div className="day-number">Day {day.day}</div>
                      <div className="day-content">
                        <h3>{day.title}</h3>
                        <ul>
                          {day.activities.map((activity, idx) => (
                            <li key={idx}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Sidebar */}
            <div className="sidebar">
              {/* Package Selection */}
              <div className="card booking-card">
                <h3>Travel Packages</h3>
                <div className="package-selector">
                  {Object.entries(destination.packages).map(([key, pkg]) => (
                    <label key={key} className="package-option">
                      <input
                        type="radio"
                        name="package"
                        value={key}
                        checked={selectedPackage === key}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                      />
                      <div className="package-details">
                        <h4>{pkg.name}</h4>
                        <p className="package-price">${pkg.price}</p>
                        <p className="package-duration">{pkg.duration}</p>
                        <ul className="package-includes">
                          {pkg.includes.map((item, index) => (
                            <li key={index}>✓ {item}</li>
                          ))}
                        </ul>
                      </div>
                    </label>
                  ))}
                </div>
                
                <div className="booking-summary">
                  <h4>Selected Package</h4>
                  <p><strong>{selectedPackageData.name}</strong></p>
                  <p className="price">${selectedPackageData.price} per person</p>
                  <button className="btn booking-btn" onClick={handleBookNow}>
                    Book This Package
                  </button>
                </div>
              </div>

              {/* Travel Info */}
              <div className="card travel-info">
                <h3>Travel Information</h3>
                <div className="info-item">
                  <span className="info-label">Best Time to Visit:</span>
                  <span>{destination.bestTime}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Recommended Duration:</span>
                  <span>{destination.duration}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Category:</span>
                  <span className="capitalize">{destination.category}</span>
                </div>
              </div>

              {/* Contact Expert */}
              <div className="card expert-card">
                <h3>Need Help Planning?</h3>
                <p>Our travel experts are here to help you create the perfect itinerary.</p>
                <button className="btn btn-outline">
                  📞 Call Expert
                </button>
                <button className="btn btn-outline">
                  💬 Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingForm && (
        <div className="modal-overlay" onClick={() => setShowBookingForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Book Your Trip to {destination.name}</h2>
              <button 
                className="close-modal" 
                onClick={() => setShowBookingForm(false)}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleBookingSubmit}>
              <div className="form-group">
                <label>Selected Package</label>
                <input 
                  type="text" 
                  value={selectedPackageData.name} 
                  disabled 
                />
              </div>
              <div className="form-group">
                <label>Departure Date</label>
                <input 
                  type="date" 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required 
                />
              </div>
              <div className="form-group">
                <label>Number of Travelers</label>
                <select 
                  value={numberOfTravelers}
                  onChange={(e) => setNumberOfTravelers(e.target.value)}
                >
                  {[1,2,3,4,5,6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                  ))}
                </select>
              </div>
              <div className="total-price">
                <strong>Total: ${selectedPackageData.price * numberOfTravelers}</strong>
              </div>
              <div className="modal-actions">
                <button type="submit" className="btn">
                  Submit Booking Request
                </button>
                <button 
                  type="button" 
                  className="btn btn-outline"
                  onClick={() => setShowBookingForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationDetail;
