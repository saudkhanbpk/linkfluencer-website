import React from 'react';
import Image from 'next/image';
import Arrowback from '../../component/Images/Dark.png';
import google from '../../component/Images/google.png';
import facebook from '../../component/Images/facebook.png';

const CreateProfile = () => {
  return (
    <div>
       
          <button className="text-green-500 focus:outline-none">
            <Image src={Arrowback} alt="Back" width={40} height={40} />
          </button>
          {/* <h1 className="text-4xl font-semibold text-navy ml-4">Create Profile</h1> */}
     
 <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-lg p-6">
        <div className="flex items-center mb-8">
          <button className="text-green-500 focus:outline-none">
            <Image src={Arrowback} alt="Back" width={40} height={40} />
          </button>
          <h1 className="text-4xl font-semibold text-navy ml-4">Create Profile</h1>
        </div>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Brand Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Brand Website"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option>Select Country</option>
              <option>Country 1</option>
              <option>Country 2</option>
              <option>Country 3</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter City"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex items-center">
            <div className="flex items-center px-3 border-r border-gray-300">
              <span role="img" aria-label="Globe" className="text-xl">🌍</span>
              <select className="ml-2 focus:outline-none">
                <option>00</option>
                <option>01</option>
                <option>02</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full px-4 py-2 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col items-center">
      <div className="flex items-center justify-center space-x-4">
        <button className="w-40 py-2 bg-gray-300 text-white rounded-lg focus:outline-none">
          Create Account
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
    </div>
   
  );
};

export default CreateProfile;
