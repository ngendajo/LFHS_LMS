import React from 'react';
import { useParams } from 'react-router-dom';

const SchoolDetails = () => {
  const { id } = useParams();

  // Mock data - in a real application, you would fetch this based on the id
  const schoolInfo = {
    id: id,
    name: `School ${id}`,
    logo: '/api/placeholder/50/50', // placeholder image
    adminEmail: `admin${id}@school.com`,
    description: 'This school provides quality education and fosters a nurturing environment for students to grow and learn.',
    administrators: ['John Doe', 'Jane Smith', 'Bob Johnson'],
    applications: [
      { name: 'E-learning', color: '#4CAF50' },
      { name: 'Attendance', color: '#2196F3' },
      { name: 'Library', color: '#FFC107' }
    ]
  };

  return (
    <div className="container mt-4">
      <div className="row align-items-center mb-4 bg-light p-3 rounded-lg shadow-sm">
        <div className="col-auto">
          <img src={require('../../../images/convetion.jpeg')} alt="School Logo" className="img-fluid rounded-circle" style={{width: '60px', height: '60px', objectFit: 'cover'}} />
        </div>
        <div className="col">
          <h2 className="mb-0 text-primary">{schoolInfo.name}</h2>
          <small className="text-muted">{schoolInfo.adminEmail}</small>
        </div>
        <div className="col-auto ml-auto">
          <button className="btn btn-primary rounded-pill px-4">Create Admin</button>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow rounded-lg mb-4">
            <div className="card-body">
              <h3 className="card-title text-primary">About</h3>
              <p className="card-text">{schoolInfo.description}</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card shadow rounded-lg">
            <div className="card-body">
              <h3 className="card-title text-primary mb-4">School Information</h3>
              <div className="row">
                <div className="col-md-6">
                  <h4 className="h5 text-secondary">Administrators</h4>
                  <ul className="list-group list-group-flush rounded-lg overflow-hidden">
                    {schoolInfo.administrators.map((admin, index) => (
                      <li key={index} className="list-group-item bg-light">👤 {admin}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4 className="h5 text-secondary mb-3">Applications</h4>
                  <div className="row g-2">
                    {schoolInfo.applications.map((app, index) => (
                      <div key={index} className="col-12 mb-2">
                        <div className="card text-white rounded-lg" style={{backgroundColor: app.color}}>
                          <div className="card-body py-2 px-3">
                            <h5 className="card-title mb-0">{app.name}</h5>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .rounded-lg {
          border-radius: 10px !important;
        }
        .shadow {
          box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1) !important;
        }
        .card {
          transition: all 0.3s ease-in-out;
        }
        .card:hover {
          transform: translateY(-3px);
          box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </div>
  );
};

export default SchoolDetails;