import React from "react";
import styled from "styled-components";
import dubai from "../../assets/duabi.jpg";
export default function AllCategory() {
  const HotDealsData = [
    {
      image: dubai,
      category: "Visa",
      heading: "VISA Apply Visa Online",
      para: "Avail discounts up to Rs.1000* on your Visa Services",
    },
    {
      image: dubai,
      category: "Flight",
      heading: "Book Your Flight Tickets",
      para: "Get exclusive deals on flight bookings. Fly to your favorite destinations!",
    },
    {
      image: dubai,
      category: "Tour",
      heading: "Explore Exciting Tours",
      para: "Discover amazing tours and create unforgettable memories. Book your adventure now!",
    },
    {
      image: dubai,
      category: "Hotel Discount",
      heading: "Exclusive Hotel Discounts",
      para: "Enjoy special discounts on hotel bookings. Find the perfect accommodation for your stay.",
    },
  ];
  return (
    <AllWrapper>
      {HotDealsData.map((item, index) => (
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
