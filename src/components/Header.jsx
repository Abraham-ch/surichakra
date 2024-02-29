import "../App.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Header() {
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
      <nav
        className={`sticky top-0 h-[72px] transition-all flex w-full justify-between px-8 items-center roboto  text-white bg-[#161815] ${
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
              to="AboutUs"
              className="px-8 hover:bg-black/20 h-full flex flex-col justify-center"
            >
              About Us
            </Link>
          </li>
          <li className="h-full">
            <Link
              to="Pricing"
              className="px-8 hover:bg-black/20 h-full flex flex-col justify-center"
            >
              Pricing
            </Link>
          </li>
        </ul>
        <ul className="flex justify-between items-center">
          <li className="font-semibold text-base mx-2 border-2 rounded-lg px-6 py-2 border-sky-400 border-solid hover:bg-gradient-to-r to-cyan-400 from-blue-500 hover:border-none hover:scale-105  hover:shadow-md shadow-cyan-400 transition-all">
            Sing In
          </li>
          <li className="font-semibold text-base mx-2 border-2 border-sky-400 bg-sky-400 hover:bg-gradient-to-r from-sky-300 to-cyan-500 px-6  py-2 rounded-lg text-black hover:brightness-110 transition-all hover:border-none hover:scale-105 Frounded">
            Get Started
          </li>
        </ul>
      </nav>
    </>
  );
}
