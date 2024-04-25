import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/motionSection";
import "../App.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

function AnimatedText() {
  const [dots, setDots] = useState("");
  const [fillingDots, setFillingDots] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!fillingDots) {
        setDots((prev) => (prev.length < 3 ? prev + "." : ""));
        if (dots.length === 3) {
          setFillingDots(true);
        }
      } else {
        setDots((prev) => (prev.length > 0 ? prev.slice(0, -1) : ""));
        if (dots.length === 0) {
          setFillingDots(false);
        }
      }
    }, 300);

    return () => clearInterval(interval);
  }, [dots, fillingDots]);

  return (
    <div className="flex items-center justify-center">
      <div className="text-3xl min-[400px]:text-4xl min-[500px]:text-5xl min-[600px]:text-6xl font-bold text-center min-[550px]:w-[300px]">
        <span>Próximamente</span>
        <span>{dots}</span>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="bg-[#161815] bg-[radial-gradient(#ffffff33_1px,#161815_1px)] bg-[size:50px_50px]">
      <Header />

      <div className="h-full w-full pt-16 pb-20 ">
        <Section>
          <div className="flex gap-x-16 items-center my-4 h-full py-4 xl:py-16 transition-all lg:py-8 w-11/12 mx-auto rounded-lg min-[500px]:px-8 xl:px-16 justify-center text-white">
            <div className="flex flex-col justify-center h-[400px] w-full px-2 min-[440px]:px-8 items-start">
              <AnimatedText />
              {/* <p className="min-[440px]:text-base text-sm text-pretty max-w-5xl pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing eli t. At
                labore quae fugiat voluptates officiis. Cumque minima minus
                aliquid architecto. Provident eaque cum maxime numquam
                explicabo.
              </p> */}
            </div>
            {/* 
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-2 lg:gap-x-4 xl:gap-x-8 max-w-7xl mx-auto w-full gap-y-8">
              <div className="h-fit flex flex-col gap-y-3 px-7 bg-white py-5 min-[440px]:py-7 rounded-xl place-items-center w-full shadow-lg hover:shadow-xl transition-all">
                <div className="flex justify-between w-full lg:px-0 lg:pb-0 items-center px-4 pb-4">
                  <div className="flex flex-col self-start">
                    <h3 className="font-bold text-lg self-start fuente2">
                      Basic
                    </h3>
                    <span className="flex self-start">
                      <p className="text-3xl font-bold">$5/</p>
                      <p className="text-sm font-semibold self-end">per user</p>
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-orange-500 px-4 py-2 rounded-lg lg:hidden  border-2 self-end border-orange-500 transition-all hover:text-white hover:bg-orange-500 duration-500 font-semibold min-[440px]:flex hidden"
                  >
                    Choose plan
                  </a>
                </div>
                <div className="h-fit lg:flex lg:flex-col lg:gap-y-3 grid grid-cols-1 min-[440px]:grid-cols-2 gap-y-4 items-center tracking-normal leading-4 lg:text-xs text-xs min-[440px]:text-sm text-black/50 gap-x-4 grid-rows-5 min-[440px]:grid-rows-6 transition-all">
                  <div className="flex gap-x-2 items-center content-center pt-2 min-[440px]:row-span-2 min-[440px]:row-start-2 min-[440px]:col-start-1">
                    <div className="pt-1">
                      <svg
                        className="rounded-full bg-orange-500 text-white border-4 border-orange-500"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center content-center min-[440px]:row-span-2 min-[440px]:col-start-1">
                    <div className="pt-1">
                      <svg
                        className="rounded-full bg-orange-500 text-white border-4 border-orange-500"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center content-center min-[440px]:row-span-2 min-[440px]:col-start-2 min-[440px]:row-start-1">
                    <div className="pt-1">
                      <svg
                        className="text-gray-500"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M9 12l2 2l4 -4" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center content-center min-[440px]:row-span-2 min-[440px]:col-start-2 min-[440px]:row-start-3">
                    <div className="pt-1">
                      <svg
                        className="text-gray-500"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M9 12l2 2l4 -4" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center content-center min-[440px]:row-span-2 min-[440px]:col-start-2 min-[440px]:row-start-5">
                    <div className="pt-1">
                      <svg
                        className="text-gray-500"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M9 12l2 2l4 -4" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-orange-500 rounded-full border-2 lg:self-center border-orange-500 transition-all lg:px-4  xl:px-8 lg:py-2 xl:py-3 fuente2 text-base px-4 py-2 min-[440px]:py-3 hover:text-white hover:bg-orange-500 duration-500 font-semibold lg:block  min-[440px]:hidden mt-0 min-[440px]:mt-6 mb-4"
                >
                  Choose plan
                </a>
              </div>

              <div className="h-fit flex flex-col gap-y-3 px-7 bg-white py-5 min-[440px]:py-7 rounded-xl place-items-center w-full shadow-lg hover:shadow-xl transition-all">
                <div className="flex justify-between w-full lg:px-0 lg:pb-0 items-center px-4 pb-4">
                  <div className="flex flex-col self-start">
                    <h3 className="font-bold text-lg self-start fuente2">
                      Standard
                    </h3>
                    <span className="flex self-start">
                      <p className="text-3xl font-bold">$8/</p>
                      <p className="text-sm font-semibold self-end">per user</p>
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-orange-500 px-4 py-2 rounded-lg lg:hidden  border-2 self-end border-orange-500 transition-all hover:text-white hover:bg-orange-500 duration-500 font-semibold min-[440px]:flex hidden"
                  >
                    Choose plan
                  </a>
                </div>
                <div className="h-fit lg:flex lg:flex-col lg:gap-y-3 grid grid-cols-1 min-[440px]:grid-cols-2 gap-y-4 items-center tracking-normal leading-4 lg:text-xs text-xs min-[440px]:text-sm text-black/50 gap-x-4 grid-rows-5 min-[440px]:grid-rows-6 transition-all">
                  <div className="flex gap-x-2 items-center content-center pt-2 min-[440px]:row-span-2 min-[440px]:row-start-2 min-[440px]:col-start-1">
                    <div className="pt-1">
                      <svg
                        className="rounded-full bg-orange-500 text-white border-4 border-orange-500"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center content-center min-[440px]:row-span-2 min-[440px]:col-start-1">
                    <div className="pt-1">
                      <svg
                        className="rounded-full bg-orange-500 text-white border-4 border-orange-500"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center content-center min-[440px]:row-span-2 min-[440px]:col-start-2 min-[440px]:row-start-1">
                    <div className="pt-1">
                      <svg
                        className="rounded-full bg-orange-500 text-white border-4 border-orange-500"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center content-center min-[440px]:row-span-2 min-[440px]:col-start-2 min-[440px]:row-start-3">
                    <div className="pt-1">
                      <svg
                        className="text-gray-500"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M9 12l2 2l4 -4" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center content-center min-[440px]:row-span-2 min-[440px]:col-start-2 min-[440px]:row-start-5">
                    <div className="pt-1">
                      <svg
                        className="text-gray-500"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M9 12l2 2l4 -4" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-orange-500 rounded-full border-2 lg:self-center border-orange-500 transition-all lg:px-4  xl:px-8 lg:py-2 xl:py-3 fuente2 text-base px-4 py-2 min-[440px]:py-3 hover:text-white hover:bg-orange-500 duration-500 font-semibold lg:block  min-[440px]:hidden mt-0 min-[440px]:mt-6 mb-4"
                >
                  Choose plan
                </a>
              </div>

              <div className="h-fit flex flex-col gap-y-3 px-7 bg-neutral-950/85 text-white py-5 min-[440px]:py-7 rounded-xl place-items-center w-full shadow-lg hover:shadow-xl transition-all">
                <div className="flex justify-between w-full lg:px-0 lg:pb-0 items-center px-4 pb-4">
                  <div className="flex flex-col self-start">
                    <h3 className="font-bold text-lg self-start fuente2">
                      Premium
                    </h3>
                    <span className="flex self-start">
                      <p className="text-3xl font-bold">$10/</p>
                      <p className="text-sm font-semibold self-end">per user</p>
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-orange-500 px-4 py-2 rounded-lg lg:hidden  border-2 self-end border-orange-500 transition-all hover:text-white hover:bg-orange-500 duration-500 font-semibold min-[440px]:flex hidden"
                  >
                    Choose plan
                  </a>
                </div>
                <div className=" h-fit lg:flex lg:flex-col lg:gap-y-3 grid grid-cols-1 min-[440px]:grid-cols-2 gap-y-4 items-center tracking-normal leading-4 lg:text-xs text-xs min-[440px]:text-sm text-white/50 gap-x-4 grid-rows-5 min-[440px]:grid-rows-6 transition-all">
                  <div className="flex gap-x-2 items-center content-center pt-2 min-[440px]:row-span-2 min-[440px]:row-start-2 min-[440px]:col-start-1">
                    <div className="pt-1">
                      <svg
                        className="rounded-full bg-orange-500 text-white border-4 border-orange-500"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center content-center min-[440px]:row-span-2 min-[440px]:col-start-1">
                    <div className="pt-1">
                      <svg
                        className="rounded-full bg-orange-500 text-white border-4 border-orange-500"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center content-center min-[440px]:row-span-2 min-[440px]:col-start-2 min-[440px]:row-start-1">
                    <div className="pt-1">
                      <svg
                        className="rounded-full bg-orange-500 text-white border-4 border-orange-500"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center content-center min-[440px]:row-span-2 min-[440px]:col-start-2 min-[440px]:row-start-3">
                    <div className="pt-1">
                      <svg
                        className="rounded-full bg-orange-500 text-white border-4 border-orange-500"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center content-center min-[440px]:row-span-2 min-[440px]:col-start-2 min-[440px]:row-start-5">
                    <div className="pt-1">
                      <svg
                        className="text-gray-500"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M9 12l2 2l4 -4" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-orange-500 rounded-full border-2 lg:self-center border-orange-500 transition-all lg:px-4  xl:px-8 lg:py-2 xl:py-3 fuente2 text-base px-4 py-2 min-[440px]:py-3 hover:text-white hover:bg-orange-500 duration-500 font-semibold lg:block  min-[440px]:hidden mt-0 min-[440px]:mt-6 mb-4"
                >
                  Choose plan
                </a>
              </div>

              <div className="h-fit flex flex-col gap-y-3 px-7 bg-white py-5 min-[440px]:py-7 rounded-xl place-items-center w-full shadow-lg hover:shadow-xl transition-all">
                <div className="flex justify-between w-full lg:px-0 lg:pb-0 items-center px-4 pb-4">
                  <div className="flex flex-col self-start">
                    <h3 className="font-bold text-lg self-start fuente2">
                      Enterprise
                    </h3>
                    <span className="flex self-start">
                      <p className="text-3xl font-bold">$12/</p>
                      <p className="text-sm font-semibold self-end">per user</p>
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-orange-500 px-4 py-2 rounded-lg lg:hidden  border-2 self-end border-orange-500 transition-all hover:text-white hover:bg-orange-500 duration-500 font-semibold min-[440px]:flex hidden"
                  >
                    Choose plan
                  </a>
                </div>
                <div className="h-fit lg:flex lg:flex-col lg:gap-y-3 grid grid-cols-1 min-[440px]:grid-cols-2 gap-y-4 items-center tracking-normal leading-4 lg:text-xs text-xs min-[440px]:text-sm text-black/50 gap-x-4 grid-rows-5 min-[440px]:grid-rows-6 transition-all">
                  <div className="flex gap-x-2 items-center content-center pt-2 min-[440px]:row-span-2 min-[440px]:row-start-2 min-[440px]:col-start-1">
                    <div className="pt-1">
                      <svg
                        className="rounded-full bg-orange-500 text-white border-4 border-orange-500"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center content-center min-[440px]:row-span-2 min-[440px]:col-start-1">
                    <div className="pt-1">
                      <svg
                        className="rounded-full bg-orange-500 text-white border-4 border-orange-500"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center content-center min-[440px]:row-span-2 min-[440px]:col-start-2 min-[440px]:row-start-1">
                    <div className="pt-1">
                      <svg
                        className="rounded-full bg-orange-500 text-white border-4 border-orange-500"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center content-center min-[440px]:row-span-2 min-[440px]:col-start-2 min-[440px]:row-start-3">
                    <div className="pt-1">
                      <svg
                        className="rounded-full bg-orange-500 text-white border-4 border-orange-500"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center content-center min-[440px]:row-span-2 min-[440px]:col-start-2 min-[440px]:row-start-5">
                    <div className="pt-1">
                      <svg
                        className="rounded-full bg-orange-500 text-white border-4 border-orange-500"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet ola sos consectetur nel pastel
                      adipisicing.
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-orange-500 rounded-full border-2 lg:self-center border-orange-500 transition-all lg:px-4  xl:px-8 lg:py-2 xl:py-3 fuente2 text-base px-4 py-2 min-[440px]:py-3 hover:text-white hover:bg-orange-500 duration-500 font-semibold lg:block  min-[440px]:hidden mt-0 min-[440px]:mt-6 mb-4"
                >
                  Choose plan
                </a>
              </div>
            </div>
            */}
          </div>
        </Section>
      </div>
      <Footer />
    </div>
  );
}
