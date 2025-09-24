"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { IoNotifications } from "react-icons/io5";
import { AiOutlineDown } from "react-icons/ai";
import Profile from "@/assets/profile_icon.png";
import { CgProfile } from "react-icons/cg";
import { IoMdLogIn } from "react-icons/io";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
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
          {/* Logo */}
          <div>
            <h2
              className={
                "mt-2 hidden text-3xl font-extrabold text-blue-500 transition-opacity duration-300 sm:block"
              }
            >
              Pawlogy
            </h2>
          </div>
          <div className="flex">
            <button className="px-4">
              <IoNotifications size={18} />
            </button>

            <Image
              src={Profile}
              width={30}
              height={30}
              alt="Profile Icon"
              className="rounded-full"
            />

            <button ref={toggleRef} className="px-4" onClick={toggleDropdown}>
              <AiOutlineDown
                size={18}
                className={`transform transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
        </div>

        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-4 z-20 mt-2 w-full rounded bg-white text-black shadow-md sm:w-80 lg:w-80 lg:shadow-md"
          >
            <div>
              <span className="flex cursor-pointer justify-center px-4 py-2 hover:bg-gray-100">
                join@ecommerce.com
              </span>
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-200 p-4 text-2xl">
                RP
              </span>
              <span className="flex cursor-pointer justify-center px-2 py-2 font-bold hover:bg-gray-100">
                Admin
              </span>
            </div>
            <ul className="ml-4 flex flex-col">
              <li className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100">
                <span className="mr-2">
                  <CgProfile />
                </span>
                Profile
              </li>
              <li className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100">
                <span className="mr-2">
                  <IoMdLogIn />
                </span>
                Login
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
