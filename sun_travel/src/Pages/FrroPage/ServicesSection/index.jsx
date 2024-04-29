import React, { useState } from "react";
import styled from "styled-components";
import bg from "../../FrroPage/assets/662.jpg";
import icon1 from "../assets/registration.svg";
import icon2 from "../../FrroPage/assets/travel (1).svg";
import icon3 from "../../FrroPage/assets/close (2).svg";
import icon4 from "../../FrroPage/assets/police.svg";
import icon5 from "../../FrroPage/assets/health-report.svg";
import icon6 from "../../FrroPage/assets/boarding-pass.svg";
import icon7 from "../../FrroPage/assets/wedding.svg";
import icon8 from "../../FrroPage/assets/id-card.svg";
import ContactUsPage from "../../ContactusPage";

function ServicesSection() {
  const cardData = [
    {
      id: 1,
      image: icon1,
      label: "Foreigners Registration India",
    },
    {
      id: 2,
      image: icon2,
      label: "India Visa Extension",
    },
    {
      id: 3,
      image: icon3,
      label: "India Exit Permit",
    },
    {
      id: 4,
      image: icon4,
      label: "Police Clearance Certificate India",
    },
    {
      id: 5,
      image: icon5,
      label: "Indian Medical Visas",
    },
    {
      id: 6,
      image: icon6,
      label: "Foreign National Registration",
    },
    {
      id: 7,
      image: icon7,
      label: "Foreign Marriage Registration",
    },
    {
      id: 7,
      image: icon8,
      label: "PAN Card & Aadhaar Card for expats",
    },
  ];
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(true);
    console.log("clickeddddd");
  };
  return (
    <Wrapper>
      <MainHeader>
        <h1>FRRO Services</h1>
        <GridWrapper className="gridWrapper">
          {cardData.map((item) => {
            return (
              <>
                <section className="cards" onClick={handleClick}>
                  <a className="card">
                    {/* <img src="" alt="" /> */}
                    <div className="innerCard">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="card__text">
                      <h3>{item.label}</h3>
                      <span>Contact us</span>
                    </div>
                  </a>
                </section>
              </>
            );
          })}
        </GridWrapper>
        {modal ? <ContactUsPage modal={modal} setModal={setModal} /> : ""}
      </MainHeader>
    </Wrapper>
  );
}

export default ServicesSection;
const MainHeader = styled.div`
 @media screen and (min-width: 320px) and (max-width: 520px) {
  .gridWrapper {
      grid-template-columns: auto auto;
    }
    .card{
      width: 185px !important;
      height: 230px !important;
      position: relative !important;
      padding: 1rem !important;
    }
    .card__text h3{
      font-size: 17px !important;
    }
    .card__text{
      padding: 0px !important;
    }
 }
  @media screen and (min-width: 520px) and (max-width: 600px) {
    .gridWrapper {
      grid-template-columns: auto auto;
    }
    .card{
      width: 230px !important;
      height: 230px !important;
      position: relative !important;
    }
    .card__text h3{
      font-size: 17px !important;
    }
    .card__text{
      padding: 0px !important;
    }
  }
  @media screen and (min-width: 600px) and (max-width: 850px) {
    .gridWrapper {
      grid-template-columns: auto auto ;
    }
    .card{
      width: 280px !important;
      height: 230px !important;
      position: relative !important;
    }
    .card__text h3{
      font-size: 17px !important;
    }
    .card__text{
      padding: 0px !important;
    }
  }
  @media screen and (min-width: 850px) and (max-width: 1000px) {
    .gridWrapper {
      grid-template-columns: auto auto auto auto ;
    }
    .card{
      width: 195px !important;
      height: 230px !important;
      position: relative !important;
    }
    .card__text h3{
      font-size: 17px !important;
    }
    .card__text{
      padding: 0px !important;
    }
  }
  @media screen and (min-width: 1000px) and (max-width: 1200px) {
    .gridWrapper {
      grid-template-columns: auto auto auto auto ;
    }
    .card{
      width: 205px !important;
      height: 230px !important;
      position: relative !important;
    }
    .card__text h3{
      font-size: 17px !important;
    }
    .card__text{
      padding: 0px !important;
    }
  }
  padding-top: 70px;
  text-align: center;
  h1 {
    font-size: 30px;
    color: #1b1b8f;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .cards {
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .innerCard {
    position: absolute;
    left: 0;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 25%;
    width: 70px;
  }
  .card {
    width: 350px;
    height: 330px;
    /* flex: 0 0 32%; */
    display: grid;
    grid: "card";
    background: #fff;
    overflow: hidden;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0px 3px 0px 0px rgba(17, 180, 245, 0.004),
      0px 3px 50px 0px rgba(17, 180, 245, 0.1);
    /* figure {
      opacity: 1;
      filter: grayscale(0.8);
      grid-area: card;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
      transition: 0.4s ease-in-out;
      border-radius: 10px;
      overflow: hidden;
    } */
    /* img {
      width: 100%;
      visibility: hidden;
      border-radius: 10px;
      overflow: hidden;
    } */
  }
  .card__text {
    position: relative;
    grid-area: card;
    padding: 1.5em;
    color: #fff;
    align-self: flex-end;
    h3,
    span {
      position: relative;
      z-index: 1;
    }
    h3 {
      color: #1b1b8f;
    }
    span {
      position: relative;
      display: inline-block;
      padding: 0.4em 2em 0.4em 0;
      &::before {
        content: "";
        background: #1b1b8f;
        position: relative;
        z-index: -1;
        position: absolute;
        top: 0;
        left: -10em;
        right: 0;
        bottom: 0;
        transform-origin: top right;
        transform: skewX(-30deg);
        transition: 0.6s ease-in-out;
      }
    }
    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      transition: 0.6s ease-in-out;
      top: 0;
      left: 0;
      right: 0;
      bottom: -200%;
      background: #1b1b8f;
    }
    &::before {
      transform-origin: top left;
      transform: translate(0, 20%) skewY(90deg);
    }
    &::after {
      transform-origin: top right;
      transform: translate(0, 50%) skewY(-50deg);
    }
  }

  // hover
  .card:focus,
  .card:hover {
    figure {
      filter: grayscale(0);
      opacity: 1;
    }
    .card__text {
      &::before {
        top: 0;
        transform: translate(0, -20%) skewY(50deg);
        transition: 0.4s ease-in-out;
      }
      &::after {
        transform: translate(0, -10%) skewY(-14deg);
        transition: 0.4s ease-in-out;
      }
      span::before {
        background: #fff;
      }
      span {
        color: #1b1b8f;
      }
    }
  }

  // click
  .card:active {
    transform: scale(0.98);
  }

  // framework

  h3 {
    font-weight: bold;
    font-size: 1.4em;
    margin-bottom: 0.5em;
  }
  p {
    margin: 1em 0;
  }
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const Wrapper = styled.div`
  /* margin-top: 100px; */
  /* background-image: url(${bg}); */
  background: #c0daf1db;

  background-size: cover;
  color: #000;
  /* backdrop-filter: blur(10px); */
  height: auto;
  padding: 10px 20px;
`;
