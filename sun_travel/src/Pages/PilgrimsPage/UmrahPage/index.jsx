import React, { useState } from "react";
import styled from "styled-components";
import umra1 from "../assets/beautiful-view-city-mecca-also-place-worship-kaaba.jpg";
import umra2 from "../assets/665.jpg";
import umra3 from "../assets/1336.jpg";
import umra4 from "../assets/green-dome-mosque-with-green-dome-green-dome.jpg";
import click from "../assets/click (1).svg";
import FlightIcon from "@mui/icons-material/Flight";
import BusinessIcon from "@mui/icons-material/Business";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import MosqueIcon from "@mui/icons-material/Mosque";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import UpdatedFooter from "../../../Components/UpdatedFooter";
import AboutOfPilgrims from "../components/AboutPage";
import ContactUsPage from "../../ContactusPage";
function UmraPage() {
  const DataList = [
    {
      id: 1,
      place: "Mumbai",
      package: "Premium umrah package",
      image: umra1,
      price: "INR 108000",
    },
    {
      id: 2,
      place: "Hyderabad",
      package: "Special umrah package",
      image: umra2,
      price: "INR 108000",
    },
    {
      id: 3,
      place: "Cochin",
      package: "Standard umrah package",
      image: umra3,
      price: "INR 108000",
    },
    {
      id: 4,
      place: "Bengaluru",
      package: "Platinum umrah package",
      image: umra4,
      price: "INR 980000",
    },
  ];
  const [modal, setModal] = useState(false);
const handleClick=()=>{
  setModal(true)
  console.log("clickeddddd")
}
  return (
    <Warpper>
      <div className="dridWrapper">
        {DataList.map((item) => {
          return (
            <>
              <div className="mainWrapper" onClick={handleClick}>
                <div className="imageDiv">
                  <img src={item.image} alt="" />
                </div>
                <div className="inr">{item.price}</div>
                <div className="svgDiv">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                  >
                    <path
                      fill="#ffffff"
                      fillOpacity="1"
                      d="M0,64L48,53.3C96,43,192,21,288,58.7C384,96,480,192,576,218.7C672,245,768,203,864,154.7C960,107,1056,53,1152,32C1248,11,1344,21,1392,26.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                  </svg>
                </div>
                <div className="clickIcon">
                  <img src={click} alt="" />
                </div>
                <div className="footerDiv">
                  <div className="iconDiv">
                    <FlightIcon />
                    +
                    <BusinessIcon />
                    +
                    <DirectionsBusFilledIcon />
                    +
                    <MosqueIcon />
                  </div>
                  <div className="locatCity">
                    <LocationOnIcon style={{ width: "18px" }} />
                    <span>From</span>
                    <label>{item.place}</label>
                  </div>
                  <div className="operatedBy">
                    <div className="leftSide">
                      <p className="operatedP">Operated By</p>

                      <p className="nextP">
                        Sun International <br /> tours and travels
                      </p>
                    </div>
                    <div className="rightSide">
                      <div> 15D / 14N </div>
                    </div>
                  </div>
                </div>
                <div className="footer">{item.package}</div>
              </div>
            </>
          );
        })}
      </div>
      {modal? <ContactUsPage modal={modal}setModal={setModal}/>:""}
      <AboutOfPilgrims/>
      {/* <UpdatedFooter/> */}
    </Warpper>
  );
}

export default UmraPage;
const Warpper = styled.div`
  height: 100vh;

  .dridWrapper {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 20px;
    padding: 30px 30px;
    @media only screen and (min-width: 300px) and (max-width:1000px) {
      grid-template-columns: auto auto;
      padding: 10px;
    }
  }
  .mainWrapper {
    &:hover {
      box-shadow: 0 20px 40px rgba(72, 78, 85, 0.6);
      transform: translateY(-15px);
      cursor: pointer;
      .clickIcon {
        box-shadow: rgba(2, 196, 255, 0.25) 0px 30px 60px -12px inset,
          rgba(255, 2, 204, 0.7) 0px 18px 36px -18px inset;
        cursor: pointer;
        transform: rotate(360deg);
      }
    }
    background-color: #fff;
    width: 100%;
    height: auto;
    border-radius: 25px;
    overflow: hidden;
    position: relative;
    transition: all 0.2s ease-out;
  }
  .imageDiv {
    height: 240px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .svgDiv {
    /* left: -38px; */
    position: absolute;
    top: 12rem;
    transition: all 0.2s ease-out;
    filter: drop-shadow(2px -9px 4px rgba(0, 69, 134, 0.2));
    width: 100%;
    overflow: hidden;
    @media only screen and (min-width: 677px) and (max-width: 800px) {
      top: 11rem;
    }
     @media only screen and (min-width: 800px) and (max-width: 900px) {
      top: 10rem;
    }
    @media only screen and (min-width: 900px) and (max-width: 1000px) {
      top: 11rem;
    }
  }
  .inr {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: rgba(16, 147, 78, 0.9);
    padding: 6px 10px;
    border-radius: 3px;
    color: #fff;
  }
  .clickIcon {
    img {
      @media only screen and (min-width: 300px) and (max-width: 900px) {
        width: 20px;
      }
      width: 40px;
    }
    @media only screen and (min-width: 300px) and (max-width: 900px) {
      padding: 0.5rem;
    }
    position: absolute;
    top: 11rem;
    right: 1rem;
    color: #970101;
    font-size: 3rem;
    background: rgb(238, 174, 202);
    background: linear-gradient(
      133deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(211, 210, 231, 1) 19%,
      rgba(11, 39, 73, 1) 100%
    );
    padding: 1rem;
    border-radius: 100%;
    transition: all 0.6s ease-in-out;
    &:hover {
    }
  }
  .footerDiv {
    @media only screen and (min-width: 300px) and (max-width: 900px) {
      padding: 10px;
    }
    margin-top: 10px;
    padding: 20px 20px;
    .iconDiv {
      color: #af851b;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 2px;
      font-size: 14px;
      @media only screen and (min-width: 300px) and (max-width: 900px) {
        font-size: 10px;
      }
    }
    .locatCity {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      span {
        font-size: 12px;
        color: #525252;
        font-weight: 400;
        display: flex;
        align-items: center;
        /* overflow: hidden; */
      }
      label {
        white-space: nowrap;
        text-overflow: ellipsis;
        /* width: 100%; */
        overflow: hidden;
        padding-left: 5px;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 600;
      }
    }
  }
  .operatedBy {
    @media only screen and (min-width: 300px) and (max-width: 900px) {
      grid-template-columns: auto;
    }
    /* width: 100%; */
    display: grid;
    grid-template-columns: auto auto;
    padding-top: 15px;
    align-items: center;
    /* height: 54px; */
    justify-content: space-between;
    .leftSide {
      text-align: left;
      .operatedP {
        font-size: 12px;
        color: #525252;
        font-weight: 500;
        line-height: 12px;
        padding-top: 7px;
        margin: 0;
      }
      .nextP {
        margin-top: 5px;
        font-size: 13px;
        font-weight: 700;
        line-height: 15px;
        color: #f18e00;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    .rightSide {
      @media only screen and (min-width: 300px) and (max-width: 900px) {
        margin-top: 10px;
      }
      div {
        border: 1px solid #338c8f;
        border-radius: 4px;
        white-space: nowrap;
        background: #001499;
        line-height: 10px;
        padding: 0.5rem !important;
        color: #fff;
      }
    }
  }
  .footer {
    @media only screen and (min-width: 300px) and (max-width: 900px) {
      font-size: 15px;
    }
    background-color: #0b2f6a;
    min-height: 40px;
    padding: 7px 1px 7px 16px;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.22;
    color: #fff;
    text-transform: capitalize;
  }
`;
