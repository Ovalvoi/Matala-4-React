import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink 
        to="/" 
        end
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        Home
      </NavLink>

      <NavLink 
        to="/about" 
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        About
      </NavLink>

      <NavLink 
        to="/characters" 
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        Characters
      </NavLink>
    </nav>
  );
};

export default Navbar;