"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // if logged in → admin
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.replace("/admin");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      localStorage.setItem("token", data.token);
      router.replace("/admin");
    } catch {
      setError("Network error");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 shadow-2xl p-4 text-center">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="border border-gray-200 w-full p-2 focus:outline-none"
          placeholder="Full Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="border border-gray-200 w-full p-2 focus:outline-none"
          placeholder="Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="border border-gray-200 w-full p-2 focus:outline-none"
          placeholder="Password*"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="bg-blue-600 text-white w-full py-2">Sign Up</button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <Link href="/signin" className="text-blue-500">
          Sign In
        </Link>
      </p>
    </div>
  );
}
