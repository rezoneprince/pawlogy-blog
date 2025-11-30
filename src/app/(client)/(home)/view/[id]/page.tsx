"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ads from "@/assets/ads-2.webp";
import { useParams } from "next/navigation";

interface Blog {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  author_img?: string;
}
const ViewPage = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState<Blog | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("api data", data);
        setBlogs(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!blogs) return <p className="text-center">Loading...</p>;

  return (
    <div>
      <div key={blogs._id}>
        <h2 className="text-5xl mt-2">{blogs.title}</h2>
        <div className="my-4 flex" key={blogs._id}>
          <Image
            src={blogs.image}
            alt={blogs.title}
            width={40}
            height={50}
            className="rounded-full object-cover"
          />
          <div className="ml-4">
            <p className="font-medium">Admin</p>
            <p className="text-xs text-gray-500">
              Publish at {new Date(blogs.createdAt).toDateString()}
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <div className="overflow-hidden rounded-md w-[1200px] h-[700px]">
              <Image
                src={blogs.image}
                alt={blogs.title || "blogs.image"}
                width={1200}
                height={400}
                className="rounded-md object-cover transition-transform duration-[4000ms] ease-in-out hover:scale-110"
              />
            </div>{" "}
          </div>
          <p className="my-5 flex justify-center">
            {blogs.description?.replace(/<[^>]*>/g, "")}
          </p>
          <div className="flex justify-center ">
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
    </div>
  );
};

export default ViewPage;
