import React, { useState, useEffect } from 'react';

const CreateProfile = () => {
  const [formValues, setFormValues] = useState({
    brandName: '',
    brandWebsite: '',
    country: '',
    city: '',
    mobileNumber: '',
  });

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    const allFieldsFilled = Object.values(formValues).every(value => value.trim() !== '');
    setIsButtonEnabled(allFieldsFilled);
  }, [formValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-start mb-6">
          <button className="text-2xl text-green-500">
            &#8592;
          </button>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Create Profile</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              name="brandName"
              placeholder="Brand Name"
              value={formValues.brandName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="url"
              name="brandWebsite"
              placeholder="Brand Website"
              value={formValues.brandWebsite}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <select
              name="country"
              value={formValues.country}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Country</option>
              <option value="country1">Country 1</option>
              <option value="country2">Country 2</option>
              <option value="country3">Country 3</option>
            </select>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="city"
              placeholder="Enter City"
              value={formValues.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-6">
            <div className="flex items-center border rounded-lg">
              <div className="flex items-center px-3 py-2 bg-gray-100 border-r">
                <span role="img" aria-label="world">🌍</span>
                <select
                  name="countryCode"
                  className="ml-2 focus:outline-none bg-transparent"
                  onChange={handleChange}
                >
                  <option value="00">00</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                </select>
              </div>
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formValues.mobileNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className={`w-full py-2 rounded-lg focus:outline-none focus:ring-2 ${isButtonEnabled ? 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
            disabled={!isButtonEnabled}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
