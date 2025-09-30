import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wide">
        EVENTIFY 
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-lg font-medium">
        <li>
          <Link
            to="/"
            className="transition-colors duration-300 hover:text-yellow-400"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="transition-colors duration-300 hover:text-yellow-400"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className="transition-colors duration-300 hover:text-yellow-400"
          >
            Sign Up
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="focus:outline-none">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;