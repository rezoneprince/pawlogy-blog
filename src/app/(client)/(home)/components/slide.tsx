"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Blog {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
}

const Slide = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="text-2xl font-bold border-b pb-2"></div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Big Featured Post */}
        <div className="md:col-span-6 my-5">
          {blogs.slice(0, 1).map((item) => (
            <div className="mb-2" key={item._id}>
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="md:col-span-6 my-5 flex justify-center items-center">
          {blogs.slice(0, 1).map((item) => (
            <div className="mb-4 flex items-start" key={item._id}>
              <div className="ml-4">
                <p className="text-xl mb-5">{item.title}</p>
                <p className="text-sm text-gray-700 mb-5">{item.description}</p>
                <p className="text-xs text-gray-500">
                  {new Date().toDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
