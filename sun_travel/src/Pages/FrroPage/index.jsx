import React, { useEffect } from "react";
import styled from "styled-components";
import ServicesSection from "./ServicesSection";
import FrroAboutPage from "./FrroAboutPage";
import UseForms from "./UseForms";
import UpdatedFooter from "../../Components/UpdatedFooter";
function FrroPage() {
  const scrollToTop = () => {
    var element = document.getElementById("detailMainWrapper");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
      
    <Wrapper id="detailMainWrapper">
      <ServicesSection/>
      <FrroAboutPage/>
      <UseForms/>
      <UpdatedFooter/>
    </Wrapper>
  );
}

export default FrroPage;

const Wrapper=styled.div`

height: 100vh;
`;
