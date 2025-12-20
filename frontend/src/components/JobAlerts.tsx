import React from "react";
import Sidebar from "../components/Sidebar";

type JobItemProps = {
  role: string;
  company?: string;
  location: string;
  salary: string;
  type: string;
  daysRemaining: number;
};

const JobItem: React.FC<JobItemProps> = ({
  role,
  company,
  location,
  salary,
  type,
  daysRemaining,
}) => {
  return (
    <div className="bg-white rounded-xl border p-5 flex items-center justify-between shadow-sm hover:shadow-md transition">

      {/* Left section */}
      <div>
        <h2 className="text-lg font-semibold">{role}</h2>
        {company && <p className="text-gray-500">{company}</p>}
        <p className="text-gray-600">{location}</p>
        <p className="font-medium">{salary}</p>
      </div>

      {/* Job Type */}
      <span className="px-4 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
        {type}
      </span>

      {/* Days Remaining */}
      <p className="text-gray-500">{daysRemaining} Days Remaining</p>

      {/* Apply Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Apply Now →
      </button>
    </div>
  );
};

const JobAlerts: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Page Content */}
      <div className="flex-1 ml-64 p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Job Alerts (9 new jobs)</h1>
          <button className="text-blue-600 underline">Edit Job Alerts</button>
        </div>

        {/* Job Cards */}
        <div className="space-y-5">

          <JobItem
            role="Technical Support Specialist"
            company="Google"
            location="Idaho, USA"
            salary="$15K–$20K"
            type="Full Time"
            daysRemaining={4}
          />

          <JobItem
            role="UI/UX Designer"
            company="YouTube"
            location="Minnesota, USA"
            salary="$10K–$15K"
            type="Full Time"
            daysRemaining={4}
          />

          <JobItem
            role="Front End Developer"
            company="Dribbble"
            location="Myanmar"
            salary="$10K–$18K"
            type="Internship"
            daysRemaining={4}
          />

          <JobItem
            role="Marketing Officer"
            company="Behance"
            location="Montana, USA"
            salary="$50K–$80K"
            type="Full Time"
            daysRemaining={4}
          />

          <JobItem
            role="Networking Engineer"
            company="Instagram"
            location="Michigan, USA"
            salary="$45K–$65K"
            type="Full Time"
            daysRemaining={4}
          />

          <JobItem
            role="Senior UX Designer"
            company="Google"
            location="UK"
            salary="$30K–$35K"
            type="Full Time"
            daysRemaining={4}
          />

        </div>
      </div>
    </div>
  );
};

export default JobAlerts;