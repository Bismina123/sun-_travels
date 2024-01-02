import React from 'react'
import styled from 'styled-components';
import SearchableDropdown from '../SearchableDropDown';
import flight from "../assets/updated954.png";
function BannerSection({location}) {
  return (
    <WrapperCard>
    <MainWrapper>
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
      <FlightImage>
        <img src={flight} alt={flight} />
      </FlightImage>
      <SearchWrapper>
        <SearchableDropdown location={location}/>
      </SearchWrapper>
    </MainWrapper>
  </WrapperCard>
  )
}

export default BannerSection
const WrapperCard = styled.div`
  background: linear-gradient(to bottom, #406997, #8fa9c4, #d4e1e9);
  height: 85vh;
  max-width: 100%;
  /* margin-top: 137px; */
  font-family: "lato";
  padding-top: 90px;
  padding-bottom: 40px;
  /* position: relative; */
`;
const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  /* background-color: red; */
  padding: 20px 35px;
`;
const FirstHalf = styled.div`
  /* background-color: green; */
  width: 500px;
  padding: 15px 20px;
  p {
    text-align: left;
    font-size: 14px;
    color: #fff;
    font-weight: 400;
    margin-top: 20px;
    margin-left: 48px;
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
  span {
    border: 3px solid #ffc40d;
    border-radius: 37px;
    padding: 0px 20px;
  }
`;

const FlightImage = styled.div`
  text-align: -webkit-right;
  width: 100%;
  height: 350px;
  /* position: absolute;
  right: 0;
  top: 100px;
  width: 60%; */
`;
const SearchWrapper = styled.div`
  /* padding: 0px 35px; */
  margin-left: 66px;
`;