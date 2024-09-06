import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';

const Navbar = ({ selectedComponent, setSelectedComponent }: { selectedComponent: any, setSelectedComponent: any }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="md:absolute p-4 flex justify-between w-[100%]">
      <div className='cursor-pointer'>
        <Image src='/images/main_logo.png' alt="Logo" width={150} height={40} onClick={() => router.push('/')} />
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex gap-2 items-center">
        <button
          className={`py-2 px-6 border rounded-full ${menuOpen ? 'hidden' : 'block'}`}
          onClick={() => router.push('/signin')}
        >
          Log In
        </button>
        <button onClick={toggleMenu} className="focus:outline-none ">
          {menuOpen ? <HiX className='relative bottom-[85px] left-48  self-center' size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Display Buttons */}
      <div className={`flex-col gap-4 ${menuOpen ? 'flex relative top-12 md:top-0' : 'hidden'} md:flex md:flex-row md:gap-4`}>
        <button
          className={`py-2 px-4 rounded-full ${selectedComponent === 'Influencer' ? 'bg-gray-100' : ''}`}
          onClick={() => setSelectedComponent('Influencer')}
        >
          Influencer
        </button>
        <button
          className={`py-2 px-4 rounded-full ${selectedComponent === 'Brand' ? 'bg-gray-100' : ''}`}
          onClick={() => setSelectedComponent('Brand')}
        >
          Brand
        </button>
        <button
          className="py-2 px-6 md:hidden border rounded-full"
          onClick={() => router.push('/signin')}
        >
          Log In
        </button>
        <button
          className="py-2 px-6 md:hidden border rounded-full bg-[#59FF93]"
          onClick={() => router.push('/signup')}
        >
          Sign Up for free
        </button>
      </div>

      {/* Desktop Buttons (Visible in larger screens) */}
      {
      //   <div className="hidden md:flex gap-4">
      //   <button
      //     className="py-2 px-6 border rounded-full"
      //     onClick={() => router.push('/signin')}
      //   >
      //     Log In
      //   </button>
      //   <button
      //     className="py-2 px-6 border rounded-full bg-[#59FF93]"
      //     onClick={() => router.push('/signup')}
      //   >
      //     Sign Up for free
      //   </button>
      // </div>
        <Link href={"http://localhost:3001"}>
         <button
          className="py-2 px-6 border rounded-full bg-[#59FF93] border-gray-300"
          // onClick={() => router.push('/signup')}
        >
          My Dashboard
        </button>
        </Link>
      }
    </div>
  );
};

export default Navbar;
