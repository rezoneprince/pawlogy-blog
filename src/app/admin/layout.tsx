import Header from "@/components/admin/header";
import Sidebar from "@/components/admin/sidebar";
import React from "react";

type props = {
  children: React.ReactNode;
};

const Layout = ({ children }: props) => {
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
};

export default Layout;
