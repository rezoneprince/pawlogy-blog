"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // already logged in? → admin
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.replace("/admin");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      router.replace("/admin");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20">
      <h2 className="text-xl font-bold mb-4">Sign In</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="border w-full p-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border w-full p-2"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white w-full py-2">Signin</button>
      </form>
      <p className="mt-4 text-sm">
        Don&#39;t have an account ?{" "}
        <Link href="/signup" className="text-blue-500">
          SignUp
        </Link>
      </p>
    </div>
  );
}
