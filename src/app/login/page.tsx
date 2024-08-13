"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Arrowback from '../../component/Images/Dark.png';
import google from '../../component/Images/google.png';
import facebook from '../../component/Images/facebook.png';
import logo from '../../component/Images/Logo.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (email && password) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, password]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      
      <div className="absolute top-0 left-0 mt-4 ml-4">
        <Image src={logo} alt="Logo" width={150} height={40} />
      </div>

      
      <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
    
        <div className="flex items-center mb-8">
          <button className="text-green-500 focus:outline-none">
            <Image src={Arrowback} alt="Back" width={40} height={40} />
          </button>
          <h1 className="text-4xl font-semibold text-navy ml-4">Sign Up</h1>
        </div>

      
        <p className="text-lg text-gray-600 mb-6" style={{
          fontFamily: 'Avenir LT Std',
          fontSize: '24px',
          fontWeight: 400,
          lineHeight: '29px',
          textAlign: 'left'
        }}>
          Connect to the potential influencers
        </p>

     
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <a href="/forgotpassword" className="text-navy font-medium hover:underline">
              Forgot Password?
            </a>
          </div>

          <div className="flex flex-col items-center">
            <button
              type="button"
              disabled={!isFormValid}
              className={`w-full py-2 rounded-lg focus:outline-none ${isFormValid ? 'bg-green-500 text-white' : 'bg-gray-300 text-white'}`}
            >
              Log In
            </button>

            <div className="flex items-center justify-center space-x-4 mt-4">
              <span className="text-gray-600 font-medium">Or</span>
              <button className="p-2 bg-white border border-gray-300 rounded-full focus:outline-none">
                <Image src={google} alt="Google" width={24} height={24} />
              </button>
              <button className="p-2 bg-white border border-gray-300 rounded-full focus:outline-none">
                <Image src={facebook} alt="Facebook" width={24} height={24} />
              </button>
            </div>
          </div>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don’t have an account? <a href="#" className="text-navy font-semibold hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
