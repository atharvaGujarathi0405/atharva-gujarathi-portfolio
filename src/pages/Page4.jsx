import React from "react";
import MoonBack from "../assets/videos/MoonBack.mp4";
import { bio } from "../data/content";
import CV from "../../public/Atharva_Gujarathi_TY_Resume.pdf";

const Page4 = () => {
  return (
    <div id="page3" className="h-screen relative p-6">
      <div className="h-full w-full bg-black rounded-[40px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover "
        >
          <source src={MoonBack} type="video/mp4" />
        </video>

        {}
        <h1 className="absolute top-0 z-50 font-[anzo1] uppercase tracking-wider left-20 text-white text-[20vw]">
          about
        </h1>

        {}
        <div className="absolute bottom-60 left-20 flex items-center gap-6 z-50">
          <h1 className="text-white font-[anzo3] text-3xl">
            Hi, I’m Atharva 👋
          </h1>

          {}
          <a
            href={CV}
            download
            className="px-6 py-2 border-2 border-amber-600 text-white bg-black 
                       rounded-xl font-[anzo3] shadow-md 
                       animate-pulse hover:scale-110 transition-transform duration-300"
          >
            Download CV
          </a>
        </div>

        {}
        <h1 className="absolute bottom-20 left-20 right-20 text-white z-50 font-[anzo2] text-lg">
          {bio}
        </h1>
      </div>
    </div>
  );
};

export default Page4;
