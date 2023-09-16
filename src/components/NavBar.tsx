"use client";

import Link from "next/link";
import logo from "./images/logo.png";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={`${
        isOpen ? "py-4 bg-black" : "py-4"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto flex flex-row space-x-2 items-center relative">
        <div className="logo flex-1">
          <Link href="/">
            <Image src={logo} width={200} height={20} alt="Logo" />
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="block px-2 text-black hover:text-black focus:text-black focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>menu</title>
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 6L6 18H18V6ZM4 4H20V20H4V4Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6H20V8H4V6ZM4 10H20V12H4V10ZM4 14H20V16H4V14Z"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isOpen
              ? "block bg-black text-white fixed top-0 left-0 h-screen w-screen flex flex-col justify-evenly items-center"
              : "hidden"
          } lg:flex lg:justify-around lg:flex-1 lg:space-x-12 mt-4 lg:mt-0 font-bold z-10`}
        >
          <li className="hover:text-blue-200">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-blue-200">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-blue-200">
            <Link href="/contact">Contact</Link>
          </li>
          {isOpen && (
            <li className="lg:hidden" onClick={toggleMenu}>
              <p className="text-white cursor-pointer hover:text-blue-200">
                Close
              </p>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
