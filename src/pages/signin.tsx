"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import arrowBackDark from "@/public/images/arrow_back_dark.png";
import googleLogo from "@/public/images/google_logo.png";
import facebookLogo from "@/public/images/facebook_logo.png";
import mainLogo from "@/public/images/main_logo.png";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsFormValid(email !== "" && password !== "");
  }, [email, password]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white border border-black">
      <div className="absolute top-0 left-0 mt-4 ml-4">
        <Image src={mainLogo} alt="Logo" width={150} height={40} />
      </div>

      <div className="w-full max-w-md p-8 bg-white rounded-lg relative">
        <div className="flex items-center space-x-4 mb-4 relative md:right-12">
          <button className="text-lg relative bottom-3 hidden md:flex">
            <Image src={arrowBackDark} alt="Back" width={40} height={40} />
          </button>
          <div>
            <h1 className="text-4xl font-semibold text-navy">Log In</h1>
            <p className="text-xl mt-2 text-gray-600">Log in to access your account.</p>
          </div>
        </div>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-full border border-gray-500 m-1 w-full focus:outline-none focus:ring-2"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-full border border-gray-500 m-1 w-full focus:outline-none focus:ring-2"
          />

          <div className="flex items-center justify-between m-2">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <a onClick={() => router.push('/forgotpassword')} className="text-navy font-medium hover:underline cursor-pointer">
              Forgot Password?
            </a>
          </div>

          <button
            type="button"
            disabled={!isFormValid}
            className={`w-full p-3 m-2 rounded-full focus:outline-none ${isFormValid ? "bg-[#020D3A] text-white" : "bg-gray-300 text-white"}`}
          >
            Log In
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a onClick={() => router.push('/signup')} className="text-navy cursor-pointer font-semibold hover:underline">
            Sign Up
          </a>
        </p>

        <div className="md:flex  items-center justify-center md:space-x-4 m-4">
        <button className=" flex w-full gap-2 justify-center mb-2 xs:mb-0 py-3 px-8 bg-white border rounded-full shadow-sm hover:shadow-md">
            <Image src={googleLogo} alt="Google" width={20} height={20} /><span className="font-bold">Google</span>
          </button>
          <button className=" flex w-full justify-center gap-2 p-3 px-8 bg-white border rounded-full shadow-sm hover:shadow-md">
            <Image src={facebookLogo} alt="Facebook" width={20} height={20} /><span className="font-bold">Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
