import { Canvas, useFrame } from "@react-three/fiber";
import { Sky, Cloud } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Sun() {
  const sunRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    sunRef.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={sunRef} position={[0, 1, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial
        color="#FDB813"
        emissive="#FDB813"
        emissiveIntensity={1}
      />
    </mesh>
  );
}

function CameraRig() {
  useFrame(({ camera }) => {
    camera.position.x = Math.sin(Date.now() * 0.00005) * 0.3;
    camera.position.y = Math.sin(Date.now() * 0.00008) * 0.2;
  });

  return null;
}

export default function Scene3D() {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: -10 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true}}
      >
        {/* Camera animation */}
        <CameraRig />

        {/* Sky */}
        <Sky sunPosition={[0, 1, 0]} />

        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#fff8e7"/>

        {/* Sun */}
        <Sun />

        {/* Clouds */}
        <Cloud position={[-4, 3, -5]} scale={[10, 4, 4]} opacity={0.8} speed={0.6} />
        <Cloud position={[0, 4, -6]} scale={[12, 5, 5]} opacity={0.7} speed={0.3} />
        <Cloud position={[5, 2, -4]} scale={[8, 4, 4]} opacity={0.8} speed={0.5} />
        <Cloud position={[0, 0, -2]} scale={[3, 2, 2]} speed={1} opacity={1} />
        <Cloud
  position={[-4, 3, -5]}
  scale={[10, 4, 4]}
  opacity={0.8}          // stronger visibility
  speed={0.4}
  segments={50}          // smoother edges
  color="#fff9f2"        // bright white (can also try "#fff9f2" for sunlight tint)
/>
      </Canvas>
    </div>
  );
}
