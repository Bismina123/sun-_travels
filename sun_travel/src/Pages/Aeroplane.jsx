import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

import styled from "styled-components";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents, Environment } from "@react-three/drei";
import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
const AeroplaneModel = () => {
  gsap.registerPlugin(ScrollTrigger);
  const group = useRef();
  const helicopter = useGLTF("./plane/scene.gltf");
  const { camera, scene } = useThree();
  useFrame(({ clock }) => {
    const hoverAmplitude = 1.5;
    const hoverFrequency = 1.0;
    const swingAmplitude = 0.05; // Adjust the amplitude as needed
    const swingFrequency = 0.5; // Adjust the frequency as needed

    // Hovering motion (left and right)
    group.current.position.z =
      Math.sin(clock.getElapsedTime() * hoverFrequency) * hoverAmplitude;

    // Swinging motion (rotation around y-axis)
    group.current.rotation.x =
      Math.sin(clock.getElapsedTime() * swingFrequency) * swingAmplitude;
  });

  useLayoutEffect(() => {
    helicopter.scene.scale.set(0.1, 0.1, 0.1); // Adjust the scale as needed
    helicopter.scene.position.set(0, 0, 0); // Adjust the position as needed
    // Rotate around the Z-axis by +90 degrees
    // helicopter.scene.rotation.y = Math.PI/2;
    helicopter.scene.rotation.y = (Math.PI * 55) / 220;
    helicopter.scene.rotation.x = (Math.PI * -10) / 280;
    helicopter.scene.rotation.z = (Math.PI * 25) / 180;
    camera.position.z = 60;
    camera.position.y = 5;
    camera.position.x = 35;
    // helicopter.scene.position.x=-30;
    // scene.position.x=-45;
    // helicopter.scene.
    // gsap animation to move the airplane upwards and obliquely
    gsap.to(helicopter.scene.position, {
      duration: 5, // Animation duration in seconds
      y: 15, // Move to the center vertically
      x: 26,
      z: 5,
      ease: "power2.inOut", // Easing function
    });
    gsap.to(helicopter.scene.rotation, {
      duration: 5,
      y: (Math.PI * 16) / 85, // Rotate around the Y-axis by 90 degrees
      x: (Math.PI * 5) / 180,
      z: (Math.PI * 25) / 180, // Rotate around the X-axis by 45 degrees
      ease: "power2.inOut",
      onComplete: () => {
        ScrollTrigger.create({
          trigger: "#aeroplane-model",
          start: "top top",
          endTrigger: "#last",
          end: "top-=1150 top",
          scrub: true,
          // markers: true,
          duration: 3,
          onUpdate: (self) => {
            const progress = self.progress;
            const initialX = 26;
            const initialY = 15;
            const initialZ = 5;
            const initialRotY = (Math.PI * 16) / 85;
            const initialRotX = (Math.PI * 5) / 180;
            const initialRotZ = (Math.PI * 25) / 180;

            const calculatedX = initialX + 40 * progress;
            const calculatedY = initialY + 35 * progress;
            const calculatedZ = initialZ + 0 * progress;
            const calculatedRotY =
              initialRotY - ((Math.PI * 10) / 320) * progress;
            const calculatedRotX =
              initialRotX - ((Math.PI * 0) / 300) * progress;
            const calculatedRotZ =
              initialRotZ - ((Math.PI * 25) / 300) * progress;

            helicopter.scene.position.set(
              calculatedX,
              calculatedY,
              calculatedZ
            );
            helicopter.scene.rotation.set(
              calculatedRotX,
              calculatedRotY,
              calculatedRotZ
            );
          },
        });
      },
    });
  }, []);

  return (
    <group ref={group}>
      <primitive object={helicopter.scene} />
    </group>
  );
};
const Airoplane = () => {
  return (
    <Container id="aeroplane-model">
      <Canvas>
        <ambientLight intensity={1.1} position={[3, 2, 6]} />
        <directionalLight intensity={4} position={[3, 1, 8]} />
        <Suspense fallback={null}>
          {/* <Stage environment={"sunset"} intensity={0.5}>/ */}
          <AeroplaneModel />
          {/* </Stage>/ */}
        </Suspense>

        <AdaptiveDpr pixelated />
        {/* <AdaptiveEvents /> */}
        {/* <OrbitControls  /> */}
      </Canvas>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
  transition: all 0.3s ease;
`;
export default Airoplane;
