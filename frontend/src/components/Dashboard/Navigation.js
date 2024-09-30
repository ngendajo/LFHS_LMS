import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'var(--primary-dark-gray)', color: 'var(--primary-snow)' }}>
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ color: 'var(--primary-snow)' }}>
          <img src={require('../../images/convetion.jpeg')} alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2" />
          Dashboard
        </Link>
        <div className="ms-auto">
          <div 
            className="profile-container" 
            onMouseEnter={() => setShowProfileMenu(true)}
            onMouseLeave={() => setShowProfileMenu(false)}
            style={{ position: 'relative' }} 
          >
            <div className="d-flex align-items-center">
              <img src={require('../../images/convetion.jpeg')} alt="Profile" width="40" height="40" className="rounded-circle me-2" />
              <span>John Doe</span>
            </div>
            {showProfileMenu && (
              <div
                className="dropdown-menu show" 
                style={{ 
                  position: 'absolute',  // Absolute positioning
                  top: '100%',            // Position the dropdown below the profile
                  left: 0,                // Align it to the left
                  zIndex: 1000,           // Ensure it's above other elements
                  backgroundColor: 'var(--accent-light-orange)' 
                }}
              >
                <Link className="dropdown-item" to="/manage-app">Manage App</Link>
                <Link className="dropdown-item" to="/logout">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
