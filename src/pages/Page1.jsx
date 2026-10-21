import React, { useRef, useState } from "react";
import hero from "../assets/images/hero.jpg";
import logo from "../assets/images/logo.jpg";
import Page1bottom from "../components/Page1bottom";
import github from "../assets/images/github.png";
import leetcode from "../assets/images/leetcode.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import TIlttext from "../components/TIlttext";

const Page1 = () => {
  const titlRef = useRef(null);
  const [Xval, setXval] = useState(0);
  const [Yval, setYval] = useState(0);

  const mouseMoving = (e) => {
    setXval(
      (e.clientX -
        titlRef.current.getBoundingClientRect().x -
        titlRef.current.getBoundingClientRect().width / 2) /
        40
    );
    setYval(
      -(
        e.clientY -
        titlRef.current.getBoundingClientRect().y -
        titlRef.current.getBoundingClientRect().height / 2
      ) / 10
    );
  };

  useGSAP(
    function () {
      gsap.to(titlRef.current, {
        transform: `rotateY(${Xval}deg) rotateX(${Yval}deg) `,
        duration: 2,
        ease: "elastic.out(1,0.3)",
      });
    },
    [Xval, Yval]
  );

  const logoRef = useRef(null);

  useGSAP(function () {
    gsap.to(logoRef.current.querySelectorAll("img"), {
      rotate: 360,
      transformOrigin: "center center",
      duration: 2,
      repeat: -1,
      ease: "linear",
    });
  });

  return (
    <div
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      id="page1"
      className="h-screen w-full bg-white p-3 sm:p-5"
    >
      <div
        id="page1"
        className="relative w-full h-full rounded-[20px] sm:rounded-[40px] lg:rounded-[50px] 
                   overflow-hidden bg-cover shadow-xl shadow-gray-500 bg-black"
      >
        {}
        <img
          src={hero}
          alt="Hero"
          className="h-full w-full object-contain sm:p-4 md:p-6"
        />
        {}
        <div className="absolute z-50 top-4 left-4 sm:top-8 sm:left-10 flex items-center space-x-3">
          <img
            src={logo}
            alt="atharva logo"
            className="h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] lg:h-[100px] lg:w-[100px] rounded-full shadow-md"
          />
          <h1 className="text-white text-lg sm:text-2xl lg:text-3xl font-bold tracking-wide font-[anzo2]">
            Atharva Gujarathi
          </h1>
        </div>

        {}

        <TIlttext abc={titlRef} />

        {}
        <Page1bottom />

        {}
        <div id="logos" ref={logoRef}>
          {}
          <a
            href="https://github.com/AtharvaG04"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="GitHub"
              className="absolute bottom-28 right-6 sm:bottom-40 sm:right-10 h-[40px] w-[40px] sm:h-[50px] sm:w-[55px] lg:h-[60px] lg:w-[70px] cursor-pointer rounded-full"
            />
          </a>

          {}
          <a
            href="https://leetcode.com/u/Atharva_Gujarathi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={leetcode}
              alt="LeetCode"
              className="absolute bottom-10 right-6 sm:bottom-20 sm:right-12 h-[38px] w-[38px] sm:h-[45px] sm:w-[45px] lg:h-[55px] lg:w-[55px] cursor-pointer rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page1;
