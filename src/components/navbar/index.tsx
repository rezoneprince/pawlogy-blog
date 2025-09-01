import React from "react";
import logo from "@/assets/pawlogy.png";
import small from "@/assets/p.png";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        {/* Flex container */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* Desktop Logo */}
            <div className="hidden lg:block">
              <Image src={logo} alt="logo" width={150} height={200} />
            </div>
            {/* Mobile Logo */}
            <div className="block lg:hidden">
              <Image src={small} alt="logo" width={40} height={40} />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Social Icons */}
            <p className="border rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-100 cursor-pointer">
              <SlSocialFacebook size={14} />
            </p>
            <p className="border rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-100 cursor-pointer">
              <FaXTwitter size={14} />
            </p>
            <p className="border rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-100 cursor-pointer">
              <FaInstagram size={14} />
            </p>

            {/* Contact Button */}
            <button className="border px-3 py-1 rounded text-sm sm:text-md text-gray-600 hover:text-blue-600 hover:border-blue-600 transition">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
