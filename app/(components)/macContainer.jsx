import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import * as THREE from "three";

const MacContainer = () => {
  let model = useGLTF("/mac.glb");
  let tex = useTexture("/red.jpg");
  let meshes = {};
  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });

  meshes.screen.rotation.x = THREE.MathUtils.degToRad(-180);
  meshes.matte.material.map = tex;
  meshes.matte.material.emissiveIntensity = 0;
  meshes.matte.material.metalness = 0;
  meshes.matte.material.roughness = 1;
  let data = useScroll();

  const [scale, setScale] = useState([1, 1, 1]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 450px)");

    const handleMediaChange = (event) => {
      if (event.matches) {
        setScale([0.7, 0.7, 1]); // Smaller width and height
      } else {
        setScale([1, 1, 1]); // Original width and height
      }
    };

    handleMediaChange(mediaQuery); // Initial check
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useFrame((state, delta) => {
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
  });

  return (
    <group position={[0, -10, 20]} scale={scale}>
      <primitive object={model.scene} />
    </group>
  );
};

export default MacContainer;
