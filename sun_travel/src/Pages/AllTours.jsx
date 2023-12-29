import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { tourPackages } from "./toursPackages";
import TourCard from "./TourCard";

const AllTours = () => {
  return (
    <WrapperCard>
      {tourPackages.map((item) => {
        return <TourCard key={item.id} item={item} />;
      })}
    </WrapperCard>
  );
};

export default AllTours;
const WrapperCard = styled.div`
  background-color: transparent;
  height: 100vh;
  margin-top: 137px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
`;
