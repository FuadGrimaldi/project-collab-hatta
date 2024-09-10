"use client";

import { useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
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

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const renderPasswordInput = (field, label, placeholder) => (
    <div className="relative">
      <label htmlFor={field} className="block text-sm text-gray-300">
        {label}
      </label>
      <input
        type={showPassword[field] ? "text" : "password"}
        id={field}
        name={field}
        placeholder={placeholder}
        value={formData[field]}
        onChange={handleChange}
        className="mt-2 block w-full bg-white border-white focus:ring-gray-500 focus:border-gray-900 text-gray-900 pr-10"
      />
      <button
        type="button"
        onClick={() => togglePasswordVisibility(field)}
        className="absolute inset-y-0 right-0 flex items-center pr-3 mt-6"
      >
        {showPassword[field] ? (
          <FaEyeSlash className="text-gray-400" />
        ) : (
          <FaEye className="text-gray-400" />
        )}
      </button>
    </div>
  );

  return (
    <div className="w-full mb-6">
      <div className="flex items-center mx-0 lg:mx-6 border-b border-[#808080]">
        <h1 className="text-2xl font-bold mb-6 mt-6">Change Password</h1>
      </div>
      <div className="flex gap-6 mt-8 mx-0 lg:mx-6 ">
        <form onSubmit={handleSubmit} className="space-y-6 w-full lg:w-1/2 ">
          {renderPasswordInput(
            "currentPassword",
            "Current Password",
            "Your Current Password"
          )}
          {renderPasswordInput(
            "newPassword",
            "New Password",
            "Your New Password"
          )}
          {renderPasswordInput(
            "confirmPassword",
            "Confirm Password",
            "Your Confirm Password"
          )}
          <div className="flex">
            <button
              type="submit"
              className="mt-8 px-4 py-2 w-40 bg-[#04536C] text-white hover:bg-[#01465b] transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
        <div className="w-1/2 hidden lg:block">
          <p className="text-sm text-[#04536C] mt-9 underline">
            Forgot Password ?
          </p>
        </div>
      </div>
    </div>
  );
}
