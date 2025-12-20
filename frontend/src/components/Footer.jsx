import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              <span className="text-lg md:text-xl font-bold text-white">MyJob</span>
            </div>
            <p className="text-sm mb-4">Call now: <span className="text-white">(319) 555-0115</span></p>
            <p className="text-sm text-gray-400">
              6391 Elgin St. Celina, Delaware 10299, New York, United States of America
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Candidate</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/browse-jobs" className="hover:text-white">Browse Jobs</Link></li>
              <li><Link to="/browse-employers" className="hover:text-white">Browse Employers</Link></li>
              <li><Link to="/candidate-dashboard" className="hover:text-white">Candidate Dashboard</Link></li>
              <li><Link to="/saved-jobs" className="hover:text-white">Saved Jobs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Employers</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/post-job" className="hover:text-white">Post a Job</Link></li>
              <li><Link to="/browse-candidates" className="hover:text-white">Browse Candidates</Link></li>
              <li><Link to="/employer-dashboard" className="hover:text-white">Employers Dashboard</Link></li>
              <li><Link to="/applications" className="hover:text-white">Applications</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faqs" className="hover:text-white">Faqs</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs md:text-sm text-center md:text-left">© 2024 MyJob - Job Portal. All rights Reserved</p>
<div className="flex space-x-4 text-gray-400 hover:text-white">
  <a href="#" className="hover:text-white"><FaFacebookF size={20} /></a>
  <a href="#" className="hover:text-white"><FaYoutube size={20} /></a>
  <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
  <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
</div>
          
        </div>
      </div>
    </footer>
  );
}