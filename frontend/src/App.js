import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DashboardRoutes from './components/Dashboard/superadmin/DashboardRoutes';
import AdminDashboard from './components/Dashboard/school/AdminDashboard';
// import About from './components/About';
// import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
        <Route path="/schooladmin/" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;