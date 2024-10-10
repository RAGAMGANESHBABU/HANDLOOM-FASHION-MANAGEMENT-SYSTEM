import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/artisan">Artisan</Link></li>
        <li><Link to="/buyer">Buyer</Link></li>
        <li><Link to="/marketing">Marketing Specialist</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
