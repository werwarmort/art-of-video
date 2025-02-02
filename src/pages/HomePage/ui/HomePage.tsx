import React from 'react';
import Hero from '@/widgets/Hero';
import Portfolio from '@/widgets/Portfolio';
import TarifsComponent from '@/widgets/TarifsBlock';
import AboutMeBlock from '@/widgets/AboutMeBlock';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Portfolio />
      <TarifsComponent />
      <AboutMeBlock />
    </div>
  );
};

export default HomePage;
