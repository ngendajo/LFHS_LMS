import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import SchoolList from './SchoolList';
import SchoolDetails from './SchoolDetails';

const Dashboard = () => {
  return (
    <div className="dashboard" style={{ backgroundColor: 'var(--primary-snow)' }}>
      <Navigation />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3" style={{ backgroundColor: 'var(--secondary-light-blue)' }}>
            <SchoolList />
          </div>
          <div className="col-md-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<div>Select a school to view details</div>} />
        <Route path="school/:id" element={<SchoolDetails />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;