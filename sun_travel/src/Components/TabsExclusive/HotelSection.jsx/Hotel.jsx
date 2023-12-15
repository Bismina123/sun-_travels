import React from "react";
import styled from "styled-components";

export default function Hotel() {
  const HotelData = [
    {
      image:
        "https://res.cloudinary.com/dubjhsibu/image/upload/v1701455243/sun-images/hotel_1_e8rtyp.jpg",
      category: "Hotel ",
      heading: "Luxury Resorts Special Offer",
      para: "Enjoy a luxurious stay with our special discount on selected resorts. Book now and indulge in comfort.",
    },
    {
      image:
        "https://res.cloudinary.com/dubjhsibu/image/upload/v1701455246/sun-images/hotel_2_qrg71z.jpg",
      category: "Hotel ",
      heading: "Weekend Getaway Deals",
      para: "Plan a perfect weekend getaway with our exclusive hotel deals. Relax and unwind in style.",
    },
    {
      image:
        "https://res.cloudinary.com/dubjhsibu/image/upload/v1701455247/sun-images/hotel_3_g7pdug.jpg",
      category: "Hotel ",
      heading: "Business Travel Packages",
      para: "Explore our business travel packages with discounted rates on hotels. Ideal for your work trips.",
    },
    // {
    //   image: dubai,
    //   category: "Hotel ",
    //   heading: "Stay Longer, Save More",
    //   para: "Extend your stay and save more! Enjoy additional discounts on hotel bookings for extended trips.",
    // },
  ];
  return (
    <GridContainer>
      {HotelData.map((item, index) => (
        <>
          <GridItem key={index}>
            <div className="rectangle"></div>
            <div className="card-img">
              <img src={item.image} alt=""/>
            </div>

            <div className="card-img-overlay">
              <p>{item.category}</p>
            </div>
            <div className="textWrapper">
              <div className="title">{item.heading}</div>
              <div className="paragraph">{item.para}</div>
            </div>
            <div className="buttonNow">
              <button className="btn">
                <span>Book Now</span>
              </button>
            </div>
          </GridItem>
        </>
      ))}
    </GridContainer>
  );
}
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;

  margin: 10px;
  padding: 10px;
  gap: 30px;
  width: 85%;
`;
const GridItem = styled.div`
  background-color: #fff;
  box-shadow: 5px 7px 17px rgb(0 0 0 / 20%);
  position: relative;

  text-align: left;

  height: 560px;
  .rectangle {
    position: absolute;
    top: 22px;
    left: 50%;
    transform: translatex(-50%);
    width: 50px;
    background: #e8e8e8;
    height: 10px;
    display: block;
    border-radius: 50px;
  }
  .card-img {
    position: absolute;
    top: 33px;
    left: 0;
    /* background-color: red; */
    overflow: hidden;
    width: 100%;
    height: 300px;
    padding: 25px 25px 0px 25px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .card-img-overlay {
    position: absolute;
    top: 58px;
    height: 360px;
    background-color: #001499;
    opacity: 0.5;
    left: 25px;
    width: 100px;
    p {
      position: absolute;
      bottom: 28px;
      color: #fff;
      font-size: 23px;
      left: 10px;

      font-family: "Lato";
      font-weight: 700;
    }
  }
  .textWrapper {
    position: absolute;
    top: 430px;
    left: 25px;
  }
  .title {
    /* position: absolute;
    left: 25px; */
    bottom: 100px;
    color: #000;
    font-family: "Lato";
    text-transform: uppercase;
    font-weight: 900;
  }
  .paragraph {
    /* position: absolute;
    left: 25px;
    bottom: 20px; */
    padding-top: 5px;
    color: #000;
    font-family: "Lato";
    text-transform: capitalize;
  }
  .buttonNow {
    position: absolute;
    bottom: 15px;
    right: 25px;
  }
  .btn {
    border: none;
    display: block;
    text-align: center;
    cursor: pointer;
    text-transform: capitalize;
    outline: none;
    overflow: hidden;
    position: relative;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    background-color: #0b2f6a;
    padding: 7px 10px;
    margin: 0 auto;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }

  .btn span {
    position: relative;
    z-index: 1;
  }

  .btn:after {
    content: "";
    position: absolute;
    left: 0;
    top: -5px;
    height: 490%;
    width: 140%;
    background: red;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
    transform: translateX(-98%) translateY(-25%) rotate(45deg);
  }

  .btn:hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }
`;
