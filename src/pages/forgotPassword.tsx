// "use client";
// import React, { useState } from 'react';
// import Image from 'next/image';
// <<<<<<< HEAD:src/pages/forgotPassword.tsx
// import Arrowback from '@/component/Images/Dark.png';
// import google from '@component/Images/google.png';
// import facebook from '@/component/Images/facebook.png';

// =======
// import Arrowback from '../../component/Images/Dark.png';
// import google from '../../component/Images/google.png';
// import facebook from '../../component/Images/facebook.png';
// import logo from '../../component/Images/Logo.png';
// >>>>>>> a6a0a622ab72fa9f76a51a8e67613c828103446e:src/app/forgotpassword/page.tsx
// const ResetPassword = () => {
//   const [emailSent, setEmailSent] = useState(false);

//   const handleEmailSent = () => {
//     setEmailSent(true);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="absolute top-0 left-0 mt-4 ml-4">
//         <Image src={logo} alt="Logo" width={150} height={40} />
//       </div>
//       <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md">
//         <div className="flex items-center space-x-4 mb-8">
//         <button className="text-green-500 focus:outline-none">
//             <Image src={Arrowback} alt="Back" width={40} height={40} />
//           </button>
//           <h2 className="text-3xl font-semibold text-gray-800">Reset Password</h2>
//         </div>
//         <p className="text-gray-600 mb-4">Connect to the potential influencers</p>
//         <div className="mb-4">
//           <input
//             type="email"
//             placeholder="Enter Your Email"
//             className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         {emailSent && (
//           <div className="text-sm text-green-500 mb-2">
//             <span>✔ Reset password link sent on mail</span>
//             <button
//               className="ml-2 text-blue-500 underline"
//               onClick={() => setEmailSent(false)}
//             >
//               Resend Link
//             </button>
//           </div>
//         )}
//         <button
//           onClick={handleEmailSent}
//           className="w-full py-2 mb-4 text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Continue
//         </button>
//         <div className="flex items-center justify-center space-x-2 mb-6">
//           <span className="text-gray-500">Or</span>
//           <button className="p-2 bg-white border rounded-full shadow-sm hover:shadow-md">
//             <Image src={google} alt="Google" width={20} height={20} />
//           </button>
//           <button className="p-2 bg-white border rounded-full shadow-sm hover:shadow-md">
//             <Image src={facebook} alt="Facebook" width={20} height={20} />
//           </button>
//         </div>
//         <p className="text-center text-gray-500">
//           Don’t have an account?{' '}
//           <a href="#" className="text-blue-500 underline">
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;
"use client";
import React, { useState } from "react";
import Image from "next/image";
import arrowBackDark from "../../public/images/arrow_back_dark.png";
import googleLogo from "../../public/images/google_logo.png";
import facebookLogo from "../../public/images/facebook_logo.png";
import Tick from "../../public/images/Group.png";
import { useRouter } from "next/router";
import Logo from "@/components/common/Logo";

const ForgotPassword = () => {
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
                src={arrowBackDark}
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
              <Image src={Tick} alt="tick" />
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
              <Image src={googleLogo} alt="Google" width={20} height={20} />
              <span className="font-bold">Google</span>
            </button>
            <button className=" flex justify-center w-full gap-2 p-3 px-8 bg-white border rounded-full shadow-sm hover:shadow-md">
              <Image src={facebookLogo} alt="Facebook" width={20} height={20} />
              <span className="font-bold">Facebook</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;

