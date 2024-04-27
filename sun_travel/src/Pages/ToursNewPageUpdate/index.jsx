import React, { useState } from "react";
import TourCard from "./card";
import SnExTab from "../ToursNewPage/components/SnExTab";
import ExperienceCard from "./ExperinceCard";
import InternarionalDest from "./InternationalDest";
import BestSellingSection from "../../Components/BestSellingSection";
import UpdatedFooter from "../../Components/UpdatedFooter";
import styled from "styled-components";

const ToursNewPageUpdate = () => {
  const [isShowContent] = useState(true)
  return (
    <>
      <Div style={{ padding: "10px", margin: "5%", background: "#fff" }}>
        <SnExTab />
      </Div>
      <div style={{ padding: "10px", margin: "5%", background: "#fff" }}>
        <ExperienceCard />
      </div>
      <div style={{ padding: "10px", margin: "5%", background: "#fff" }}>
        <InternarionalDest />
      </div>
      <div style={{ padding: "10px", margin: "5%", background: "#fff" }}>
        <BestSellingSection isShowContent={isShowContent} />
      </div>
      <UpdatedFooter />
    </>
  );
};

export default ToursNewPageUpdate;
const Div = styled.div`
  @media screen and (min-width: 100px) and (max-width: 991px) {
    margin-top: 70px !important;
  }
`;
