import React, { useState } from "react";
import styled from "styled-components";
import bg from "../../HotelBookingPage/assets/luxury-sunset-poolside-relaxation-with-stunning-landscape-view-generated-by-ai.jpg";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import StarIcon from "@mui/icons-material/Star";
import hotel1 from "../assets/3403.jpg";
import hotel2 from "../assets/5627.jpg";
import hotel3 from "../assets/150095.jpg";
import hotel4 from "../assets/2150497260.jpg";
import hotel5 from "../assets/2150497286.jpg";
import hotel6 from "../assets/2150683419.jpg";
import ContactUsPage from "../../ContactusPage";

function HotelCards() {
  const HotelDetails = [
    {
      id: 1,
      hotelname: "Capital Business Hotel",
      hotelLocation: "Bali, Indonesia",
      price: "1200",
      starRating: "4.9",
      image: hotel1,
    },
    {
      id: 2,
      hotelname: "Sunset Paradise Resort",
      hotelLocation: "Phuket, Thailand",
      price: "1500",
      starRating: "4.7",
      image: hotel2,
    },
    {
      id: 3,
      hotelname: "Metropolitan Suites",
      hotelLocation: "Tokyo, Japan",
      price: "1800",
      starRating: "4.8",
      image: hotel3,
    },
    {
      id: 4,
      hotelname: "Grand Luxe Towers",
      hotelLocation: "Paris, France",
      price: "2200",
      starRating: "4.6",
      image: hotel4,
    },
    {
      id: 5,
      hotelname: "Coastal Retreat Inn",
      hotelLocation: "Cancun, Mexico",
      price: "1300",
      starRating: "4.5",
      image: hotel5,
    },
    {
      id: 6,
      hotelname: "Majestic Heights Lodge",
      hotelLocation: "Swiss Alps, Switzerland",
      price: "2000",
      starRating: "4.9",
      image: hotel6,
    },
  ];
  const [modal, setModal] = useState(false);
  const handleButtonClick=()=>{
    setModal(true)
  }
  return (
    <Wrapper>
      {HotelDetails.map((item) => {
        return (
          <>
            <div className="second hero">
              <img className="hero-profile-img" src={item.image} alt="" />
              <div className="hero-description-bk"></div>
              <div className="hero-logo">
                <img src={item.image} alt="" />
              </div>
              <div className="hero-description">
                <p>{item.hotelname}</p>
              </div>
              <div className="hero-date">
                <FmdGoodOutlinedIcon />
                <p>{item.hotelLocation}</p>
              </div>
              <div className="hero-rate">
                <CurrencyRupeeIcon />
                <p>{item.price}/ 4 nights</p>
              </div>
              <div className="hero-btn" onClick={handleButtonClick}>
                <a className="bookNow">Book now</a>
              </div>
              <div className="hero-rating">
                <StarIcon />
                <div>{item.starRating}</div>
              </div>
            </div>
          </>
        );
      })}
            {modal? <ContactUsPage modal={modal}setModal={setModal}/>:""}

    </Wrapper>
  );
}

export default HotelCards;
const Wrapper = styled.div`
  .hero {
    display: inline-block;
    position: relative;
    width: 400px;
    min-width: 400px;
    height: 400px;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
    margin: 30px;
    transition: 0.5s ease;
    &:hover {
      .hero-profile-img {
        transition: 0.5s ease;
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }

  .hero-profile-img {
    height: 70%;
  }

  .hero-description-bk {
    background-image: linear-gradient(0deg, #3f5efb, #fc466b);
    border-radius: 30px;
    position: absolute;
    top: 55%;
    left: -5px;
    height: 65%;
    width: 108%;
    transform: skew(19deg, -9deg);
  }

  .second .hero-description-bk {
    background-image: linear-gradient(-20deg, #133fbb, #5c82e7);
  }

  .hero-logo {
    height: 80px;
    width: 80px;
    border-radius: 20px;
    background-color: #fff;
    position: absolute;
    bottom: 30%;
    left: 30px;
    overflow: hidden;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.7);
  }

  .hero-logo img {
    height: 100%;
  }

  .hero-description {
    position: absolute;
    color: #fff;
    font-weight: 900;
    left: 150px;
    bottom: 26%;
  }

  .hero-btn {
    position: absolute;
    color: #fff;
    right: 30px;
    bottom: 10%;
    padding: 10px 20px;
    border: 1px solid #fff;
    transition: 0.5s all;
    &:hover {
      background-color: #fff;
      cursor: pointer;

      a {
        color: #0b1b4a;
      }
    }
  }

  .hero-btn a {
    color: #fff;
    cursor: pointer;
  }

  .hero-date {
    position: absolute;
    color: #fff;
    left: 30px;
    bottom: 13%;
    display: flex;
    align-items: center;
  }
  .hero-rating {
    position: absolute;
    color: #0b1b4a;
    right: 30px;
    bottom: 3%;
    padding: 0px 10px;
    background-color: #fff;
    font-size: 13px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 2px;
    svg {
      width: 13px;
      height: 13px;
      color: #af9609;
    }
  }
  .hero-rate {
    position: absolute;
    color: #fff;
    left: 30px;
    bottom: 5%;
    display: flex;
    align-items: center;
  }
  /* END CARD DESIGN */

  .btn i:before {
    width: 14px;
    height: 14px;
    position: fixed;
    color: #fff;
    background: #0077b5;
    padding: 10px;
    border-radius: 50%;
    top: 5px;
    right: 5px;
  }
`;
