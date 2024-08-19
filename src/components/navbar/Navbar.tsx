import React from 'react';
import Image from 'next/image';
import mainLogo from '../../../public/images/main_logo.png';
import { useRouter } from 'next/router';

const Navbar = ({ selectedComponent, setSelectedComponent }) => {
  const router = useRouter();

  return (
    <div className="md:absolute p-4 flex justify-between w-[100%]">
      <div>
        <Image src={mainLogo} alt="Logo" width={150} height={40} />
      </div>
      <div className="md:flex hidden gap-4 md:my-0 my-2">
        <button
          className={`py-2 px-4 rounded-full ${
            selectedComponent === 'Influencer' ? 'bg-gray-100' : ''
          }`}
          onClick={() => setSelectedComponent('Influencer')}
        >
          Influencer
        </button>
        <button
          className={` py-2 px-4 rounded-full ${
            selectedComponent === 'Brand' ? 'bg-gray-100' : ''
          }`}
          onClick={() => setSelectedComponent('Brand')}
        >
          Brand
        </button>
      </div>
      <div className="flex gap-4">
        <button
          className="py-2 px-6 border rounded-full"
          onClick={() => router.push('/signin')}
        >
          Log In
        </button>
        <button
          className="py-2 px-6 md:block hidden border rounded-full bg-[#59FF93]"
          onClick={() => router.push('/signup')}
        >
          Sign Up for free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
