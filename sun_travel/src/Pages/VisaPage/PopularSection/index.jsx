import React from "react";
import flightPath from "../assets/380-removebg-preview.png";
import styled from "styled-components";

import up from "../assets/redo.svg";

import man from "../assets/Image-Editing-Services-Provider-1024x683-removebg-preview.png";
import visaAll from "../assets/visa (2).svg";
import experience from "../assets/visa (3).svg";

import global from "../assets/global-shipping.svg";
import locations from "../assets/call-center.svg";
import van from "../assets/delivery-truck.svg";
import security from "../assets/secure.svg";

import newZealandFlag from "../assets/new-zealand.svg";
import usaFlag from "../assets/united-states.svg";
import australiaFlag from "../assets/australia.svg";
import canadaFlag from "../assets/canada.svg";
import schenganFlag from "../assets/european-union.svg";
import dubaiFlag from "../assets/flag.svg";
import muscantFlag from "../assets/oman.svg";
import bahrainFlag from "../assets/bahrain.svg";
import qatarFlag from "../assets/qatar.svg";
import omanFlag from "../assets/oman.svg";

import newzland from "../assets/newzeland.jpg";
import usa from "../assets/usa.jpg";
import australia from "../assets/australia.jpg";
import canada from "../assets/canada.jpg";
import schengan from "../assets/schengan.jpg";
import dubaiVisa from "../assets/dubaiVisa.jpg";
import muscat from "../assets/mascat.jpg";
import bahrain from "../assets/bahrain.jpg";
import qatar from "../assets/qatarr.jpg";
import oman from "../assets/oman.jpg";
import { Fade, Slide } from "react-awesome-reveal";
import ProcessOnVisa from "../ProcessOnVisa";
import { useLocation, useNavigate } from "react-router-dom";

function PopularSection() {
  const fistCountryOptions = [
    {
      name: "New Zealand",
      description: "Oceania",
      image: newzland,
      flag: newZealandFlag,
    },
    {
      name: "United States",
      description: "North America",
      image: usa,
      flag: usaFlag,
    },
    {
      name: "Australia",
      description: "Oceania",
      image: australia,
      flag: australiaFlag,
    },
    {
      name: "Canada",
      description: "North America",
      image: canada,
      flag: canadaFlag,
    },
    {
      name: "Schengen",
      description: "Europe",
      image: schengan,
      flag: schenganFlag,
    },
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const secondCountryOptions = [
    { name: "Dubai", description: "Asia", image: dubaiVisa, flag: dubaiFlag },
    { name: "Muscat", description: "Asia", image: muscat, flag: muscantFlag },
    { name: "Bahrain", description: "Asia", image: bahrain, flag: bahrainFlag },
    { name: "Qatar", description: "Asia", image: qatar, flag: qatarFlag },
    { name: "Oman", description: "Asia", image: oman, flag: omanFlag },
  ];
  const handleClick = (e,name) => {
    if (location.pathname === "/Visa/europeanVisa") {
      navigate(`/Visa/all/${name}`);
    } else if (location.pathname === "/Visa/australianVisa") {
      navigate(`/Visa/all/${name}`);
    } else if (location.pathname === "/Visa/asianVisa") {
      navigate(`/Visa/all/${name}`);
    } else if (location.pathname === "/Visa/americanVisa") {
      navigate(`/Visa/all/${name}`);
    } else if (location.pathname === "/Visa/africanVisa") {
      navigate(`/Visa/all/${name}`);
    } else if (location.pathname === "/Visa") {
      navigate(`/Visa/all/${name}`);
    }

    console.log(name,location.pathname,"handleClicked");
  };
  const handleClickSecond=(e,name)=>{
    if (location.pathname === "/Visa/europeanVisa") {
      navigate(`/Visa/all/${name}`);
    } else if (location.pathname === "/Visa/australianVisa") {
      navigate(`/Visa/all/${name}`);
    } else if (location.pathname === "/Visa/asianVisa") {
      navigate(`/Visa/all/${name}`);
    } else if (location.pathname === "/Visa/americanVisa") {
      navigate(`/Visa/all/${name}`);
    } else if (location.pathname === "/Visa/africanVisa") {
      navigate(`/Visa/all/${name}`);
    } else if (location.pathname === "/Visa") {
      navigate(`/Visa/all/${name}`);
    }
  }
  return (
    <PopuLarDiv>
      {/* <label >Popular Destinations</label> */}
      <FlightPath>
        <label>Popular contries to travel</label>
        <img src={flightPath} alt={flightPath} />
      </FlightPath>
      <Slide direction="left">
        <CardSection>
          {fistCountryOptions.map((country) => {
            return (
              <>
                <div className="card">
                  {/* <> */}
                  <div className="imgBox">
                    <img src={country.image} alt="New York Photo" />
                    <div className="img-blur">
                      <div  onClick={(e) => handleClick(e, country.name)}>
                        Enquire now &gt;
                      </div>
                    </div>
                  </div>
                  <h2 className="title" onClick={(e) => handleClick(e, country.name)}>
                    <label>{country.name}</label>
                  </h2>
                  <p className="text">
                    <img src={country.flag} alt="flag" />
                    {country.description}
                  </p>
                  {/* </> */}
                </div>
              </>
            );
          })}
        </CardSection>
      </Slide>
      <Slide direction="right">
        <CardSection>
          {secondCountryOptions.map((country) => {
            return (
              <>
                <div className="card">
                  {/* <> */}
                  <div className="imgBox">
                    <img src={country.image} alt="New York Photo" />
                    <div className="img-blur">
                      <div onClick={(e) => handleClickSecond(e, "United Arab Emirates")}>Enqure now &gt;</div>
                    </div>
                  </div>
                  <h2 className="title" onClick={(e) => handleClickSecond(e, "United Arab Emirates")}>
                    <label >{country.name}</label>
                  </h2>
                  <p className="text">
                    <img src={country.flag} alt="flag" />
                    {country.description}
                  </p>
                  {/* </> */}
                </div>
              </>
            );
          })}
        </CardSection>
      </Slide>
      <Fade>
        <ProcessOnVisa />
      </Fade>
      <WhyChooseUs>
        <MainSection>
          <Slide direction="left">
            <FirstSection>
              <div className="dotted">
                <div>
                  <img className="arrowright" src={up} alt={up} />
                  <ChatBox>
                    <div className="number">01</div>
                    <div className="textAlign">
                      <img
                        className="toolTipImage"
                        src={visaAll}
                        alt="visaAll"
                      />
                      <label>
                        Visa Services for <br /> all Countries
                      </label>
                    </div>
                  </ChatBox>
                </div>
                <div>
                  <img className="arrowLeft" src={up} alt={up} />
                  <ChatBox className="second">
                    <div className="number">02</div>
                    <div className="textAlign">
                      <img
                        className="toolTipImage"
                        src={experience}
                        alt="experience"
                      />
                      <label>40 years of experience in Visa processing</label>
                    </div>
                  </ChatBox>
                </div>
                <div>
                  <img className="arrowright03" src={up} alt={up} />
                  <ChatBox className="third">
                    <div className="number">03</div>
                    <div className="textAlign">
                      <img className="toolTipImage" src={global} alt="global" />
                      <label>150+ Branches Worldwide</label>
                    </div>
                  </ChatBox>
                </div>
                <div>
                  <img className="arrowright04" src={up} alt={up} />
                  <ChatBox className="fourth">
                    <div className="number">04</div>
                    <div className="textAlign">
                      <img
                        className="toolTipImage"
                        src={locations}
                        alt="global"
                      />
                      <label>End-to-End Visa Assistance</label>
                    </div>
                  </ChatBox>
                </div>
                <div>
                  <img className="arrowright05" src={up} alt={up} />
                  <ChatBox className="fifth">
                    <div className="number">05</div>
                    <div className="textAlign">
                      <img className="toolTipImage" src={van} alt="van" />
                      <label>
                        Pick Up & Drop of Documents from your Doorstep
                      </label>
                    </div>
                  </ChatBox>
                </div>
                <div>
                  <img className="arrowright06" src={up} alt={up} />
                  <ChatBox className="sixth">
                    <div className="number">06</div>
                    <div className="textAlign">
                      <img
                        className="toolTipImage"
                        src={security}
                        alt="security"
                      />
                      <label>Safety & Confidentiality</label>
                    </div>
                  </ChatBox>
                </div>
              </div>
            </FirstSection>
          </Slide>
          <Slide direction="right">
            <SecondSection>
              <div className="choose">
                {" "}
                <span>Why</span> <br /> Choose Us?
              </div>
              <div className="arrow-up"></div>

              <div className="image">
                <img src={man} alt={man} />
              </div>
            </SecondSection>
          </Slide>
        </MainSection>
      </WhyChooseUs>
    </PopuLarDiv>
  );
}

export default PopularSection;
const FlightPath = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* background-color: green; */
  text-align: left;
  position: relative;
  gap: 15px;
  margin-top: 20px;
  /* padding: 20px 35px; */
  /* margin-left: 62px; */
  img {
    position: absolute;
    top: -108px;
    width: 250px;
    right: 450px;
  }
  label {
    color: #0b2f6a;
    font-family: "Lato";
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: capitalize;
  }
`;
const PopuLarDiv = styled.div`
  height: auto;
`;
const CardSection = styled.div`
  display: flex;
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 360px;
    margin: 0 25px;
    background: #fff;
    border-radius: 15px;
    text-align: center;
    transition: 0.3s;
  }
  .card:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  .card .imgBox {
    position: relative;
    width: 180px;
    height: 180px;
    background: red;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  .card .imgBox img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .card .img-blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.5s;
  }
  .card .imgBox:hover .img-blur {
    opacity: 1;
    cursor: pointer;
  }
  .card .img-blur div {
    text-decoration: none;
    color: #fff;
    letter-spacing: 1px;
    cursor: pointer;
  }
  .card .img-blur::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: 155px;
    height: 155px;
    border-radius: 50%;
    border: 2px dotted #fff;
    pointer-events: none;
    animation: border-anime 15s linear infinite;
  }
  .text {
    img {
      width: 30px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  @keyframes border-anime {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .card .title {
    margin: 15px 0;
  }
  .card .title label {
    font-size: 1.6rem;
    color: #555;
    text-decoration: none;
    transition: 0.4s;
  }
  .card .title label:hover {
    color: rgb(0, 221, 147);
    cursor: pointer;
  }
  .card .text {
    font-size: 0.8rem;
    line-height: 1.5em;
    color: #555;
    opacity: 0.6;
  }
`;

const WhyChooseUs = styled.div`
  margin-top: 15px;
  /* padding: 10px 25px; */
`;
const MainSection = styled.div`
  /* display: grid; */
  display: grid;
  grid-template-columns: 70% 30%;
  /* background-color: red; */
  height: auto;
  padding: 10px 20px;
`;
const FirstSection = styled.div`
  /* /* background-color: yellow; */
  /* height: auto; */
  background: linear-gradient(to bottom, #acd3f3, #d4e1e9);
  border-radius: 10px 10px 0px 0px;
  .dotted {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
    /* background-color: red; */
    &::after {
      content: "";
      position: absolute;
      height: 80%;
      border-left: 3px dashed #fff;
      right: 50%;
      transform: translateX(50%);
    }
  }
  .arrowright {
    width: 50px;
    position: absolute;
    top: 12%;
    filter: invert(1) drop-shadow(2px 3px 1px black);
  }
  .arrowright03 {
    width: 50px;
    position: absolute;
    top: 38%;
    filter: invert(1) drop-shadow(2px 3px 1px black);
  }
  .arrowright05 {
    width: 50px;
    position: absolute;
    top: 64%;
    filter: invert(1) drop-shadow(2px 3px 1px black);
  }
  .arrowLeft {
    transform: rotate(180deg);
    width: 50px;
    position: absolute;
    top: 25%;
    left: 45%;
    filter: invert(1) drop-shadow(2px 3px 1px black);
  }
  .arrowright04 {
    width: 50px;
    position: absolute;
    top: 51%;
    left: 45%;
    filter: invert(1) drop-shadow(2px 3px 1px black);
    transform: rotate(180deg);
  }
  .arrowright06 {
    width: 50px;
    position: absolute;
    top: 77%;
    left: 45%;
    filter: invert(1) drop-shadow(2px 3px 1px black);
    transform: rotate(180deg);
  }
  .second {
    left: 30% !important;
    top: 25%;
  }
  .third {
    top: 38%;
  }
  .fourth {
    left: 30% !important;
    top: 51%;
  }
  .fifth {
    top: 64%;
  }
  .sixth {
    left: 30% !important;
    top: 77%;
  }
`;
const ChatBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #0b2f6a;
  padding: 10px;
  gap: 5px;
  border-radius: 10px;
  width: 155px;
  position: absolute;
  left: 55%;
  top: 12%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  .number {
    font-size: 25px;
    color: #fff;
    font-weight: bolder;
  }
  label {
    font-size: 14px;
    font-family: "lato";
    color: #fff;
  }
  .toolTipImage {
    width: 50px;
  }
  .textAlign {
    text-align: left;
  }
`;
const SecondSection = styled.div`
  /* background-color: green; */
  position: relative;
  .arrow-up {
    height: 0px;
    width: 0px;
    position: absolute;
    border-right: solid 46px transparent;
    border-left: solid 46px transparent;
    border-bottom: solid 282px #bdb6b6;
    left: 118px;
    top: 52%;
    z-index: 1;
    transform: translate(-53%, -50%);
  }
  .image {
    position: absolute;
    right: 0;

    z-index: 2;
    left: -251px;
    transform: translate(-5%, -50%);
    top: 50%;
  }
  span {
    color: #0b2f6a;
  }
  .choose {
    margin-top: 51px;
    font-size: 58px;
    font-weight: bolder;
    line-height: 56px;
    letter-spacing: 2px;
  }
`;
const Triangle = styled.div``;
