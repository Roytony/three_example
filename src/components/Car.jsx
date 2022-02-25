import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function Model({ ...props }) {
  const gltf = useGLTF("/supernova/scene.gltf");
  return <primitive object={gltf.scene} />;
}
const Car = () => {
  return (
    <figure>
      <Canvas style={{ backgroundColor: "#0a0502" }}>
        <ambientLight intensity={1} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 25, 10]}
          castShadow
        />
        <OrbitControls
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
          enablePan
          zoom0={0.5}
          enableZoom
          enableRotate
          autoRotate
        />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </figure>
  );
};

export default Car;
