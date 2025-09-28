"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import adds1 from "@/assets/ads-1.webp";
import adds2 from "@/assets/ads-2.webp";
import Link from "next/link";

interface Blog {
  _id: number;
  title: string;
  description: string;
  image: string;
  createdAt: string;
}
const Updated = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="text-2xl font-bold border-b pb-2"></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 py-12">
        {/* Left Section */}
        <div className="lg:col-span-10 col-span-12">
          <div className="grid grid-cols-1 md:grid-cols-12  gap-5">
            {/* Big Featured Post */}
            <div className="md:col-span-12 my-5">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {blogs.map((item) => (
                  <div className="mb-4 flex items-start" key={item._id}>
                    <Link href={`/view/${item._id}`}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={100}
                        height={100}
                        className="rounded-md object-cover"
                      />
                    </Link>
                    <div className="ml-4">
                      <p className="text-sm">{item.title}</p>
                      <p className="text-xs text-gray-500">
                        {new Date().toDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-10">
            <Image src={adds2} alt="adds2" width={600} height={100}></Image>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-2 col-span-12">
          <div className="my-5">
            <Image src={adds1} alt="add" width={500} height={500}></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Updated;
