import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// Importing Firebase v9+ methods
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../firebase'; // Make sure your firebase config is correct

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation regex
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 6;

    setEmailError(!isEmailValid);
    setPasswordError(!isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      try {
        // Sign in using Firebase Authentication
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Login successful:', userCredential.user);

        // Navigate to home page after successful login
        navigate('/home');
      } catch (error) {
        console.error('Login error:', error.message);
        alert('Login failed: ' + error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <img
            src="/Images/irlogo.png" // Update this path to your logo
            alt="Government Logo"
            className="mx-auto h-16 mb-4"
          />
          <h1 className="text-2xl font-semibold text-gray-800">Government Portal</h1>
          <p className="text-gray-500 text-sm">Secure access for authorized users</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email Address</label>
            <div className={`flex items-center border rounded-md px-3 py-2 ${emailError ? 'border-red-500' : 'border-gray-300'}`}>
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full outline-none bg-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {emailError && <p className="text-red-500 text-xs mt-1">Please enter a valid email address.</p>}
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="password">Password</label>
            <div className={`flex items-center border rounded-md px-3 py-2 ${passwordError ? 'border-red-500' : 'border-gray-300'}`}>
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full outline-none bg-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {passwordError && <p className="text-red-500 text-xs mt-1">Password must be at least 6 characters.</p>}
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Forgot Password and Create Account Links */}
        <div className="flex justify-between items-center mt-6 text-sm">
          <button
            onClick={() => navigate('/forgot-password')}
            className="text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>
          <button
            onClick={() => navigate('/create-account')}
            className="text-blue-600 hover:underline"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
