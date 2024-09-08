import React from "react";
import { Environment, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MacContainer from "./macContainer";
const Model = () => {
  return (
    <Canvas
      camera={{ fov: 12, position: [0, -10, 220] }}
      className="max-md:mt-5 max-sm:w-2"
    >
      <Environment
        files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
        ]}
      />
      <ScrollControls>
        <MacContainer />
      </ScrollControls>
    </Canvas>
  );
};

export default Model;
