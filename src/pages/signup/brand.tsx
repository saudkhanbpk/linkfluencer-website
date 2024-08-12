import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@/components/common/Logo';
import FormInput from '@/components/forms/FormInput';
import SocialButton from '@/components/common/SocialButton';
import useFormValidation from '@/hooks/useFormValidation';
import arrowBackDark from '@/public/images/arrow_back_dark.png';
import googleLogo from '@/public/images/google_logo.png';
import facebookLogo from '@/public/images/facebook_logo.png';

const SignupBrand = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isFormValid = useFormValidation(fullName, email, password);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Logo />
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg relative">
        <div className="flex items-center space-x-4 mb-8">
          <button className="text-lg">
            <Image src={arrowBackDark} alt="Back" width={29} height={29} />
          </button>
        </div>
        <form>
          <FormInput type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" />
          <FormInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <FormInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button type="submit" disabled={!isFormValid} className="w-full p-2 bg-blue-500 text-white rounded">
            Signup
          </button>
        </form>
        <div className="flex space-x-4 mt-4">
          <SocialButton logo={googleLogo} alt="Google" onClick={() => {}} />
          <SocialButton logo={facebookLogo} alt="Facebook" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default SignupBrand;