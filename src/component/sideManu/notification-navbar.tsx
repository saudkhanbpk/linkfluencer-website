import { useState } from "react";
import Image from "next/image";
import bilicon from "../Images/bilicon.png";
import Settings from "../Images/fi_settings.png";
import helpCircle from "../Images/fi_help-circle.png";
import lastimage from "../Images/image2.png"; // Make sure the image path is correct

export default function notificationNavbar() {
  const [clicksLeft, setClicksLeft] = useState(23); // Example state for clicks left

  return (
    <div className="bg-white shadow p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex items-center bg-green-500 text-white font-bold rounded-full px-4 py-2">
          {clicksLeft} Clicks left
        </div>
        <button className="ml-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
          Boost Now
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border rounded-full focus:outline-none"
        />
        <Image src={bilicon} alt="Bell Icon" width={24} height={24} />
        <Image src={Settings} alt="Settings Icon" width={24} height={24} />
        <Image src={helpCircle} alt="Help Icon" width={24} height={24} />
        <Image src={lastimage} alt="User Profile" width={24} height={24} className="rounded-full" />
        <div className="flex items-center space-x-1">
          <span>EN</span>
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
