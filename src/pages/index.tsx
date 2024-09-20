import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import InfluencerData from '@/components/InfluencerData/InfluencerData';
import BrandData from '@/components/BrandData/BrandData';

const Index = () => {
  const [selectedComponent, setSelectedComponent] = useState('Influencer');

  return (
    <>
      <Navbar
        selectedComponent={selectedComponent}
        setSelectedComponent={setSelectedComponent}
      />
      <div className="relative">
        {selectedComponent === 'Influencer' && <InfluencerData />}
        {selectedComponent === 'Brand' && <BrandData />}
      </div>
      <Footer />
    </>
  );
};

export default Index;
