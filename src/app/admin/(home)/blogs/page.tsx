"use client";
import { useState } from "react";

export default function Blog() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    metaTitle: "",
    metaDescription: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Blog Created!");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Create Blog</h1>
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="border p-2 w-full mb-2"
        value={form.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        className="border p-2 w-full mb-2"
        value={form.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        className="border p-2 w-full mb-2"
        value={form.image}
        onChange={handleChange}
      />
      <input
        type="text"
        name="metaTitle"
        placeholder="Meta Title"
        className="border p-2 w-full mb-2"
        value={form.metaTitle}
        onChange={handleChange}
      />
      <textarea
        name="metaDescription"
        placeholder="Meta Description"
        className="border p-2 w-full mb-2"
        value={form.metaDescription}
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Blog
      </button>
    </div>
  );
}
