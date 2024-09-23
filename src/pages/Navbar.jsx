import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or token here
    console.log("User logged out");
    navigate('/'); // Navigate back to login page
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          <Link to="/" className="hover:text-gray-200">MyApp</Link>
        </div>

        {/* Dummy Links */}
        <div className="flex space-x-4">
          <Link to="#" className="text-gray-400 hover:text-gray-200 font-medium">Home</Link>
          <Link to="#" className="text-gray-400 hover:text-gray-200 font-medium">Form 1</Link>
          <Link to="#" className="text-gray-400 hover:text-gray-200 font-medium">Form 2</Link>
          <Link to="#" className="text-gray-400 hover:text-gray-200 font-medium">Form 3</Link>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
