<<<<<<< HEAD
// import React from "react";

// type ResumeCardProps = {
//   title: string;
//   size: string;
// };

// const ResumeCard: React.FC<ResumeCardProps> = ({ title, size }) => {
//   return (
//     <div className="bg-white border p-5 rounded-xl shadow-sm hover:shadow-md transition">
//       <h3 className="font-semibold text-lg">{title}</h3>
//       <p className="text-gray-500 text-sm">{size}</p>

//       <div className="flex gap-4 mt-4">
//         <button className="text-blue-600 text-sm hover:underline">✏ Edit Resume</button>
//         <button className="text-red-500 text-sm hover:underline">🗑 Delete</button>
//       </div>
//     </div>
//   );
// };

// const Settings: React.FC = () => {
//   return (
//     <div className="min-h-screen flex bg-gray-100">

//       {/* Sidebar */}
//       <div className="w-64 h-screen bg-white border-r p-6 fixed left-0 top-0">
//         <h1 className="text-2xl font-bold mb-10">MyJob</h1>

//         <nav className="space-y-5 font-medium">
//           <p className="cursor-pointer hover:text-black text-gray-600">Overview</p>
//           <p className="cursor-pointer hover:text-black text-gray-600">Applied Jobs</p>
//           <p className="cursor-pointer hover:text-black text-gray-600">Favorite Jobs</p>
//           <p className="cursor-pointer hover:text-black text-gray-600">Job Alert</p>
//           <p className="text-blue-600">Settings</p>
//         </nav>

//         <button className="text-red-500 font-semibold mt-16">Log out</button>
//       </div>

//       {/* Main Content */}
//       <div className="ml-64 w-full p-10">

//         <h1 className="text-2xl font-semibold mb-6">Setting</h1>

//         {/* Personal Info Section */}
//         <div className="bg-white p-8 rounded-xl shadow-sm">
//           <h2 className="font-semibold text-lg mb-4">Basic Information</h2>

//           <div className="grid grid-cols-3 gap-6">

//             {/* Upload Photo Box */}
//             <div className="border-dashed border-2 border-gray-300 p-6 rounded-xl flex flex-col justify-center items-center text-gray-500 text-center">
//               <p>Browse photo or drop here</p>
//               <span className="text-sm">(Max 2MB)</span>
//             </div>

//             {/* Inputs */}
//             <div className="col-span-2 grid grid-cols-2 gap-4">
//               <input className="border p-3 rounded-lg" placeholder="Full name" />
//               <input className="border p-3 rounded-lg" placeholder="Title/headline" />

//               <select className="border p-3 rounded-lg text-gray-600">
//                 <option>Select Experience</option>
//               </select>

//               <select className="border p-3 rounded-lg text-gray-600">
//                 <option>Select Education</option>
//               </select>

//               <input
//                 className="border p-3 rounded-lg col-span-2"
//                 placeholder="Website URL..."
//               />
//             </div>
//           </div>

//           <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-6 hover:bg-blue-700 transition">
//             Save Changes
//           </button>
//         </div>

//         {/* Resume Section */}
//         <h2 className="text-xl font-semibold mt-10 mb-4">Your CV/Resume</h2>

//         <div className="grid grid-cols-3 gap-6">
//           <ResumeCard title="Professional Resume" size="3.6 MB" />
//           <ResumeCard title="Product Designer" size="4.7 MB" />
//           <ResumeCard title="Visual Designer" size="1.3 MB" />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Settings;

import React from "react";
import Sidebar from "../components/Sidebar";
import { Upload, Edit2, Trash2 } from "lucide-react";
=======
import React from "react";
>>>>>>> c7f93f4b179963699e8a840a35bd41a0158d769a

type ResumeCardProps = {
  title: string;
  size: string;
};

const ResumeCard: React.FC<ResumeCardProps> = ({ title, size }) => {
  return (
<<<<<<< HEAD
    <div className="bg-white border-2 border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl flex items-center justify-center">
          <Upload className="w-6 h-6 text-white" />
        </div>
        <span className="text-xs text-gray-500 font-medium">{size}</span>
      </div>
      
      <h3 className="font-bold text-lg text-gray-900 mb-4">{title}</h3>

      <div className="flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 text-blue-900 bg-blue-50 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-100 transition-all">
          <Edit2 className="w-4 h-4" />
          Edit
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 text-red-600 bg-red-50 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-red-100 transition-all">
          <Trash2 className="w-4 h-4" />
          Delete
        </button>
=======
    <div className="bg-white border p-5 rounded-xl shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-500 text-sm">{size}</p>

      <div className="flex gap-4 mt-4">
        <button className="text-blue-600 text-sm hover:underline">✏ Edit Resume</button>
        <button className="text-red-500 text-sm hover:underline">🗑 Delete</button>
>>>>>>> c7f93f4b179963699e8a840a35bd41a0158d769a
      </div>
    </div>
  );
};

const Settings: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-72 w-full p-8">
        
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
            Settings
          </h1>
        </div>

        {/* Personal Info Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <h2 className="font-bold text-2xl mb-6 text-gray-900">Basic Information</h2>
=======
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 h-screen bg-white border-r p-6 fixed left-0 top-0">
        <h1 className="text-2xl font-bold mb-10">MyJob</h1>

        <nav className="space-y-5 font-medium">
          <p className="cursor-pointer hover:text-black text-gray-600">Overview</p>
          <p className="cursor-pointer hover:text-black text-gray-600">Applied Jobs</p>
          <p className="cursor-pointer hover:text-black text-gray-600">Favorite Jobs</p>
          <p className="cursor-pointer hover:text-black text-gray-600">Job Alert</p>
          <p className="text-blue-600">Settings</p>
        </nav>

        <button className="text-red-500 font-semibold mt-16">Log out</button>
      </div>

      {/* Main Content */}
      <div className="ml-64 w-full p-10">

        <h1 className="text-2xl font-semibold mb-6">Setting</h1>

        {/* Personal Info Section */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="font-semibold text-lg mb-4">Basic Information</h2>
>>>>>>> c7f93f4b179963699e8a840a35bd41a0158d769a

          <div className="grid grid-cols-3 gap-6">

            {/* Upload Photo Box */}
<<<<<<< HEAD
            <div className="border-2 border-dashed border-gray-300 p-8 rounded-2xl flex flex-col justify-center items-center text-gray-500 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-all">
                <Upload className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-all" />
              </div>
              <p className="font-medium text-center">Browse photo or drop here</p>
              <span className="text-sm text-gray-400 mt-1">Max 2MB</span>
=======
            <div className="border-dashed border-2 border-gray-300 p-6 rounded-xl flex flex-col justify-center items-center text-gray-500 text-center">
              <p>Browse photo or drop here</p>
              <span className="text-sm">(Max 2MB)</span>
>>>>>>> c7f93f4b179963699e8a840a35bd41a0158d769a
            </div>

            {/* Inputs */}
            <div className="col-span-2 grid grid-cols-2 gap-4">
<<<<<<< HEAD
              <input 
                className="border-2 border-gray-200 p-3.5 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" 
                placeholder="Full name" 
              />
              <input 
                className="border-2 border-gray-200 p-3.5 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" 
                placeholder="Title/headline" 
              />

              <select className="border-2 border-gray-200 p-3.5 rounded-xl text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all">
                <option>Select Experience</option>
                <option>0-1 years</option>
                <option>1-3 years</option>
                <option>3-5 years</option>
                <option>5+ years</option>
              </select>

              <select className="border-2 border-gray-200 p-3.5 rounded-xl text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all">
                <option>Select Education</option>
                <option>High School</option>
                <option>Bachelor's Degree</option>
                <option>Master's Degree</option>
                <option>PhD</option>
              </select>

              <input
                className="border-2 border-gray-200 p-3.5 rounded-xl col-span-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
=======
              <input className="border p-3 rounded-lg" placeholder="Full name" />
              <input className="border p-3 rounded-lg" placeholder="Title/headline" />

              <select className="border p-3 rounded-lg text-gray-600">
                <option>Select Experience</option>
              </select>

              <select className="border p-3 rounded-lg text-gray-600">
                <option>Select Education</option>
              </select>

              <input
                className="border p-3 rounded-lg col-span-2"
>>>>>>> c7f93f4b179963699e8a840a35bd41a0158d769a
                placeholder="Website URL..."
              />
            </div>
          </div>

<<<<<<< HEAD
          <button className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-8 py-3.5 rounded-xl mt-6 font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl">
=======
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-6 hover:bg-blue-700 transition">
>>>>>>> c7f93f4b179963699e8a840a35bd41a0158d769a
            Save Changes
          </button>
        </div>

        {/* Resume Section */}
<<<<<<< HEAD
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your CV/Resume</h2>
          <p className="text-gray-600">Manage your resumes and CVs</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <ResumeCard title="Professional Resume" size="3.6 MB" />
          <ResumeCard title="Product Designer CV" size="4.7 MB" />
          <ResumeCard title="Visual Designer Portfolio" size="1.3 MB" />
        </div>

        {/* Add New Resume */}
        <div className="mt-6">
          <button className="border-2 border-dashed border-gray-300 w-full p-8 rounded-2xl flex flex-col justify-center items-center text-gray-500 hover:border-blue-500 hover:bg-blue-50 transition-all group">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-all">
              <Upload className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-all" />
            </div>
            <p className="font-semibold text-lg">Upload New Resume</p>
            <span className="text-sm text-gray-400 mt-1">PDF, DOC, DOCX (Max 5MB)</span>
          </button>
        </div>
=======
        <h2 className="text-xl font-semibold mt-10 mb-4">Your CV/Resume</h2>

        <div className="grid grid-cols-3 gap-6">
          <ResumeCard title="Professional Resume" size="3.6 MB" />
          <ResumeCard title="Product Designer" size="4.7 MB" />
          <ResumeCard title="Visual Designer" size="1.3 MB" />
        </div>

>>>>>>> c7f93f4b179963699e8a840a35bd41a0158d769a
      </div>
    </div>
  );
};

export default Settings;