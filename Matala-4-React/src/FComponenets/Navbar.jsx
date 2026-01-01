import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink 
        to="/" 
        end
        style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
      >
        Home
      </NavLink>

      <NavLink 
        to="/about" 
        style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
      >
        About
      </NavLink>

      <NavLink 
        to="/characters" 
        style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
      >
        Characters
      </NavLink>
    </nav>
  );
};

export default Navbar;