import styled from "styled-components";

import LandingPageSectionForTrending from "../Components/LandingPageSectionForTrending";
import BestSellingSection from "../Components/BestSellingSection";
import Feedbacks from "../Components/FeedBack";

import TabsExclusive from "../Components/TabsExclusive/TabsExclusive";

import TravelBanner from "../Components/TravelBanner";
import {  useRef } from "react";

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

  return (
    <WrapperCard>
      <HeroSection scrollF={scrollToBestSelling} />
      <SliderComponent bestSellingRef={bestSellingRef}/>
      <BestSellingSection  />
      <TravelBanner />
      {/* <TabsExclusive />
      <Scene />
      <LandingPageSectionForTrending /> */}
      <Feedbacks />
     
      {/* <Footer /> */}
      <UpdatedFooter/>
    </WrapperCard>
  );
}
const WrapperCard = styled.div`
  background-color: #fff;
  height: 100vh;
`;
