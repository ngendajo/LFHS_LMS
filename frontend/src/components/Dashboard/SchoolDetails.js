import React from 'react';
import { useParams } from 'react-router-dom';

const SchoolDetails = () => {
  const { id } = useParams();
  
  // This is mock data. In a real application, you would fetch this data based on the id.
  const schoolInfo = {
    id: id,
    name: `School ${id}`,
    address: '123 Education St, City, Country',
    phoneNumber: '+1 234 567 8900',
    email: `school${id}@example.com`,
    principalName: 'Jane Smith',
    studentCount: 500,
    teacherCount: 50,
    foundedYear: 1990,
  };

  return (
    <div className="school-details p-4" style={{ backgroundColor: 'var(--primary-snow)', color: 'var(--primary-dark-gray)' }}>
      <h2 className="mb-4" style={{ color: 'var(--highlight-dark-green)' }}>{schoolInfo.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <p><strong>Address:</strong> {schoolInfo.address}</p>
          <p><strong>Phone:</strong> {schoolInfo.phoneNumber}</p>
          <p><strong>Email:</strong> {schoolInfo.email}</p>
        </div>
        <div className="col-md-6">
          <p><strong>Principal:</strong> {schoolInfo.principalName}</p>
          <p><strong>Student Count:</strong> {schoolInfo.studentCount}</p>
          <p><strong>Teacher Count:</strong> {schoolInfo.teacherCount}</p>
          <p><strong>Founded:</strong> {schoolInfo.foundedYear}</p>
        </div>
      </div>
    </div>
  );
};

export default SchoolDetails;