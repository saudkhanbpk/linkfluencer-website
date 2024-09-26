import Image from "next/image";
import React from "react";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { useRouter } from "next/router";

function Footer() {
  const Router = useRouter();
  return (
    <div className="md:flex flex-col justify-center items-center bg-gray-100 w-full py-[40px] md:py-[60px]  px-[20px] md:px-[80px]">
      <div className="md:flex gap-5 md:items-center">
        <h1 className="text-[24px] md:text-[38px] md:mb-0 mb-4 font-bold leading-none text-[#113E53]">
          Subscribe to our newsletter for upcoming features.
        </h1>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Your email"
            className=" md:w-[500px] border p-3 rounded-full"
          />
          <button className="px-6 py-2 w-fit text-white rounded-full bg-[#113E53]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 w-full">
          <div className="mt-8">
            <Image
              src="/images/Logo.svg"
              alt="logo"
              width={110}
              height={150}
              onClick={() => {
                Router.push("/");
              }}
              className="cursor-pointer"
            />
            <p className="my-3">@2024</p>
          </div>
          <div className="mt-8">
            <h1 className="text-[14px] font-bold">Follow Us</h1>
            <div className="flex gap-1 my-1">
              <div className="cursor-pointer hover:underline p-2 bg-white rounded-full">
                <FaFacebook />
              </div>
              <div className="cursor-pointer hover:underline p-2 bg-white rounded-full">
                <FaLinkedinIn />
              </div>
              <div className="cursor-pointer hover:underline p-2 bg-white rounded-full">
                <SlSocialInstagram />
              </div>
              <div className="cursor-pointer hover:underline p-2 bg-white rounded-full">
                <FaXTwitter />
              </div>
            </div>
          </div>
  
          <div className="mt-8">
            <h1 className="text-[14px] font-bold">Legality</h1>
            <p
              className="cursor-pointer hover:underline my-1 text-[12px]"
              onClick={() => {
                Router.push("/");
              }}
            >
              Cookies Settings
            </p>
            <p
              className="cursor-pointer hover:underline my-1 text-[12px]"
              onClick={() => {
                Router.push("/privacypolicy");
              }}
            >
              Privacy Policy
            </p>
            <p
              className="cursor-pointer hover:underline my-1 text-[12px]"
              onClick={() => {
                Router.push("/termsofservice");
              }}
            >
              Terms of Service
            </p>
          </div>
          <div className="mt-8">
            <h1 className="text-[14px] font-bold">Company</h1>
            <p
              className="cursor-pointer hover:underline  my-1 text-[12px]"
              onClick={() => {
                Router.push("/");
              }}
            >
              How it Works
            </p>
            <p
              className="cursor-pointer hover:underline  my-1 text-[12px]"
              onClick={() => {
                Router.push("/");
              }}
            >
              Campaign Mgmt
            </p>
            <p
              className="cursor-pointer hover:underline  my-1 text-[12px]"
              onClick={() => {
                Router.push("/");
              }}
            >
              What’s New
            </p>
            <p
              className="cursor-pointer hover:underline  my-1 text-[12px]"
              onClick={() => {
                Router.push("/about");
              }}
            >
              About
            </p>
            <p
              className="cursor-pointer hover:underline  my-1 text-[12px]"
              onClick={() => {
                Router.push("/contact");
              }}
            >
              Contact
            </p>
            <p
              className="cursor-pointer hover:underline  my-1 text-[12px]"
              onClick={() => {
                Router.push("/services");
              }}
            >
              Services
            </p>
          </div>
          <div className="mt-8">
            <h1 className="text-[14px] font-bold">Support</h1>
            <p className="cursor-pointer hover:underline  my-1 text-[12px]">Help Topics</p>
            <p
              className="cursor-pointer hover:underline  my-1 text-[12px]"
              onClick={() => {
                Router.push("/faq");
              }}
            >
              FAQs
            </p>
            <p className="cursor-pointer hover:underline  my-1 text-[12px]">
              Getting Started
            </p>
          </div>
          <div className="mt-8">
            <h1 className="text-[14px] font-bold">Contact Us</h1>
            <div className="cursor-pointer hover:underline flex gap-1 my-1 text-[12px]">
              <LuPhone className="self-center " />
              <a href="tel:+91-7458965874">+91-7458965874</a>
            </div>
            <div className="cursor-pointer hover:underline flex gap-1 my-1 text-[12px]">
              <CiMail className="self-center " />
              <a href="mailto:hello@linkfluencer.io">hello@linkfluencer.io</a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Footer;
