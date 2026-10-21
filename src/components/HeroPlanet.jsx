import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";

const Planet = () => {
  const group = useRef();
  const moon = useRef();
  const rings = useRef();

  useFrame(({ pointer, clock }, dt) => {
    const t = clock.elapsedTime;
    group.current.rotation.y += dt * 0.15;
    group.current.position.x += (pointer.x * 0.4 - group.current.position.x) * 0.05;
    group.current.position.y += (pointer.y * 0.3 - group.current.position.y) * 0.05;
    rings.current.rotation.z = t * 0.1;
    moon.current.position.set(Math.cos(t * 0.6) * 2.4, Math.sin(t * 0.3) * 0.5, Math.sin(t * 0.6) * 2.4);
  });

  return (
    <Float speed={1.5} floatIntensity={0.6}>
      <group ref={group}>
        <mesh>
          <sphereGeometry args={[1.2, 96, 96]} />
          <MeshDistortMaterial
            color="#14264a"
            emissive="#ff8a1e"
            emissiveIntensity={0.12}
            roughness={0.35}
            metalness={0.7}
            distort={0.25}
            speed={1.5}
          />
        </mesh>
        <mesh scale={1.04}>
          <icosahedronGeometry args={[1.2, 3]} />
          <meshBasicMaterial color="#38d6ff" wireframe transparent opacity={0.25} />
        </mesh>
        <group ref={rings} rotation={[1.2, 0.2, 0]}>
          <mesh>
            <torusGeometry args={[1.9, 0.012, 16, 200]} />
            <meshBasicMaterial color="#ffb85c" />
          </mesh>
          <mesh>
            <torusGeometry args={[2.2, 0.006, 16, 200]} />
            <meshBasicMaterial color="#38d6ff" transparent opacity={0.7} />
          </mesh>
        </group>
        <mesh ref={moon}>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial color="#d8d8e8" roughness={0.8} />
        </mesh>
      </group>
    </Float>
  );
};

// The canvas only reads pointer from its own element, so it must receive events from the window.
const HeroPlanet = () => (
  <Canvas
    dpr={[1, 2]}
    gl={{ antialias: true, alpha: true }}
    camera={{ position: [0, 0, 6], fov: 45 }}
    eventSource={document.body}
    className="!absolute top-[8vh] left-[40%] !w-[34vmin] !h-[34vmin] max-w-[420px] max-h-[420px] pointer-events-none"
  >
    <ambientLight intensity={0.35} />
    <directionalLight position={[4, 3, 5]} intensity={2.2} color="#ffd9a0" />
    <pointLight position={[-4, -2, 2]} intensity={25} color="#38d6ff" />
    <Planet />
  </Canvas>
);

export default HeroPlanet;
