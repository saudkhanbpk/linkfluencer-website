import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-start mb-6">
          <button className="text-2xl text-green-500">
            &#8592;
          </button>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Log In</h2>
        <p className="text-gray-600 mb-6">Connect to the potential influencers</p>
        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-gray-600">Remember Me</label>
            </div>
            <a href="#" className="text-green-500 hover:underline">Forgot Password?</a>
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
            Log In
          </button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="bg-gray-100 p-2 rounded-lg shadow hover:bg-gray-200">
            <img src="/google-icon.png" alt="Google" className="h-6 w-6" />
          </button>
          <button className="bg-gray-100 p-2 rounded-lg shadow hover:bg-gray-200">
            <img src="/facebook-icon.png" alt="Facebook" className="h-6 w-6" />
          </button>
        </div>
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account? <a href="#" className="text-yellow-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;


