"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IoNotifications } from "react-icons/io5";
import { AiOutlineDown } from "react-icons/ai";
import Profile from "@/assets/profile_icon.png";
import { IoMdLogIn } from "react-icons/io";
import Link from "next/link";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/signin");
  };

  // Track login state dynamically
  useEffect(() => {
    const checkToken = () => setIsLoggedIn(!!localStorage.getItem("token"));
    checkToken();

    window.addEventListener("storage", checkToken);
    return () => window.removeEventListener("storage", checkToken);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative mb-10 lg:mb-0">
      <div className="fixed left-0 top-0 z-40 w-full bg-white shadow-lg lg:static lg:w-auto lg:shadow-lg">
        <div className="mx-5 flex max-w-screen-2xl items-center justify-between p-2 text-black">
          <h2 className="mt-2 hidden text-3xl font-extrabold text-blue-500 transition-opacity duration-300 sm:block">
            Pawlogy
          </h2>

          <div className="flex items-center gap-2">
            <IoNotifications size={18} />
            <Image
              src={Profile}
              width={30}
              height={30}
              alt="Profile Icon"
              className="rounded-full"
            />
            <button ref={toggleRef} onClick={toggleDropdown}>
              <AiOutlineDown
                size={18}
                className={`transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-4 z-20 mt-2 w-full rounded bg-white text-black shadow-md sm:w-80 lg:w-80"
          >
            <div className="flex flex-col items-center py-4">
              <span className="h-14 w-14 flex items-center justify-center rounded-full bg-red-200 text-2xl">
                RP
              </span>
              <span className="font-bold mt-2">Admin</span>
              <span className="text-gray-500 text-sm">join@mail.com</span>
            </div>

            <ul className="flex flex-col">
              {!isLoggedIn ? (
                <>
                  <Link href="/signin">
                    <button className="border border-gray-200 px-3 py-1 rounded w-full my-1 hover:text-blue-600 transition flex items-center justify-center gap-1">
                      <IoMdLogIn /> Sign In
                    </button>
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="border border-gray-200 px-3 py-1 rounded w-full my-1 hover:text-blue-600 transition cursor-pointer"
                >
                  Logout
                </button>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
