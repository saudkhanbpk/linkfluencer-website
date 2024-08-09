"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Arrowback from '../../component/Images/Dark.png';  // Update the path as needed
import google from '../../component/Images/google.png';
import facebook from '../../component/Images/facebook.png';
import logo from '../../component/Images/Logo.png';       // Update the path as needed

const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormValidation = () => {
    if (fullName && email && password) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      {/* Logo */}
      <div className="absolute top-0 left-0 mt-4 ml-4">
        <Image src={logo} alt="Logo" width={150} height={40} />
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg relative">
        {/* Arrowback Button */}
        <div className="flex items-center space-x-4 mb-8">
          <button className="text-lg">
            <Image src={Arrowback} alt="Back" width={29} height={29} />
          </button>
          <div>
            <h1 className="text-4xl font-bold text-navy mb-2">
          <span className="text-black rounded-[15px] bg-yellow-400 px-2">Sign</span>Up
          </h1></div>
        </div>
      

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-6">
          Make Everyday a Pay Day
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onBlur={handleFormValidation}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleFormValidation}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handleFormValidation}
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-gray-600">
              Agreeing to our <span className="font-semibold">Terms and Privacy Policy</span>
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              disabled={!isFormValid}
              className={`w-full py-2 rounded-full focus:outline-none ${
                isFormValid ? 'bg-gray-300 text-gray-600' : 'bg-green-500 text-white'
              }`}
            >
              Create Account
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center mt-6 space-x-4">
          <span className="text-gray-600">Or</span>
          <button className="p-2 bg-white border border-gray-300 rounded-full focus:outline-none">
            <Image src={google} alt="Google" width={24} height={24} />
          </button>
          <button className="p-2 bg-white border border-gray-300 rounded-full focus:outline-none">
            <Image src={facebook} alt="Facebook" width={24} height={24} />
          </button>
        </div>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-navy font-semibold hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
