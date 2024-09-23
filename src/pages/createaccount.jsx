import React from 'react';

function CreateAccount() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold">Create Account</h1>
        {/* Add your form or content here */}
        <form className="space-y-6">
          {/* Add form fields for account creation */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="new-email">Email Address</label>
            <input
              type="email"
              id="new-email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="new-password">Password</label>
            <input
              type="password"
              id="new-password"
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md shadow-lg hover:bg-blue-700 transition-all duration-300">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
