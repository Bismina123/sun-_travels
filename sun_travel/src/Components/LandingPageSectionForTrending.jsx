import { Parallax } from "react-parallax";
import styled from "styled-components";

import priceing from "./assets/priceingTag.png";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import visa from "./assets/visa.svg";
import { Fade } from "react-awesome-reveal";
import MHButton from "./MHButton";

export default function LandingPageSectionForTrending() {
  return (
    <Wrapper>
      <Parallax
        className="image"
        blur={0}
        bgImage="https://res.cloudinary.com/dubjhsibu/image/upload/v1702654890/sun-images/bannerblue_nliefk.jpg"
        strength={200}
        bgImageStyle={{ minHeight: "100vh" }}
      >
        <SvgIcons>
          <Fade direction="left">
            <HajjSectionText>
              <h1>Hajj And Umra</h1>

              <p>Lexuary to economy Package</p>
              <h6>
                Hajj and Umrah travel packages offer pilgrims a comprehensive
                and organized experience, providing accommodation,
                transportation, and guidance for the sacred journeys to Mecca,
                catering to both the spiritual and logistical needs of the
                pilgrims
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
                  <IconDiv>
                    <AirplaneTicketIcon />
                    <label>Air ticket </label>
                  </IconDiv>
                  <IconDiv>
                    <ApartmentIcon />
                    <label>Accomadation </label>
                  </IconDiv>
                  <IconDiv>
                    <img className="visa" src={visa} alt="" />
                    <label>Umra visa </label>
                  </IconDiv>
                </IconSet>
              </PackageSection>
              <StyledMhButton buttonName="Explore more" className="oversease" />
              {/* <ButtonSection className="btns">
                <button>Explore more</button>
              </ButtonSection> */}
            </HajjSectionText>
          </Fade>
          <Fade direction="down">
            <div className="wrapper">
              <KaabaImageWrapper>
                <img
                  src="https://res.cloudinary.com/dubjhsibu/image/upload/v1702659835/sun-images/UmrUpdated-removebg-preview_vqhoj0.png"
                  alt=""
                />
              </KaabaImageWrapper>
            </div>
          </Fade>
        </SvgIcons>
      </Parallax>
    </Wrapper>
  );
}
const StyledMhButton = styled(MHButton)`
  &.oversease {
    .btn:after {
      left: 14px;
      top: -17px;
    }
    @media only screen and (min-width: 300px) and (max-width: 1200px) {
      margin-top: 15px;
    }
    margin-top: 10px;
  }
`;
const KaabaImageWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
  position: absolute;
  top: -130px;
  right: 0;
  width: 40%;
  @media only screen and (min-width: 300px) and (max-width: 514px) {
    width: 85%;
    top: 328px;
    }
    @media only screen and (min-width: 514px) and (max-width: 768px) {
      width: 75%;
    top: 332px;
    left:55px;
    }
    @media only screen and (min-width: 768px) and (max-width: 900px) {
      width: 75%;
    top: 332px;
    left:65px;
    }
    @media only screen and (min-width: 900px) and (max-width: 1200px) {
      width: 69%;
    top: 276px;
    left: 164px;
    }
    @media only screen and (min-width: 1200px) and (max-width: 1350px) {
      width: 44%;
    top: 223px;
    }
  overflow: hidden;
`;
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

  top: 240px;
  @media only screen and (min-width: 300px) and (max-width: 1200px) {
    padding: 0px 20px;
  }
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
  .wrapper {
    position: relative;
    /* bottom: 0; */
  }
`;
const HajjSectionText = styled.div`
  position: absolute;
  /* bottom: 71px; */
  padding: 21px 0px;
  width: 800px;
  font-family: "Lato";
  left: 100px;
  top: -145px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 40px !important;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);

  @media only screen and (min-width: 300px) and (max-width: 1200px) {
    width: auto;
    left: 0px;
  }
  h1 {
    font-size: 60px;
    font-family: "Lato";
    font-weight: 900;
    text-transform: uppercase;
    color: goldenrod;
    @media only screen and (min-width: 300px) and (max-width: 1200px) {
      font-size: 40px;
    }
  }
  p {
    font-size: 20px;
    line-height: 21px;
    letter-spacing: 1px;
    color: goldenrod;
  }
  h6 {
    text-align: justify;
    color: #ffff;
    font-size: 14px;
    margin-top: 20px;
    padding: 0px 30px;
    @media only screen and (min-width: 300px) and (max-width: 1200px) {
      padding: 0px 15px;
    }
  }
  .allPrices {
    display: flex;
    align-items: center;
    justify-content: center;
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
 @media only screen and (min-width: 300px) and (max-width: 1200px) {
  padding: 0px 10px;
    }
  .packagetext {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bolder;
    letter-spacing: 1.2px;
    color: goldenrod;
  }
`;
const IconSet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 10px;
`;
const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #fff;
  svg {
    color: rgb(218, 165, 32);
    font-size: 30px;
  }
  .visa {
    width: 14px;
    /* filter: saturate(1000%) brightness(1.5) contrast(0.8); */
  }
  label {
    color: gold;
    @media only screen and (min-width: 300px) and (max-width: 1200px) {
font-size: 14px;
    }
  }
`;

