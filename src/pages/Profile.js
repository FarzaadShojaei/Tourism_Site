import React, { useState } from 'react';

const Profile = ({ user, setUser, visitList, removeFromVisitList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name || '',
    email: user.email || '',
    phone: user.phone || '',
    bio: user.bio || '',
    preferences: user.preferences || []
  });

  const [newPreference, setNewPreference] = useState('');

  const travelPreferences = [
    'Adventure', 'Beach', 'City Break', 'Cultural', 'Food & Wine', 
    'Historical', 'Nature', 'Photography', 'Relaxation', 'Shopping'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePreferenceToggle = (preference) => {
    setFormData(prev => ({
      ...prev,
      preferences: prev.preferences.includes(preference)
        ? prev.preferences.filter(p => p !== preference)
        : [...prev.preferences, preference]
    }));
  };

  const addCustomPreference = () => {
    if (newPreference.trim() && !formData.preferences.includes(newPreference.trim())) {
      setFormData(prev => ({
        ...prev,
        preferences: [...prev.preferences, newPreference.trim()]
      }));
      setNewPreference('');
    }
  };

  const removePreference = (preference) => {
    setFormData(prev => ({
      ...prev,
      preferences: prev.preferences.filter(p => p !== preference)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user.name || '',
      email: user.email || '',
      phone: user.phone || '',
      bio: user.bio || '',
      preferences: user.preferences || []
    });
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <section className="section-padding">
        <div className="container">
          <h1 className="section-title">My Profile</h1>
          
          <div className="grid grid-2">
            {/* Profile Information */}
            <div className="profile-section">
              <div className="card form-container">
                <div className="profile-header">
                  <h2>Personal Information</h2>
                  {!isEditing && (
                    <button 
                      className="btn btn-outline"
                      onClick={() => setIsEditing(true)}
                    >
                      Edit Profile
                    </button>
                  )}
                </div>

                {isEditing ? (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="bio">Bio</label>
                      <textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows="4"
                        placeholder="Tell us about yourself and your travel interests..."
                      />
                    </div>

                    <div className="form-actions">
                      <button type="submit" className="btn">
                        Save Changes
                      </button>
                      <button 
                        type="button" 
                        className="btn btn-outline"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="profile-display">
                    <div className="profile-field">
                      <label>Name:</label>
                      <span>{user.name || 'Not provided'}</span>
                    </div>
                    <div className="profile-field">
                      <label>Email:</label>
                      <span>{user.email || 'Not provided'}</span>
                    </div>
                    <div className="profile-field">
                      <label>Phone:</label>
                      <span>{user.phone || 'Not provided'}</span>
                    </div>
                    <div className="profile-field">
                      <label>Bio:</label>
                      <span>{user.bio || 'No bio provided'}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Travel Preferences */}
              <div className="card form-container">
                <h3>Travel Preferences</h3>
                <div className="preferences-section">
                  <div className="preferences-grid">
                    {travelPreferences.map(preference => (
                      <button
                        key={preference}
                        type="button"
                        className={`preference-tag ${formData.preferences.includes(preference) ? 'selected' : ''}`}
                        onClick={() => handlePreferenceToggle(preference)}
                        disabled={!isEditing}
                      >
                        {preference}
                      </button>
                    ))}
                  </div>

                  {isEditing && (
                    <div className="custom-preference">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Add custom preference"
                          value={newPreference}
                          onChange={(e) => setNewPreference(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && addCustomPreference()}
                        />
                        <button 
                          type="button" 
                          className="btn"
                          onClick={addCustomPreference}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  )}

                  {formData.preferences.length > 0 && (
                    <div className="selected-preferences">
                      <h4>Your Preferences:</h4>
                      <div className="preferences-list">
                        {formData.preferences.map(preference => (
                          <span 
                            key={preference} 
                            className="selected-preference-tag"
                          >
                            {preference}
                            {isEditing && (
                              <button 
                                onClick={() => removePreference(preference)}
                                className="remove-preference"
                              >
                                ×
                              </button>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Visit List */}
            <div className="visit-list-section">
              <div className="card form-container">
                <h3>My Visit List ({visitList.length})</h3>
                {visitList.length === 0 ? (
                  <div className="empty-state">
                    <p>You haven't added any destinations to your visit list yet.</p>
                    <a href="/destinations" className="btn">
                      Explore Destinations
                    </a>
                  </div>
                ) : (
                  <div className="visit-list">
                    {visitList.map(destination => (
                      <div key={destination.id} className="visit-list-item">
                        <div className="visit-list-info">
                          <h4>{destination.name}</h4>
                          <p>{destination.price}</p>
                        </div>
                        <button 
                          className="remove-btn"
                          onClick={() => removeFromVisitList(destination.id)}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Travel Stats */}
              <div className="card form-container">
                <h3>Travel Stats</h3>
                <div className="travel-stats">
                  <div className="stat-item">
                    <span className="stat-number">{visitList.length}</span>
                    <span className="stat-label">Destinations in Wishlist</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">{formData.preferences.length}</span>
                    <span className="stat-label">Travel Preferences</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">0</span>
                    <span className="stat-label">Countries Visited</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
