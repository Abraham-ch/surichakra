import "../App.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const VerticalMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden">
      <button
        className="bg-transparent text-white font-bold py-3 px-4 w-full text-left focus:bg-gradient-to-r from-sky-500/25 to-cyan-400/25"
        onClick={toggleMenu}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6h16" />
          <path d="M7 12h13" />
          <path d="M10 18h10" />
        </svg>
      </button>
      {isOpen && (
        <div className="bg-transparent w-full flex flex-col">
          <Link
            to="/"
            className="block px-12 py-3 bg-cyan-400/25 text-white border-cyan-400/35 hover:bg-gradient-to-r from-sky-500/35 to-cyan-400/35 hover:border-transparent transition-all"
          >
            Home
          </Link>
          <Link
            to="/AboutUs"
            className="block px-12 py-3 bg-cyan-400/25 text-white border-cyan-400/35 hover:bg-gradient-to-r from-sky-500/35 to-cyan-400/35 hover:border-transparent transition-all"
          >
            Read About Us
          </Link>
          <Link
            to="/Pricing"
            className="block px-12 bg-cyan-400/25 py-3 text-white border-cyan-400/35 hover:bg-gradient-to-r from-sky-500/35 to-cyan-400/35 hover:border-transparent transition-all"
          >
            Pricing
          </Link>
        </div>
      )}
    </div>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 200);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <VerticalMenu />
      <nav
        className={`md:visible hidden sticky top-0 h-[72px] transition-all md:flex w-full justify-between px-8 items-center roboto  text-white bg-[#161815] ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex justify-between items-center h-full text-lg shadow-md">
          <li className="h-full">
            <Link
              to="/"
              className="px-8 hover:bg-black/20 h-full flex flex-col justify-center "
            >
              Surichakra
            </Link>
          </li>
          <li className="h-full">
            <Link
              to="/AboutUs"
              className="px-8 hover:bg-black/20 h-full flex flex-col justify-center"
            >
              About Us
            </Link>
          </li>
          <li className="h-full">
            <Link
              to="/Pricing"
              className="px-8 hover:bg-black/20 h-full flex flex-col justify-center"
            >
              Pricing
            </Link>
          </li>
        </ul>
        <div className="flex justify-between items-center">
          <a
            className="font-semibold text-base mx-2 border-2 rounded-lg px-6 py-2 border-sky-400 border-solid hover:bg-gradient-to-r to-cyan-400 from-blue-500 hover:border-none hover:scale-105  hover:shadow-md shadow-cyan-400 transition-all"
            href="https://www.surichakra.com/login"
          >
            Sing In
          </a>
          <a
            className="font-semibold text-base mx-2 border-2 border-sky-400 bg-sky-400 hover:bg-gradient-to-r from-sky-300 to-cyan-500 px-6  py-2 rounded-lg text-black hover:brightness-110 transition-all hover:border-none hover:scale-105 Frounded"
            href="https://www.surichakra.com/register"
          >
            Get Started
          </a>
        </div>
      </nav>
    </>
  );
}
