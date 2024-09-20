import Image from "next/image";
import React from "react";
import Links from "./Links";
import Main from "./Main";
import Roi from "./Roi";
import Plateforms from "./Plateforms";
import { IoLinkOutline } from "react-icons/io5";

function BrandData() {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-8">
      <div className="border border-green-500 px-[20px] md:px-[80px]">
        <div className=" flex-col justify-center items-center md:flex hidden border border-red-500 ">
          <h5 className="text-[32px] md:text-[64px] font-semibold text-center md:w-5/6 text-[#113E53] mt-10 leading-none font-header">
            Unlock your influence with Linkfluencer.io
          </h5>
          <p className="md:text-[24px] text-[14px] text-[#113E53] mt-4 text-center font-content">
            Super tool that helps you grow across all social media apps and get
            better engagement!!
          </p>
          <div className="border border-yellow-500">
            <div className="flex w-full">
              {" "}
              <input
                className="md:w-[400px] border p-3 rounded-full mt-5 self-center "
                type="text"
                placeholder="Paste your link here"
              />{" "}
              <IoLinkOutline className="self-center text-3xl text-gray-200 relative z-10 right-12 top-2 cursor-pointer" />{" "}
            </div>
            <div className="flex justify-center mt-4">
              <button className="w-fit py-3 px-8  rounded-full focus:outline-none centered bg-[#020D3A] text-white">
                Create Smart Link
              </button>
            </div>
          </div>
        </div>
        {/* images section  */}
        <div className="flex flex-col md:flex-row gap-4 w-full pb-10 mt-6 border-4 items-end">
          <div className="flex gap-x-4 border border-orange-500">
            <div className="">
              <Image
                src="/images/badgirl.png"
                alt="image"
                className="rounded-xl"
                width={300}
                height={300}
              />

              <Image
                className="my-2"
                src="/images/frame321.png"
                alt="image"
                width={300}
                height={300}
              />

              <Image
                src="/images/Animation - Sephora - Brand.png"
                alt="image"
                width={300}
                height={300}
              />
            </div>
            <div className="self-end w-[300px]">
              <Image
                src="/images/gymshark.png"
                alt="image"
                width={300}
                height={300}
              />
              <Image
                className="mt-2"
                src="/images/boy.png"
                alt="image"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center  md:hidden ">
            <h1 className="text-[32px] md:text-[64px] font-semibold text-center md:w-[600px] text-[#113E53] mt-4 md:mt-10">
              Unlock your influence with Linkfluencer.io
            </h1>
            <p className="text-[14px] md:text-[24px] text-[#113E53] mt-4 text-center">
              Super tool that helps you grow across all social media apps and
              get better engagement!!
            </p>
            <div className="border w-full">
              <input
                className="md:w-[400px] w-full border p-3 rounded-full mt-5 "
                type="text"
                placeholder="Paste your link here"
              />
              <br />
              <div className="flex justify-center mt-4">
                <button className="w-fit py-3 px-8  rounded-full focus:outline-none centered bg-[#020D3A] text-white">
                  Create Smart Link
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4 border-4 border-green-500 mt-4">
            <div className="relative self-end border border-yellow-500">
              <Image
                src="/images/blacklady.png"
                alt="imaw"
                width={300}
                height={300}
              />
            </div>
            <div className=" border border-pink-500">
              <Image
                src="/images/shoes.png"
                alt="imag"
                width={300}
                height={300}
              />
              <Image
                className="my-2"
                src="/images/Link-Snapchat.png"
                alt="image"
                width={300}
                height={300}
              />
              <Image
                src="/images/nike.png"
                alt="image"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      <Links />
      <Main />
      <Roi />
      <Plateforms />
    </div>
  );
}

export default BrandData;
