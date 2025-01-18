import React from 'react';
import Hero from '@/widgets/Hero';
import Portfolio from '@/widgets/Portfolio';
import TarifsComponent from '@/widgets/TarifsBlock';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Portfolio />
      <TarifsComponent />
    </div>
  );
};

export default HomePage;
