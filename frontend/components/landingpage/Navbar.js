"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaShoppingCart,
  FaSearch,
  FaHeart,
  FaUser,
  FaChevronDown,
  FaStore,
  FaQuestionCircle,
  FaFileAlt,
  FaLock,
  FaInfoCircle,
  FaQuestion,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useAuth } from "../../context/AuthContext"; // Import the Auth context

export default function Navbar() {
  const { isLoggedIn, userName, logout } = useAuth(); // Use the Auth context
  console.log("isloggedinnn", isLoggedIn);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Hamburger Menu for Mobile */}
        <div className="sm:flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-secondary-black hover:text-primary-gray focus:outline-none mr-4 flex justify-center"
          >
            <FaBars size={24} />
          </button>
          {menuOpen && (
            <div className="absolute left-0 top-0 w-full h-screen bg-secondary-black text-white shadow-lg z-20 transition-all duration-500">
              <div className="flex justify-between items-center px-4 py-4">
                <Image
                  src="/images/logo-gasruk.svg"
                  alt="Logo"
                  width={110}
                  height={40}
                />
                <RxCross1 size={24} onClick={() => setMenuOpen(false)} />
              </div>
              <Link href="/settings/profile">
                <div className="block px-4 py-6 hover:bg-primary-gray">
                  <FaUser className="inline mr-2" /> My Profile
                </div>
              </Link>
              <div className="border-t border-primary-gray"></div>

              <Link href="/settings/my-orders">
                <div className="block px-4 py-6 hover:bg-primary-gray">
                  <FaShoppingCart className="inline mr-2" /> My Orders
                </div>
              </Link>
              <div className="border-t border-primary-gray"></div>

              <Link href="/store">
                <div className="block px-4 py-6 hover:bg-primary-gray">
                  <FaStore className="inline mr-2" /> My Store
                </div>
              </Link>
              <div className="border-t border-primary-gray "></div>

              <Link href="/help">
                <div className="block px-4 py-6 hover:bg-primary-gray">
                  <FaQuestionCircle className="inline mr-2" /> Help
                </div>
              </Link>
              <div className="border-t border-primary-gray "></div>
              <Link href="/terms">
                <div className="block px-4 py-6 hover:bg-primary-gray">
                  <FaFileAlt className="inline mr-2" /> Terms & Conditions
                </div>
              </Link>
              <div className="border-t border-primary-gray "></div>

              <Link href="/privacy">
                <div className="block px-4 py-6 hover:bg-primary-gray">
                  <FaLock className="inline mr-2" /> Privacy Policy
                </div>
              </Link>
              <div className="border-t border-primary-gray "></div>

              <Link href="/about">
                <div className="block px-4 py-6 hover:bg-primary-gray">
                  <FaInfoCircle className="inline mr-2" /> About
                </div>
              </Link>
              <div className="border-t border-primary-gray "></div>

              <Link href="/faq">
                <div className="block px-4 py-6 hover:bg-primary-gray">
                  <FaQuestion className="inline mr-2" /> FAQ
                </div>
              </Link>
              <div className="border-t border-primary-gray "></div>

              <div
                onClick={logout}
                className="block px-4 py-6 hover:bg-primary-gray"
              >
                <FaSignOutAlt className="inline mr-2" /> Logout
              </div>
            </div>
          )}
        </div>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo-gasruk.svg"
            alt="Logo"
            width={110}
            height={40}
          />
        </Link>

        {/* Search Bar */}
        <div className="flex items-center w-full justify-end space-x-4">
          <div className="flex-1 mx-8 relative hidden md:block">
            <input
              type="text"
              placeholder="Search Games, Consoles, or Accessories"
              className="w-full text-sm px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-primary-black pr-10"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <FaSearch
                className="text-white bg-primary-black w-10 p-3 h-full"
                size={10}
              />
            </div>
          </div>

          {/* Search Icon for Mobile */}
          <div className="block md:hidden">
            <IoSearchOutline className="text-primary-black" size={24} />
          </div>

          <div className="mx-4 h-6 border-l border-gray-300 block md:hidden"></div>

          {/* Keranjang */}
          <div className="relative">
            <Link href="/cart">
              <TiShoppingCart
                size={24}
                className="text-primary-black hover:text-secondary-black"
              />
            </Link>
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
          </div>

          {/* Garis Pembatas */}
          <div className="mx-4 h-6 border-l border-gray-300 block"></div>

          {/* Login & Sign Up or Wishlist & Profile */}
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Link href="/settings/wishlist">
                <FaHeart
                  size={24}
                  className="text-primary-black hover:text-secondary-black"
                />
              </Link>
              <div className="mx-4 h-6 border-l border-gray-300 hidden md:block"></div>

              <div className="relative hidden md:block">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-primary-black hover:text-secondary-black focus:outline-none"
                >
                  <FaUser size={24} />
                  <div className="text-sm mx-2 font-medium">{userName}</div>
                  <FaChevronDown className="ml-1" />
                </button>
                {dropdownOpen && (
                  <div className="text-sm absolute left-0 mt-4 w-52 bg-secondary-black text-white shadow-lg z-20">
                    <Link href="/settings/profile">
                      <div className="block px-4 py-4 hover:bg-primary-gray ">
                        <FaUser className="inline mr-2" /> My Profile
                      </div>
                    </Link>
                    <Link href="/settings/my-order">
                      <div className="block px-4 py-4 hover:bg-primary-gray">
                        <FaShoppingCart className="inline mr-2" /> My Orders
                      </div>
                    </Link>
                    <Link href="/store">
                      <div className="block px-4 py-4 hover:bg-primary-gray">
                        <FaStore className="inline mr-2" /> My Store
                      </div>
                    </Link>
                    <Link href="/help">
                      <div className="block px-4 py-4 hover:bg-primary-gray">
                        <FaQuestionCircle className="inline mr-2" /> Help
                      </div>
                    </Link>
                    <div className="border-t border-primary-gray "></div>
                    <Link href="/terms">
                      <div className="block px-4 py-4 hover:bg-primary-gray">
                        <FaFileAlt className="inline mr-2" /> Terms & Conditions
                      </div>
                    </Link>
                    <Link href="/privacy">
                      <div className="block px-4 py-4 hover:bg-primary-gray">
                        <FaLock className="inline mr-2" /> Privacy Policy
                      </div>
                    </Link>
                    <Link href="/about">
                      <div className="block px-4 py-4 hover:bg-primary-gray">
                        <FaInfoCircle className="inline mr-2" /> About
                      </div>
                    </Link>
                    <Link href="/faq">
                      <div className="block px-4 py-4 hover:bg-primary-gray">
                        <FaQuestion className="inline mr-2" /> FAQ
                      </div>
                    </Link>

                    <div
                      onClick={logout}
                      className="block px-4 py-4 hover:bg-primary-gray"
                    >
                      <FaSignOutAlt className="inline mr-2" /> Logout
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <div className="px-4 py-2 text-sm text-primary-gray border border-gray-300 rounded-md hover:bg-gray-100">
                  Login
                </div>
              </Link>
              <Link href="/register">
                <div
                  className="px-4 py-2 text-sm text-white bg-primary-blue
                 rounded-md hover:bg-secondary-blue"
                >
                  Sign Up
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
