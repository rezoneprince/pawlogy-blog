import { blogData } from "@/data/blog-data";
import Image from "next/image";
import React from "react";

const Slide = () => {
  return (
    <div>
      <div className="text-2xl font-bold border-b pb-2"></div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Big Featured Post */}
        <div className="md:col-span-6 my-5">
          {blogData.slice(0, 1).map((item) => (
            <div className="mb-2" key={item.id}>
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
          {blogData.slice(0, 1).map((item) => (
            <div className="mb-4 flex items-start" key={item.id}>
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
