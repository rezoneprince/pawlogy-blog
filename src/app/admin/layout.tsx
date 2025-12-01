"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/admin/header";
import Sidebar from "@/components/admin/sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/signin");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <div>
          <Sidebar />
        </div>
        <div className="flex-1 overflow-auto p-x-4">{children}</div>
      </div>
    </div>
  );
}
