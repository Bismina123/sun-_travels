import React from "react";
import styled from "styled-components";
import SearchableDropdown from "../SearchableDropDown";
import flight from "../assets/updated954.png";
import europe from "../assets/europe.png";
import americanVisa from "../assets/americanNew.png";
import asianVisa from "../assets/asianVisaUpdate.png";
import austrakianvisa from "../assets/austVisa.png";
import africanvisa from "../assets/africanVisa.png";
import { Slide } from "react-awesome-reveal";
function BannerSection({ location }) {
  let title = "";
  let image = "";
  let width = "";
  switch (location) {
    case "/Visa/europeanVisa":
      // image = europe;
      title = "European Visa";
      image = europe;
      width = "";
      break;
    case "/Visa/americanVisa":
      title = "American Visa";
      image = americanVisa;
      width = "widthAdjuct";
      break;
    case "/Visa/asianVisa":
      title = "Asian Visa";
      image = asianVisa;
      width = "widthAdjuct";
      break;
    case "/Visa/australianVisa":
      title = "Australian Visa";
      image = austrakianvisa;
      width = "widthAdjuct";
      break;
    case "/Visa/africanVisa":
      title = "African Visa";
      image = africanvisa;
      width = "widthAdjuct";
      break;
    case "/Visa":
      image = flight;
      width = "";

      break;
    default:
    // Use a default country list or handle the case as needed
  }
  return (
    <WrapperCard>
      <MainWrapper>
        <Slide direction="left">
          <FirstHalf>
            <Heading>
              We take care
              <br />
              <span>of your visa</span>
            </Heading>
            <p>
              The "text-decoration" is a CSS property that allows you to add
              visual effects to the text, such as underlining, overlining, and
              striking through. It is commonly used to style links or to
              indicate emphasis on specific text. Here is an example of how to
              use it:
            </p>
          </FirstHalf>
        </Slide>
        <Slide direction="right">
          <FlightImage>
            <img className={width} src={image} alt={flight} />
          </FlightImage>
        </Slide>
        <Slide direction="left">
          <SearchWrapper>
            <SearchableDropdown location={location} />
          </SearchWrapper>
          <LabelForVisa htmlFor="">{title}</LabelForVisa>
        </Slide>
      </MainWrapper>
    </WrapperCard>
  );
}

export default BannerSection;
const WrapperCard = styled.div`
  background: linear-gradient(to bottom, #406997, #8fa9c4, #d4e1e9);
  height: 85vh;
  max-width: 100%;
  /* margin-top: 137px; */
  font-family: "lato";
  padding-top: 90px;
  padding-bottom: 40px;
  @media screen and (min-width: 300px) and (max-width: 991px) {
    height: auto;
  }
  /* position: relative; */
`;
const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  /* background-color: red; */
  padding: 20px 35px;
  @media screen and (min-width: 300px) and (max-width: 991px) {
    grid-template-columns: auto;
  }
`;
const FirstHalf = styled.div`
  /* background-color: green; */
  width: 500px;
  padding: 15px 20px;
  @media screen and (min-width: 300px) and (max-width: 991px) {
    width: auto;
  }
  p {
    text-align: left;
    font-size: 14px;
    color: #fff;
    font-weight: 400;
    margin-top: 20px;
    margin-left: 48px;
    @media screen and (min-width: 300px) and (max-width: 991px) {
      margin-left: 0px;
    }
  }
`;
const Heading = styled.div`
  font-size: 60px;
  font-weight: 900;
  color: #fff;
  font-family: "Lato";
  text-transform: capitalize;
  word-spacing: 5px;
  margin-top: 15px;
  @media screen and (min-width: 300px) and (max-width: 414px) {
    font-size: 25px;
  }
  @media screen and (min-width: 414px) and (max-width: 514px) {
    font-size: 43px;
  }
  @media screen and (min-width: 514px) and (max-width: 991px) {
    font-size: 50px;
  }
  span {
    border: 3px solid #ffc40d;
    border-radius: 37px;
    padding: 0px 20px;
  }
`;

const FlightImage = styled.div`
  text-align: -webkit-center;
  width: 100%;
  height: 350px;
  @media screen and (min-width: 300px) and (max-width: 991px) {
    height: auto;
    margin-bottom: 30px;
  }
  /* position: absolute;
  right: 0;
  top: 100px;
  width: 60%; */
  .widthAdjuct {
    max-width: 62% !important;
  }
`;
const SearchWrapper = styled.div`
  /* padding: 0px 35px; */
  margin-left: 66px;
  @media screen and (min-width: 300px) and (max-width: 991px) {
    margin-left: 0px;
  }
`;
const LabelForVisa = styled.label`
  font-size: 60px;
  font-weight: 900;
  color: #fff;
  font-family: "Lato";
  text-transform: capitalize;
  word-spacing: 5px;
`;
