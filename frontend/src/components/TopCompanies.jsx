import React from 'react';
import { MapPin } from 'lucide-react';
import dribbbleIcon from '../assets/images/Employers Logo.png';
import upworkIcon from '../assets/images/Employers Logo3.png';
import slackIcon from '../assets/images/Employers Logo1.png';
import freepikIcon from '../assets/images/Employers Logo2.png';

export default function TopCompanies() {
  const companies = [
    { name: 'Dribbble', location: 'United States', featured: true, icon: dribbbleIcon, color: 'bg-pink-500' },
    { name: 'Upwork', location: 'United States', icon: upworkIcon, color: 'bg-green-400' },
    { name: 'Slack', location: 'China', icon: slackIcon, color: 'bg-white', bordered: true },
    { name: 'Freepik', location: 'United States', icon: freepikIcon, color: 'bg-blue-600' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Top companies</h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 bg-blue-50">
              <span className="text-blue-600">←</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100">
              <span className="text-gray-600">→</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...companies, ...companies].map((company, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                
                {/* Updated image container */}
                <div className={`${company.color} ${company.bordered ? 'border-2 border-gray-200' : ''} rounded-lg h-16 w-16 flex items-center justify-center shrink-0`}>
                  <img 
                    src={company.icon} 
                    alt={`${company.name} logo`} 
                    className="w-16 h-16 object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{company.name}</h3>
                    {company.featured && (
                      <span className="bg-yellow-50 text-yellow-600 text-xs px-2 py-1 rounded font-medium border border-yellow-200">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {company.location}
                  </p>
                </div>
              </div>
              
              <button className="w-full bg-blue-50 text-blue-600 py-2.5 px-4 rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm">
                Open Position
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
