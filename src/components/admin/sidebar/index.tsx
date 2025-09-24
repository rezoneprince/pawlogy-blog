"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { HiMenu, HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FaBloggerB } from "react-icons/fa";

export default function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  // Prevent scrolling on mobile when sidebar is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileOpen]);

  const SidebarContent = (
    <div
      className={`relative z-20 flex min-h-full flex-col bg-white p-4 text-black shadow-2xl transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Collapse button - Desktop only */}
      <div className="mb-4 hidden justify-end md:flex">
        <button onClick={toggleCollapse}>
          {isCollapsed ? (
            <HiArrowCircleRight size={24} />
          ) : (
            <HiArrowCircleLeft size={24} />
          )}
        </button>
      </div>

      {/* Mobile Close Button - Top Right */}
      <div className="absolute right-4 top-4 z-10 md:hidden">
        <button onClick={toggleMobile}>
          <RxCross2 size={24} />
        </button>
      </div>

      {/* Navigation  */}
      <nav className="space-y-2">
        <Link
          href={"/admin"}
          className="flex items-center space-x-2 rounded px-3 py-2 hover:bg-blue-100 hover:text-blue-800"
        >
          <AiOutlineDashboard size={20} />
          {!isCollapsed && <span className="text-sm">Dashboard</span>}
        </Link>

        <div>
          <Link
            href={"/admin/blogs"}
            className="flex items-center space-x-2 rounded px-3 py-2 hover:bg-blue-100 hover:text-blue-800"
          >
            <FaBloggerB size={20} />
            {!isCollapsed && <span className="text-sm">Blogs</span>}
          </Link>
        </div>
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Hamburger Icon */}
      <div className="fixed left-4 top-4 z-50 md:hidden">
        {!isMobileOpen && (
          <button onClick={toggleMobile}>
            <HiMenu size={28} className="text-black" />
          </button>
        )}
      </div>

      {/* Dark overlay when sidebar is open on mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-50 opacity-50 md:hidden"
          onClick={toggleMobile}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-full shadow-2xl transition-transform duration-300 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:block md:translate-x-0`}
        style={{
          width: isCollapsed ? "5rem" : "16rem",
        }}
      >
        <div className="custom-scrollbar h-full overflow-y-auto overflow-x-hidden">
          {SidebarContent}
        </div>
      </aside>
    </>
  );
}
