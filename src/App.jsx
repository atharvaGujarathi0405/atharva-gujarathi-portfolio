import React, { useEffect } from "react";
import Page1 from "./pages/Page1.jsx";
import Header from "./components/Header.jsx";
import Page2 from "./pages/Page2.jsx";
import Page3 from "./pages/Page3.jsx";
import Page4 from "./pages/Page4.jsx";
import Page6 from "./pages/Page6.jsx";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Page5Interactive from "./pages/Page5Interactive.jsx";
import Page5 from "./pages/Page5Interactive.jsx";

gsap.registerPlugin(ScrollSmoother);

const App = () => {
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
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
        </div>
      </div>
    </>
  );
};

export default App;
