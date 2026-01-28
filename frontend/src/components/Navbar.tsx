import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-10 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">MyJob</div>

      <nav className="space-x-6 font-medium">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/findJob" className="hover:text-blue-600">Find Jobs</Link>
        <Link to="/ResumeJobSearch" className="hover:text-blue-600">Resume</Link>
        <Link to="/login" className="hover:text-blue-600">Login</Link>
        <Link to="/register" className="hover:text-blue-600">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
