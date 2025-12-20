import React from "react";

type ResumeCardProps = {
  title: string;
  size: string;
};

const ResumeCard: React.FC<ResumeCardProps> = ({ title, size }) => {
  return (
    <div className="bg-white border p-5 rounded-xl shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-500 text-sm">{size}</p>

      <div className="flex gap-4 mt-4">
        <button className="text-blue-600 text-sm hover:underline">✏ Edit Resume</button>
        <button className="text-red-500 text-sm hover:underline">🗑 Delete</button>
      </div>
    </div>
  );
};

const Settings: React.FC = () => {
  return (
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

          <div className="grid grid-cols-3 gap-6">

            {/* Upload Photo Box */}
            <div className="border-dashed border-2 border-gray-300 p-6 rounded-xl flex flex-col justify-center items-center text-gray-500 text-center">
              <p>Browse photo or drop here</p>
              <span className="text-sm">(Max 2MB)</span>
            </div>

            {/* Inputs */}
            <div className="col-span-2 grid grid-cols-2 gap-4">
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
                placeholder="Website URL..."
              />
            </div>
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-6 hover:bg-blue-700 transition">
            Save Changes
          </button>
        </div>

        {/* Resume Section */}
        <h2 className="text-xl font-semibold mt-10 mb-4">Your CV/Resume</h2>

        <div className="grid grid-cols-3 gap-6">
          <ResumeCard title="Professional Resume" size="3.6 MB" />
          <ResumeCard title="Product Designer" size="4.7 MB" />
          <ResumeCard title="Visual Designer" size="1.3 MB" />
        </div>

      </div>
    </div>
  );
};

export default Settings;