import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Laptop from "../assets/images/Laptop.png";
import spaceVideo from "../assets/videos/spacevdo.mp4";

import Project1 from "../assets/images/Project1.png";
import Project2 from "../assets/images/Project2.png";
import Project3 from "../assets/images/Project3.png";
import Project4 from "../assets/images/Project4.png";
import Project5 from "../assets/images/Project5.png";

const projects = [
  { img: Project5, link: "https://ai-mock-interview-platform.netlify.app/" },
  { img: Project1, link: "https://lostandfound-sooty.vercel.app/" },
  { img: Project3, link: "https://aisebaatcheet.netlify.app/" },
  {
    img: Project4,
    link: "https://atharvagujarathi04.github.io/coffee_animation/",
  },
  { img: Project2, link: "https://atharvagujarathi04.github.io/amazon.in/" },
];

const Page3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const laptopRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = -(e.clientY / innerHeight - 0.5) * 30;

      gsap.to(laptopRef.current, {
        rotationY: x,
        rotationX: y,
        transformPerspective: 800,
        transformOrigin: "center",
        ease: "power3.out",
        duration: 0.6,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div id="page4" className="relative h-screen w-full overflow-hidden">
      {}
      <video
        src={spaceVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full p-6 rounded-[70px] object-cover "
      ></video>

      {}
      <h1 className="text-white absolute text-[10vw] font-[anzo1] uppercase tracking-widest top-[1px] p-2 left-[51%] -translate-x-1/2 z-30">
        Projects
      </h1>
      {}
      <hr
        className="absolute top-1/2 left-[70px] right-[70px] 
             -translate-y-1/2 border-t-2 border-white/60 z-10"
      />

      {}
      <div className="relative z-20 flex items-center justify-center mt-18 h-full">
        <div ref={laptopRef} className="relative">
          <img
            src={Laptop}
            alt="Laptop"
            className="max-h-[80vh] relative z-10"
          />

          {}
          <div className="absolute top-[4px] left-[75px] w-[78%] h-[71%] overflow-hidden rounded-md z-20">
            <a
              href={projects[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <img
                src={projects[currentIndex].img}
                alt="Project"
                className="absolute top-0 left-0 w-full h-full object-fill rounded-2xl transition-all duration-700"
              />
            </a>
          </div>
        </div>
      </div>

      {}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-8 -translate-y-1/2 
          bg-black/70 text-white px-3 py-3 rounded-full z-30 
          transition-all duration-300 hover:bg-amber-600 hover:scale-110"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-8  -translate-y-1/2 
          bg-black/70 text-white px-3 py-3 rounded-full z-30 
          transition-all duration-300 hover:bg-amber-600 hover:scale-110"
      >
        ❯
      </button>
    </div>
  );
};

export default Page3;
