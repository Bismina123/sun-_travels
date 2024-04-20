import React from "react";
import TourCard from "./card";
import styled from "styled-components";

const ToursNewPageUpdate = () => {
  return (
    <>
      <Wrapper style={{ marginTop: "100px" }}>
        <TourCard />
        <TourCard />
        <TourCard />
      </Wrapper>
    </>
  );
};

export default ToursNewPageUpdate;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;
