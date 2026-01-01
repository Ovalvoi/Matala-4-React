import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-content">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/" className="back-link">Go back Home</Link>
    </div>
  );
};

export default NotFound;
