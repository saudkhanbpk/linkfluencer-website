"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Arrowback from '../../component/Images/Dark.png';
export default function NewPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    // Enable the button if both fields are filled and passwords match
    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [newPassword, confirmPassword]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-6">
      <div className="flex items-center space-x-4 mb-8">
        <button className="text-green-500 focus:outline-none">
            <Image src={Arrowback} alt="Back" width={40} height={40} />
          </button>
          <h2 className="text-3xl font-semibold text-gray-800">Reset Password</h2>
        </div>
        <p className="text-lg text-gray-500">Connect to the potential influencers</p>
        <div className="space-y-4">
          <div className="relative">
            <input
              type="password"
              placeholder="Enter Your New Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a6 6 0 00-4.472 10.19l-1.59 1.589a1 1 0 001.414 1.415l1.589-1.59A6 6 0 1010 2zm0 2a4 4 0 110 8 4 4 0 010-8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a6 6 0 00-4.472 10.19l-1.59 1.589a1 1 0 001.414 1.415l1.589-1.59A6 6 0 1010 2zm0 2a4 4 0 110 8 4 4 0 010-8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={`w-full py-3 mt-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
            isButtonDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-600 text-white'
          }`}
          disabled={isButtonDisabled}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
