import React from 'react';
import image1 from '../assets/images/Icon.png';
import image4 from '../assets/images/Icon1.png';
import image3 from '../assets/images/Icon2.png';
import image2 from '../assets/images/Icon4.png';

export default function HowJobPilotWorks() {
  const steps = [
    {
      icon: image3,
      title: 'Create account',
      description: 'Aliquam facilisis egestas sapien, nec tempor leo tristique at.',
    },
    {
      icon: image2,
      title: 'Upload CV/Resume',
      description: 'Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales',
    },
    {
      icon: image1,
      title: 'Find suitable job',
      description: 'Phasellus quis eleifend ex. Morbi nec fringilla nibh.',
    },
    {
      icon: image4,
      title: 'Apply job',
      description: 'Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales purus.',
    },
  ];

  return (
    <section className="py-10 md:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">How jobpilot work</h2>

        {/* Desktop View */}
        <div className="hidden lg:flex justify-center items-center space-x-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="text-center max-w-xs">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src={step.icon} alt={step.title} className="w-14 h-14 object-contain" />
                </div>

                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="text-gray-300 text-4xl">→</div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile/Tablet View */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src={step.icon} alt={step.title} className="w-14 h-14 object-contain" />
              </div>

              <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">{step.title}</h3>
              <p className="text-xs md:text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}