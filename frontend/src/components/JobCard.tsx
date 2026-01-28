import React from "react";
import { MapPin, DollarSign, Calendar, ChevronRight } from "lucide-react";

type JobCardProps = {
  role: string;
  location: string;
  salary: string;
  type: string;
  status: string;
  date: string;
};

const JobCard: React.FC<JobCardProps> = ({ role, location, salary, type, status, date }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 group">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {role}
          </h3>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span className="text-sm">{location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <DollarSign className="w-4 h-4 text-green-500" />
              <span className="text-sm font-semibold text-gray-900">{salary}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4 text-purple-500" />
              <span className="text-sm">{date}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3">
          <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
            {type}
          </span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
            {status}
          </span>
        </div>
      </div>

      <button className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-blue-800 to-blue-950 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
        View Details
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default JobCard;