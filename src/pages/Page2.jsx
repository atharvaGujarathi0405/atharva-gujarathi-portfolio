import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ReactLogo from "../assets/images/React.png";
import TailwindLogo from "../assets/images/Tailwindcss.png";
import MongoLogo from "../assets/images/mongodb.png";
import HtmlLogo from "../assets/images/HTML.png";
import GsapLogo from "../assets/images/GSAP.png";
import NodeLogo from "../assets/images/Nodejs.png";
import PythonLogo from "../assets/images/Python.png";
import JavaLogo from "../assets/images/Java.png";

const logos = [
  { src: ReactLogo, alt: "React" },
  { src: TailwindLogo, alt: "Tailwind" },
  { src: MongoLogo, alt: "MongoDB" },
  { src: HtmlLogo, alt: "HTML" },
  { src: GsapLogo, alt: "GSAP" },
  { src: NodeLogo, alt: "Node.js" },
  { src: PythonLogo, alt: "Python" },
  { src: JavaLogo, alt: "Java" },
];

const Page2 = () => {
  const marqueeRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".w1", {
      transform: "rotateX(-80deg)",
      opacity: 0,
      duration: 2,
      stagger: 1,
      scrollTrigger: {
        trigger: ".w1",
        start: "top 70%",
        end: "top -200%",
        scrub: 2,
      },
    });

    gsap.to(marqueeRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 20,
      ease: "linear",
    });
  });

  return (
    <div id="section2" className="page2 bg-white text-center p-3 text-black ">
      <h3 className="text-gray-500 font-[anzo2] mt-8">
        Let's Grow Together | Atharva Gujarathi | Designed and Developed
      </h3>

      {}
      <div className="w1 uppercase mt-25">
        <h1 className="text-[35vw] text-black font-[anzo1] leading-[27vw]">
          IMPACTFUL
        </h1>
      </div>
      <div className="w1 uppercase">
        <h1 className="text-[35vw] text-black font-[anzo1] leading-[27vw]">
          Design
        </h1>
      </div>
      <div className="w1 uppercase">
        <h1 className="text-[35vw] text-black font-[anzo1] leading-[27vw]">
          is the
        </h1>
      </div>
      <div className="w1 uppercase">
        <h1 className="text-[35vw] text-black font-[anzo1] leading-[27vw]">
          design
        </h1>
      </div>
      <div className="w1 uppercase">
        <h1 className="text-[35vw] text-black font-[anzo1] leading-[27vw]">
          that
        </h1>
      </div>
      <div className="w1 uppercase">
        <h1 className="text-[35vw] text-black font-[anzo1] leading-[27vw]">
          works!
        </h1>
      </div>

      {}
      <div id="logos" className="overflow-hidden fill-gray-500 w-full mt-12">
        <div ref={marqueeRef} className="flex gap-12 w-max">
          {}
          {logos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="h-20" />
          ))}
          {}
          {logos.map((logo, index) => (
            <img
              key={`dup-${index}`}
              src={logo.src}
              alt={logo.alt}
              className="h-20"
            />
          ))}
        </div>
      </div>
      <div className="h-1 w-1/2 relative left-1/2 -translate-x-1/2 mt-8 mb-8 bg-black"></div>
    </div>
  );
};

export default Page2;
