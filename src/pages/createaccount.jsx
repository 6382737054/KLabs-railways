import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Importing auth from firebase.js
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    setLoading(true); // Show loading indicator during API request

    if (password !== confirmPassword) {
      setError("Passwords don't match"); // Display error if passwords do not match
      setLoading(false);
      return;
    }

    try {
      // Create a new user with the provided email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created successfully:', userCredential.user);
      
      // Redirect the user to the home page or any other page after successful account creation
      navigate('/home');
    } catch (error) {
      // Handle errors (e.g., invalid email format, weak password, etc.)
      console.error('Error creating account:', error.message);
      setError(error.message);
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold">Create Account</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Display error message if any */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="new-email">Email Address</label>
            <input
              type="email"
              id="new-email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on input change
              required
            />
          </div>
          
          {/* Password Input */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="new-password">Password</label>
            <input
              type="password"
              id="new-password"
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state on input change
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmPassword state on input change
              required
            />
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-md shadow-lg hover:bg-blue-700 transition-all duration-300 ${loading ? 'opacity-50' : ''}`}
            disabled={loading} // Disable button when loading
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
