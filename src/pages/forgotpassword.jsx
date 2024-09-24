import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase'; // Make sure your firebase config is correct

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation regex
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailError(!isEmailValid);

    if (isEmailValid) {
      try {
        // Send password reset email
        await sendPasswordResetEmail(auth, email);
        setSuccessMessage('Password reset link sent! Please check your email.');
        setEmail(''); // Clear the email input
      } catch (error) {
        console.error('Error sending reset email:', error.message);
        alert('Error sending reset email: ' + error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold">Forgot Password</h1>
        {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="forgot-email">Email Address</label>
            <input
              type="email"
              id="forgot-email"
              placeholder="Enter your email"
              className={`w-full border rounded-md px-3 py-2 ${emailError ? 'border-red-500' : 'border-gray-300'}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <p className="text-red-500 text-xs mt-1">Please enter a valid email address.</p>}
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
