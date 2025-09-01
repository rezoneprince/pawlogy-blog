import React from "react";
import logo from "@/assets/pawlogy.png";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";

const Navbar = () => {
  return (
    <div className="flex justify-between border-b">
      <Image src={logo} alt="logo" width={150} height={200} />
      <div className="flex justify-center items-center gap-2">
        <p className="border-1 rounded-full w-6 h-6 flex justify-center items-center">
          <SlSocialFacebook />
        </p>
        <p className="border-1 rounded-full w-6 h-6 flex justify-center items-center">
          <FaXTwitter />
        </p>
        <p className="border-1 rounded-full w-6 h-6 flex justify-center items-center">
          <FaInstagram />
        </p>
        <button className="border-1 px-2 rounded text-md text-gray-600 hover:text-blue-600 hover:cursor-pointer">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
