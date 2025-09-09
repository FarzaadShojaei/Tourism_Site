import React from 'react';
import ImageWithFallback from '../components/ImageWithFallback';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Passionate traveler with 15+ years of experience in the tourism industry.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Expert in logistics and ensuring seamless travel experiences for our clients.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Travel Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Specializes in creating personalized itineraries and cultural experiences.'
    }
  ];

  const values = [
    {
      icon: '🌟',
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service, ensuring unforgettable experiences.'
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: 'Building lasting relationships with our clients through transparency and reliability.'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Promoting responsible tourism that benefits local communities and preserves the environment.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Embracing new technologies and ideas to enhance the travel planning experience.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="section-title">About Tourism Explorer</h1>
          <p className="hero-subtitle">
            Your trusted partner in creating extraordinary travel experiences around the world
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-2">
            <div className="story-content">
              <h2 className="section-title">Our Story</h2>
              <p className="mb-3">
                Founded in 2015, Tourism Explorer began as a small passion project by a group of 
                travel enthusiasts who believed that everyone deserves to experience the beauty 
                and diversity our world has to offer.
              </p>
              <p className="mb-3">
                What started as a simple idea to share hidden gems and local insights has grown 
                into a comprehensive platform that connects travelers with authentic experiences 
                across the globe.
              </p>
              <p>
                Today, we're proud to have helped over 50,000 travelers discover their perfect 
                destinations and create memories that last a lifetime.
              </p>
            </div>
            <div className="story-image">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                fallbackSrc="/images/placeholder-destination.svg"
                alt="Our story"
                style={{width: '100%', height: '400px', objectFit: 'cover', borderRadius: '12px'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-content">
            <p className="text-center" style={{fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8'}}>
              To make travel accessible, meaningful, and sustainable for everyone. We believe that 
              travel has the power to bridge cultures, create understanding, and foster personal growth. 
              Our mission is to provide the tools, resources, and support needed to turn travel dreams 
              into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="grid grid-2">
            {values.map((value, index) => (
              <div key={index} className="card feature-card">
                <div className="feature-icon">{value.icon}</div>
                <h3 className="feature-title">{value.title}</h3>
                <p className="feature-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Passionate professionals dedicated to making your travel dreams come true
          </p>
          <div className="grid grid-3">
            {teamMembers.map((member) => (
              <div key={member.id} className="card team-member-card">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="team-member-image"
                />
                <div className="team-member-content">
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>
                  <p className="team-member-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding stats-section">
        <div className="container">
          <h2 className="section-title" style={{color: 'white', marginBottom: '3rem'}}>
            Our Achievements
          </h2>
          <div className="grid grid-2">
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
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
