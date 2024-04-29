import Card from "@mui/material/Card";
import { dummyCardData } from "./exclusiveDeals";
import SnPopTab from "./SnPopTab";
import React, { useState } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";

export const PopularDestinations = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 4; // Number of cards to display per page
  const handleNext = () => {
    if (currentPage < Math.ceil(dummyCardData.length / cardsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleDrag = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    trackMouse: true,
  });
  return (
    <Wrapper>
      <Card className="card-main-style">
        <SnPopTab
          className="tab-style"
          handleNext={handleNext}
          handlePrev={handlePrev}
          handleDrag={handleDrag}
          currentPage={currentPage}
          cardsPerPage={cardsPerPage}
          dataOne={dummyCardData}
          dataTwo={dummyCardData}
          dataThree={dummyCardData}
          dataFour={dummyCardData}
        />
        <p className="link-para">View All Deals</p>
      </Card>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .card-main-style {
    padding: 10px 30px;
    position: relative;
  }
  .link-para {
    position: absolute;
    top: 20px;
    right: 30px;
    text-decoration: underline;
    font-size: 15px;
    color: #d32f2f;
    margin-bottom: 0px;
    font-weight: 600;
  }
`;
