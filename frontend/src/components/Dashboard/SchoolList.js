import React from 'react';
import { Link } from 'react-router-dom';

const SchoolList = () => {
  const schools = [
    { id: 1, name: 'School A', logo: '/path-to-school-a-logo.png' },
    { id: 2, name: 'School B', logo: '/path-to-school-b-logo.png' },
    { id: 3, name: 'School C', logo: '/path-to-school-c-logo.png' },
    { id: 4, name: 'School C', logo: '/path-to-school-c-logo.png' },
    { id: 5, name: 'School C', logo: '/path-to-school-c-logo.png' },
  ];

  return (
    <div className="school-list">
      <h2 className="mb-4" style={{ color: 'var(--highlight-dark-green)' }}>Schools</h2>
      <ul className="list-group">
        {schools.map(school => (
          <li key={school.id} className="list-group-item border-0 mb-2" style={{ backgroundColor: 'var(--secondary-light-blue)' }}>
            <Link to={`/dashboard/school/${school.id}`} className="text-decoration-none">
              <div className="d-flex align-items-center">
                <img src={require('../../images/convetion.jpeg')} alt={`${school.name} logo`} width="50" height="50" className="me-3" />
                <span style={{ color: 'var(--primary-dark-gray)' }}>{school.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolList;