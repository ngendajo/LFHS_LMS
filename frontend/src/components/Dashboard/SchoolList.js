import React from 'react';
import { Link } from 'react-router-dom';

const SchoolList = () => {
  const schools = [
    { id: 1, name: 'School A', logo: '/api/placeholder/50/50' },
    { id: 2, name: 'School B', logo: '/api/placeholder/50/50' },
    { id: 3, name: 'School C', logo: '/api/placeholder/50/50' },
    { id: 4, name: 'School D', logo: '/api/placeholder/50/50' },
    { id: 5, name: 'School E', logo: '/api/placeholder/50/50' },
  ];

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-12">
          <div className="card shadow rounded-lg">
            <div className="card-body">
              <h2 className="card-title text-primary mb-4">Schools</h2>
              <ul className="list-group list-group-flush">
                {schools.map(school => (
                  <li key={school.id} className="list-group-item border-0 mb-3 rounded-lg hover-effect">
                    <Link to={`/dashboard/school/${school.id}`} className="text-decoration-none">
                      <div className="d-flex align-items-center">
                        <img 
                          src={require('../../images/convetion.jpeg')} 
                          alt={`${school.name} logo`} 
                          className="rounded-circle me-3" 
                          style={{width: '50px', height: '50px', objectFit: 'cover'}} 
                        />
                        <span className="h5 mb-0 text-dark">{school.name}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .rounded-lg {
          border-radius: 15px !important;
        }
        .shadow {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
        .hover-effect {
          transition: all 0.3s ease-in-out;
          background-color: var(--primary-snow);
        }
        .hover-effect:hover {
          transform: translateY(-3px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
          background-color: var(--secondary-light-blue);
        }
        .text-primary {
          color: var(--highlight-dark-green) !important;
        }
      `}</style>
    </div>
  );
};

export default SchoolList;