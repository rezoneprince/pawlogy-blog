"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
}

const Banner = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err));
  }, []);

  if (blogs.length === 0)
    return <p className="flex justify-center py-10">Loading...</p>;

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
            {blogs.slice(0, 1).map((item) => (
              <div className="mb-2" key={item._id}>
                <Link href={"/view"}>
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
                  {item.description.split(" ").slice(0, 20).join(" ")}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(item.createdAt).toDateString()}
                </p>
                <Link href="/view">
                  <button className="border px-6 mt-2 py-1 rounded text-sm sm:text-md hover:cursor-pointer text-blue-600 transition">
                    All Posts
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Small List Posts */}
          <div className="md:col-span-6 my-5">
            {blogs.slice(0, 5).map((item) => (
              <Link href={"/view"} key={item._id}>
                <div className="mb-4 flex items-start">
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
                      {new Date(item.createdAt).toDateString()}
                    </p>
                  </div>
                </div>
              </Link>
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
          {blogs.slice(0, 5).map((item) => (
            <Link href={"/view"} key={item._id}>
              <div className="pb-3">
                <p className="font-bold">{item.title}</p>
                <p className="text-xs text-gray-500">
                  {new Date(item.createdAt).toDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
