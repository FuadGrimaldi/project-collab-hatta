"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebook,
  FaArrowLeft,
} from "react-icons/fa";
import Image from "next/image";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="bg-black min-h-screen flex">
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="w-full max-w-lg mx-5">
          <div className="fixed top-12 flex items-center mb-20">
            <Link href="/" className="text-white hover:text-gray-300">
              <FaArrowLeft className="mr-3" />
            </Link>
            <Image
              src="/images/logo.svg"
              alt="register"
              width={80}
              height={40}
            />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-white mt-0 md:mt-16 lg:mt-8">
            Login Account
          </h1>
          <p className="text-xs md:text-sm font-light text-gray-300 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <form action="#">
            <input
              type="email"
              name="email"
              id="email"
              className="bg-white text-gray-700 text-xs md:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Username or Email"
              required=""
            />
            <div className="mt-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="bg-white text-gray-700 text-xs md:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required=""
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-300" />
                ) : (
                  <FaEye className="text-gray-300" />
                )}
              </button>
            </div>

            <button
              type="submit"
              className="w-full mt-7 text-white bg-[#03536c] hover:bg-[#03536c]/90 focus:ring-4 focus:outline-none focus:ring-[#03536c]/50 font-medium text-xs md:text-sm px-5 py-2.5 text-center"
            >
              Login
            </button>
          </form>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-300"
              >
                Remember Me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-white hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="mt-7">
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-[#D4D5D6]"></div>
              <span className="flex-shrink mx-4 text-sm font-light text-[#D4D5D6]">
                OR
              </span>
              <div className="flex-grow border-t border-[#D4D5D6]"></div>
            </div>
            <div className="mt-7 space-y-3">
              <button
                type="button"
                className="w-full text-white bg-black hover:bg-[#EB4335] border border-[#EB4335] font-medium text-xs md:text-sm px-5 py-2.5 text-center inline-flex items-center justify-center"
              >
                <FaGoogle className="mr-2 " />
                LOGIN WITH GOOGLE
              </button>
              <button
                type="button"
                className="w-full text-white bg-black border border-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium text-xs md:text-sm px-5 py-2.5 text-center inline-flex items-center justify-center"
              >
                <FaFacebook className="mr-2" />
                LOGIN WITH FACEBOOK
              </button>
            </div>
            <p className="mt-12 text-sm font-light text-gray-300">
              Dont have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-white hover:underline"
              >
                Register Here!
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 hidden md:block relative">
        <Image
          src="/images/login.svg"
          alt="register"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
    </section>
  );
}
