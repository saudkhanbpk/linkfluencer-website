import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "@/components/common/Logo";
import {RightArrow} from './../svg'
function join() {
  const router = useRouter();
  const handleInfluencClick = () => {
    router.push("/signup/brand");
  };
  const handleBrandClick = () => {
    router.push("/signup/influencer");
  };
  return (
    <div>
        <Logo />
      <div className="flex justify-center items-center w-[100%] min-h-screen p-4">
        <div>
          <h2 className="text-4xl md:text-8xl mb-8">
            Join <br /> Linkfluencer
          </h2>
          <div className="flex flex-wrap  gap-3 ">
            <div
              className="md:w-[370px] flex gap-2 border-black border rounded-2xl self-center p-2 cursor-pointer"
              onClick={handleBrandClick}
            >
              <div className="self-center p-8 bg-[#F0F5FF] rounded-xl ">
                <Image
                  src="/images/Influencer.png"
                  alt="influencer"
                  width={90}
                  height={90}
                />
              </div>
              <div className="flex flex-col justify-center relative">
                <h1 className="font-[750] text-[20px]">Influencer</h1>
                <p className="text-xl mt-2">Make Everyday A Pay Day</p>
                <RightArrow className={' size-10 border p-2 rounded-full border-[#113E53] absolute right-0 bottom-0 bg-[#59FF93] hover:rotate-45 duration-150'}/>
              </div>
            </div>
            <div
              className="md:w-[370px] flex gap-2 border-black border rounded-2xl self-center p-2 cursor-pointer "
              onClick={handleInfluencClick}
            >
              <div className="self-center p-8 bg-[#F0F5FF] rounded-xl ">
                <Image
                  src="/images/Brand.png"
                  alt="brand"
                  width={90}
                  height={90}
                />
              </div>
              <div className="flex flex-col justify-center relative">
                <h1 className="font-[750] text-[20px]">Brand</h1>
                <p className="text-xl mt-2">Take Your Brand To Public</p>
                <RightArrow className={' size-10 border p-2 rounded-full border-[#113E53] absolute right-0 bottom-0 bg-[#59FF93] hover:rotate-45 duration-150'}/>
              </div>
            </div>
          </div>
          <div className="mt-4 text-[#113E53] text-[21px]">
            <span className="mr-2">Already have an account?</span>
            <b className="cursor-pointer font-[750]" onClick={() => router.push("signin")}>
              Login
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default join;
