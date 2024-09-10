"use client";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 mx-auto max-w-[1400px] text-[16px] md:text-[21px] ">
      <div></div>

      {/* Hamburger Icon (for mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Links for desktop */}
      <div className="hidden md:flex space-x-10 items-center">
        <a
          href="#"
          className="hover:text-orange-400 transition all duration-300"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-orange-400 transition-all duration-300"
        >
          About
        </a>
        <a
          href="#services"
          className="hover:text-orange-400 transition-color duration-200"
        >
          Services
        </a>

        <a
          href="#contact"
          className="hover:text-orange-400 transition-color duration-200"
        >
          Contact
        </a>
        <button
          onClick={() => {
            window.open(
              "https://drive.usercontent.google.com/u/0/uc?id=1koiYSpwNK1r6R4x_oR6LlbLPjJ3fQby1&export=download"
            );
          }}
          className="bg-orange-500 text-white rounded p-2  grow-0  w-max hover:bg-orange-400 transition-colors duration-300"
        >
          Download CV
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center md:hidden transition-all">
          <a href="#" className="py-2 hover:text-orange-400 ">
            Home
          </a>
          <a href="#" className="py-2 hover:text-orange-400">
            About
          </a>
          <a href="#" className="py-2 hover:text-orange-400">
            Services
          </a>
          <a href="#" className="py-2 hover:text-orange-400">
            My Skills
          </a>
          <a href="#" className="py-2 hover:text-orange-400">
            Contact
          </a>
          <button
            onClick={() => {
              window.open(
                "https://drive.usercontent.google.com/u/0/uc?id=1koiYSpwNK1r6R4x_oR6LlbLPjJ3fQby1&export=download"
              );
            }}
            className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-[5px] hover:bg-orange-300 transition-all duration-300"
          >
            Download CV
          </button>
        </div>
      )}
    </nav>
  );
}
