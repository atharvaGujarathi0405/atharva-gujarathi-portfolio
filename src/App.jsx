import React, { useEffect } from "react";
import Page1 from "./pages/Page1.jsx";
import Header from "./components/Header.jsx";
import Page2 from "./pages/Page2.jsx";
import Page3 from "./pages/Page3.jsx";
import Page4 from "./pages/Page4.jsx";
import Page6 from "./pages/Page6.jsx";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpaceBackground from "./components/SpaceBackground.jsx";
import Featured from "./components/Featured.jsx";
import Page5Interactive from "./pages/Page5Interactive.jsx";
import Page5 from "./pages/Page5Interactive.jsx";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

// Fly-in reveal for every [data-reveal] element, cursor glow, scroll telemetry and boot fade.
const useSpaceFx = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 88%",
        once: true,
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { opacity: 0, y: 80, rotationX: -35, z: -200, transformPerspective: 900 },
            { opacity: 1, y: 0, rotationX: 0, z: 0, duration: 1.2, stagger: 0.12, ease: "power3.out" }
          ),
      });
      gsap.set("[data-reveal]", { opacity: 0 });
    });

    const moveX = gsap.quickTo("#cursor-glow", "x", { duration: 0.5 });
    const moveY = gsap.quickTo("#cursor-glow", "y", { duration: 0.5 });
    const onMove = (e) => (moveX(e.clientX), moveY(e.clientY));
    const hud = document.getElementById("hud");
    const onScroll = () => {
      const p = scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight);
      hud.textContent = `DEPTH ${(p * 100).toFixed(0).padStart(3, "0")}% · ${(p * 12.4).toFixed(2)} LY`;
    };
    addEventListener("mousemove", onMove);
    addEventListener("scroll", onScroll);
    onScroll();
    return () => {
      ctx.revert();
      removeEventListener("mousemove", onMove);
      removeEventListener("scroll", onScroll);
    };
  }, []);
};

const App = () => {
  useSpaceFx();
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
    });
  }, []);

  return (
    <>
      <SpaceBackground />
      <div id="boot">ENTERING ORBIT…</div>
      <div id="cursor-glow" />
      <div id="hud" />
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Page1 />
          <Page2 />
          <Page3 />
          <Featured />
          <Page4 />
          <Page5 />
          <Page6 />
        </div>
      </div>
    </>
  );
};

export default App;
