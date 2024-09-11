"use client";

import { useState } from "react";
import Image from "next/image";

export default function Profile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    birthDate: "",
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
    <div className="w-full pb-8 p-6 border border-white bg-secondary-black">
      <div className="flex items-center mx-0 lg:mx-6 border-b border-primary-gray">
        <h1 className="text-2xl font-bold mb-6 mt-6">Profile</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 mx-0 lg:mx-6 ">
        <div className="order-2 lg:order-1 ">
          <div>
            <p className="text-sm text-gray-300">Username</p>
            <p className="text-sm text-gray-300 font-semibold mt-1">
              firyalhuwaida
            </p>
            <p className="text-sm text-gray-300 mt-6">Email</p>
            <p className="text-sm text-gray-300 font-semibold mt-1">
              firyalhuwaida@gmail.com{" "}
              <span className="text-sm text-[#04536C] underline pl-2">
                Edit Email
              </span>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm text-gray-300"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Your First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-2 block w-full bg-white border-white focus:ring-gray-500 focus:border-gray-900 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Your Last Name"
                value={formData.lastName}
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
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Your Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-2 block w-full bg-white border-white focus:ring-gray-500 focus:border-gray-900 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm  text-gray-300">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-2 block w-full bg-white border-white focus:ring-gray-500 focus:border-gray-900 text-gray-900"
              >
                <option className="text-gray-900" value="">
                  Select gender
                </option>
                <option className="text-gray-900" value="male">
                  Male
                </option>
                <option className="text-gray-900" value="female">
                  Female
                </option>
              </select>
            </div>
            <div>
              <label
                htmlFor="birthDate"
                className="block text-sm text-gray-300"
              >
                Birth Date
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="mt-2 block w-full bg-white border-white focus:ring-gray-500 focus:border-gray-900 text-gray-900"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 w-40 bg-[#04536C] text-white hover:bg-[#01465b] transition-colors"
            >
              Save
            </button>
          </form>
        </div>
        <div className="order-1 lg:order-2 flex flex-col items-center justify-center lg:border-none pb-6 border-b border-[#808080]">
          <div className="w-32 h-32 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/images/avatar.svg"
              alt="Profile"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
          <button className="mt-4 px-4 py-2 bg-[#04536C] text-white hover:bg-[#01465b]  transition-colors">
            Choose Image
          </button>
          <span className="text-sm text-gray-300 mt-4">
            Image size: max. 1MB
          </span>
          <span className="text-sm text-gray-300">
            Image format: .JPEG, .PNG
          </span>
        </div>
      </div>
    </div>
  );
}
