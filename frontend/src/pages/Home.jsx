import React from 'react';
import HeroSection from '../components/HeroSection';
import MostPopularVacancies from '../components/MostPopularVacancies';
import HowJobPilotWorks from '../components/HowJobPilotWorks';
import PopularCategory from '../components/PopularCategory';
import FeaturedJob from '../components/FeaturedJob';
import TopCompanies from '../components/TopCompanies';
import ClientsTestimonial from '../components/ClientsTestimonial';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MostPopularVacancies />
      <HowJobPilotWorks />
      <PopularCategory />
      <FeaturedJob />
      <TopCompanies />
      <ClientsTestimonial />
    </>
  );
}