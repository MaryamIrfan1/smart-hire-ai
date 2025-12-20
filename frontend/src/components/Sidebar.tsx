import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;
  
  const handleLogout = () => {
    // Add any logout logic here (clear tokens, user data, etc.)
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');
    
    // Navigate to home page
    navigate('/');
  };

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 p-6 fixed top-0 left-0 flex flex-col">
      <h1 className="text-2xl font-bold mb-10 text-blue-500">MyJob</h1>

      <nav className="space-y-2 font-medium flex-1">
        <Link 
          to="/dashboard" 
          className={`block px-4 py-3 rounded-lg transition-colors ${
            isActive("/dashboard") 
              ? "bg-blue-900 text-white" 
              : "text-gray-900 hover:bg-gray-100 hover:text-blue-500"
          }`}
        >
          Overview
        </Link>
        <Link 
          to="/AppliedJobs" 
          className={`block px-4 py-3 rounded-lg transition-colors ${
            isActive("/AppliedJobs") 
              ? "bg-blue-900 text-white" 
              : "text-gray-900 hover:bg-gray-100 hover:text-blue-500"
          }`}
        >
          Applied Jobs
        </Link>
        <Link 
          to="/jobAlerts" 
          className={`block px-4 py-3 rounded-lg transition-colors ${
            isActive("/jobAlerts") 
              ? "bg-blue-900 text-white" 
              : "text-gray-900 hover:bg-gray-100 hover:text-blue-500"
          }`}
        >
          Job Alerts
        </Link>
        {/* <Link 
          to="/settings" 
          className={`block px-4 py-3 rounded-lg transition-colors ${
            isActive("/settings") 
              ? "bg-blue-900 text-white" 
              : "text-gray-900 hover:bg-gray-100 hover:text-blue-500"
          }`}
        >
          Settings
        </Link> */}
      </nav>

      <button 
        onClick={handleLogout}
        className="text-red-500 hover:text-red-400 font-semibold px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-left cursor-pointer"
      >
        Log out
      </button>
    </div>
  );
};

export default Sidebar;