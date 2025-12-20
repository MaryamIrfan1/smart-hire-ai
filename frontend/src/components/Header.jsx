import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Briefcase, Menu, X, Bell } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleSignInClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/register');
  };

  const handleUserAvatarClick = () => {
    navigate('/dashboard');
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-22">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-900 font-bold text-lg">
              <Briefcase className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold text-white">
              MyJob
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-gray-800 rounded-2xl p-1">
            <button
              onClick={() => navigate('/')}
              className={`px-6 py-2 rounded-xl font-semibold transition-all duration-200 ${
                isActive('/')
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-300 hover:text-white cursor-pointer'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigate('/findJob')}
              className={`px-6 py-2 rounded-xl font-semibold transition-all duration-200 ${
                isActive('/findJob')
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-300 hover:text-white cursor-pointer'
              }`}
            >
              Find Job
            </button>
            <button
              onClick={() => navigate('/ResumeJobSearch')}
              className={`px-6 py-2 rounded-xl font-semibold transition-all duration-200 ${
                isActive('/ResumeJobSearch')
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-300 hover:text-white cursor-pointer'
              }`}
            >
              Upload Resume
            </button>
          
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button 
                onClick={handleSignInClick}
                className="px-5 py-2 text-gray-300 hover:text-white font-semibold transition-colors"
              >
                Sign In
              </button>
              <button 
                onClick={handleSignUpClick}
                className="px-6 py-2 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 shadow-sm"
              >
                Sign Up
              </button>
            </div>

            {/* Notification Bell */}
            <button 
              className="hidden lg:block p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-6 h-6" />
            </button>

            {/* User Avatar - Click to navigate to Sidebar page */}
            <div 
              onClick={handleUserAvatarClick}
              className="hidden lg:flex w-10 h-10 bg-white rounded-full items-center justify-center text-gray-900 font-semibold cursor-pointer hover:shadow-lg transition-shadow"
            >
              U
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-700 mt-2">
            <div className="flex flex-col space-y-2 mt-4">
              <button
                onClick={() => {
                  navigate('/');
                  setIsMenuOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  isActive('/')
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigate('/findJob');
                  setIsMenuOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  isActive('/findJob')
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                Find Job
              </button>
              <button
                onClick={() => {
                  navigate('/ResumeJobSearch');
                  setIsMenuOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  isActive('/ResumeJobSearch')
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                Upload Resume
              </button>
              <button
                onClick={() => {
                  navigate('/support');
                  setIsMenuOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  isActive('/support')
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                Customer Support
              </button>
              
              <div className="flex items-center space-x-2 text-gray-300 px-4 py-3">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1-202-555-0178</span>
              </div>

              <div className="pt-3 mt-3 border-t border-gray-700 space-y-2">
                <button 
                  onClick={() => {
                    handleSignInClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-xl font-semibold transition-all duration-200"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => {
                    handleSignUpClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-white text-gray-900 px-4 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}