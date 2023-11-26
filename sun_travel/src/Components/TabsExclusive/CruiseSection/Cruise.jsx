import React from 'react'
import styled from "styled-components";
import dubai from "../../assets/duabi.jpg";
export default function Cruise() {
    const CruiseData = [
        {
          image: dubai,
          category: "Cruise",
          heading: "Exotic Cruise Destinations",
          para: "Embark on a journey to exotic destinations with our exclusive cruise packages. Experience luxury at sea.",
        },
        {
          image: dubai,
          category: "Cruise",
          heading: "Family Cruise Adventures",
          para: "Create unforgettable family memories with our family-friendly cruise adventures. Fun for all ages!",
        },
        {
          image: dubai,
          category: "Cruise",
          heading: "Romantic Cruise Getaways",
          para: "Reignite the romance with our romantic cruise getaways. Sail away to enchanting destinations.",
        },
        {
          image: dubai,
          category: "Cruise",
          heading: "Themed Cruise Events",
          para: "Experience unique themed cruise events. From music festivals to wellness cruises, we have it all!",
        },
      ];
  return (
    <AllWrapper>
    {CruiseData.map((item, index) => (
      <>
        <Cardiv key={index}>
          <ImageCardWrapper>
            <ImgStyle
              className="image-style"
              src={item.image}
              alt={item.category}
            />
          </ImageCardWrapper>
          <Category>{item.category}</Category>
          <Heading>{item.heading}</Heading>
          <Para>{item.para}</Para>
        <Button>Book Now</Button>
        </Cardiv>
      </>
    ))}
  </AllWrapper>
  )
}
const AllWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 85%;
  /* background-color: red; */
`;
const Cardiv = styled.div`
  background-color: #fff;
  width: 280px;

  height: 210px;
  /* border: 1px solid #525252; */
  border-radius: 10px;
  position: relative;
  &:hover {
    cursor: pointer;
    .image-style {
      transform: scale(1.1) rotate(5deg);
    }
  }
`;
const ImageCardWrapper = styled.div`
  height: 180px;
  background-color: red;
  width: 150px;
  overflow: hidden;
  border-radius: 20px;
  position: absolute;
  top: 80px;
  right: -35px;
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;

  transition: transform 0.3s ease;
`;
const Heading = styled.div`
  font-family: "Lato";
  font-size: 15px;
  color: #000;
  font-weight: 600;
  margin-top: 10px;
`;
const Para = styled.div`
  font-family: "Lato";
  font-size: 13px;
  color: #525252;
  font-weight: 500;
  width: 152px;
  padding: 3px 5px;
  /* height: 82px; */
  text-align: left;
`;
const Category = styled.div`
  background-color: #001499;
  color: #fff;
  /* display: inline; */
  padding: 2px;
  border-radius: 10px 10px 0px 0px;
`;
const Button = styled.div`
  text-align: left;
  color: #ff0000;
  font-size: 12px;
  font-family: "lato";
  font-weight: 600;
  transition: transform 0.3s ease;
  margin-left: 4px;
  position: absolute;
  bottom: 0;
  padding: 10px 4px;
  &:hover {
    transform: scale(1.1);
  }
`;