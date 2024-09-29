import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'var(--primary-dark-gray)', color: 'var(--primary-snow)' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: 'var(--primary-snow)' }}>
          <img src={require('../../images/convetion.jpeg')} alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2" />
          Dashboard
        </Link>
        <div className="ms-auto">
          <div className="dropdown">
            <div 
              className="d-flex align-items-center" 
              onMouseEnter={() => setShowProfileMenu(true)}
              onMouseLeave={() => setShowProfileMenu(false)}
            >
              <img src={require('../../images/convetion.jpeg')} alt="Profile" width="40" height="40" className="rounded-circle me-2" />
              <span>John Doe</span>
              {showProfileMenu && (
                <div className="dropdown-menu show" style={{ backgroundColor: 'var(--accent-light-orange)' }}>
                  <Link className="dropdown-item" to="/manage-app">Manage App</Link>
                  <Link className="dropdown-item" to="/logout">Logout</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;