import React, { useState } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";
import IconButton from "@mui/material/IconButton";
import arrowIcon from "../assets/img/icon/bottom-arrow.svg";
import SnExTab from "./SnExTab";
export const dummyCardData = [
  {
    id: 1,
    title: "   7 Countries 1 Holiday...",
    para: " Europe Holidays starts fr. ₹21,199/- Per Month",
    image:
      "https://s3-ap-southeast-1.amazonaws.com/akbartravelsholidays/deals1701087092rsz_3img-20231127-wa0002.jpg",
  },
  {
    id: 2,
    title: "   8 Countries 1 Holiday...",
    para: " Europe Holidays starts fr. ₹21,199/- Per Month",
    image:
      "https://s3-ap-southeast-1.amazonaws.com/akbartravelsholidays/deals1701087092rsz_3img-20231127-wa0002.jpg",
  },
  {
    id: 3,
    title: "   9 Countries 1 Holiday...",
    para: " Europe Holidays starts fr. ₹21,199/- Per Month",
    image:
      "https://s3-ap-southeast-1.amazonaws.com/akbartravelsholidays/deals1701087092rsz_3img-20231127-wa0002.jpg",
  },
  {
    id: 4,
    title: "   10 Countries 1 Holiday...",
    para: " Europe Holidays starts fr. ₹21,199/- Per Month",
    image:
      "https://s3-ap-southeast-1.amazonaws.com/akbartravelsholidays/deals1701087092rsz_3img-20231127-wa0002.jpg",
  },
  {
    id: 5,
    title: "  11 Countries 1 Holiday...",
    para: " Europe Holidays starts fr. ₹21,199/- Per Month",
    image:
      "https://s3-ap-southeast-1.amazonaws.com/akbartravelsholidays/deals1701087092rsz_3img-20231127-wa0002.jpg",
  },
  {
    id: 6,
    title: "   12 Countries 1 Holiday...",
    para: " Europe Holidays starts fr. ₹21,199/- Per Month",
    image:
      "https://s3-ap-southeast-1.amazonaws.com/akbartravelsholidays/deals1701087092rsz_3img-20231127-wa0002.jpg",
  },
];

const ExclusiveDeals = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3; // Number of cards to display per page

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
    <div>
      <TitleWrapper>
        <SnExTab
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
        <IconWrapper>
          <p className="link-para">View All Deals</p>
          <IconButton
            onClick={handlePrev}
            disabled={currentPage === 0}
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
            }}
            className="prev"
          >
            <img src={arrowIcon} />
          </IconButton>
          <IconButton
            onClick={handleNext}
            disabled={
              currentPage === Math.ceil(dummyCardData.length / cardsPerPage) - 1
            }
            sx={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
            }}
            className="next"
          >
            <img src={arrowIcon} />
          </IconButton>
        </IconWrapper>
      </TitleWrapper>
    </div>
  );
};

export default ExclusiveDeals;

const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
  position: relative;
  .tab-style {
    width: 70%;
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 12px;
  width: 15%;
  display: flex;
  align-items: start;
  justify-content: space-around;
  gap: 10px;
  .link-para {
    text-decoration: underline;
    font-size: 15px;
    color: #d32f2f;
    margin-bottom: 0px;
    font-weight: 600;
  }
  .prev {
    border-radius: 50%;
    background-color: #002543 !important;
    width: 27px;
    height: auto;
    position: unset !important;
    transform: unset !important;
    img {
      filter: invert(1);
      transform: rotate(90deg);
    }
  }
  .Mui-disabled.prev,
  .Mui-disabled.next {
    opacity: 0.1;
    filter: grayscale(1);
  }
  .next {
    border-radius: 50%;
    background-color: #002543 !important;
    width: 27px;
    height: auto;
    position: unset !important;
    transform: unset !important;
    img {
      filter: invert(1);
      transform: rotate(-90deg);
    }
  }
`;
