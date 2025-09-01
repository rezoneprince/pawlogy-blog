import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="flex justify-between">
      © {new Date().getFullYear()} All Rights Reserved By Pawlogy
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
      </div>
    </div>
  );
};

export default Footer;
