import { blogData } from "@/data/blog-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 py-12">
      {/* Left Section */}
      <div className="lg:col-span-9 col-span-12">
        <div className="text-2xl font-bold border-b pb-2">
          <span className="border-b pb-3">Latest Posts</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Big Featured Post */}
          <div className="md:col-span-6 my-5">
            {blogData.slice(0, 1).map((item) => (
              <div className="mb-2" key={item.id}>
                <Link href="/view">
                  <div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                    <p className="text-2xl font-bold mt-2">{item.title}</p>
                  </div>
                </Link>
                <p className="text-sm mt-1">
                  {item.description.split(" ").slice(0, 20).join(" ")}...
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date().toDateString()}
                </p>
                {/* All Post Button */}
                <button className="border px-6 mt-2 py-1 rounded text-sm sm:text-md hover:cursor-pointer text-blue-600 transition">
                  All Post
                </button>
              </div>
            ))}
          </div>

          {/* Small List Posts */}
          <div className="md:col-span-6 my-5">
            {blogData.slice(0, 5).map((item) => (
              <div className="mb-4 flex items-start" key={item.id}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="rounded-md object-cover"
                />
                <div className="ml-4">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-xs text-gray-500">
                    {new Date().toDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:col-span-3 col-span-12">
        <div className="text-2xl border-b font-bold pb-2">
          <span className="border-b pb-3">Trending</span>
        </div>

        <div className="my-5">
          {blogData.slice(0, 5).map((item) => (
            <div className="pb-3" key={item.id}>
              <p className="font-bold">{item.title}</p>
              <p className="text-xs text-gray-500">
                {new Date().toDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
