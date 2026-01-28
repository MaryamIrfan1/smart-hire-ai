// import React from "react";
// import Sidebar from "../components/Sidebar";

// // Step 1: Define JobCard props type
// type JobCardProps = {
//   role: string;
//   location: string;
//   salary: string;
//   type: string;
//   status: string;
//   date: string;
// };

// // Step 2: JobCard component
// const JobCard: React.FC<JobCardProps> = ({ role, location, salary, type, status, date }) => {
//   return (
//     <div className="bg-white border rounded-xl p-6 flex justify-between items-center hover:shadow-lg transition">
//       <div>
//         <h3 className="text-lg font-semibold">{role}</h3>
//         <p className="text-gray-600">{location}</p>
//         <p className="text-gray-700">{salary}</p>
//       </div>

//       <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm">
//         {type}
//       </span>

//       <p className="text-green-600 font-semibold">{status}</p>

//       <p className="text-gray-500 text-sm">{date}</p>

//       <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
//         View Details
//       </button>
//     </div>
//   );
// };

// // Step 3: AppliedJobs component
// const AppliedJobs: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="ml-64 w-full p-10">
//         {/* Header */}
//         <div className="flex justify-between items-center py-4 mb-6 border-b">
//           <h1 className="text-2xl font-semibold">Applied Jobs (589)</h1>

//           <div className="flex items-center gap-6">
//             <input
//               type="text"
//               placeholder="Job title, keyword..."
//               className="border px-4 py-2 rounded-lg w-80"
//             />
//             <p>🇮🇳 India</p>
//             <p>🇺🇸 English</p>
//             <p>📞 +1-202-555-0178</p>
//           </div>
//         </div>

//         {/* Job List */}
//         <div className="space-y-4">
//           <JobCard
//             role="Networking Engineer"
//             location="Washington"
//             salary="$50k–80k/month"
//             type="Remote"
//             status="Active"
//             date="Feb 2, 2019 19:28"
//           />

//           <JobCard
//             role="Product Designer"
//             location="Dhaka"
//             salary="$50k–80k/month"
//             type="Full Time"
//             status="Active"
//             date="Dec 7, 2019 23:26"
//           />

//           <JobCard
//             role="Junior Graphic Designer"
//             location="Brazil"
//             salary="$50k–80k/month"
//             type="Temporary"
//             status="Active"
//             date="Feb 2, 2019 19:28"
//           />

//           <JobCard
//             role="Visual Designer"
//             location="Wisconsin"
//             salary="$50k–80k/month"
//             type="Contract Base"
//             status="Active"
//             date="Dec 7, 2019 23:26"
//           />

//           <JobCard
//             role="Marketing Officer"
//             location="United States"
//             salary="$50k–80k/month"
//             type="Full Time"
//             status="Active"
//             date="Dec 4, 2019 21:42"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppliedJobs;

import React from "react";
import Sidebar from "../components/Sidebar";
import JobCard from "../components/JobCard";
import { Search } from "lucide-react";

const AppliedJobs: React.FC = () => {
  const jobs = [
    {
      role: "Networking Engineer",
      location: "Washington, DC",
      salary: "$50k–80k/month",
      type: "Remote",
      status: "Active",
      date: "Feb 2, 2019 19:28"
    },
    {
      role: "Product Designer",
      location: "Dhaka, Bangladesh",
      salary: "$50k–80k/month",
      type: "Full Time",
      status: "Active",
      date: "Dec 7, 2019 23:26"
    },
    {
      role: "Junior Graphic Designer",
      location: "São Paulo, Brazil",
      salary: "$50k–80k/month",
      type: "Temporary",
      status: "Active",
      date: "Dec 2, 2019 19:28"
    },
    {
      role: "Visual Designer",
      location: "Wisconsin, USA",
      salary: "$50k–80k/month",
      type: "Contract",
      status: "Active",
      date: "Dec 7, 2019 23:26"
    },
    {
      role: "Marketing Officer",
      location: "United States",
      salary: "$50k–80k/month",
      type: "Full Time",
      status: "Active",
      date: "Dec 4, 2019 21:42"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-72 w-full p-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Applied Jobs (589)
            </h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs, keywords..."
                  className="border-2 border-gray-200 pl-12 pr-4 py-3 rounded-xl w-80 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
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

        {/* Job List */}
        <div className="grid grid-cols-1 gap-6">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;