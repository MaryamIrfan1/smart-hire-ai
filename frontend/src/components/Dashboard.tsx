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
//     <div className="bg-white border border-gray-200 rounded-xl p-6 flex justify-between items-center hover:shadow-xl hover:border-blue-500 transition-all duration-300">
//       <div className="flex-1">
//         <h3 className="text-lg font-bold text-gray-900 mb-1">{role}</h3>
//         <p className="text-gray-600 text-sm mb-1"> {location}</p>
//         <p className="text-blue-900 font-semibold text-sm"> {salary}</p>
//       </div>

//       <span className="bg-blue-100 text-blue-900 px-5 py-2 rounded-full text-sm font-medium">
//         {type}
//       </span>

//       <p className="text-green-600 font-semibold text-sm mx-6">{status}</p>

//       <p className="text-gray-500 text-sm mx-6">{date}</p>

//       <button className="px-6 py-2.5 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-500 transition-colors duration-200 shadow-md hover:shadow-lg">
//         View Details
//       </button>
//     </div>
//   );
// };

// // Step 3: Dashboard component
// const Dashboard: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="ml-64 w-full p-10">
//         {/* Header */}
//         <div className="flex justify-between items-center py-5 mb-8 border-b-2 border-gray-200">
//           <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//           <div className="flex items-center gap-6">
//             <input
//               type="text"
//               placeholder="Job title, keyword..."
//               className="border-2 border-gray-300 px-5 py-2.5 rounded-lg w-80 focus:outline-none focus:border-blue-500 transition-colors"
//             />
//             <p className="text-gray-700 font-medium">🇮🇳 India</p>
//             <p className="text-gray-700 font-medium">🇺🇸 English</p>
//             <p className="text-gray-700 font-medium"> +1-202-555-0178</p>
//           </div>
//         </div>

//         {/* Greeting */}
//         <h2 className="text-3xl font-bold text-gray-900 mb-2">Hello, Esther Howard </h2>
//         <p className="text-gray-600 mb-10 text-lg">
//           Here is your daily activities and job alerts
//         </p>

//         {/* Stats */}
//         <div className="grid grid-cols-2 gap-8 mb-10">
//           <div className="bg-linear-to-br from-blue-500 to-blue-900 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
//             <h3 className="text-5xl font-bold text-white mb-2">589</h3>
//             <p className="text-blue-100 text-lg font-medium">Applied Jobs</p>
//           </div>
          
//           <div className="bg-linear-to-br from-gray-700 to-gray-900 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
//             <h3 className="text-5xl font-bold text-white mb-2">574</h3>
//             <p className="text-gray-300 text-lg font-medium">Job Alerts</p>
//           </div>
//         </div>

//         {/* Warning Section */}
//         <div className="bg-linear-to-r from-blue-500 to-blue-900 text-white p-8 rounded-2xl flex justify-between items-center mb-10 shadow-lg">
//           <div>
//             <h4 className="font-bold text-xl mb-1"> Your profile editing is not completed.</h4>
//             <p className="text-red-100">Complete your profile editing & build your custom resume.</p>
//           </div>
//           <button className="bg-white text-blue-900 px-7 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 shadow-md">
//             Edit Profile →
//           </button>
//         </div>

//         {/* Recently Applied */}
//         <div className="flex justify-between items-center mb-6">
//           <h3 className="text-2xl font-bold text-gray-900">Recently Applied</h3>
//           <button className="text-blue-500 hover:text-blue-900 font-semibold transition-colors">
//             View All →
//           </button>
//         </div>

//         <div className="space-y-5">
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
//             date="Dec 2, 2019 19:28"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// import React from "react";
// import Sidebar from "../components/Sidebar";
// import JobCard from "../components/JobCard";
// import { Search, Bell, Briefcase, FileText, ChevronRight, MapPin, Calendar, Users } from "lucide-react";

// const Dashboard: React.FC = () => {
//   const jobs = [
//     {
//       role: "Networking Engineer",
//       location: "Washington, DC",
//       salary: "$50k–80k/month",
//       type: "Remote",
//       status: "Active",
//       date: "Feb 2, 2019"
//     },
//     {
//       role: "Product Designer",
//       location: "Dhaka, Bangladesh",
//       salary: "$50k–80k/month",
//       type: "Full Time",
//       status: "Active",
//       date: "Dec 7, 2019"
//     },
//     {
//       role: "Junior Graphic Designer",
//       location: "São Paulo, Brazil",
//       salary: "$50k–80k/month",
//       type: "Temporary",
//       status: "Active",
//       date: "Dec 2, 2019"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="ml-72 w-full p-8">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-10">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//             <p className="text-gray-600 mt-1">Welcome back, here's your overview</p>
//           </div>
          
//           <div className="flex items-center gap-6">
//             <div className="relative group">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-gray-600 transition-colors" />
//               <input
//                 type="text"
//                 placeholder="Search jobs, keywords..."
//                 className="bg-white border border-gray-200 pl-12 pr-6 py-3 rounded-xl w-96 focus:outline-none focus:border-gray-800 focus:ring-2 focus:ring-gray-800/20 transition-all shadow-sm"
//               />
//             </div>
            
//             <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm">
//               <div className="flex items-center gap-2">
//                 <MapPin className="w-4 h-4 text-gray-600" />
//                 <span className="text-sm text-gray-700 font-medium">India</span>
//               </div>
//               <div className="w-px h-6 bg-gray-200"></div>
//               <div className="flex items-center gap-2">
//                 <Users className="w-4 h-4 text-gray-600" />
//                 <span className="text-sm text-gray-700 font-medium">English</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Greeting */}
//         <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-10 shadow-2xl">
//           <div className="flex items-start justify-between">
//             <div>
//               <h2 className="text-4xl font-bold text-white mb-2">
//                 Hello, Esther Howard
//               </h2>
//               <p className="text-gray-300 text-lg">
//                 Here are your daily activities and job alerts
//               </p>
//             </div>
//             <div className="flex items-center gap-2 text-gray-300">
//               <Calendar className="w-5 h-5" />
//               <span className="font-medium">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
//             </div>
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-3 gap-6 mb-10">
//           {/* Applied Jobs Card */}
//           <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl hover:border-gray-300 transition-all duration-300 group">
//             <div className="flex items-center justify-between mb-6">
//               <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                 <Briefcase className="w-7 h-7 text-white" />
//               </div>
//               <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">Today</span>
//             </div>
//             <h3 className="text-5xl font-bold text-gray-900 mb-2">589</h3>
//             <p className="text-gray-700 font-medium">Applied Jobs</p>
//             <div className="mt-4 pt-4 border-t border-gray-100">
//               <div className="flex items-center justify-between text-sm">
//                 <span className="text-gray-600">+12% from last week</span>
//                 <span className="text-green-600 font-medium">↑ 42 new</span>
//               </div>
//             </div>
//           </div>
          
//           {/* Job Alerts Card */}
//           <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl hover:border-gray-300 transition-all duration-300 group">
//             <div className="flex items-center justify-between mb-6">
//               <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                 <Bell className="w-7 h-7 text-white" />
//               </div>
//               <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">Active</span>
//             </div>
//             <h3 className="text-5xl font-bold text-gray-900 mb-2">574</h3>
//             <p className="text-gray-700 font-medium">Job Alerts</p>
//             <div className="mt-4 pt-4 border-t border-gray-100">
//               <div className="flex items-center justify-between text-sm">
//                 <span className="text-gray-600">8 new alerts today</span>
//                 <span className="text-blue-600 font-medium cursor-pointer hover:text-blue-800">View all</span>
//               </div>
//             </div>
//           </div>
          
//           {/* Profile Completion Card */}
//           <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
//             <div className="flex items-center justify-between mb-6">
//               <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
//                 <FileText className="w-7 h-7 text-white" />
//               </div>
//               <span className="text-sm font-medium text-gray-300 bg-white/10 px-3 py-1 rounded-full">Required</span>
//             </div>
//             <h3 className="text-5xl font-bold text-white mb-2">65%</h3>
//             <p className="text-gray-300 font-medium mb-4">Profile Complete</p>
//             <div className="w-full bg-white/20 rounded-full h-2 mb-2">
//               <div className="bg-white h-2 rounded-full w-2/3"></div>
//             </div>
//             <button className="w-full mt-6 bg-white text-gray-900 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
//               Complete Profile
//             </button>
//           </div>
//         </div>

//         {/* Recently Applied Section */}
//         <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
//           <div className="flex items-center justify-between mb-8">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900">Recently Applied</h3>
//               <p className="text-gray-600 mt-1">Your most recent job applications</p>
//             </div>
//             <button className="flex items-center gap-2 text-gray-800 hover:text-gray-900 font-semibold transition-colors group">
//               View All
//               <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>

//           {/* Job Cards Container */}
//           <div className="space-y-4">
//             {jobs.map((job, index) => (
//               <JobCard key={index} {...job} />
//             ))}
//           </div>

//           {/* Stats Footer */}
//           <div className="mt-8 pt-8 border-t border-gray-100">
//             <div className="grid grid-cols-4 gap-6">
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-gray-900">245</div>
//                 <div className="text-sm text-gray-600">Active Applications</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-gray-900">127</div>
//                 <div className="text-sm text-gray-600">Under Review</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-gray-900">42</div>
//                 <div className="text-sm text-gray-600">Interview Stage</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-gray-900">87</div>
//                 <div className="text-sm text-gray-600">Rejected</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Navigation */}
//         <div className="mt-8 flex items-center justify-between text-sm text-gray-600">
//           <div className="flex items-center gap-6">
//             <span className="hover:text-gray-900 cursor-pointer transition-colors">Help Center</span>
//             <span className="hover:text-gray-900 cursor-pointer transition-colors">Privacy Policy</span>
//             <span className="hover:text-gray-900 cursor-pointer transition-colors">Terms of Service</span>
//           </div>
//           <div>
//             <span className="text-gray-900 font-medium">MyJob Dashboard</span>
//             <span className="mx-2">•</span>
//             <span>v2.1.0</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React from "react";
import Sidebar from "../components/Sidebar";
import JobCard from "../components/JobCard";
import { 
  Search, 
  Bell, 
  Briefcase, 
  FileText, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  Users,
  TrendingUp,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Filter
} from "lucide-react";

const Dashboard: React.FC = () => {
  const jobs = [
    {
      role: "Networking Engineer",
      location: "Washington, DC",
      salary: "$50k–80k/month",
      type: "Remote",
      status: "Active",
      date: "Feb 2, 2026"
    },
    {
      role: "Product Designer",
      location: "Dhaka, Bangladesh",
      salary: "$50k–80k/month",
      type: "Full Time",
      status: "Active",
      date: "Dec 7, 2025"
    },
    {
      role: "Junior Graphic Designer",
      location: "São Paulo, Brazil",
      salary: "$50k–80k/month",
      type: "Temporary",
      status: "Active",
      date: "Dec 2, 2025"
    }
  ];

  const stats = [
    { label: "Active Applications", value: 245, trend: "+12%", trendColor: "text-green-600" },
    { label: "Under Review", value: 127, trend: "+5%", trendColor: "text-blue-600" },
    { label: "Interview Stage", value: 42, trend: "+8%", trendColor: "text-purple-600" },
    { label: "Rejected", value: 87, trend: "-3%", trendColor: "text-red-600" }
  ];

  const quickActions = [
    { icon: Briefcase, label: "Apply New Job", color: "bg-blue-600", count: 12 },
    { icon: FileText, label: "Update Resume", color: "bg-emerald-600", count: 1 },
    { icon: Bell, label: "Alerts", color: "bg-amber-600", count: 8 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-72 w-full p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-blue-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, here's your overview</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-gray-600 transition-colors" />
              <input
                type="text"
                placeholder="Search jobs, keywords..."
                className="bg-white border border-gray-200 pl-12 pr-6 py-3 rounded-xl w-80 focus:outline-none focus:border-gray-800 focus:ring-2 focus:ring-gray-800/20 transition-all shadow-sm"
              />
            </div>
            
            <button className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter</span>
            </button>
            
            <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700 font-medium">PK Pakistan</span>
              </div>
              <div className="w-px h-6 bg-gray-200"></div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700 font-medium">US English</span>
              </div>
            </div>
          </div>
        </div>

        {/* Greeting & Date */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold text-blue-900">
              Hello, Maryam
            </h2>
            <p className="text-gray-600 mt-2 text-lg">
              Here are your daily activities and job alerts
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
            <Calendar className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-800">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric',
                year: 'numeric' 
              })}
            </span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${action.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                {action.count > 0 && (
                  <span className="bg-red-100 text-red-800 text-xs font-bold px-2.5 py-1 rounded-full">
                    {action.count}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.label}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                <span>View details</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Applied Jobs Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Applied</p>
                  <p className="text-2xl font-bold text-gray-900">589</p>
                </div>
              </div>
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">This month</span>
              <span className="text-green-600 font-semibold flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +12%
              </span>
            </div>
          </div>
          
          {/* Job Alerts Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                  <Bell className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Job Alerts</p>
                  <p className="text-2xl font-bold text-gray-900">574</p>
                </div>
              </div>
              <Eye className="w-6 h-6 text-blue-500" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Active alerts</span>
              <span className="text-blue-600 font-semibold cursor-pointer hover:text-blue-800">
                View all
              </span>
            </div>
          </div>
          
          {/* Profile Completion Card */}
          <div className="bg-gradient-to-r from-blue-950 to-blue-600 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Profile Complete</p>
                  <p className="text-2xl font-bold text-white">65%</p>
                </div>
              </div>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2 mb-3">
              <div className="bg-white h-2 rounded-full w-2/3"></div>
            </div>
            <button className="w-full mt-4 bg-white text-gray-900 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
              Complete Profile
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Recently Applied */}
          <div className="col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Recently Applied</h3>
                  <p className="text-gray-600 mt-1">Your most recent job applications</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:text-gray-900 font-semibold transition-colors group">
                  View All
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Job Cards Container */}
              <div className="space-y-4">
                {jobs.map((job, index) => (
                  <JobCard key={index} {...job} />
                ))}
              </div>

              {/* Stats Overview */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Applications Overview</h4>
                <div className="grid grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                      <div className={`text-xs font-medium ${stat.trendColor}`}>
                        {stat.trend}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Side Stats */}
          <div className="space-y-8">
            {/* Application Status */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Application Status</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Active</span>
                  </div>
                  <span className="font-bold text-gray-900">245</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Under Review</span>
                  </div>
                  <span className="font-bold text-gray-900">127</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Eye className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-gray-700">Interview</span>
                  </div>
                  <span className="font-bold text-gray-900">42</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <XCircle className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-gray-700">Rejected</span>
                  </div>
                  <span className="font-bold text-gray-900">87</span>
                </div>
              </div>
            </div>

            {/* Upcoming Interviews */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-gray-900">Upcoming Interviews</h4>
                <span className="text-sm text-gray-600">2 scheduled</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Product Designer</span>
                    <span className="text-sm text-gray-600">10:30 AM</span>
                  </div>
                  <div className="text-sm text-gray-600">Zoom Meeting</div>
                </div>
                <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Networking Engineer</span>
                    <span className="text-sm text-gray-600">2:00 PM</span>
                  </div>
                  <div className="text-sm text-gray-600">Google Meet</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between text-sm text-gray-600 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-900 cursor-pointer transition-colors">Help Center</span>
            <span className="hover:text-gray-900 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-gray-900 cursor-pointer transition-colors">Terms of Service</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-900 font-medium">MyJob Dashboard</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span className="text-gray-600">v2.1.0</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span className="text-gray-600">Last updated: Today</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;