import styled from "styled-components";
import moveingClouds from "./assets/videoClouds.mp4";

import clouds from "./assets/home-clouds-bg (1).png";
import softClouds from "./assets/softlouds.png";

function LandingCloudsSection() {
  return (
    <FullHeightSection>
      <FullScreenVideo className="banner">
        <div className="clouds">
          <img className="clouds1" src={softClouds} alt="clouds" />
          <img className="clouds2" src={softClouds} alt="clouds" />
          <img className="clouds3" src={softClouds} alt="clouds" />
          <img className="clouds4" src={softClouds} alt="clouds" />
        </div>
        {/* <Sub></Sub> */}
      </FullScreenVideo>
      <BackDrop></BackDrop>
    </FullHeightSection>
  );
}

export default LandingCloudsSection;

const FullHeightSection = styled.div`
  height: 80vh;
  position: relative;
  /* background-color: green; */
  background: linear-gradient(
    rgba(179, 203, 230, 1) 100%,
    rgba(237, 241, 246, 0) 36%,
    rgba(255, 255, 255, 1) 0%
  );
`;
const Sub = styled.div`
  /* position: absolute;
bottom: 0; */
  width: 100%;
  height: 75%;
  overflow: hidden;
  background-color: #b3cbe6;
`;

const FullScreenVideo = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  /* z-index: 1; */
  background-color: #fff;

  .clouds1 {
    --animation-duration: 45s; /* Adjust the duration for the first cloud */
    animation: animate calc(var(--animation-duration)) linear infinite;
    position: absolute;
    bottom: -45px;
    z-index: 1;
    width: 100%;
    height: 250px;
    overflow: hidden;
    /* opacity: 0.3; */
  }
  .clouds2 {
    --animation-duration: 50s; /* Adjust the duration for the second cloud */
    animation: animate calc(var(--animation-duration)) linear infinite;
    position: absolute;
    bottom: -53px;
    z-index: 2;
    width: 100%;
    height: 250px;
    left: -247px;
    overflow: hidden;
  }
  .clouds3 {
    --animation-duration: 30s; /* Adjust the duration for the third cloud */
    animation: animate calc(var(--animation-duration)) linear infinite;
    position: absolute;
    bottom: -45px;
    z-index: 3;
    width: 100%;
    height: 250px;
    right: -451px;
    overflow: hidden;
  }
  .clouds4 {
    --animation-duration: 35s; /* Adjust the duration for the third cloud */
    animation: animate calc(var(--animation-duration)) linear infinite;
    position: absolute;
    bottom: -45px;
    z-index: 4;
    width: 100%;
    height: 250px;
    right: 84px;
    overflow: hidden;
  }
  .clouds {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      position: absolute;
      /* bottom: 0;/ */
      max-width: 100%;
      animation: animate calc(8s * var((--i))) linear infinite;
    }
  }
  @keyframes animate {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
const BackDrop = styled.div`
  position: absolute;
  background-image: linear-gradient(
    to top,
    rgb(255 255 255 / 97%) 0,
    rgb(255 246 246 / 5%) 50%,
    rgb(254 254 254 / 0%) 100%
  );
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;
