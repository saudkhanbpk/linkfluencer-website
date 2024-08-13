"use client"
import Image from 'next/image';
import { useState } from 'react';
import LocationIcon from '../Images/Dashboard.png';
import MarketzLogo from '../Images/Logo.png';
import Clock from '../Images/Mylink.png';
import HourGlassIcon from '../Images/bulkUpload.png';
import AddressBook from '../Images/Analysis.png';
import ShippingPreferencesIcon from '../Images/compangSSonn.png';
import { NavigationLinkContainer } from './navigation-link-container';
import MembershipProfile from './membership';

const menuLinks = [
  { href: "/dashboard", label: "Dashboard", iconSrc: LocationIcon },
  { href: "/mylinks", label: "My Links", iconSrc: Clock },
  { href: "#", label: "Bulk Upload", iconSrc: HourGlassIcon },
  { href: "/analytics", label: "Analytics", iconSrc: AddressBook },
  { href: "/campaignSoon", label: "Campaign SOON!", iconSrc: ShippingPreferencesIcon },
];

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(true); // Menu starts open

  return (
    <div
      className={`transition-all duration-500 ease-in-out bg-white text-black flex flex-col h-screen shadow-lg ${
        isOpen ? "w-64" : "w-20"
      }`}
      style={{
        width: '312px',
        height: '928px',
        top: '96px',
        gap: '0px',
        border: '0px 1px 0px 0px',
        justifyContent: 'space-between',
        opacity: '1',
        margin: '10px',
      }}
    >
      <div className="relative flex items-center justify-center py-4">
        <button
          className="p-2 focus:outline-none absolute top-0 left-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`text-black text-2xl transform transition-transform duration-500 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            &#9664;
          </span>
        </button>
        <div className="mt-8 mx-auto">
          <Image src={MarketzLogo} alt="Marketz Logo" width={120} height={40} />
        </div>
      </div>

      <nav className="flex flex-col gap-4 flex-1 overflow-y-auto px-4 mt-4">
        {menuLinks.map((link, index) => (
          <div key={index} style={{ margin: '10px 0' }}> {/* Add margin here */}
            <NavigationLinkContainer
              iconSrc={link.iconSrc}
              href={link.href}
              label={link.label}
              isOpen={isOpen}
            />
          </div>
        ))}
      </nav>

      {isOpen && (
        <div className="px-6 py-4 mt-auto bg-[#F5F7FA] rounded-xl">
          <MembershipProfile  />
        </div>
      )}
    </div>
  );
};
