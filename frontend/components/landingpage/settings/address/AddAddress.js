"use client";

import { useState } from "react";

export default function AddAddress() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    province: "",
    city: "",
    district: "",
    zipCode: "",
    completeAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className=" w-full mb-6">
      <div className="flex items-center mx-0 lg:mx-6 border-b border-secondary-gray">
        <h1 className="text-2xl font-bold mb-6 mt-6">Add Address</h1>
      </div>
      <div className="flex gap-8 mt-8 mx-0 lg:mx-6 ">
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full bg-white border-white focus:ring-gray-500 focus:border-gray-900 text-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Your Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-2 block w-full bg-white border-white focus:ring-gray-500 focus:border-gray-900 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="province" className="block text-sm text-gray-300">
                Province
              </label>
              <input
                type="text"
                id="province"
                name="province"
                placeholder="Your Province"
                value={formData.province}
                onChange={handleChange}
                className="mt-2 block w-full bg-white border-white focus:ring-gray-500 focus:border-gray-900 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm text-gray-300">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Your City"
                value={formData.city}
                onChange={handleChange}
                className="mt-2 block w-full bg-white border-white focus:ring-gray-500 focus:border-gray-900 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="district" className="block text-sm text-gray-300">
                District
              </label>
              <input
                type="text"
                id="district"
                name="district"
                placeholder="Your District"
                value={formData.district}
                onChange={handleChange}
                className="mt-2 block w-full bg-white border-white focus:ring-gray-500 focus:border-gray-900 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="zipCode" className="block text-sm text-gray-300">
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                placeholder="Your Zip Code"
                value={formData.zipCode}
                onChange={handleChange}
                className="mt-2 block w-full bg-white border-white focus:ring-gray-500 focus:border-gray-900 text-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="completeAddress"
                className="block text-sm text-gray-300"
              >
                Complete Address
              </label>
              <textarea
                type="text"
                rows="4"
                id="completeAddress"
                name="completeAddress"
                placeholder="Your Complete Address"
                value={formData.completeAddress}
                onChange={handleChange}
                className="mt-2 block w-full bg-white border-white focus:ring-gray-500 focus:border-gray-900 text-gray-900"
              />
            </div>

            <div>
              <button
                type="submit"
                className="mt-6 px-4 py-2 w-full md:w-40 bg-[#04536C] text-white hover:bg-[#01465b] transition-colors"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
