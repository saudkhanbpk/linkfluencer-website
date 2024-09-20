import Image from "next/image";
import React, { useEffect, useState } from "react";
import Links from "./Links";
import Apps from "./Apps";
import TimeToShine from "./TimeToShine";
import Plateforms from "./Plateforms";
import { IoLinkOutline } from "react-icons/io5";
import axios from "axios";
import { decryptData } from "@/helper/encryptDecrypt";
import { useUser } from "../../context/userContext";
import api from "@/api";
import { useRouter } from "next/router";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function InfluencerData() {
  const [link, setLink] = useState("");
  const { user } = useUser();
  const router = useRouter();
  const handleCreateSmartLink = async () => {
    if (user) {
      const response = await api.post(`/users/${user._id}/links`, {
        originalUrl: link,
      });
      if (response.status == 201) {
        router.push("http://localhost:3001/my-links");
      }
    } else {
      router.push("http://localhost:3000/signup");
    }
  };
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="px-[20px] md:px-[80px] border border-green-500">
        <div className=" flex-col justify-center items-center md:flex hidden">
          <h4 className="text-[32px] md:text-[64px] font-semibold text-center md:w-[600px] text-[#113E53] mt-10 leading-none font-header">
            Open link in bio natively across 30+ Apps
          </h4>
          <p className="text-xl text-[#113E53] mt-4 leading-none font-content">
            Super tool that helps you grow across all social media apps and get
            better brand deals!!
          </p>
          <div className="border border-red-500">
            <div className="flex">
              {" "}
              <input
                className="md:w-[400px] border p-3 rounded-full mt-5 self-center "
                type="text"
                onChange={(e) => {
                  setLink(e.target.value);
                }}
                placeholder="Paste your link here"
                name="link"
                value={link}
              />{" "}
              <IoLinkOutline className="self-center text-3xl text-gray-200 relative z-10 right-12 top-2" />{" "}
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleCreateSmartLink}
                className="w-fit py-3 px-8  rounded-full focus:outline-none centered bg-[#020D3A] text-white"
              >
                Create Smart Link
              </button>
            </div>
          </div>
        </div>
        {/* images section  */}
        <div className="flex flex-col md:flex-row gap-4 w-full pb-10 mt-6 border-4">
          <div className="flex gap-4 items-end w-full justify-center">
            <div className="">
              <Image
                src="/images/Frame 1261153494.png"
                alt="image"
                width={300}
                height={300}
              />
              <Image
                className="mt-2"
                src="/images/Link-Twitch.png"
                alt="image"
                width={300}
                height={300}
              />
              <Image
                src="/images/spotify.png"
                alt="image"
                width={300}
                height={300}
              />
            </div>
            <div className=" relative">
              <Image
                src="/images/Animation - Youtube.png"
                alt="image"
                width={300}
                height={300}
              />
              <Image
                className="mt-2"
                src="/images/image 33.png"
                alt="image"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center  md:hidden">
            <h1 className="text-[32px] md:text-[64px] font-semibold text-center w-4/5 text-[#113E53] mt-[32px] leading-none font-header">
              Open link in bio natively across 30+ Apps
            </h1>
            <p className="text-xl text-[#113E53] mt-4 text-center text-[14px] md:text-[24px] leading-none font-content">
              Super tool that helps you grow across all social media apps and
              get better brand deals!!
            </p>
            <div className="w-full">
              <input
                className="w-full md:w-[400px] border p-3 rounded-full mt-[32px] md:mt-[40px] "
                type="text"
                value={link}
                onChange={(e) => {
                  setLink(e.target.value);
                }}
                placeholder="Paste your link here"
                name="link"
              />
              <br />
              <div className="flex justify-center mt-4 pb-[32px]">
                <button
                  onClick={handleCreateSmartLink}
                  className="w-fit py-3 px-8  rounded-full focus:outline-none centered bg-[#020D3A] text-white"
                >
                  Create Smart Link
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4 flex-row items-center w-full justify-center">
            <div className="relative self-end h-full md:h-auto">
              <Image
                src="/images/Frame12.png"
                alt="imaw"
                width={300}
                height={300}
              />
            </div>
            <div className=" w-[300px] border flex flex-col-reverse">
              <Image
                src="/images/girl.png"
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
                src="/images/Animation - Insta.png"
                alt="image"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      <Links />
      <Apps />
      <TimeToShine />
      <Plateforms />
    </div>
  );
}

export default InfluencerData;
