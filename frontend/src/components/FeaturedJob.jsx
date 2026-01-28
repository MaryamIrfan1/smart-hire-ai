import React from 'react';
import { MapPin, DollarSign, Clock, Bookmark, ArrowRight } from 'lucide-react';

export default function FeaturedJob() {
  const jobs = [
    {
      id: 1,
      title: 'Senior UX Designer',
      company: 'Upwork',
      companyIcon: 'up',
      companyColor: 'bg-green-400',
      location: 'Australia',
      salary: '$30K-$35K',
      timeRemaining: '4 Days Remaining',
      type: 'Contract Base',
      typeColor: 'bg-yellow-50 text-yellow-600 border-yellow-200'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Slack',
      companyIcon: '#',
      companyColor: 'bg-white border-2 border-gray-300',
      location: 'United States',
      salary: '$80K-$120K',
      timeRemaining: '2 Days Remaining',
      type: 'Full Time',
      typeColor: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      id: 3,
      title: 'Product Manager',
      company: 'Dribbble',
      companyIcon: '🏀',
      companyColor: 'bg-pink-500',
      location: 'United Kingdom',
      salary: '$60K-$90K',
      timeRemaining: '7 Days Remaining',
      type: 'Part Time',
      typeColor: 'bg-blue-50 text-blue-600 border-blue-200'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured job</h2>
          <a href="#" className="text-blue-600 flex items-center gap-2 hover:text-blue-700 font-medium">
            <span>View All</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`${job.companyColor} w-14 h-14 rounded-lg flex items-center justify-center text-white font-bold text-xl shrink-0`}>
                    <span className={job.companyColor.includes('bg-white') ? 'text-gray-700' : ''}>
                      {job.companyIcon}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900 text-lg">{job.title}</h3>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium border ${job.typeColor}`}>
                        {job.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.timeRemaining}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="text-gray-400 hover:text-gray-800 transition-colors p-2">
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <button className="bg-blue-800 text-white px-6 py-2.5 rounded-lg hover:bg-gray-900 transition-colors font-medium flex items-center gap-2">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}