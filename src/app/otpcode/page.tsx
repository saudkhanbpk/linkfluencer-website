"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Arrowback from '../../component/Images/Dark.png';

export default function OTPVerificationPage() {
  const [otp, setOtp] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    // Enable the button if OTP is filled
    if (otp) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [otp]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-6">
        <div className="flex items-center space-x-4 mb-8">
          <button className="text-green-500 focus:outline-none">
            <Image src={Arrowback} alt="Back" width={40} height={40} />
          </button>
          <h2 className="text-3xl font-semibold text-gray-800">OTP Verification</h2>
        </div>
        <p className="text-lg text-gray-500">Enter the OTP you received by email.</p>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Email OTP"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <p className="text-sm text-gray-500">
            Not received yet? <a href="#" className="text-blue-600 font-semibold">Resend OTP</a>
          </p>
        </div>
        <button
          type="submit"
          className={`w-full py-3 mt-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isButtonDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-600 text-white'
          }`}
          disabled={isButtonDisabled}
        >
          Submit
        </button>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-500">Or</span>
          <div className="flex space-x-4">
            <button className="bg-gray-200 p-3 rounded-full">
              <Image src="/images/google-icon.png" alt="Google" width={24} height={24} />
            </button>
            <button className="bg-gray-200 p-3 rounded-full">
              <Image src="/images/facebook-icon.png" alt="Facebook" width={24} height={24} />
            </button>
          </div>
        </div>
        <p className="text-center mt-4 text-sm text-gray-500">
          Already have an account? <a href="#" className="text-blue-600 font-semibold">Log In</a>
        </p>
      </div>
    </div>
  );
}
