"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Arrowback from '../../component/Images/Dark.png';
import google from '../../component/Images/google.png';
import facebook from '../../component/Images/facebook.png';

const ResetPassword = () => {
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailSent = () => {
    setEmailSent(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md">
        <div className="flex items-center space-x-4 mb-8">
          <button className="text-lg">
            <Image src={Arrowback} alt="Back" width={24} height={24} />
          </button>
          <h2 className="text-3xl font-semibold text-gray-800">Reset Password</h2>
        </div>
        <p className="text-gray-600 mb-4">Connect to the potential influencers</p>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {emailSent && (
          <div className="text-sm text-green-500 mb-2">
            <span>✔ Reset password link sent on mail</span>
            <button
              className="ml-2 text-blue-500 underline"
              onClick={() => setEmailSent(false)}
            >
              Resend Link
            </button>
          </div>
        )}
        <button
          onClick={handleEmailSent}
          className="w-full py-2 mb-4 text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Continue
        </button>
        <div className="flex items-center justify-center space-x-2 mb-6">
          <span className="text-gray-500">Or</span>
          <button className="p-2 bg-white border rounded-full shadow-sm hover:shadow-md">
            <Image src={google} alt="Google" width={20} height={20} />
          </button>
          <button className="p-2 bg-white border rounded-full shadow-sm hover:shadow-md">
            <Image src={facebook} alt="Facebook" width={20} height={20} />
          </button>
        </div>
        <p className="text-center text-gray-500">
          Don’t have an account?{' '}
          <a href="#" className="text-blue-500 underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
