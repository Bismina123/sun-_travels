/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import styled from "styled-components";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";
import { DirectionalLightHelper } from "three";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import downArrow from "./assets/down_arrow2.png";

const degreesToRadians = (degrees) => degrees * (Math.PI / 180);

const Cloud = ({ speed, zIndex, left, bottom }) => {
  const cloudsRef = useRef();
  speed = speed != 0 ? speed : 0.001;
  useEffect(() => {
    const animateClouds = () => {
      const defaultTime = 20;
      gsap.fromTo(
        cloudsRef.current,
        { x: "0%" },
        {
          x: "-100%",
          duration: defaultTime / speed,
          ease: "linear",
          onComplete: animateClouds,
        }
      );
    };

    // Start the animation after the specified delay
    animateClouds();
  }, [speed]); // Add speed and delay to the dependency array

  return (
    <div
      ref={cloudsRef}
      style={{
        display: "flex",
        position: "absolute", // or 'relative', depending on your layout
        zIndex: zIndex,
        left: left,
        bottom: bottom,
      }}
    >
      <img src="cloud.webp" alt="Cloud" />
      <img src="cloud.webp" alt="Cloud" />
      <img src="cloud.webp" alt="Cloud" />
    </div>
  );
};

const reset = (helicopter) => {
  helicopter.scene.rotation.order = "YXZ";
  helicopter.scene.scale.set(1.8, 1.8, 1.8);

  helicopter.scene.position.x = 0;
  helicopter.scene.position.y = -40;
  helicopter.scene.position.z = -700;

  helicopter.scene.quaternion.setFromEuler(
    new THREE.Euler(
      degreesToRadians(-8),
      degreesToRadians(90),
      degreesToRadians(14),
      "YXZ"
    )
  );

  console.log("reset called");
};

const AeroplaneModel = ({ aeroplaneRef, helicopter }) => {
  gsap.registerPlugin(ScrollTrigger);
  const [xRot, setXRot] = useState(70);

  const { camera } = useThree();

  useLayoutEffect(() => {
    camera.position.x = -30;
    camera.position.y = -40;
    camera.position.z = 0;
  
    reset(helicopter);
  });

  useFrame(({ clock }) => {
    let startRotationDegreesX = xRot;
    let endRotationDegreesX = xRot;
    let speedX = 0.3;
    let differenceX = Math.abs(startRotationDegreesX - endRotationDegreesX) / 2;
    let midRotationX = (startRotationDegreesX + endRotationDegreesX) / 2;
    let rotationX =
      Math.sin(clock.getElapsedTime() * speedX) * differenceX + midRotationX;

    let startRotationDegreesY = -8;
    let endRotationDegreesY = -5;
    let speedY = 0.3;
    let differenceY = Math.abs(startRotationDegreesY - endRotationDegreesY) / 2;
    let midRotationY = (startRotationDegreesY + endRotationDegreesY) / 2;
    let rotationY =
      Math.sin(clock.getElapsedTime() * speedY) * differenceY + midRotationY;

    let startRotationDegreesZ = 22;
    let endRotationDegreesZ = 17;
    let speedZ = 0.5;
    let differenceZ = Math.abs(startRotationDegreesZ - endRotationDegreesZ) / 2;
    let midRotationZ = (startRotationDegreesZ + endRotationDegreesZ) / 2;
    let rotationZ =
      Math.sin(clock.getElapsedTime() * speedZ) * differenceZ + midRotationZ;

    helicopter.scene.quaternion.setFromEuler(
      new THREE.Euler(
        degreesToRadians(rotationY),
        degreesToRadians(rotationX),
        degreesToRadians(rotationZ),
        "YXZ"
      )
    );

    let posStartPosY = -40;
    let posEndPosY = -45;
    let differencePosY = Math.abs(posStartPosY - posEndPosY) / 2;
    let midRotationPosY = (posStartPosY + posEndPosY) / 2;
    let speedPosY = 1;
    let posY =
      Math.sin(clock.getElapsedTime() * speedPosY) * differencePosY +
      midRotationPosY;

    helicopter.scene.position.y = posY;
  });



  return (
    <group ref={aeroplaneRef}>
      <primitive object={helicopter.scene} />
    </group>
  );
};
const HeroSection = ({ scrollF }) => {
  const aeroplaneRef = useRef();
  const canvasRef = useRef();

  const helicopter = useGLTF("./plane/scene.gltf");
  const onDownArrowClick = () => {
    // Move the helicopter model
    if (aeroplaneRef.current) {
      gsap.to(aeroplaneRef.current.position, {
        x: 2000, // Target X position
       
        duration: 5, // Duration in seconds
        ease: "power1.inOut", // Easing function
        onUpdate: () => console.log(aeroplaneRef.current.position.x),
        onComplete: () => {
          scrollF();
          reset(helicopter);
          setTimeout(() => {
            aeroplaneRef.current.position.x = 0;
          }, 500);
        },
      });
    }
  };


  return (
    <Container id="aeroplane-model" className="hero-section">
      <Canvas className="canvas" ref={canvasRef}>
        <ambientLight intensity={1.5} position={[0, 0, 0]} />
        <directionalLight intensity={4} position={[0, 10, 5]} />
        <AeroplaneModel aeroplaneRef={aeroplaneRef} helicopter={helicopter} />
        <AdaptiveDpr pixelated />
      </Canvas>
      <Cloud speed={0.8} left={0} bottom={0} zIndex={1} />
      <Cloud speed={0.5} left={-10} bottom={110} zIndex={0} />

      <div
        onClick={onDownArrowClick}
        style={{
          height: "50px",
          width: "50px",
          position: "absolute",
          right: "50px",
          bottom: "50px",
          borderRadius: "50%",
          zIndex: 10,
          backgroundColor: "#ffffff",
          boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.2)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={downArrow}
          alt="Down Arrow"
          style={{
            color: "red",
            width: "30px",
          }}
        />
      </div>
    </Container>
  );
};



const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default HeroSection;
