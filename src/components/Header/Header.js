"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <img
              src="/images/homeimg/logo.svg"
              alt="logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10 text-[17px] font-medium text-gray-600">
            <Link href="/" className="hover:text-black transition duration-300">
              Home
            </Link>

            <Link
              href="/about"
              className="hover:text-black transition duration-300"
            >
              About
            </Link>

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-black transition duration-300">
                Courses <FaChevronDown size={12} />
              </div>

              <div
                className={`absolute left-0 top-full mt-3 bg-white shadow-xl rounded-xl py-3 w-52 border border-gray-100 transition-all duration-300 ${
                  dropdown
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <Link
                  href="/courses/web"
                  className="block px-5 py-3 text-[15px] text-gray-600 hover:bg-gray-50 hover:text-black transition"
                >
                  Web Dev
                </Link>

                <Link
                  href="/courses/app"
                  className="block px-5 py-3 text-[15px] text-gray-600 hover:bg-gray-50 hover:text-black transition"
                >
                  App Dev
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="hover:text-black transition duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-gray-700">
              {open ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="px-5 py-6 flex flex-col gap-5 text-[16px] font-medium text-gray-700">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="pb-3 border-b border-gray-100 hover:text-black transition"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="pb-3 border-b border-gray-100 hover:text-black transition"
            >
              About
            </Link>

            {/* Mobile Dropdown */}
            <div className="border-b border-gray-100 pb-3">
              <div
                className="flex items-center justify-between cursor-pointer hover:text-black transition"
                onClick={() => setDropdown(!dropdown)}
              >
                <span>Courses</span>

                <FaChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${
                    dropdown ? "rotate-180" : ""
                  }`}
                />
              </div>

              {dropdown && (
                <div className="mt-4 ml-3 flex flex-col gap-3 text-[15px] text-gray-600">
                  <Link
                    href="/courses/web"
                    onClick={() => setOpen(false)}
                    className="hover:text-black transition"
                  >
                    Web Dev
                  </Link>

                  <Link
                    href="/courses/app"
                    onClick={() => setOpen(false)}
                    className="hover:text-black transition"
                  >
                    App Dev
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-black transition"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
