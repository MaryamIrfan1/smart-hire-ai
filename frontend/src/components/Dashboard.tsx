import React from "react";
import Sidebar from "../components/Sidebar";

// Step 1: Define JobCard props type
type JobCardProps = {
  role: string;
  location: string;
  salary: string;
  type: string;
  status: string;
  date: string;
};

// Step 2: JobCard component
const JobCard: React.FC<JobCardProps> = ({ role, location, salary, type, status, date }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex justify-between items-center hover:shadow-xl hover:border-blue-500 transition-all duration-300">
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{role}</h3>
        <p className="text-gray-600 text-sm mb-1"> {location}</p>
        <p className="text-blue-900 font-semibold text-sm"> {salary}</p>
      </div>

      <span className="bg-blue-100 text-blue-900 px-5 py-2 rounded-full text-sm font-medium">
        {type}
      </span>

      <p className="text-green-600 font-semibold text-sm mx-6">{status}</p>

      <p className="text-gray-500 text-sm mx-6">{date}</p>

      <button className="px-6 py-2.5 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors duration-200 shadow-md hover:shadow-lg">
        View Details
      </button>
    </div>
  );
};

// Step 3: Dashboard component
const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 w-full p-10">
        {/* Header */}
        <div className="flex justify-between items-center py-5 mb-8 border-b-2 border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center gap-6">
            <input
              type="text"
              placeholder="Job title, keyword..."
              className="border-2 border-gray-300 px-5 py-2.5 rounded-lg w-80 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <p className="text-gray-700 font-medium">🇮🇳 India</p>
            <p className="text-gray-700 font-medium">🇺🇸 English</p>
            <p className="text-gray-700 font-medium"> +1-202-555-0178</p>
          </div>
        </div>

        {/* Greeting */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Hello, Esther Howard </h2>
        <p className="text-gray-600 mb-10 text-lg">
          Here is your daily activities and job alerts
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div className="bg-linear-to-br from-blue-500 to-blue-900 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-5xl font-bold text-white mb-2">589</h3>
            <p className="text-blue-100 text-lg font-medium">Applied Jobs</p>
          </div>
          
          <div className="bg-linear-to-br from-gray-700 to-gray-900 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-5xl font-bold text-white mb-2">574</h3>
            <p className="text-gray-300 text-lg font-medium">Job Alerts</p>
          </div>
        </div>

        {/* Warning Section */}
        <div className="bg-linear-to-r from-blue-500 to-blue-900 text-white p-8 rounded-2xl flex justify-between items-center mb-10 shadow-lg">
          <div>
            <h4 className="font-bold text-xl mb-1"> Your profile editing is not completed.</h4>
            <p className="text-red-100">Complete your profile editing & build your custom resume.</p>
          </div>
          <button className="bg-white text-blue-900 px-7 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 shadow-md">
            Edit Profile →
          </button>
        </div>

        {/* Recently Applied */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Recently Applied</h3>
          <button className="text-blue-500 hover:text-blue-900 font-semibold transition-colors">
            View All →
          </button>
        </div>

        <div className="space-y-5">
          <JobCard
            role="Networking Engineer"
            location="Washington"
            salary="$50k–80k/month"
            type="Remote"
            status="Active"
            date="Feb 2, 2019 19:28"
          />
          <JobCard
            role="Product Designer"
            location="Dhaka"
            salary="$50k–80k/month"
            type="Full Time"
            status="Active"
            date="Dec 7, 2019 23:26"
          />
          <JobCard
            role="Junior Graphic Designer"
            location="Brazil"
            salary="$50k–80k/month"
            type="Temporary"
            status="Active"
            date="Dec 2, 2019 19:28"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;