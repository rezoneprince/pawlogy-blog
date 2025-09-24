import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-white py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 gap-3">
        <p className="text-xs sm:text-sm md:text-md lg:text-base text-gray-700 text-center sm:text-left">
          © {new Date().getFullYear()} All Rights Reserved By Pawlogy
        </p>

        {/* Social */}
        <div className="flex justify-center items-center gap-3">
          <p className="border rounded-full w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center hover:bg-gray-100 cursor-pointer">
            <SlSocialFacebook size={14} />
          </p>
          <p className="border rounded-full w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center hover:bg-gray-100 cursor-pointer">
            <FaXTwitter size={14} />
          </p>
          <p className="border rounded-full w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center hover:bg-gray-100 cursor-pointer">
            <FaInstagram size={14} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
