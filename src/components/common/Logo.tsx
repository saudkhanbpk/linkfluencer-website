import React from 'react';
import Image from 'next/image';
import mainLogo from '../../../public/images/main_logo.png';

const Logo = () => (
  <div className="absolute top-0 left-0 mt-4 ml-4">
    <Image src={mainLogo} alt="Logo" width={150} height={40} />
  </div>
);

export default Logo;