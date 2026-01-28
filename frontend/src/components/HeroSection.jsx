import React from "react";
import {
  Search,
  MapPin,
  Briefcase,
  Building2,
  Users,
  FileText,
} from "lucide-react";
import heroimg from "../assets/images/image2.jpeg";

export default function HeroSection() {
  return (
    <section className="bg-gradient from-blue-50 to-white py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 w-full pb-6 lg:pb-0 lg:pr-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
              Find a job that suits
              <br />
              your interest & skills.
            </h1>
            <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base lg:text-lg max-w-xl">
              Discover job opportunities that match your passion, experience,
              and career goals. Start exploring roles that truly fit your
              skills.
            </p>

            {/* Browse Jobs Button and Stats */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6">
              <button className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm md:text-base shadow-md cursor-pointer">
                Browse Jobs
              </button>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">
                  20k+
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  daily active users
                </p>
              </div>
            </div>

            <p className="text-xs md:text-sm text-gray-500 mt-4">
              Suggestion:{" "}
              <span className="text-gray-700">
                Designer, Programing,{" "}
                <span className="text-gray-600">Digital Marketing</span>, Video,
                Animation
              </span>
            </p>
          </div>

          {/* Right Image - Larger and aligned left */}
          <div className="flex-1 w-full flex justify-start lg:justify-center">
            <img
              src={heroimg}
              alt="Job Search"
              className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl h-96 md:h-122 lg:h-128 xl:h-144 object-contain"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-10 md:mt-12 lg:mt-16">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="bg-blue-100 p-2 md:p-3 rounded">
                <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-blue-800" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-600">
                  1,75,324
                </h3>
                <p className="text-sm md:text-base text-gray-600">Live Job</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-800 p-4 md:p-6 rounded-lg shadow-sm  hover:bg-gray-800 transition-colors font-medium text-sm md:text-base cursor-pointer">
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="bg-white p-2 md:p-3 rounded">
                <Building2 className="w-6 h-6 md:w-8 md:h-8 text-gray-600" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  97,354
                </h3>
                <p className="text-sm md:text-base text-blue-100">Companies</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="bg-blue-100 p-2 md:p-3 rounded">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-800" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  38,47,154
                </h3>
                <p className="text-sm md:text-base text-gray-600">Candidates</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="bg-blue-100 p-2 md:p-3 rounded">
                <FileText className="w-6 h-6 md:w-8 md:h-8 text-blue-800" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  7,532
                </h3>
                <p className="text-sm md:text-base text-gray-600">New Jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
