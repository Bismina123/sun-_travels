import React from "react";
import styled from "styled-components";
import ServicesSection from "./ServicesSection";
import FrroAboutPage from "./FrroAboutPage";
import UseForms from "./UseForms";
import UpdatedFooter from "../../Components/UpdatedFooter";
function FrroPage() {
 
  return (
      
    <Wrapper>
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
