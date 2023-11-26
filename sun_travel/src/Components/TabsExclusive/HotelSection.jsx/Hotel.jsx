import React from "react";
import styled from "styled-components";
import dubai from "../../assets/duabi.jpg";
export default function Hotel() {
  const HotelData = [
    {
      image: dubai,
      category: "Hotel ",
      heading: "Luxury Resorts Special Offer",
      para: "Enjoy a luxurious stay with our special discount on selected resorts. Book now and indulge in comfort.",
    },
    {
      image: dubai,
      category: "Hotel ",
      heading: "Weekend Getaway Deals",
      para: "Plan a perfect weekend getaway with our exclusive hotel deals. Relax and unwind in style.",
    },
    {
      image: dubai,
      category: "Hotel ",
      heading: "Business Travel Packages",
      para: "Explore our business travel packages with discounted rates on hotels. Ideal for your work trips.",
    },
    {
      image: dubai,
      category: "Hotel ",
      heading: "Stay Longer, Save More",
      para: "Extend your stay and save more! Enjoy additional discounts on hotel bookings for extended trips.",
    },
  ];
  return (
    <AllWrapper>
      {HotelData.map((item, index) => (
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
  );
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
