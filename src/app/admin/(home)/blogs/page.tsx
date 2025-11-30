"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Blog = () => {
  const router = useRouter();

  // Dummy data replace with API  data
  const blogs = [
    { id: 1, author: "John Doe", title: "AI in 2025" },
    { id: 2, author: "Jane Smith", title: "Next.js for Beginners" },
  ];

  const handleUpdate = (id: number) => {
    router.push(`/update-blog/${id}`);
  };

  const handleDelete = (id: number) => {
    // delete logic here
    alert(`Blog ${id} deleted!`);
  };

  const handleCreate = () => {
    router.push("/create-blog");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Blog List</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border border-gray-200">Author</th>
            <th className="p-3 border border-gray-200">Title</th>
            <th className="p-3 border border-gray-200">Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id} className="border border-gray-200">
              <td className="p-3">{blog.author}</td>
              <td className="p-3">{blog.title}</td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => handleUpdate(blog.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Create Button */}
      <div className="mt-4">
        <Link href={"/admin/create"}>
          <button
            onClick={handleCreate}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Create
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
