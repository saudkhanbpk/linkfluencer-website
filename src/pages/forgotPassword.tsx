"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "@/components/common/Logo";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1); // Step 1 for email input, Step 2 for OTP, Step 3 for new password
  const router = useRouter();

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to send OTP to email
    setStep(2); // Proceed to OTP step
  };

  const handleOtpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to verify OTP
    setStep(3); // Proceed to new password step
  };

  const handlePasswordReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to reset the password
    console.log("Password reset successful");
    setStep(4);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white border border-black">
      <Logo />
      <div className="w-full max-w-md p-8 bg-white rounded-lg relative">
      <div className={`flex items-center space-x-4 mb-4 relative ${step === 3 ? "right-0" : "md:right-12"}`}>

          {(step === 1 || step === 2) && (
            <button
              className="text-lg hidden md:block"
              onClick={() => router.push('/signin')}
            >
              <Image
                src='/images/arrow_back_dark.png'
                className='hover:rotate-45 duration-100'
                alt="Back"
                width={40}
                height={40}
              />
            </button>
          )}
          <h1 className={`text-4xl text-navy ${step===4 ? "hidden" : "block" }`}>
            {step === 1
              ? "Reset Password"
              : step === 2
              ? "OTP Verification"
              : "New Password"}
          </h1>
        </div>

        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <p className="text-xl relative left-4 ">Connect to the potential <br />influencers</p>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-full border border-gray-500 m-2 w-full focus:outline-none focus:ring-2"
            />
            <button
              type="submit"
              className="w-full p-3 m-2 rounded-full bg-[#020D3A] text-white focus:outline-none"
            >
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOtpSubmit}>
            <p className="text-xl relative left-4 ">Connect to the potential <br />influencers</p>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="p-3 rounded-full border border-gray-500 m-2 w-full focus:outline-none focus:ring-2"
            />
            <button
              type="submit"
              className="w-full p-3 m-2 rounded-full bg-[#020D3A] text-white focus:outline-none"
            >
              Verify OTP
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handlePasswordReset}>
            <p className="text-xl relative left-4 ">Connect to the potential <br />influencers</p>
            <input
              type="password"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="p-3 rounded-full border border-gray-500 m-2 w-full focus:outline-none focus:ring-2"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="p-3 rounded-full border border-gray-500 m-2 w-full focus:outline-none focus:ring-2"
            />
            <button
              type="submit"
              className="w-full p-3 m-2 rounded-full bg-[#020D3A] text-white focus:outline-none"
            >
              Submit
            </button>
          </form>
        )}

        {step === 4 && (
          <div className="text-center self-center flex flex-col justify-center items-center" >
            <div className="w-[100px] h-[100px] flex justify-center items-center bg-gray-100 rounded-full mb-3 border border-black ">
              <Image src='/images/Group.png' alt="tick" />
            </div>
            <p>Password Changed Successfully</p>
            <a
              onClick={() => router.push('/signin')}
              className="font-bold underline cursor-pointer"
            >
            Back to  Log In
            </a>
          </div>
        )}

        {(step === 1 || step === 2) && (
          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <a
              onClick={() => router.push('/signin')}
              className="text-blue-500 underline cursor-pointer"
            >
              Log In
            </a>
          </p>
        )}

        {(step === 1 || step === 2) && (
          <div className="md:flex items-center justify-center md:space-x-2 mb-6 mt-4">
            <button className=" flex justify-center w-full gap-2 py-3 px-8 bg-white border mb-2 md:mb-0 rounded-full shadow-sm hover:shadow-md">
              <Image src='/images/google_logo.png' alt="Google" width={20} height={20} />
              <span className="font-bold">Google</span>
            </button>
            <button className=" flex justify-center w-full gap-2 p-3 px-8 bg-white border rounded-full shadow-sm hover:shadow-md">
              <Image src='/images/facebook_logo.png' alt="Facebook" width={20} height={20} />
              <span className="font-bold">Facebook</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forgotpassword;

