import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-600">404</h1>
        <h2 className="text-2xl mt-4 text-gray-700">Page Not Found</h2>
        <p className="mt-4 text-gray-500">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
