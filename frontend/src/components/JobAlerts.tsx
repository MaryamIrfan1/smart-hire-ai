// import React from "react";
// import Sidebar from "../components/Sidebar";

// type JobItemProps = {
//   role: string;
//   company?: string;
//   location: string;
//   salary: string;
//   type: string;
//   daysRemaining: number;
// };

// const JobItem: React.FC<JobItemProps> = ({
//   role,
//   company,
//   location,
//   salary,
//   type,
//   daysRemaining,
// }) => {
//   return (
//     <div className="bg-white rounded-xl border p-5 flex items-center justify-between shadow-sm hover:shadow-md transition">

//       {/* Left section */}
//       <div>
//         <h2 className="text-lg font-semibold">{role}</h2>
//         {company && <p className="text-gray-500">{company}</p>}
//         <p className="text-gray-600">{location}</p>
//         <p className="font-medium">{salary}</p>
//       </div>

//       {/* Job Type */}
//       <span className="px-4 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
//         {type}
//       </span>

//       {/* Days Remaining */}
//       <p className="text-gray-500">{daysRemaining} Days Remaining</p>

//       {/* Apply Button */}
//       <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//         Apply Now →
//       </button>
//     </div>
//   );
// };

// const JobAlerts: React.FC = () => {
//   return (
//     <div className="min-h-screen flex bg-gray-100">

//       {/* Sidebar */}
//       <Sidebar />

//       {/* Page Content */}
//       <div className="flex-1 ml-64 p-10">

//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-2xl font-semibold">Job Alerts (9 new jobs)</h1>
//           <button className="text-blue-600 underline">Edit Job Alerts</button>
//         </div>

//         {/* Job Cards */}
//         <div className="space-y-5">

//           <JobItem
//             role="Technical Support Specialist"
//             company="Google"
//             location="Idaho, USA"
//             salary="$15K–$20K"
//             type="Full Time"
//             daysRemaining={4}
//           />

//           <JobItem
//             role="UI/UX Designer"
//             company="YouTube"
//             location="Minnesota, USA"
//             salary="$10K–$15K"
//             type="Full Time"
//             daysRemaining={4}
//           />

//           <JobItem
//             role="Front End Developer"
//             company="Dribbble"
//             location="Myanmar"
//             salary="$10K–$18K"
//             type="Internship"
//             daysRemaining={4}
//           />

//           <JobItem
//             role="Marketing Officer"
//             company="Behance"
//             location="Montana, USA"
//             salary="$50K–$80K"
//             type="Full Time"
//             daysRemaining={4}
//           />

//           <JobItem
//             role="Networking Engineer"
//             company="Instagram"
//             location="Michigan, USA"
//             salary="$45K–$65K"
//             type="Full Time"
//             daysRemaining={4}
//           />

//           <JobItem
//             role="Senior UX Designer"
//             company="Google"
//             location="UK"
//             salary="$30K–$35K"
//             type="Full Time"
//             daysRemaining={4}
//           />

//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobAlerts;
import React from "react";
import Sidebar from "../components/Sidebar";
import JobCard from "../components/JobCard";
import { Search, Bell } from "lucide-react";

const JobAlerts: React.FC = () => {
  const alerts = [
    {
      role: "Senior UX Designer",
      location: "San Francisco, CA",
      salary: "$90k–120k/month",
      type: "Full Time",
      status: "New",
      date: "Jan 20, 2026"
    },
    {
      role: "Frontend Developer",
      location: "Remote",
      salary: "$70k–100k/month",
      type: "Remote",
      status: "New",
      date: "Jan 19, 2026"
    },
    {
      role: "Data Scientist",
      location: "New York, NY",
      salary: "$100k–140k/month",
      type: "Full Time",
      status: "New",
      date: "Jan 18, 2026"
    },
    {
      role: "Backend Engineer",
      location: "Seattle, WA",
      salary: "$85k–115k/month",
      type: "Full Time",
      status: "New",
      date: "Jan 17, 2026"
    },
    {
      role: "Mobile Developer",
      location: "Austin, TX",
      salary: "$75k–105k/month",
      type: "Contract",
      status: "New",
      date: "Jan 16, 2026"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-72 w-full p-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Job Alerts (574)
            </h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search alerts..."
                  className="border-2 border-gray-200 pl-12 pr-4 py-3 rounded-xl w-80 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-purple-200 transition-all"
                />
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <span className="text-sm">PK Pakistan</span>
                <span className="text-sm">US English</span>
                <span className="text-sm font-medium"> +1-202-555-0178</span>
              </div>
            </div>
          </div>
        </div>

        {/* Alert Banner */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900  p-6 rounded-2xl flex justify-between items-center mb-8 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
              <Bell className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">You have 5 new job alerts!</h4>
              <p className="text-purple-100">Check out the latest opportunities matching your profile</p>
            </div>
          </div>
        </div>

        {/* Alerts List */}
        <div className="grid grid-cols-1 gap-6">
          {alerts.map((alert, index) => (
            <JobCard key={index} {...alert} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobAlerts;