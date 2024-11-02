import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/motionSection";
import "../App.css";
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
  return (
    <div className="bg-[#161815] bg-[radial-gradient(#ffffff33_1px,#161815_1px)] bg-[size:50px_50px]">
      <Header />

      <div className="h-full w-full pt-16 pb-20 ">
        <Section>
          <div className="flex gap-x-16 items-center my-4 h-full py-4 xl:py-16 transition-all lg:py-8 w-11/12 mx-auto rounded-lg min-[500px]:px-8 xl:px-16 justify-center text-white">
            <div className="flex flex-col justify-center h-[400px] w-full px-2 min-[440px]:px-8 items-start">
              <AnimatedText />
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </div>
  );
}
