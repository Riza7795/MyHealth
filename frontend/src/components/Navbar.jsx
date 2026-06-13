import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiSearch, FiBriefcase, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();

  // Don't show on login/register pages
  if (location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/') return null;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-lg flex items-center justify-center shadow-md">
               <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="font-bold text-xl text-gray-800 tracking-tight">HealthMate</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/user/dashboard" className="text-gray-600 hover:text-emerald-600 flex items-center gap-1 font-medium text-sm">
               <FiHome /> User Dashboard
            </Link>
            <Link to="/user/find-specialist" className="text-gray-600 hover:text-emerald-600 flex items-center gap-1 font-medium text-sm">
               <FiSearch /> Find Doctor
            </Link>
            <Link to="/worker/dashboard" className="text-gray-600 hover:text-emerald-600 flex items-center gap-1 font-medium text-sm">
               <FiBriefcase /> Worker Dashboard
            </Link>
          </div>
          
          {/* Mobile menu button (mock) */}
          <div className="md:hidden flex items-center">
             <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
                <FiUser className="w-6 h-6" />
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
