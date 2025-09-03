import { blogData } from "@/data/blog-data";
import Image from "next/image";
import React from "react";
import ads from "@/assets/ads-2.webp";

const ViewPage = () => {
  return (
    <div>
      {blogData.slice(0, 1).map((item) => (
        <div key={item.id}>
          <h2 className="text-5xl mt-2">{item.title}</h2>
          <div className="my-4 flex" key={item.id}>
            <Image
              src={item.author_img}
              alt={item.title}
              width={40}
              height={50}
              className="rounded-full object-cover"
            />
            <div className="ml-4">
              <p className="font-medium">Admin</p>
              <p className="text-xs text-gray-500">
                Publish at {new Date().toDateString()}
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center ">
              <Image
                src={item.image}
                alt="#"
                width={1200}
                height={100}
                className="rounded-md"
              ></Image>
            </div>
            <p className="my-5 flex justify-center">{item.description}</p>
            <div className="flex justify-center ">
              <Image
                src={ads}
                alt="#"
                width={600}
                height={100}
                className="rounded-md"
              ></Image>
            </div>
            <p className="my-5 flex justify-center">{item.description}</p>
            <div className="flex justify-center ">
              <Image
                src={ads}
                alt="#"
                width={600}
                height={100}
                className="rounded-md"
              ></Image>
            </div>
            <p className="my-5 flex justify-center">{item.description}</p>
            <div className="flex justify-center my-5">
              <Image
                src={ads}
                alt="#"
                width={600}
                height={100}
                className="rounded-md"
              ></Image>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewPage;
