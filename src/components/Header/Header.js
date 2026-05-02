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
            {/* <span className="text-black">Kody</span>
            <span className="text-green-500">Fier</span> */}

            <img src="/images/homeimg/logo.svg" alt="logo" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10 text-[17px] font-medium text-gray-600">
            <Link href="/" className="hover:text-black transition block">
              Home
            </Link>

            <Link href="/about" className="hover:text-black transition block">
              About
            </Link>

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-black transition block">
                Courses <FaChevronDown size={12} />
              </div>

              <div
                className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md py-2 w-44 transition-all duration-200 ${
                  dropdown
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <Link
                  href="/courses/web"
                  className="block px-4 py-2 text-[15px] text-gray-600 hover:bg-gray-100 hover:text-black block"
                >
                  Web Dev
                </Link>

                <Link
                  href="/courses/app"
                  className="block px-4 py-2 text-[15px] text-gray-600 hover:bg-gray-100 hover:text-black block"
                >
                  App Dev
                </Link>
              </div>
            </div>

            <Link href="/contact" className="hover:text-black transition block">
              Contact
            </Link>
          </nav>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <div>
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setDropdown(!dropdown)}
            >
              Courses <FaChevronDown size={12} />
            </div>

            {dropdown && (
              <div className="ml-4 mt-2 space-y-2">
                <Link href="/courses/web">Web Dev</Link>
                <Link href="/courses/app">App Dev</Link>
              </div>
            )}
          </div>

          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
