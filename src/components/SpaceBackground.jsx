import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const DEPTH = 420;

const radialTexture = (color) => {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, color);
  grad.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
};

const palette = ["#ffffff", "#9fd8ff", "#ffb85c", "#c9b8ff"].map((c) => new THREE.Color(c));

const Stars = ({ count, size, spread }) => {
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions.set(
        [(Math.random() - 0.5) * spread * 2, (Math.random() - 0.5) * spread, -Math.random() * DEPTH + 20],
        i * 3
      );
      palette[Math.floor(Math.random() * palette.length)].toArray(colors, i * 3);
    }
    return { positions, colors };
  }, [count, spread]);
  const map = useMemo(() => radialTexture("rgba(255,255,255,1)"), []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        map={map}
        size={size}
        vertexColors
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const nebulae = [
  ["rgba(120,70,255,0.55)", -40, 10, -60, 170],
  ["rgba(0,200,255,0.4)", 50, -20, -140, 200],
  ["rgba(255,140,40,0.4)", -50, -10, -220, 190],
  ["rgba(255,60,160,0.35)", 40, 25, -300, 220],
  ["rgba(60,120,255,0.45)", 0, 0, -380, 240],
];

const Nebula = ({ color, x, y, z, s }) => {
  const map = useMemo(() => radialTexture(color), [color]);
  return (
    <sprite position={[x, y, z]} scale={[s, s * 0.7, 1]}>
      <spriteMaterial map={map} transparent depthWrite={false} blending={THREE.AdditiveBlending} opacity={0.5} />
    </sprite>
  );
};

// Camera flies down the star tube as the page scrolls; mouse adds parallax.
const Rig = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const last = useRef(0);
  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX / innerWidth - 0.5;
      mouse.current.y = e.clientY / innerHeight - 0.5;
    };
    addEventListener("mousemove", move);
    return () => removeEventListener("mousemove", move);
  }, []);

  useFrame(({ camera, clock }, dt) => {
    if (reduced) return;
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const p = scrollY / max;
    const vel = p - last.current;
    last.current = p;
    const k = 1 - Math.exp(-3 * dt);
    camera.position.z += (5 - p * (DEPTH - 60) - camera.position.z) * k;
    camera.position.x += (mouse.current.x * 6 - camera.position.x) * k;
    camera.position.y += (-mouse.current.y * 4 - camera.position.y) * k;
    camera.rotation.z += (-vel * 25 + Math.sin(clock.elapsedTime * 0.1) * 0.03 - camera.rotation.z) * k;
  });
  return null;
};

const SpaceBackground = () => (
  <Canvas
    dpr={[1, 2]}
    gl={{ antialias: true, powerPreference: "high-performance" }}
    camera={{ position: [0, 0, 5], fov: 70, near: 0.1, far: 700 }}
    style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", background: "#02030a" }}
  >
    <Stars count={5000} size={0.55} spread={140} />
    <Stars count={1500} size={1.4} spread={120} />
    {nebulae.map(([color, x, y, z, s]) => (
      <Nebula key={z} color={color} x={x} y={y} z={z} s={s} />
    ))}
    <Rig />
  </Canvas>
);

export default SpaceBackground;
