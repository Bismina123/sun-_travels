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
import { Fade, Slide } from "react-awesome-reveal";
const degreesToRadians = (degrees) => degrees * (Math.PI / 180);

const Cloud = ({ speed, zIndex, left, bottom }) => {
  const cloudsRef = useRef();
  speed = speed != 0 ? speed : 0.001;

  useEffect(() => {
    gsap.fromTo(
      cloudsRef.current,
      { scale: 3 },
      {
        scale: 1,
        duration: 8,
        ease: "linear",
      }
    );
  }, []);

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

    animateClouds();
  }, [speed]);

  return (
    <div
      ref={cloudsRef}
      style={{
        display: "flex",
        position: "absolute",
        zIndex: zIndex,
        left: left,
        bottom: bottom,
        transformOrigin: "left bottom",
      }}
    >
      <img src="cloud.webp" alt="Cloud" />
      <img src="cloud.webp" alt="Cloud" />
      <img src="cloud.webp" alt="Cloud" />
    </div>
  );
};

// const flyIn = (helicopter) => {
//   helicopter.scene.rotation.order = "YXZ";
//   helicopter.scene.scale.set(1.8, 1.8, 1.8);

//   helicopter.scene.position.x = -500;
//   helicopter.scene.position.y = -300;
//   helicopter.scene.position.z = -800;

//   helicopter.scene.quaternion.setFromEuler(
//     new THREE.Euler(
//       degreesToRadians(-6),
//       degreesToRadians(70),
//       degreesToRadians(30),
//       "YXZ"
//     )
//   );
// }

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
};

const AeroplaneModel = ({ aeroplaneRef, helicopter, setCanvasZIndex }) => {
  gsap.registerPlugin(ScrollTrigger);
  const [xRot, setXRot] = useState(70);
  const [animationComplete, setAnimationComplete] = useState(false);

  const { camera } = useThree();

  const flyIn = (helicopter) => {
    // Convert degrees to radians for initial and final values
    helicopter.scene.scale.set(2, 2, 2);
    helicopter.scene.position.x = -500;
    helicopter.scene.position.y = -300;
    helicopter.scene.position.z = -800;

    const initialRotation = {
      x: degreesToRadians(-6),
      y: degreesToRadians(70),
      z: degreesToRadians(30),
    };

    const finalRotation = {
      x: degreesToRadians(-8),
      y: degreesToRadians(90),
      z: degreesToRadians(14),
    };

    // Animate position
    gsap.to(helicopter.scene.position, {
      duration: 8,
      x: 0,
      y: -40,
      z: -700,
      ease: "power1.inOut",
      onComplete: () => setAnimationComplete(true),
    });

    // Animate scale
    gsap.to(helicopter.scene.scale, {
      duration: 8,
      x: 2,
      y: 2,
      z: 2,
      ease: "power1.inOut",
    });

    // Animate rotation
    gsap.to(initialRotation, {
      duration: 8,
      x: finalRotation.x,
      y: finalRotation.y,
      z: finalRotation.z,
      ease: "power1.inOut",
      onUpdate: () => {
        helicopter.scene.quaternion.setFromEuler(
          new THREE.Euler(
            initialRotation.x,
            initialRotation.y,
            initialRotation.z,
            "YXZ"
          )
        );
      },
    });
  };

  useEffect(() => {
    camera.position.x = -30;
    camera.position.y = -30;
    camera.position.z = 0;
    // flyIn(helicopter);
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

    if (animationComplete) {
      let posStartPosY = -40;
      let posEndPosY = -45;
      let differencePosY = Math.abs(posStartPosY - posEndPosY) / 2;
      let midRotationPosY = (posStartPosY + posEndPosY) / 2;
      let speedPosY = 1;
      let posY =
        Math.sin(clock.getElapsedTime() * speedPosY) * differencePosY +
        midRotationPosY;

      helicopter.scene.position.y = posY;
    }
  });

  //   const [hoverPosition, setHoverPosition] = useState(null);
  //   const handleMouseMove = (event) => {
  //     const { clientX, clientY } = event;
  //     const { width, height } = gl.domElement.getBoundingClientRect();
  //     const xPercent = (clientX / width) * 100;
  //     if (xPercent < 20) {
  //       setHoverPosition('left');
  //     } else if (xPercent > 80) {
  //       setHoverPosition('right');
  //     } else {
  //       setHoverPosition(null);
  //     }
  //   };

  //   useEffect(() => {
  //     window.addEventListener('mousemove', handleMouseMove);
  //     return () => {
  //       window.removeEventListener('mousemove', handleMouseMove);
  //     };
  //   }, [gl.domElement]);

  //   useEffect(() => {
  //     console.log(hoverPosition)

  //   }, [hoverPosition])

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
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#aeroplane-model", // Change this to the appropriate trigger element
        start: "top top", // Start at top + 100
        end: "top+=500 top", // End at top + 500
        scrub: 1, // Enable scrubbing for smooth animation
      },
    });

    t1.to(helicopter.scene.position, {
      x: 4000,
      y: -100,

      duration: 8,
      ease: "power1.inOut",
    });

    // Cleanup ScrollTrigger when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const [firstText, setFirstText] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setFirstText(false);
    }, 5000);
  }, []);
  return (
    <Container id="aeroplane-model" className="hero-section">
      {firstText ? (
        // <Fade direction="left">
        <Text>Get ready to explore with Sun Tours and Travels</Text>
      ) : (
        // </Fade>
        <>
          <TextWrapper>
            <ul className="text-container">
              <li style={{ "--i": 1 }}>W</li>
              <li style={{ "--i": 1.3 }}>h</li>
              <li style={{ "--i": 1.6 }}>e</li>
              <li style={{ "--i": 1.9 }}>r</li>
              <li style={{ "--i": 2.2 }}>e</li>
              <li style={{ "--i": 2.5 }} className="ml">
                D
              </li>
              <li style={{ "--i": 2.8 }}>r</li>
              <li style={{ "--i": 3.1 }}>e</li>
              <li style={{ "--i": 3.4 }}>a</li>
              <li style={{ "--i": 3.7 }}>m</li>
              <li style={{ "--i": 4 }}>s</li>
            </ul>
            <ul className="text-container">
              <li style={{ "--i": 4.3 }}>T</li>
              <li style={{ "--i": 4.6 }}>a</li>
              <li style={{ "--i": 4.9 }}>k</li>
              <li style={{ "--i": 5.2 }}>e</li>
              <li style={{ "--i": 5.5 }} className="ml">
                F
              </li>
              <li style={{ "--i": 5.8 }}>l</li>
              <li style={{ "--i": 6.1 }}>i</li>
              <li style={{ "--i": 6.4 }}>g</li>
              <li style={{ "--i": 6.7 }}>h</li>
              <li style={{ "--i": 7 }}>t</li>
              <li style={{ "--i": 7.3 }}>,</li>
            </ul>

            <ul className="text-container">
              <li style={{ "--i": 7.6 }}>S</li>
              <li style={{ "--i": 7.9 }}>t</li>
              <li style={{ "--i": 8.2 }}>a</li>
              <li style={{ "--i": 8.5 }}>r</li>
              <li style={{ "--i": 8.8 }}>t</li>
              <li style={{ "--i": 9.1 }} className="ml">
                E
              </li>
              <li style={{ "--i": 9.4 }}>x</li>
              <li style={{ "--i": 9.7 }}>p</li>
              <li style={{ "--i": 10 }}>l</li>
              <li style={{ "--i": 10.3 }}>o</li>
              <li style={{ "--i": 10.6 }}>r</li>
              <li style={{ "--i": 10.9 }}>i</li>
              <li style={{ "--i": 11.2 }}>n</li>
              <li style={{ "--i": 11.5 }}>g</li>
              <li style={{ "--i": 11.8 }} className="ml">
                N
              </li>
              <li style={{ "--i": 12.1 }}>o</li>
              <li style={{ "--i": 12.4 }}>w</li>
            </ul>
          </TextWrapper>
          <ButtonExplore className="buttonExplore">
          <button className="button-57" role="button"><span className="text"> Explore more</span><span>Click Me</span></button>
          </ButtonExplore>
        </>
      )}
      <Canvas className="canvas" ref={canvasRef}>
        <ambientLight intensity={1.5} position={[0, 0, 0]} />
        <directionalLight intensity={4} position={[0, 10, 5]} />
        <AeroplaneModel aeroplaneRef={aeroplaneRef} helicopter={helicopter} />
        <AdaptiveDpr pixelated />
      </Canvas>
      <Cloud speed={1.5} left={0} bottom={0} zIndex={3} />
      <Cloud speed={1.8} left={-10} bottom={110} zIndex={2} />

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

// const HeroSection = () => {
//   return (
//     <div className="hero-section">
//         <Canvas>
//         <ambientLight intensity={0.5} />
//         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//         <PlaneModel />
//         </Canvas>
//     </div>
// );
// };

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Text = styled.div`
  font-family: "Roboto" !important;
  font-weight: 500;
  font-size: 55px;
  letter-spacing: 0.25px;
  line-height: 1.2em;
  color: #0b2f6a;
  position: absolute;
  bottom: 75px;
  width: 500px;
  left: 20%;
  /* background: red; */
  z-index: 9;
  text-align: left;

  transform: translateX(-200%);
  opacity: 0;
  animation: slide-in-anim 2s ease-out forwards;
  @keyframes slide-in-anim {
    20% {
      opacity: 0;
    }
    /* 60% {
		transform: translateX(-45%);
	} */
    /* 75% {
		transform: translateX(-52%);
	} */
    100% {
      opacity: 1;
      transform: translateX(-50%);
    }
  }
`;
const TextWrapper = styled.div`
  position: absolute;
  font-weight: 500;
  font-size: 51px;
  letter-spacing: 2px;
  line-height: 1.2em;
  color: #0b2f6a;
  position: absolute;
  bottom: 130px;
  width: 900px;
  left: 4%;

  z-index: 9;
  text-align: left;
  font-family: "Roboto" !important;

  .text-container {
    display: flex;

    color: #0b2f6a;
    text-align: left;

    .ml {
      margin-left: 15px;
    }
  }

  li {
    font-family: "Roboto" !important;
    text-transform: none !important;
    animation-name: bubbly;
    animation-duration: calc(var(--i) * 1s);
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
  }

  @keyframes bubbly {
    0% {
      opacity: 0;
      /* transform: translateY(-100px); */
      transform: scale(0);
    }
    70% {
      opacity: 1;
      transform: scale(1.5);
    }
    100% {
      opacity: 1;
      /* transform: translateY(0); */
      transform: scale(1);
    }
  }
`;

const ButtonExplore=styled.div`
position: absolute;
bottom: 80px;
left: 4%;
z-index: 9;
.button-57 {
  position: relative;
  overflow: hidden;
  border: 1px solid #0b2f6a;
  color: #0b2f6a;
  display: inline-block;
  font-size: 15px;
  line-height: 15px;
  padding: 16px 16px 15px;
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  border-radius:10px;
}

.button-57 span:first-child {
  position: relative;
  transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
  z-index: 10;
}

.button-57 span:last-child {
  color: white;
  display: block;
  position: absolute;
  bottom: 0;
  transition: all 200ms cubic-bezier(0.48, 0, 0.12, 1);
  z-index: 100;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translateY(225%) translateX(-50%);
  height: 10px;
  line-height: 13px;
}

.button-57:after {
  content: "";
  position: absolute;
  bottom: -50%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0b2f6a;
  transform-origin: bottom center;
  transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
  transform: skewY(9.3deg) scaleY(0);
  z-index: 50;
}

.button-57:hover:after {
  transform-origin: bottom center;
  transform: skewY(9.3deg) scaleY(2);
}

.button-57:hover span:last-child {
  transform: translateX(-50%) translateY(-100%);
  opacity: 1;
  transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
}



`;

export default HeroSection;