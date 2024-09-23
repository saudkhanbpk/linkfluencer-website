import React from "react";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
function BrandMarketer() {
  return (
    <div className="flex flex-col items-center md:flex-row w-full px-[20px] md:px-[80px] py-10 ">
      <div className="w-full md:w-3/5">
        <h1 className="text-[32px] font-header md:text-start text-center md:text-[64px] font-semibold leading-none">
          Turn your customers into your brand marketer
        </h1>
        <p className="text-xl mt-4">
          With our smart linking capability, you can enhance user experience and
          boost engagement by ensuring that your links open directly in mobile
          apps, rather than app browsers. Say goodbye to the hassle of switching
          between apps and hello to seamless navigation.
        </p>
      </div>
      <div className="relative w-full md:w-2/5">
        <div className="w-[200px] text-center md:w-[323px] h-[100px] md:h-[181px] rounded-2xl bg-[#B8F9CF] px-3 md:px-8 pt-4 md:pt-10 relative left-32 md:left-48 top-10 ">
          <div className="flex gap-2">
            <h1 className="text-2xl  md:text-4xl font-bold">$810.25</h1>{" "}
            <FaArrowUp className="self-center" />
          </div>
          <p>Total earnings </p>
          <Image
            className=" -mt-14 w-[190px] md:w-[300px]"
            src="/images/Vector 630.png"
            alt="icon"
            width={100}
            height={100}
          />
        </div>
        <div className="md:h-[407px] w-[220px] md:w-[402px] bg-gray-100 rounded-2xl px-3 md:px-8 pt-4 md:pt-10 pb-3 md:pb-0">
          <div className="flex gap-2">
            <h1 className="text-2xl md:text-4xl font-bold">82.23k</h1>{" "}
            <FaArrowUp className="self-center" />
          </div>
          <p>User visits </p>
          <Image
            className="mt-8"
            src="/images/social.png"
            alt="icon"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default BrandMarketer;
