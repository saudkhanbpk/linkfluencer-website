import React from 'react';
import Image from 'next/image';
import mainLogo from '../../../public/images/main_logo.png';
import { useRouter } from 'next/router';

const Logo = () => {
  const router = useRouter();
  return (
  <div className="mt-4 ml-4 cursor-pointer">
    <Image src={mainLogo} alt="Logo" width={150} height={40} onClick={()=> router.push('/')} />
  </div>
)};

export default Logo;