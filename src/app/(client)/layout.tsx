import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar";
import React from "react";

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <div className="lg:mx-auto md:mx-[4px] sm:mx-[4px]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
