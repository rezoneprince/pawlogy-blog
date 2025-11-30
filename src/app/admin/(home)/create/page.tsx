"use client";
import { useState } from "react";
import TinymceEditor from "@/app/admin/components/tinymceEditor";

export default function Create() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    metaTitle: "",
    metaDescription: "",
  });

  const [content, setContent] = useState("");

  // handle text input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async () => {
    const payload = {
      ...form,
      description: content,
    };

    const res = await fetch("http://localhost:5000/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert("✅ Blog Created Successfully!");
      setForm({
        title: "",
        description: "",
        image: "",
        metaTitle: "",
        metaDescription: "",
      });
      setContent("");
    } else {
      const err = await res.json();
      alert("❌ Failed: " + err.error);
    }
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

      {/* ✅ TinyMCE Editor */}
      <div className="p-2 border rounded mb-3">
        <TinymceEditor value={content} handleChange={setContent} />
      </div>

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
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer transition"
      >
        Upload
      </button>
    </div>
  );
}
