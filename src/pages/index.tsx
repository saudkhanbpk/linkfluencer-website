import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import InfluencerData from '@/components/InfluencerData/InfluencerData';
const index = () => {
  
  return (
  <>
  <Navbar/>
  <div className='relative top-20  '>
  <InfluencerData/>

  </div>
 
  </>
   )
};

export default index;