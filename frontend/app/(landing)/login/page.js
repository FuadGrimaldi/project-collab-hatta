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
import axios from "axios";
import BASE_URL from "../../../config/config";
import Notification from "../../../components/landingpage/Notification";
import { setAuthToken } from "../../../services/api";
import { useAuth } from "../../../context/AuthContext";

export default function Login() {
  const { setIsLoggedIn, setUserName } = useAuth(); // Get the context functions

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });

      console.log("Login berhasil:", response.data);
      const token = response.data.data.token;
      localStorage.setItem("authToken", token);
      console.log("token", token);
      setAuthToken(token);
      setIsLoggedIn(true); // Set logged in state
      setUserName(response.data.data.first_name); // Set user name if available

      setNotification({ message: "Login berhasil!", type: "success" });
      router.push("/");
    } catch (error) {
      console.error(
        "Terjadi kesalahan:",
        error.response ? error.response.data : error.message
      );
      setNotification({ message: "Login gagal!", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-primary-black w-full min-h-screen flex relative">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

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
          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-white text-gray-700 text-xs md:text-sm focus:ring-primary-blue focus:border-primary-blue block w-full p-2.5"
              placeholder="Email"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="bg-white text-gray-700 text-xs md:text-sm focus:ring-primary-blue focus:border-primary-blue block w-full p-2.5"
                required=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              className="w-full mt-7 text-white bg-primary-blue hover:bg-primary-blue/90 focus:ring-4 focus:outline-none focus:ring-primary-blue/50 font-medium text-xs md:text-sm px-5 py-2.5 text-center"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}{" "}
            </button>
          </form>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary-blue focus:ring-secondary-blue border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-300"
              >
                Remember Me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="/forgot-password"
                className="font-medium text-white hover:underline"
              >
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
                onClick={() => router.push("/")}
                className="w-full text-white bg-primary-black hover:bg-[#EB4335] border border-[#EB4335] font-medium text-xs md:text-sm px-5 py-2.5 text-center inline-flex items-center justify-center"
              >
                <FaGoogle className="mr-2 " />
                LOGIN WITH GOOGLE
              </button>
              <button
                type="button"
                onClick={() => router.push("/")}
                className="w-full text-white bg-primary-black border border-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium text-xs md:text-sm px-5 py-2.5 text-center inline-flex items-center justify-center"
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
