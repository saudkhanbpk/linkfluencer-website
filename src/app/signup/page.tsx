"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Arrowback from '../../component/Images/Dark.png';
import google from '../../component/Images/google.png';
import facebook from '../../component/Images/facebook.png';

const CreateProfile = () => {
  const [brandName, setBrandName] = useState('');
  const [brandWebsite, setBrandWebsite] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (brandName && brandWebsite && country && city && mobileNumber) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [brandName, brandWebsite, country, city, mobileNumber]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Main Content */}
      <div className="w-full max-w-lg p-6">
        {/* Arrowback Button and Create Profile Text */}
        <div className="flex items-center mb-8">
          <button className="text-green-500 focus:outline-none">
            <Image src={Arrowback} alt="Back" width={40} height={40} />
          </button>
          <h1 className="text-4xl font-semibold text-navy ml-4">Sign Up</h1>
        </div>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Brand Name"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <input
              type="Password"
              placeholder="Password"
              value={brandWebsite}
              onChange={(e) => setBrandWebsite(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
          
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* <div className="flex items-center">
            <div className="flex items-center px-3 border-r border-gray-300">
              <span role="img" aria-label="Globe" className="text-xl">🌍</span>
              <select
                className="ml-2 focus:outline-none"
                onChange={(e) => setMobileNumber(e.target.value)}
              >
                <option value="">00</option>
                <option value="01">01</option>
                <option value="02">02</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full px-4 py-2 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div> */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center space-x-4">
              <button
                type="button"
                disabled={!isFormValid}
                className={`w-40 py-2 rounded-lg focus:outline-none ${isFormValid ? 'bg-green-500 text-white' : 'bg-gray-300 text-white'}`}
              >
                Continue
              </button>
              <span className="text-gray-600 font-medium">Or</span>
              <button className="p-2 bg-white border border-gray-300 rounded-full focus:outline-none">
                <Image src={google} alt="Google" width={24} height={24} />
              </button>
              <button className="p-2 bg-white border border-gray-300 rounded-full focus:outline-none">
                <Image src={facebook} alt="Facebook" width={24} height={24} />
              </button>
            </div>
            <p className="mt-6 text-gray-600">
              Already have an account? <a href="#" className="text-navy font-semibold hover:underline">Log In</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
