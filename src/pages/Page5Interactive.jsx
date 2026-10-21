// Page5Interactive.jsx
import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import gsap from "gsap";
import DiamondBg from "../assets/videos/diamonds2.mp4"; // background video

const BOXES = [
  { label: "SSC", title: "Secondary School (SSC)", details: "Shri A.K. National Highschool, Khamgaon\nPercentage: 94.20%" },
  { label: "HSC", title: "Higher Secondary (HSC)", details: "Shri A.K. National Highschool & Junior College, Khamgaon\nPercentage: 86%" },
  { label: "B.Tech", title: "B.Tech in Computer Engineering", details: "Vishwakarma Institute of Information Technology, Pune\nCurrently in 3rd Year | CGPA: 8.74" },
];

const Page5Interactive = () => {
  const containerRef = useRef(null);
  const boxRefs = useRef([]);
  const bodiesRef = useRef([]);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);
  const rafRef = useRef(null);
  const initialPositionsRef = useRef([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isFalling, setIsFalling] = useState(false);

  const setBoxRef = (el, i) => {
    if (!el) return;
    boxRefs.current[i] = el;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Matter setup
    const engine = Matter.Engine.create();
    engine.gravity.y = 0; // start floating
    engineRef.current = engine;

    const world = engine.world;

    // Walls
    const wallThickness = 200;
    const walls = [
      Matter.Bodies.rectangle(width / 2, height + wallThickness / 2, width * 2, wallThickness, { isStatic: true }),
      Matter.Bodies.rectangle(width / 2, -wallThickness / 2, width * 2, wallThickness, { isStatic: true }),
      Matter.Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 2, { isStatic: true }),
      Matter.Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 2, { isStatic: true }),
    ];
    Matter.World.add(world, walls);

    // Create boxes
    BOXES.forEach((b, i) => {
      const boxW = Math.max(120, Math.min(220, width * 0.18));
      const boxH = boxW * 0.8;
      const cx = width / 2 + (i - 1) * (boxW + 40);
      const cy = height / 3 + (i % 2 ? -30 : 30);

      const body = Matter.Bodies.rectangle(cx, cy, boxW, boxH, {
        restitution: 0.6,
        frictionAir: 0.02,
        density: 0.0015 + i * 0.0003,
        label: b.label,
      });

      bodiesRef.current[i] = { body, boxW, boxH };
      initialPositionsRef.current[i] = { x: cx, y: cy, angle: 0 };

      Matter.World.add(world, body);
    });

    // 🖱️ Mouse Constraint for dragging
    const mouse = Matter.Mouse.create(container);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    Matter.World.add(world, mouseConstraint);

    // Runner
    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);

    // Sync loop
    const update = () => {
      const now = performance.now() / 1000;
      bodiesRef.current.forEach((entry, i) => {
        const { body, boxW, boxH } = entry;
        const el = boxRefs.current[i];
        if (!el || !body) return;

        // Skip updating the expanded box and let GSAP handle it
        if (expandedIndex === i) {
          el.style.transform = '';
          return;
        }

        if (!isFalling) {
          const forceStrength = 0.00045;
          const fy = Math.sin(now * 1.6 + i * 1.2) * forceStrength;
          Matter.Body.applyForce(body, body.position, { x: 0, y: fy });
          const fx = Math.sin(now * 0.9 + i * 0.6) * forceStrength * 0.25;
          Matter.Body.applyForce(body, body.position, { x: fx, y: 0 });
        }

        const x = body.position.x - boxW / 2;
        const y = body.position.y - boxH / 2;
        el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${body.angle}rad)`;
      });

      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafRef.current);
      Matter.Runner.stop(runner);
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
      engineRef.current = null;
      runnerRef.current = null;
      bodiesRef.current = [];
    };
  }, [expandedIndex, isFalling]);

  // Open a box
  const openBox = (index) => {
    if (expandedIndex !== null) return;
    setExpandedIndex(index);

    const entry = bodiesRef.current[index];
    if (!entry) return;
    const { body, boxW, boxH } = entry;
    const el = boxRefs.current[index];
    if (!el) return;

    Matter.Body.setStatic(body, true);

    const left = body.position.x - boxW / 2;
    const top = body.position.y - boxH / 2;

    // Use GSAP to animate position and size
    gsap.to(el, {
      duration: 0.6,
      left: "50%",
      top: "50%",
      x: "-50%",
      y: "-50%",
      width: "min(86vw, 900px)",
      height: "min(68vh, 560px)",
      borderRadius: "20px",
      ease: "power3.out",
      onStart: () => {
        // Prepare the element for GSAP animation
        el.style.position = "fixed";
        el.style.left = `${left}px`;
        el.style.top = `${top}px`;
        el.style.width = `${boxW}px`;
        el.style.height = `${boxH}px`;
        el.classList.add("opening");
      },
    });
  };

  // Close a box
  const closeBox = (index) => {
    const entry = bodiesRef.current[index];
    if (!entry) {
      setExpandedIndex(null);
      return;
    }
    const { body, boxW, boxH } = entry;
    const el = boxRefs.current[index];
    if (!el) {
      setExpandedIndex(null);
      return;
    }

    el.classList.remove("opening");

    const px = body.position.x - boxW / 2;
    const py = body.position.y - boxH / 2;

    gsap.to(el, {
      duration: 0.5,
      left: `${px}px`,
      top: `${py}px`,
      x: "0px",
      y: "0px",
      width: `${boxW}px`,
      height: `${boxH}px`,
      borderRadius: "12px",
      ease: "power3.inOut",
      onComplete: () => {
        // Reset styles for Matter.js control
        el.style.position = "absolute";
        el.style.left = "0";
        el.style.top = "0";
        el.style.width = `${boxW}px`;
        el.style.height = `${boxH}px`;
        // Now it's safe to release the body
        Matter.Body.setStatic(body, false);
        setExpandedIndex(null);
      },
    });
  };

  // Activate gravity
  const activateGravity = () => {
    if (!engineRef.current) return;

    // Close any expanded box first
    if (expandedIndex !== null) {
      closeBox(expandedIndex);
    }
    
    // Defer the gravity activation slightly to allow for the close animation to begin
    setTimeout(() => {
        engineRef.current.gravity.y = 1.0;
        setIsFalling(true);
    }, 50); 
  };

  return (
    <div className="h-screen p-6 bg-white">
      <div ref={containerRef} className="relative h-full w-full font-[anzo3] rounded-[20px] overflow-hidden bg-black">
        {/* Background video */}
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src={DiamondBg} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Floating boxes */}
        <div className="absolute inset-0 z-10">
          {BOXES.map((b, i) => {
            const baseStyle = {
              position: "absolute",
              left: 0,
              top: 0,
              width: `${Math.max(120, 0.18 * (containerRef.current?.clientWidth || 800))}px`,
              height: `${Math.max(96, 0.18 * (containerRef.current?.clientWidth || 800) * 0.8)}px`,
              transform: "translate3d(0,0,0)",
              touchAction: "none",
            };

            return (
              <div
                key={b.label}
                ref={(el) => setBoxRef(el, i)}
                onClick={() => (expandedIndex === i ? closeBox(i) : openBox(i))}
                className={`academic-floating academic-box group cursor-pointer select-none
                  absolute rounded-xl bg-white/10 border border-white/10
                  backdrop-blur-md shadow-lg flex items-center justify-center flex-col
                  p-4 text-white`}
                style={baseStyle}
              >
                <div className="text-xl sm:text-2xl font-semibold">{b.label}</div>

                {expandedIndex === i && (
                  <div className="expanded-content w-full h-full p-6 text-black overflow-auto">
                    <h2 className="text-2xl font-bold mb-3">{b.title}</h2>
                    <pre className="whitespace-pre-wrap text-base">{b.details}</pre>
                    <div className="mt-6">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          closeBox(i);
                        }}
                        className="px-4 py-2 bg-amber-600 text-white rounded-md"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Gravity Button */}
        <div className="absolute bottom-6 right-6 z-20">
          <button
            onClick={activateGravity}
            className="px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold shadow-lg"
          >
            Activate Gravity
          </button>
        </div>

        {/* Instruction */}
        <div className="absolute left-6 bottom-6 z-20 text-white/80">
          <div className="text-sm">Click a box to expand • Drag boxes after gravity</div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .academic-box { 
          transition: box-shadow .25s, border-color .25s;
        }
        .academic-box:hover {
          box-shadow: 0 10px 30px rgba(255,193,7,0.12);
          border-color: rgba(255,193,7,0.18);
        }
        .academic-box.opening {
          box-shadow: 0 20px 80px rgba(255,193,7,0.45), inset 0 0 40px rgba(255,240,200,0.08);
          border-color: rgba(255,193,7,0.6);
          z-index: 60;
        }
        .expanded-content {
          background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,250,250,0.95));
          border-radius: 12px;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Page5Interactive;