import React from 'react';

export default function MostPopularVacancies() {
  const vacancies = [
    { title: 'Anesthesiologists', positions: '45,904 Open Positions' },
    { title: 'Surgeons', positions: '50,364 Open Positions' },
    { title: 'Obstetricians-Gynecologists', positions: '4,339 Open Positions' },
    { title: 'Orthodontists', positions: '20,079 Open Positions' },
    { title: 'Maxillofacial Surgeons', positions: '74,875 Open Positions' },
    { title: 'Software Developer', positions: '43359 Open Positions' },
    { title: 'Psychiatrists', positions: '18,599 Open Positions' },
    { title: 'Data Scientist', positions: '28,200 Open Positions', highlight: true },
    { title: 'Financial Manager', positions: '61,391 Open Positions' },
    { title: 'Management Analysis', positions: '93,046 Open Positions' },
    { title: 'IT Manager', positions: '50,963 Open Positions' },
    { title: 'Operations Research Analysis', positions: '16,627 Open Positions' },
  ];

  return (
    <section className="py-10 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Most Popular Vacancies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {vacancies.map((vacancy, index) => (
            <div key={index} className="space-y-1 p-4 hover:bg-gray-50 rounded-lg transition">
              <h3 className={`font-medium text-sm md:text-base ${vacancy.highlight ? 'text-blue-800' : 'text-gray-900'}`}>
                {vacancy.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500">{vacancy.positions}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

