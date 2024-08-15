import React from 'react';
import Image from 'next/image';
import mainLogo from '@/public/images/main_logo.png';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router= useRouter()
  return (
  <div className="absolute p-4  md:flex justify-between w-full">
    <div>
    <Image src={mainLogo} alt="Logo" width={150} height={40} />
    </div>
    
    <div className='flex gap-4'>
      <button className='border py-2 px-4 rounded-full'>Influencer</button>
      <button className='border py-2 px-4 rounded-full'>Brand</button>
    </div>
    <div className='flex gap-4' ><button className='py-2 px-6 border rounded-full' onClick={()=>router.push('/signin')}>Log In</button>
    <button className='py-2 px-6 border rounded-full bg-[#59FF93]' onClick={()=>router.push('/signup')}>Sign Up for free</button></div>
  </div>
   )
};

export default Navbar;