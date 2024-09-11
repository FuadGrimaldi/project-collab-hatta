"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

export default function ForgotPassword() {
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
          <h1 className="text-xl md:text-2xl font-bold text-white">
            Forgot password
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

            <button
              type="submit"
              className="w-full mt-7 text-white bg-primary-blue hover:bg-primary-blue/90 focus:ring-4 focus:outline-none focus:ring-primary-blue/50 font-medium text-xs md:text-sm px-5 py-2.5 text-center"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
      <div className="w-1/2 hidden md:block relative">
        <Image
          src="/images/forgot-pass.svg"
          alt="register"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
    </section>
  );
}
