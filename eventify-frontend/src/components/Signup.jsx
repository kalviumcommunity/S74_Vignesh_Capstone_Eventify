import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-cyan-600">
      <div className="px-8 py-8 w-full max-w-sm bg-white rounded-xl shadow-2xl">
        <h3 className="text-3xl font-bold text-center text-gray-800">Join Us Today! ✨</h3>
        <p className="mt-2 text-center text-gray-500">Create a new account</p>
        <form className="mt-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold" htmlFor="username">Username</label>
              <input 
                type="text" 
                placeholder="Choose a username"
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold" htmlFor="email">Email Address</label>
              <input 
                type="email" 
                placeholder="you@example.com"
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold" htmlFor="password">Password</label>
              <input 
                type="password" 
                placeholder="Create a password"
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold" htmlFor="confirm-password">Confirm Password</label>
              <input 
                type="password" 
                placeholder="Confirm your password"
                className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
          <div className="flex items-baseline justify-between mt-6">
            <button 
              type="submit" 
              className="w-full py-3 text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </button>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account? 
            <Link to="/login" className="text-blue-600 hover:text-blue-800 hover:underline ml-1">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;