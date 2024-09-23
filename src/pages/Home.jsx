import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 via-gray-200 to-beige-300 flex flex-col justify-center items-center text-gray-800">
      <h1 className="text-5xl font-bold mb-12 animate-fade-in">Welcome to the Portal</h1>

      <div className="flex flex-col space-y-6 w-80">
        {/* Button 1 */}
        <button
          onClick={() => navigate('/form1')}
          className="bg-white text-gray-800 font-semibold py-4 rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          Freedom Fighters
        </button>

        {/* Button 2 */}
        <button
          onClick={() => navigate('/form2')}
          className="bg-white text-gray-800 font-semibold py-4 rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          Gallantry Awardee
        </button>

        {/* Button 3 */}
        <button
          onClick={() => navigate('/form3')}
          className="bg-white text-gray-800 font-semibold py-4 rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          Widow women
        </button>
      </div>
    </div>
  );
};

export default Home;
