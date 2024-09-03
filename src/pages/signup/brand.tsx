import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@/components/common/Logo';
import useFormValidation from '@/hooks/useFormValidation';
import { useRouter } from 'next/router';

const SignupInfluencer = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState(''); // State for OTP input
  const [step, setStep] = useState(1); // Step 1 for Signup, Step 2 for OTP
  const isFormValid = useFormValidation(fullName, email, password);
  const router = useRouter();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      setStep(2); // Proceed to OTP verification step
    }
  };
  
  const handleOtpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic for OTP submission
    setOtp(''); // Clear the OTP input after submission
  };
  

  const handleResendOTP = () => {
    // Logic to resend OTP
    console.log('OTP resent');
  };

  const handleLoginRedirect = () => {
    router.push('/signin'); // Redirect to signin page
  };

  return (
    <>
      {step === 1 && (
        <div className="flex items-center justify-center min-h-screen bg-white border border-black">
          <Logo />
          <div className="w-full max-w-md p-8 bg-white rounded-lg relative">
            <div className="flex items-center space-x-4 mb-4 relative md:right-12">
              <button className="text-lg relative bottom-3 hidden md:flex" onClick={() => router.push('/signup')}>
                <Image src='/images/arrow_back_dark.png' className='hover:rotate-45 duration-100' alt="Back" width={40} height={40} />
              </button>
              <div>
                <h1 className="text-4xl">Sign Up</h1>
                <p className="text-xl mt-2">Make everyday a pay day</p>
              </div>
            </div>
            <form onSubmit={handleSignup}>
              <input
                className="p-3 rounded-full border border-gray-500 m-2 w-full"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
              />
              <input
                className="p-3 rounded-full border border-gray-500 m-2 w-full"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                className="p-3 rounded-full border border-gray-500 m-2 w-full"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <div className="flex gap-2 m-2 w-full">
                <input className="w-4" type="checkbox" />
                <p>Agreeing to our Terms and Policy</p>
              </div>
              <button
                type="submit"
                disabled={!isFormValid}
                className="w-full p-3 m-2 cursor-pointer bg-[#020D3A] text-white rounded-full"
              >
                Create Account
              </button>
            </form>
            <p className="w-full self-center flex justify-center m-2">
              Already have an account?{' '}
              <b className="cursor-pointer" onClick={handleLoginRedirect}>
                Login
              </b>
            </p>
            <div className="md:flex  items-center justify-center md:space-x-4 m-4">
            <button className=" flex w-full gap-2 justify-center mb-2 md:mb-0 py-3 px-8 bg-white border rounded-full shadow-sm hover:shadow-md">
            <Image src='/images/google_logo.png' alt="Google" width={20} height={20} /><span className="font-bold">Google</span>
          </button>
          <button className=" flex w-full justify-center gap-2 p-3 px-8 bg-white border rounded-full shadow-sm hover:shadow-md">
            <Image src='/images/facebook_logo.png' alt="Facebook" width={20} height={20} /><span className="font-bold">Facebook</span>
          </button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex items-center justify-center min-h-screen bg-white border border-black">
          <Logo />
          <div className="w-full max-w-md p-8 bg-white rounded-lg relative">
            <div className="flex items-center space-x-4 mb-4 relative md:right-12">
              <button
                className="text-lg relative bottom-8 hidden md:block"
                onClick={() => setStep(1)} // Go back to signup step
              >
                <Image src='/images/arrow_back_dark.png'  alt="Back" className="w-[60px] hover:rotate-45 duration-100" />
              </button>
              <div>
                <h1 className="text-4xl">OTP Verification</h1>
                <p className="text-xl mt-2">Enter the OTP sent to your device for secure access</p>
              </div>
            </div>
            <form onSubmit={handleOtpSubmit}>
              <input
                className="p-3 rounded-full border border-gray-500 m-2 w-full"
                type="text" // Change type to text for OTP input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter Email OTP"
              />
              <div className="flex gap-2 m-2 w-full">
                <Image src='/images/fi_check.png' alt="check" />
                <p>OTP sent on your device successfully</p>
              </div>
              <p className="cursor-pointer relative left-9 " onClick={handleResendOTP}>
                Resend OTP
              </p>
              <button
                type="submit"
                className="w-full p-3 m-2 cursor-pointer bg-[#020D3A] text-white rounded-full"
              >
                Verify OTP
              </button>
            </form>
            <div className="flex justify-between items-center m-2">
              <div className="flex justify-center w-full p-2">
                <p>Already have an account?</p>
                <p className="cursor-pointer font-bold" onClick={handleLoginRedirect}>
                  Login
                </p>
              </div>
            </div>
            <div className="md:flex md:space-x-8 w-full justify-center m-2">
            <button className=" flex w-full gap-2 py-3 px-8 bg-white border rounded-full shadow-sm hover:shadow-md">
            <Image src='/images/google_logo.png' alt="Google" width={20} height={20} /><span className="font-bold">Google</span>
          </button>
          <button className=" flex w-full gap-2 p-3 px-8 mb-2 md:mb-0 bg-white border rounded-full shadow-sm hover:shadow-md">
            <Image src='/images/facebook_logo.png' alt="Facebook" width={20} height={20} /><span className="font-bold">Facebook</span>
          </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupInfluencer;
