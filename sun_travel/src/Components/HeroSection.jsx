import {
  useGLTF,
  Float,
  PivotControls,
  Stats,
  OrbitControls,
  PerspectiveCamera,
  OrthographicCamera,
} from "@react-three/drei";
import styled from "styled-components";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";
import { DirectionalLightHelper } from "three";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import downArrow from "./assets/down_arrow2.png";
import cloudImage from "./assets/cloud.jpg";
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
        duration: 15,
        ease: "power1.out",
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
      <img src={cloudImage} alt="Cloud" />
      <img src={cloudImage} alt="Cloud" />
      <img src={cloudImage} alt="Cloud" />
    </div>
  );
};

const AeroplaneModel = ({
  aeroplaneRef,
  helicopter,
  setCanvasZIndex,
  tiltTowardsMouseFlag,
}) => {
  gsap.registerPlugin(ScrollTrigger);
  const [xRot, setXRot] = useState(70);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [animationComplete, setAnimationComplete] = useState(false);

  const { camera } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    camera.position.x = 0;
    camera.position.y = -0.1;
    camera.position.z = 3;
  });

  useEffect(() => {
    // Add mouse move listener
    const handleMouseMove = (event) => {
      console.log("called");
      const { clientX, clientY } = event;
      const mouseX = (clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(clientY / window.innerHeight) * 2 + 1;

      // Set mouse position in the state or use it directly in your application
      // For now, let's just log the values
      console.log("Mouse Position:", mouseX, mouseY);
      setMouse({ x: mouseX, y: mouseY });
    };

    // Attach the listener to the canvas
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const targetRotation = { x: 0, y: 0 };
  useFrame(({}) => {
    // Calculate target rotation based on inverted mouse position
    if (tiltTowardsMouseFlag) {
      targetRotation.y = -(mouse.x * degreesToRadians(50));
      console.log(mouse);
      targetRotation.y = THREE.MathUtils.clamp(
        targetRotation.y,
        -degreesToRadians(20),
        degreesToRadians(15)
      );

      // Use GSAP to smoothly interpolate between current and target rotation
      gsap.to(aeroplaneRef.current.rotation, {
        y: targetRotation.y,
        duration: 30, // Adjust the duration as needed
        ease: "power2.out", // Use a different easing function if desired
      });
    }
  });

  return (
    <>
      <OrthographicCamera position={[0, 0, 0]}>
        <group ref={aeroplaneRef}>
          <primitive object={helicopter.scene} />
        </group>
      </OrthographicCamera>
    </>
  );
};
const HeroSection = ({ scrollF }) => {
  const aeroplaneRef = useRef();
  const canvasRef = useRef();
  const [tiltTowardsMouseFlag, setTiltTowardsMouseFlag] = useState(true);
  // const pointLightRef = useRef();
  const helicopter = useGLTF("./newplane/scene.gltf");
  const onDownArrowClick = () => {
    // Move the helicopter model
    if (aeroplaneRef.current) {
      gsap.to(aeroplaneRef.current.position, {
        x: -6, // Target X position
        duration: 5, // Duration in seconds
        ease: "power1.inOut", // Easing function
        onUpdate: () => console.log(aeroplaneRef.current.position.x),
        onComplete: () => {
          scrollF();
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
      x: -3,
      duration: 30,
      ease: "power1.out",
      onStart: () => {
        setTiltTowardsMouseFlag(false);
      },
      onComplete: () => {
        setTiltTowardsMouseFlag(true);
      },
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
    }, 3000);
  }, []);
  const calculateScale = () => {
    const width = window.innerWidth;

    if (width >= 320 && width <= 513) {
      return 0.5;
    } else if (width >= 514 && width <= 768) {
      return 0.7;
    } else if (width >= 769 && width <= 900) {
      return 0.8;
    } else if (width >= 901 && width <= 1200) {
      return 0.9;
    } else {
      return 1.1;
    }
  };

  const calculatePosition = () => {
    const width = window.innerWidth;

    // Adjust position based on device width
    if (width >= 320 && width <= 514) {
      [0, -0.3, 0];
    }
    else if (width < 768) {
      // For devices with width less than 768 pixels (adjust the threshold as needed)
      return [0, -0.4, 0]; // Set the desired position for mobile devices
    } else {
      // For larger screens
      return [0.3, -0.4, 0]; // Default position for larger screens
    }
  };
  return (
    <Container id="aeroplane-model" className="hero-section">
      {firstText ? (
        // <Fade direction="left">
        <Text>
          Get ready to explore with Sun International Tours & Travels{" "}
        </Text>
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
          <ButtonExplore className="buttonExplore" onClick={onDownArrowClick}>
            <button className="button-57" role="button">
              <span className="text"> Explore more</span>
              <span>Click Me</span>
            </button>
          </ButtonExplore>
        </>
      )}
      <Canvas className="canvas" ref={canvasRef}>
        <ambientLight intensity={2.5} position={[0, 0, 0]} />
        <directionalLight intensity={8} position={[0, 10, 5]} />
        <Float
          position={calculatePosition()}
          scale={calculateScale()}
          rotation={[
            degreesToRadians(5),
            degreesToRadians(170),
            degreesToRadians(-8),
          ]}
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={0.8} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[0, 0.2]}
        >
          <AeroplaneModel
            aeroplaneRef={aeroplaneRef}
            helicopter={helicopter}
            tiltTowardsMouseFlag={tiltTowardsMouseFlag}
          />
        </Float>
        <AdaptiveDpr pixelated />
      </Canvas>
      <Cloud speed={1.5} left={0} bottom={0} zIndex={3} />
      <Cloud speed={1.5} left={-10} bottom={110} zIndex={2} />

      <div
        onClick={onDownArrowClick}
        style={{
          height: "50px",
          width: "50px",
          position: "absolute",
          right: "50px",
          bottom: "50px",
          borderRadius: "50%",
          zIndex: 11,
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
      <BackDrop></BackDrop>
    </Container>
  );
};

const BackDrop = styled.div`
  position: absolute;
  background-image: linear-gradient(
    to top,
    rgb(255 255 255 / 97%) 0,
    rgb(255 246 246 / 5%) 50%,
    rgb(254 254 254 / 0%) 100%
  );
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Text = styled.div`
  @media only screen and (max-width: 768px) {
    font-size: 40px;
    width: 400px;
    left: 30%;
    /* width: 0; */
  }
  @media only screen and (min-width: 300px) and (max-width: 414px) {
    max-width: 260px;
    left: 45%;
    font-size: 30px;
  }
  @media only screen and (min-width: 414px) and (max-width: 514px) {
    left: 47%;
    font-size: 35px;
    width: 350px;
    bottom: 200px;
  }
  @media only screen and (min-width: 514px) and (max-width: 600px) {
    left: 40%;
    bottom: 145px;
    width: 400px;
  }
  @media only screen and (min-width: 768px) and (max-width: 900px) {
    left: 27%;

    width: 400px;
  }
  @media only screen and (min-width: 900px) and (max-width: 1024px) {
    left: 25%;

    width: 400px;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    left: 23%;

    width: 400px;
  }
  font-family: "Roboto" !important;
  font-weight: 500;
  font-size: 55px;
  letter-spacing: 0.25px;
  line-height: 1.2em;
  color: #0b2f6a;
  position: absolute;
  bottom: 75px;
  width: 500px;
  left: 22%;
  /* background: red; */
  z-index: 11;
  text-align: left;

  transform: translateX(-200%);
  opacity: 0;
  animation: slide-in-anim 2s ease-out forwards;
  @keyframes slide-in-anim {
    20% {
      opacity: 0;
    }

    100% {
      opacity: 1;
      transform: translateX(-50%);
    }
  }
`;
const TextWrapper = styled.div`
  @media only screen and (max-width: 1200px) {
    font-size: 40px;
    width: 0;
  }
  @media only screen and (min-width: 300px) and (max-width: 414px) {
  
    font-size: 20px;
  }
  @media only screen and (min-width: 414px) and (max-width: 514px) {
    bottom: 200px;
  }
  @media only screen and (min-width: 514px) and (max-width: 768px) {
    bottom: 150px;
  }
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

  z-index: 11;
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

const ButtonExplore = styled.div`
  position: absolute;
  bottom: 80px;
  left: 4%;
  z-index: 11;
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
    border-radius: 10px;
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
