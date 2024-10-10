import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard'; 
import ArtisanDashboard from './components/ArtisanDashboard'; 
import BuyerDashboard from './components/BuyerDashboard'; 
import MarketingSpecialistDashboard from './components/MarketingSpecialistDashboard'; // Import the new Marketing Specialist Dashboard
import Login from './components/Login';
import NavBar from './components/NavBar';

function App() {
  const location = useLocation();

  return (
    <>
      {/* Conditionally render the NavBar only if the current route is not the login page */}
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/artisan" element={<ArtisanDashboard />} />
        <Route path="/buyer" element={<BuyerDashboard />} />
        <Route path="/marketing" element={<MarketingSpecialistDashboard />} /> {/* Updated to use MarketingSpecialistDashboard */}
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
