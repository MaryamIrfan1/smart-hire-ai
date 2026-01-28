<<<<<<< HEAD
// import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// const Sidebar: React.FC = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const isActive = (path: string) => location.pathname === path;
  
//   const handleLogout = () => {
//     // Add any logout logic here (clear tokens, user data, etc.)
//     // localStorage.removeItem('token');
//     // localStorage.removeItem('user');
    
//     // Navigate to home page
//     navigate('/');
//   };

//   return (
//     <div className="w-64 h-screen bg-white border-r border-gray-200 p-6 fixed top-0 left-0 flex flex-col">
//       <h1 className="text-2xl font-bold mb-10 text-blue-500">MyJob</h1>

//       <nav className="space-y-2 font-medium flex-1">
//         <Link 
//           to="/dashboard" 
//           className={`block px-4 py-3 rounded-lg transition-colors ${
//             isActive("/dashboard") 
//               ? "bg-blue-900 text-white" 
//               : "text-gray-900 hover:bg-gray-100 hover:text-blue-500"
//           }`}
//         >
//           Overview
//         </Link>
//         <Link 
//           to="/AppliedJobs" 
//           className={`block px-4 py-3 rounded-lg transition-colors ${
//             isActive("/AppliedJobs") 
//               ? "bg-blue-900 text-white" 
//               : "text-gray-900 hover:bg-gray-100 hover:text-blue-500"
//           }`}
//         >
//           Applied Jobs
//         </Link>
//         <Link 
//           to="/jobAlerts" 
//           className={`block px-4 py-3 rounded-lg transition-colors ${
//             isActive("/jobAlerts") 
//               ? "bg-blue-900 text-white" 
//               : "text-gray-900 hover:bg-gray-100 hover:text-blue-500"
//           }`}
//         >
//           Job Alerts
//         </Link>
//         {/* <Link 
//           to="/settings" 
//           className={`block px-4 py-3 rounded-lg transition-colors ${
//             isActive("/settings") 
//               ? "bg-blue-900 text-white" 
//               : "text-gray-900 hover:bg-gray-100 hover:text-blue-500"
//           }`}
//         >
//           Settings
//         </Link> */}
//       </nav>

//       <button 
//         onClick={handleLogout}
//         className="text-red-500 hover:text-red-400 font-semibold px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-left cursor-pointer"
//       >
//         Log out
//       </button>
//     </div>
//   );
// };

// export default Sidebar;
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TrendingUp, Briefcase, Bell, Settings, LogOut } from "lucide-react";
=======
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
>>>>>>> c7f93f4b179963699e8a840a35bd41a0158d769a

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

<<<<<<< HEAD
  const menuItems = [
    { path: "/dashboard", label: "Overview", icon: TrendingUp },
    { path: "/AppliedJobs", label: "Applied Jobs", icon: Briefcase },
    { path: "/jobAlerts", label: "Job Alerts", icon: Bell },
    { path: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="w-72 h-screen bg-gradient-to-b from-blue-950 to-blue-950 text-white p-6 fixed top-0 left-0 flex flex-col shadow-2xl">
      <div className="flex items-center gap-3 mb-12">
        <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
          <Briefcase className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold">MyJob</h1>
      </div>

      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 ${
                isActive(item.path)
                  ? "bg-white text-blue-900 shadow-lg"
                  : "text-blue-100 hover:bg-blue-800 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
=======
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
>>>>>>> c7f93f4b179963699e8a840a35bd41a0158d769a
      </nav>

      <button 
        onClick={handleLogout}
<<<<<<< HEAD
        className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-red-300 hover:bg-red-900 hover:text-white transition-all duration-200 mt-4"
      >
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Log out</span>
=======
        className="text-red-500 hover:text-red-400 font-semibold px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-left cursor-pointer"
      >
        Log out
>>>>>>> c7f93f4b179963699e8a840a35bd41a0158d769a
      </button>
    </div>
  );
};

export default Sidebar;