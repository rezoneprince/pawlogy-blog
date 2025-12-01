"use client";

import React, { useEffect, useState } from "react";
import logo from "@/assets/pawlogy.png";
import small from "@/assets/p.png";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import Link from "next/link";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="w-full border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href={"/"}>
            <div className="flex-shrink-0">
              <div className="hidden lg:block">
                <Image src={logo} alt="logo" width={150} height={200} />
              </div>
              <div className="block lg:hidden">
                <Image src={small} alt="logo" width={40} height={40} />
              </div>
            </div>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* 🌙 Dark/Light Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 rounded-full border w-8 h-8 flex justify-center items-center text-sm bg-gray-200 dark:bg-gray-700"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>

            {/* Social Icons */}
            {[SlSocialFacebook, FaXTwitter, FaInstagram].map((Icon, i) => (
              <p
                key={i}
                className="border rounded-full w-8 h-8 flex justify-center items-center cursor-pointer"
              >
                <Icon size={14} />
              </p>
            ))}

            {/* Contact Button */}
            <button className="border px-3 py-1 rounded text-sm sm:text-md hover:text-blue-600 transition">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
