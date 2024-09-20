import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { useUser } from "@/context/userContext";
import { CrossIcon, ToggleIcon } from "@/svg";
import useDeviceDetect from "@/helper/screens";
import { DotIcon } from "lucide-react";
const Navbar = ({
  selectedComponent,
  setSelectedComponent,
}: {
  selectedComponent: any;
  setSelectedComponent: any;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { user } = useUser();
  const { isMobile } = useDeviceDetect();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    console.log({ user });
  }, []);
  return (
    // <div className="flex justify-between items-center w-[100%] border border-green-500 h-[52px] md:h-[92px]  px-[20px] md:px-[80px]">
    //   <div className='cursor-pointer'>
    //     <Image src='/images/logo.svg' alt="Logo" width={150} height={40} onClick={() => router.push('/')} />
    //   </div>

    //   {/* Mobile Menu Icon */}
    //   <div className="md:hidden flex gap-2 items-center">
    //    { user == null?  <button
    //       className={`py-1 md:py-2 px-6 mr-2 border rounded-full ${menuOpen ? 'hidden' : 'block'}`}
    //       onClick={() => router.push('/signin')}
    //     >
    //       Log In
    //     </button>:
    //       <Link href={"http://localhost:3001"}>
    //       <button
    //        className="py-2 px-4 border rounded-full border-gray-300 text-sm"
    //      >
    //        My Dashboard
    //      </button>
    //      </Link>
    //     }
    //     <button onClick={toggleMenu} className="focus:outline-none ">
    //       {menuOpen ? <HiX className='relative bottom-[85px] left-48  self-center' size={28} /> : <HiMenu size={28} />}
    //     </button>
    //   </div>

    //   {/* Mobile Menu - Display Buttons */}
    //   <div className={`flex-col gap-4 ${menuOpen ? 'flex relative top-12 md:top-0' : 'hidden'} md:flex md:flex-row md:gap-4`}>
    //     <button
    //       className={`py-2 px-4 rounded-full ${selectedComponent === 'Influencer' ? 'bg-gray-100' : ''}`}
    //       onClick={() => setSelectedComponent('Influencer')}
    //     >
    //       Influencer
    //     </button>
    //     <button
    //       className={`py-2 px-4 rounded-full ${selectedComponent === 'Brand' ? 'bg-gray-100' : ''}`}
    //       onClick={() => setSelectedComponent('Brand')}
    //     >
    //       Brand
    //     </button>
    //     <button
    //       className="py-2 px-6 md:hidden border rounded-full"
    //       onClick={() => router.push('/signin')}
    //     >
    //       Log In
    //     </button>
    //     <button
    //       className="py-2 px-6 md:hidden border rounded-full bg-[#59FF93]"
    //       onClick={() => router.push('/signup')}
    //     >
    //       Sign Up for free
    //     </button>
    //   </div>

    //   {/* Desktop Buttons (Visible in larger screens) */}
    //   {
    //     user == null?
    //     <div className="hidden md:flex gap-4">
    //     <button
    //       className="py-2 px-6 border rounded-full"
    //       onClick={() => router.push('/signin')}
    //     >
    //       Log In
    //     </button>
    //     <button
    //       className="py-2 px-6 border rounded-full bg-[#59FF93]"
    //       onClick={() => router.push('/signup')}
    //     >
    //       Sign Up for free
    //     </button>
    //   </div> :
    //     <Link href={"http://localhost:3001"} className='hidden md:block'>
    //      <button
    //       className="py-2 px-6 border rounded-full bg-[#59FF93] border-gray-300"
    //     >
    //       My Dashboard
    //     </button>
    //     </Link>
    //   }
    // </div>
    <div className="">
      <div className="flex justify-between items-center w-[100%] h-[52px] md:h-[92px] px-[20px] md:px-[80px]">
        <div>
          <div className="cursor-pointer">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={150}
              height={40}
              onClick={() => router.push("/")}
            />
          </div>
        </div>
        {!isMobile && (
          <div>
            <ul className="flex items-center gap-x-6 font-[700] text-[#113E53]">
              <li onClick={() => setSelectedComponent("Influencer")} className={`cursor-pointer py-[10px] px-[16px] rounded-3xl ${selectedComponent == "Influencer" && "bg-neutral-50"} flex items-center`}>{selectedComponent == "Influencer" ? <DotIcon className={"size-8"} />:<></>}<span>Influencer</span></li>
              <li onClick={() => setSelectedComponent("Brand")} className={`cursor-pointer py-[10px] px-[16px] rounded-3xl ${selectedComponent == "Brand" && "bg-neutral-50"} flex items-center`}>{selectedComponent == "Brand" ? <DotIcon className={"size-8"} />:<></>}<span>Brand</span></li>
            </ul>
          </div>
        )}
        <div>
          <div className="flex items-center">
           {!menuOpen && !user && <button onClick={() => router.push('/signup')} className="border border-[#113E53] w-[82px] md:w-[106px] h-[32px] md:h-[44px] rounded-3xl font-[700] mr-[14px]">
              Log In
            </button>}
            {!menuOpen && user && <button onClick={() => router.push('http://localhost:3001/')} className="border border-[#113E53] px-[20px] text-xs md:text-sm md:px-[40px] h-[32px] md:h-[44px] rounded-3xl font-[700] mr-[14px]">
              My Dashboard
            </button>}
            {!isMobile ? (
             !user && <button onClick={() => router.push('/signin')} className="w-[172px] h-[44px] bg-[#59FF93] rounded-3xl font-[700]">
                Sign Up for free
              </button>
            ) : !menuOpen ? (
              <ToggleIcon onClick={toggleMenu} className={"size-8 cursor-pointer"} />
            ) : (
              <CrossIcon className={"size-8 cursor-pointer"} onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>
      {menuOpen && <div className="w-full duration-300">
        <ul className="border flex flex-col bg-neutral-100  items-end py-[27px] px-[20px]">
          <li
            onClick={() => setSelectedComponent("Influencer")}
            className={`h-[44px] px-[20px] ${
              selectedComponent == "Influencer" ? "bg-white" : ""
            } rounded-3xl flex items-center justify-center`}
          >
            {selectedComponent == "Influencer" && (
              <DotIcon className={"size-8"} />
            )}
            <span>Influencer</span>
          </li>
          <li
            onClick={() => setSelectedComponent("Brand")}
            className={`mb-[14px] h-[44px] px-[20px] ${
              selectedComponent == "Brand" ? "bg-white" : ""
            } rounded-3xl flex items-center justify-center`}
          >
            {selectedComponent == "Brand" && <DotIcon className={"size-8"} />}
            <span>Brand</span>
          </li>
          {!user &&<><li>
            <button className="border border-[#113E53] mb-[14px] w-[82px] md:w-[106px] h-[32px] md:h-[44px] rounded-3xl font-[700]">
              Log In
            </button>
          </li>
          <li>
            <button className="w-[172px] h-[44px] bg-[#59FF93] rounded-3xl font-[700]">
              Sign Up for free
            </button>
          </li>
          </>
          }
          {user && <li onClick={() => router.push('http://localhost:3001/')} className="border border-[#113E53] px-[20px] rounded-3xl p-2">
              My Dashboard
            </li>}
        </ul>
      </div>}
    </div>
  );
};

export default Navbar;
