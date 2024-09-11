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
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  return (
    <section className="bg-primary-black min-h-screen flex">
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
            Register Account
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

            <div className="relative mt-4">
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
                className="absolute inset-y-0 right-0 flex items-center pr-3 "
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-300" />
                ) : (
                  <FaEye className="text-gray-300" />
                )}
              </button>
            </div>

            <div className="relative mt-4">
              <input
                type={showRetypePassword ? "text" : "password"}
                name="confirm-password"
                id="confirm-password"
                placeholder="Re-password"
                className="bg-white text-gray-700 text-xs md:text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required=""
              />
              <button
                type="button"
                onClick={() => setShowRetypePassword(!showRetypePassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showRetypePassword ? (
                  <FaEyeSlash className="text-gray-300" />
                ) : (
                  <FaEye className="text-gray-300" />
                )}
              </button>
            </div>
            <button
              onClick={() => router.push("/login")}
              type="submit"
              className="mt-7 w-full text-white bg-primary-blue hover:bg-primary-blue/90 focus:ring-4 focus:outline-none focus:ring-primary-blue/50 font-medium text-xs md:text-sm px-5 py-2.5 text-center"
            >
              Register
            </button>
          </form>
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
              Are you a member?{" "}
              <Link
                href="/login"
                className="font-medium text-white hover:underline"
              >
                Login Here!
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 hidden md:block relative">
        <Image
          src="/images/register.svg"
          alt="register"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
      {/* kalau ga kepotong codenya ini */}
      {/* <div className="w-1/2 relative bg-[#0150AB] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/register.svg"
            alt="register"
            layout="fill"
            objectFit="contain"
            objectPosition="left" // atau "right" untuk rata kanan
            className="w-full h-full"
          />
        </div>
      </div> */}
    </section>
  );
}
