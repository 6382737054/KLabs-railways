import React from 'react';

function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold">Forgot Password</h1>
        <form className="space-y-6">
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="forgot-email">Email Address</label>
            <input
              type="email"
              id="forgot-email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md shadow-lg hover:bg-blue-700 transition-all duration-300">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
