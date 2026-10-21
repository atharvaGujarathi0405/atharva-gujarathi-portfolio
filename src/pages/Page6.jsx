import React from "react";
import bgVideo from "../assets/videos/smoke.mp4";

const Page6 = () => {
  return (
    <div
      id="page6"
      className="h-screen w-full bg-white p-3 sm:p-5 flex justify-center items-center"
    >
      <div
        className="relative w-full h-full rounded-[20px] sm:rounded-[40px] lg:rounded-[50px] 
                   overflow-hidden shadow-xl shadow-gray-500 flex flex-col 
                   justify-center items-center text-center px-6"
      >
        {}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {}
        <div className="absolute inset-0 bg-black/50"></div>

        {}
        <h1 className="text-[10vw] sm:text-5xl lg:text-[10vw] font-[anzo1] tracking-widest text-amber-500 drop-shadow-md mb-6 relative z-10">
          Thank You!
        </h1>

        {}
        <p className="text-white text-base font-[anzo3] sm:text-lg lg:text-xl max-w-2xl leading-relaxed mb-10 relative z-10">
          I appreciate you taking the time to explore my portfolio. If you'd
          like to get in touch, please reach out via the contact form or connect
          with me on social media. Looking forward to hearing from you!
        </p>

        {}
        <div className="flex space-x-6 relative z-10">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("btn").click();
            }}
            className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-full 
             font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            Contact Me
          </a>

          <a
            href="https://www.linkedin.com/in/atharva-gujarathi-068164289/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md 
                       hover:bg-gray-200 transition-transform transform hover:scale-105"
          >
            LinkedIn
          </a>
        </div>

        {}
        <p className="absolute bottom-6 top-30 text-gray-400 text-sm relative z-10">
          © {new Date().getFullYear()} Atharva Gujarathi. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Page6;
