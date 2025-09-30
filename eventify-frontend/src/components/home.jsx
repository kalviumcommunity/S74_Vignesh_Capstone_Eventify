import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle, Search, Calendar, Handshake, DollarSign } from 'lucide-react';

// Helper component for clean feature display
const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.02] transform border border-gray-100">
    <div className={`p-3 w-12 h-12 rounded-full ${color} text-white mb-4 flex items-center justify-center`}>
      <Icon size={24} strokeWidth={2.5} />
    </div>
    <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="bg-blue-900 text-white pt-24 pb-32 md:pb-48 relative overflow-hidden">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="bg-gradient-to-br from-indigo-700 to-blue-900 w-full h-full transform rotate-45 scale-150"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            <span className="block text-yellow-400">EVENTIFY</span>
            The Elegant Event Management Platform 🎉
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10 text-blue-100">
            Find vendors. Get quotes. Plan seamlessly. Connect with top-rated professionals for your next unforgettable event.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/signup"
              className="px-8 py-4 bg-yellow-400 text-blue-900 text-lg font-bold rounded-full shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
            >
              Get Started for Free
            </Link>
            <Link
              to="/how-it-works"
              className="px-8 py-4 border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white hover:text-blue-900 transition duration-300 transform hover:scale-105"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Core Features / Vendor Categories Section */}
      <section className="py-20 -mt-20 relative z-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Simplify Your Planning Journey
          </h2>
          <p className="text-xl text-center text-gray-500 mb-16 max-w-3xl mx-auto">
            Eventify connects you directly with the verified vendors you need, eliminating guesswork and speeding up your timeline.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FeatureCard
              icon={Calendar}
              title="Create Event Request"
              description="Define your event details, date, budget, and required services in minutes."
              color="bg-red-500"
            />
            <FeatureCard
              icon={Search}
              title="Explore Vendors"
              description="Browse verified profiles for catering, venues, photography, and more."
              color="bg-green-500"
            />
            <FeatureCard
              icon={DollarSign}
              title="Get Competitive Quotes"
              description="Receive multiple price quotes and proposals directly from interested vendors."
              color="bg-yellow-500"
            />
            <FeatureCard
              icon={Handshake}
              title="Book & Confirm Securely"
              description="Compare, negotiate, and finalize your bookings with peace of mind."
              color="bg-blue-500"
            />
          </div>
        </div>
      </section>

      {/* 3. Vendor Callout Section (How It Works Summary) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <img 
              src="https://placehold.co/600x400/1e40af/ffffff?text=Vendor+Dashboard" 
              alt="Vendor Dashboard Mockup" 
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="lg:order-1">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              For Vendors: Grow Your Business
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Stop chasing leads. Eventify delivers targeted event requests directly to your Vendor Dashboard.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-teal-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-gray-700">Receive specific event requests based on your services and availability.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-teal-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-gray-700">Submit competitive, detailed quotations and manage negotiations easily.</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-teal-500 mr-3 mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-gray-700">Build credibility with verified profiles, user reviews, and ratings.</p>
              </li>
            </ul>
            <div className="mt-8">
                <Link
                to="/signup"
                className="px-8 py-3 bg-teal-500 text-white text-lg font-bold rounded-lg shadow-md hover:bg-teal-600 transition duration-300"
              >
                Join as a Vendor
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. Final CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <Sparkles className="mx-auto text-yellow-400 mb-4" size={48} />
          <h2 className="text-4xl font-bold mb-4">
            Ready to Plan Your Perfect Event?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start finding the best vendors for your venue, catering, and photography needs today. It's fast, free, and efficient.
          </p>
          <Link
            to="/signup"
            className="px-10 py-4 bg-yellow-400 text-blue-900 text-xl font-extrabold rounded-full shadow-2xl hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
          >
            Start Planning Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
