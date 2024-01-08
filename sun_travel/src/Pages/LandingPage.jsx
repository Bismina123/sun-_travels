import styled, { keyframes } from "styled-components";

import LandingPageSectionForTrending from "../Components/LandingPageSectionForTrending";
import BestSellingSection from "../Components/BestSellingSection";
import Feedbacks from "../Components/FeedBack";

import TabsExclusive from "../Components/TabsExclusive/TabsExclusive";

import TravelBanner from "../Components/TravelBanner";
import { useEffect, useRef, useState } from "react";

import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Scene from "../Components/Scene";

import SliderComponent from "../Components/Slider";
import UpdatedFooter from "../Components/UpdatedFooter";

export default function LandingPage() {
  const bestSellingRef = useRef(null);
  const scrollToBestSelling = () => {
    console.log("called");
    console.log(bestSellingRef.current);
    if (bestSellingRef.current) {
      bestSellingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    setShowScrollButton(window.scrollY > 1000);
  };
  const scrollToTop = () => {
    var element = document.getElementById("detailMainWrapper");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    scrollToTop();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo100px = () => {
    // window.scrollBy(0, 100);
  };
  useEffect(()=>{
    scrollTo100px();
  },[])
  return (
    <WrapperCard id="detailMainWrapper">
      <HeroSection scrollF={scrollToBestSelling} />
      <SliderComponent bestSellingRef={bestSellingRef} />
      <BestSellingSection />
      <TravelBanner />
      <TabsExclusive />
      <Scene />
      <LandingPageSectionForTrending />
      {/* <Feedbacks /> */}

      <Feedbacks />
      {/* <Footer /> */}
      <UpdatedFooter />
      {showScrollButton && (
        <>
          <ScrollButton isVisible={showScrollButton}>
            <a href="https://www.instagram.com/suninternationaltours/?igshid=NGVhN2U2NjQ0Yg%3D%3D">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="https://www.facebook.com/people/FlySuninternational-Tours-Travels/pfbid0VijDEGTsDFAoWXzaWNVPgKKRVbJgjnon1ooyLZzSQ4T92pFAERrB25NWNbeoVK4vl/?mibextid=LQQJ4d">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            {/* <a href="https://www.instagram.com/suninternationaltours/?igshid=NGVhN2U2NjQ0Yg%3D%3D">
              <ion-icon name="logo-twitter"></ion-icon>
            </a> */}
            <a href="https://www.instagram.com/suninternationaltours/?igshid=NGVhN2U2NjQ0Yg%3D%3D">
              <ion-icon name="mail-outline"></ion-icon>
            </a>
            <a href="https://www.google.com/maps/dir//NARASIMHAVILASAM+SHOPPING+COMPLEX,+near+secretariate+4th+gate,+Statue,+Palayam,+Thiruvananthapuram,+Kerala+695001/@8.4956904,76.8672319,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b05bbbb0144ef6b:0x33c0f364c57f1b9c!2m2!1d76.9496338!2d8.4956991?entry=ttu">
              <ion-icon name="location-outline"></ion-icon>
            </a>
          </ScrollButton>
        </>
      )}
    </WrapperCard>
  );
}
const WrapperCard = styled.div`
  background-color: #fff;
  height: 100vh;
  max-width: 100%;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(200px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;
const ScrollButton = styled.button`
  /* background-color: #850f11; */
  border: none;
  /* border-radius: 50%; */
  color: white;
  cursor: pointer;
  font-size: 30px;
  width: 48px;
  position: fixed;
  bottom: 200px;
  right: 20px;
  z-index: 100;
  height: 300px;
  /* opacity: ${({ isVisible }) => (isVisible ? "1" : "0")}; */
  /* transform: ${({ isVisible }) =>
    isVisible ? "translateY(100px)" : "translateY(0px)"}; */

  transition: opacity 0.5s ease, transform 0.5s ease;

  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 0.5s ease;
  .btnDiv {
  }
  ion-icon {
    font-size: 20px;
  }
  div {
    margin-bottom: 15px;
    padding: 12px; /* Adjust the padding as needed */
    background: #fff;
    border-radius: 50%;
    border: 1px solid #001499;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #001499;
  }
  a {
    margin-bottom: 15px;
    padding: 12px; /* Adjust the padding as needed */
    background: #fff;
    border-radius: 50%;
    border: 1px solid #001499;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #001499;
  }
`;
