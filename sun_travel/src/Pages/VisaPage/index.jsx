import React, { useEffect } from "react";
import styled from "styled-components";

import SearchableDropdown from "./SearchableDropDown";
import { useLocation, useParams } from "react-router-dom";

import BannerSection from "./BannerSection";
import PopularSection from "./PopularSection";
import UpdatedFooter from "../../Components/UpdatedFooter";

function Visapage() {
  // const { param } = useParams();
  const location = useLocation();
  const scrollToTop = () => {
    var element = document.getElementById("detailVisaWrapper");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  useEffect(() => {
    scrollToTop();
    
  }, []);
  return (
    <VisaWrapper id="detailVisaWrapper">
     <BannerSection  location={location ? location.pathname : ""}/>
      <PopularSection/>
     <UpdatedFooter/> 
    </VisaWrapper>
  );
}

export default Visapage;


const VisaWrapper = styled.div`
  height: 100vh;

`;

