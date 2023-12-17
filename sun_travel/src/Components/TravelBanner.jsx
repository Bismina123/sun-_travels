import styled from "styled-components";

import { Slide } from "react-awesome-reveal";
function TravelBanner() {
  return (
    <TravelBannerWrapper>
      <TopSide>
        <Slide direction="left">
          <TextSide>
            <h3>Endless Exploration</h3>
            <h2>Travel to make memories all around the world</h2>
            <p>
              Embarking on a global odyssey, chasing sunsets and forging
              memories that span every latitude.
            </p>
            <button>Explore more</button>
          </TextSide>
        </Slide>
        <Slide direction="right">
          <ImageSide>
            <div className="image1">
              <img
                src="https://res.cloudinary.com/dubjhsibu/image/upload/v1702788381/sun-images/lady_iomtfm.jpg"
                alt=""
              />
            </div>
            <div className="image2">
              <img
                src="https://res.cloudinary.com/dubjhsibu/image/upload/v1702788379/sun-images/shiprotate_juztyt.jpg"
                alt=""
              />
            </div>
          </ImageSide>
        </Slide>
      </TopSide>
      <BottomSide>
        <Slide direction="left">
          <LeftSide>
            <div className="snowImage">
              <img
                src="https://res.cloudinary.com/dubjhsibu/image/upload/v1702788379/sun-images/ladyback_j5akkj.jpg"
                alt=""
              />
            </div>
          </LeftSide>
        </Slide>
        <Slide direction="right">
          <RightSide>
            <span></span>
            <label>About us!</label>
            <p>
              Elevate your wanderlust with our curated tours, where each
              itinerary is a gateway to immersive experiences and unparalleled
              adventures. Join us, and let your journey unfold seamlessly as we
              turn travel dreams into unforgettable realities.
            </p>
            <div className="destinations">
              <div>
                <div className="number">150+</div>
                <div>Destinations</div>
              </div>
              <div>
                <div className="number">30+</div>
                <div>Country</div>
              </div>
              <div>
                <div className="number">500+</div>
                <div>Happy Customers</div>
              </div>
            </div>
          </RightSide>
        </Slide>
      </BottomSide>
    </TravelBannerWrapper>
  );
}

export default TravelBanner;
const TravelBannerWrapper = styled.div`
  height: auto;
  background-color: #f2f0d159;
  padding: 20px 50px;
`;
const TopSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;
const TextSide = styled.div`
  text-align: left;
  /* padding-left: 180px; */
  font-family: "lato";
  h3 {
    font-family: "lato";
    font-size: 14px;
    color: #001499;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  h2 {
    width: 496px;
    font-size: 55px;
    line-height: 70px;
    font-weight: 600;
  }
  p {
    width: 496px;
    margin-top: 20px;
    font-size: 14px;
  }
  button {
    margin-top: 13px;
    background: #001499;
    padding: 10px 20px;
    font-size: 15px;
    border-radius: 22px;
    color: #ffff;
    transition: opacity 0.3s ease;
    &:hover {
      background-color: #fff;
      color: #001499;
      transition: opacity 0.3s ease;
      border: 1px solid #001499;
    }
  }
`;
const ImageSide = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 30px;

  .image1 {
    max-width: 220px;
    min-width: 220px;
    max-height: 450px;
    min-height: 450px;
    background-color: green;
    border-radius: 40px;
    overflow: hidden;
    img {
      height: 450px;
      width: 100%;
      object-fit: cover;
    }
  }

  .image2 {
    max-width: 220px;
    min-width: 220px;
    max-height: 400px;
    min-height: 400px;
    background-color: green;
    border-radius: 40px;
    overflow: hidden;
    img {
      height: 400px;
      width: 100%;
      object-fit: cover;
    }
  }
`;
const BottomSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  margin: 70px 0px;
`;
const LeftSide = styled.div`
  .snowImage {
    width: 490px;
    height: 350px;
    background-color: green;
    overflow: hidden;
    border-radius: 50px;
    /* text-align: left; */
    img {
      height: 350px;
      width: 100%;
      object-fit: cover;
    }
  }
`;
const RightSide = styled.div`
  width: 490px;
  position: relative;
  /* background-color: red; */
  p {
    text-align: left;
    line-height: 30px;
    font-family: "Lato";
    font-size: 15px;
  }
  span {
    /* content: ''; */
    position: absolute;
    width: 79px;
    height: 2px;
    left: 0px;
    top: -54px;
    background-color: #001499;
  }
  label {
    position: absolute;
    left: 88px;
    top: -71px;
    font-size: 16px;
    color: #001499;
  }
  .number {
    font-size: 42px;
    color: #001499;
    font-weight: bolder;
  }
  .destinations {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;