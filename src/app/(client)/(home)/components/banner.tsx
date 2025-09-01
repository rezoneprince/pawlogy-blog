import { blogData } from "@/data/blog-data";
import React from "react";

const Banner = () => {
  return (
    <div className="grid grid-cols-12 gap-5 py-12">
      <div className="col-span-9">
        <div className="text-2xl font-bold border-b pb-2">
          <span className="border-b pb-3">Latest Posts</span>
        </div>
      </div>
      <div className="col-span-3">
        <div className="text-2xl border-b font-bold pb-2">
          <span className="border-b pb-3">Trending</span>
        </div>
        <div className="mt-5">
          <div>
            <p>
              {blogData.slice(0, 5).map((item) => (
                <div className="pb-2" key={item.id}>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-xs text-gray-500">
                    {new Date().toDateString()}
                  </p>
                </div>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
