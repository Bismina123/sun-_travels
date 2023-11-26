import React from "react";
import Satellite from "../assets/background1.jpg";
import { Parallax } from "react-parallax";
import styled from "styled-components";
import hajj1 from "./assets/hajj/2.svg";
import hajj2 from "./assets/hajj/3.svg";
import hajj3 from "./assets/hajj/4.svg";
import hajj4 from "./assets/hajj/5.svg";
import hajj5 from "./assets/hajj/6.svg";
import hajj6 from "./assets/hajj/7.svg";
import hajj7 from "./assets/hajj/8.svg";
import hajj8 from "./assets/hajj/9.svg";
import hajj9 from "./assets/hajj/10.svg";
import hajj10 from "./assets/hajj/11.svg";
import priceing from "./assets/priceingTag.png";
import ApartmentIcon from "@mui/icons-material/Apartment";
// import hajj1 from "./assets/hajj/2.svg";
export default function LandingPageSectionForTrending() {
  return (
    <Wrapper>
      <Parallax
        className="image"
        blur={0}
        bgImage={Satellite}
        strength={200}
        bgImageStyle={{ minHeight: "100vh" }}
      >
        <SvgIcons>
          <div>
            <img className="hajj" src={hajj1} alt="" />
            <img className="rightCamel" src={hajj2} alt="" />
            <img className="leftCamel" src={hajj3} alt="" />
            <img className="boy" src={hajj4} alt="" />
            <img className="girl" src={hajj5} alt="" />
            <img className="building" src={hajj6} alt="" />
            <img className="sand" src={hajj7} alt="" />
            <img className="kaaba" src={hajj8} alt="" />
            <img className="leftPiller" src={hajj9} alt="" />
            <img className="rightPiller" src={hajj10} alt="" />
          </div>
          <HajjSectionText>
            <h1>Hajj And Umra</h1>
            <p>Lexuary to economy Package</p>
            <h6>
              Hajj and Umrah travel packages offer pilgrims a comprehensive and
              organized experience, providing accommodation, transportation, and
              guidance for the sacred journeys to Mecca, catering to both the
              spiritual and logistical needs of the pilgrims
            </h6>
            <div className="allPrices">
              <div className="priceMain">
                <img className="priceTag" src={priceing} alt="" />
                <label>$2500</label>
                <h2>
                  <span>7</span> Nights
                </h2>
              </div>
              <div className="priceMain">
                <img className="priceTag" src={priceing} alt="" />
                <label>$4500</label>
                <h2>
                  <span>14</span> Nights
                </h2>
              </div>
              <div className="priceMain">
                <img className="priceTag" src={priceing} alt="" />
                <label>$9500</label>
                <h2>
                  <span>30</span> Nights
                </h2>
              </div>
            </div>
            <PackageSection>
              <div className="packagetext">Package Includes</div>
              <IconSet>
                <div>
                  <ApartmentIcon />
                  <label>Accomadation </label>
                </div>
              </IconSet>
            </PackageSection>
          </HajjSectionText>
        </SvgIcons>
      </Parallax>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .image {
    min-height: 100vh;
    position: relative;
    transition: transform 0.2s ease-in-out;
  }

  .image .content {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }

  .content span.img-txt {
    background-color: #333;
    text-transform: uppercase;
    color: #fff;
    padding: 1rem;
    font-size: 1.5rem;
    letter-spacing: 10px;
  }
  .sizeImage {
    width: 100px;
  }
`;
const SvgIcons = styled.div`
  position: relative;
  /* background-color: red; */
  top: 240px;
  .leftPiller {
    width: 44px;
    top: 0;
    position: absolute;
    z-index: 2;
    right: 202px;
  }
  .rightPiller {
    width: 55px;
    position: absolute;
    top: 0;
    right: 360px;
    z-index: 1;
  }
  .kaaba {
    width: 232px;
    position: absolute;
    top: 138px;
    right: 194px;
    z-index: 3;
  }
  .boy {
    width: 122px;
    position: absolute;
    top: 138px;
    right: 53px;
    z-index: 4;
  }

  .girl {
    width: 122px;
    position: absolute;
    top: 204px;
    right: 131px;
    z-index: 5;
  }
  .building {
    width: 131px;
    position: absolute;
    top: 299px;
    right: 414px;
    z-index: 5;
  }
  .sand {
    width: 500px;
    position: absolute;
    top: 349px;
    right: 47px;
    z-index: 6;
  }
  .leftCamel {
    width: 59px;
    position: absolute;
    top: 349px;
    right: 348px;
    z-index: 7;
  }
  .rightCamel {
    width: 90px;
    position: absolute;
    top: 333px;
    right: 271px;
    z-index: 8;
  }
  .hajj {
    width: 155px;
    position: absolute;
    top: -164px;
    right: 120px;
    z-index: 8;
  }
`;
const HajjSectionText = styled.div`
  position: absolute;
  /* bottom: 71px; */
  width: 500px;
  font-family: "Lato";
  left: 10px;
  h1 {
    font-size: 60px;
    font-family: "Lato";
    font-weight: 900;
    text-transform: uppercase;
    color: goldenrod;
  }
  p {
    font-size: 15px;
    line-height: 21px;
    letter-spacing: 1px;
    color: goldenrod;
  }
  h6 {
    text-align: left;
    color: #fff;
    font-size: 14px;
    margin-top: 20px;
  }
  .allPrices {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .priceMain {
    position: relative;

    label {
      position: absolute;
      top: 52px;
      left: 40px;
      z-index: 1;
      font-size: 18px;
      font-family: "Lato";
      font-weight: bolder;
      color: #001499;
    }
    h2 {
      position: absolute;
      top: 84px;
      left: 30px;
      z-index: 1;
      font-size: 15px;
      font-family: "Lato";
      font-weight: bolder;
      color: #fff;
      text-transform: uppercase;
      span {
        color: goldenrod;
      }
    }
  }

  .priceTag {
    width: 128px;
  }
`;
const PackageSection = styled.div`
  .packagetext {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bolder;
    letter-spacing: 1.2px;
    color: goldenrod;
  }
`;
const IconSet = styled.div``;
