import React from 'react';
import Icon1 from '../assets/images/Icon5.png';
import Icon2 from '../assets/images/Icon6.png';
import Icon3 from '../assets/images/Icon7.png';
import Icon4 from '../assets/images/Icon8.png';
import Icon5 from '../assets/images/Icon9.png';
import Icon6 from '../assets/images/Icon10.png';
import Icon7  from '../assets/images/Icon11.png';
import Icon8 from '../assets/images/Icon12.png';



export default function PopularCategory() {
 const categories = [
  { icon: Icon1, name: 'Graphics & Design', positions: '357 Open position' },
  { icon: Icon2, name: 'Code & Programing', positions: '312 Open position' },
  { icon: Icon3, name: 'Digital Marketing', positions: '297 Open position' },
  { icon: Icon4, name: 'Video & Animation', positions: '247 Open position' },
  { icon: Icon5, name: 'Music & Audio', positions: '204 Open position' },
  { icon: Icon6, name: 'Account & Finance', positions: '167 Open position' },
  { icon: Icon7, name: 'Health & Care', positions: '125 Open position' },
  { icon: Icon8, name: 'Data & Science', positions: '57 Open position' },
];


  return (
    <section className="py-10 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Popular category</h2>
          <a href="#" className="text-blue-700  flex items-center space-x-2 text-sm md:text-base">
            <span>View All</span>
            <span>→</span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-5 md:p-6 rounded-lg border ${category.name === 'Data & Science'
                  ? 'bg-blue-900 text-white border-blue-800  hover:bg-gray-900 transition-colors'
                  : 'bg-white border-gray-200 hover:shadow-md'
                } transition`}
            >
              <div className="mb-3">
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-14 h-14 object-contain"
                />
              </div>

              <h3 className={`font-semibold mb-1 text-sm md:text-base ${category.name === 'Data & Science' ? 'text-white' : 'text-gray-900'
                }`}>
                {category.name}
              </h3>
              <p className={`text-xs md:text-sm ${category.name === 'Data & Science' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                {category.positions}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}