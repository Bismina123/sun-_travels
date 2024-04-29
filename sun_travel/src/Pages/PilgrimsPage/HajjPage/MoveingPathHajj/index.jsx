import React from "react";
import styled from "styled-components";
import UpdatedFooter from "../../../../Components/UpdatedFooter";
import userAdd from "../../assets/user-add.svg";
import userAdd2 from "../../assets/file.2svg.svg";
import userAdd3 from "../../assets/check3.svg";
import userAdd4 from "../../assets/favourite4.svg";
import userAdd5 from "../../assets/payment5.svg";
import userAdd6 from "../../assets/thumb6.svg";
import userAdd7 from "../../assets/calendar7.svg";
import userAdd8 from "../../assets/favourite-file8.svg";
function MoveingPath() {
  
  return (
    <Wrapper>
      <div style={{ background: "#23282d" }}>
        <div className="section-title">
          <h5>
            <span>10 steps closer to 1445 Hajj</span>
          </h5>
        </div>
        <SecomdHalf>
          <div className="container">
            <div className="step-wrapper move-line">
              <article className="linestep linestep1 artcle1">
                <span className="num"> 1</span>
                <div className="home-steps-container">
                  <img src={userAdd} alt="" width={"92px"} height={"92px"} />
                  <h6 className="main-title">CREATE AN ACCOUNT</h6>
                </div>
              </article>

              <article className="linestep linestep2 artcle2">
                <span className="num"> 2</span>
                <div className="home-steps-container">
                  <img src={userAdd2} alt="" width={"92px"} height={"92px"} />
                  <h6 className="main-title">UPLOAD YOUR DOCUMENTS</h6>
                </div>
              </article>

              <article
                className="linestep linestep3 artcle3"
                // style={{ left: "70%", top: "44%" }}
              >
                <span className="num"> 3</span>
                <div className="home-steps-container">
                  <img src={userAdd3} alt="" width={"92px"} height={"92px"} />
                  <h6 className="main-title">APPLICATION VERIFICATION</h6>
                </div>
              </article>

              <article
                className="linestep linestep4 artcle4"
                // style={{ left: "38%", top: " 44.5%" }}
              >
                <span className="num">4</span>
                <div className="home-steps-container">
                  <img src={userAdd4} alt="" width={"92px"} height={"92px"} />
                  <h6 className="main-title">SELECT PREFERRED CATEGORY</h6>
                </div>
              </article>

              <article
                className="linestep linestep5 artcle5"
                // style={{ left: "7.5%", top: "44%" }}
              >
                <span className="num"> 5</span>
                <div className="home-steps-container">
                  <img src={userAdd5} alt="" width={"92px"} height={"92px"} />
                  <h6 className="main-title">TOP UP EWALLET</h6>
                </div>
              </article>

              <article
                className="linestep linestep6 artcle6"
                // style={{ left: "21%", top: "93%" }}
              >
                <span className="num"> 6</span>
                <div className="home-steps-container">
                  <img src={userAdd6} alt="" width={"92px"} height={"92px"} />
                  <h6 className="main-title">SELECT YOUR PREFERRED PACKAGE</h6>
                </div>
              </article>

              <article
                className="linestep linestep7 artcle7"
                // style={{ left: "53%", top: "93%" }}
              >
                <span className="num"> 7</span>
                <div className="home-steps-container">
                  <img src={userAdd7} alt="" width={"92px"} height={"92px"} />
                  <h6 className="main-title">BOOK YOUR PACKAGE</h6>
                </div>
              </article>

              <article
                className="linestep linestep8 artcle8"
                // style={{ left: "86%", top: "93%" }}
              >
                <span className="num"> 8</span>
                <div className="home-steps-container">
                  <img src={userAdd8} alt="" width={"92px"} height={"92px"} />
                  <h6 className="main-title">REVIEW ITINERARY</h6>
                </div>
              </article>

              <svg
                width="100%"
                viewBox="0 0 1156 608"
                xmlns="http://www.w3.org/2000/svg"
                className="svgHiding"
              >
                <path
                  className="path"
                  d="m560.30957,10.588011c0,0 438.0947,1.90476 439.04708,1.90476c0.95238,0 144.57857,-1.02912 143.80934,137.14269c-0.76923,138.17181 -116.81095,142.30859 -131.61967,143.8923c-14.80873,1.58372 -840.41472,-0.71429 -860.5941,0.71429c-20.17938,1.42858 -148.4991,6.80903 -146.83244,147.05973c1.66666,140.2507 129.52365,152.14266 129.33243,151.27321c0.19122,0.86945 815.268425,2.687632 951.42748,0"
                  opacity="0.5"
                  strokeWidth="7"
                  stroke="#2567d1"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </SecomdHalf>
      </div>
      <UpdatedFooter />
    </Wrapper>
  );
}

export default MoveingPath;
const Wrapper = styled.div`
  height: auto;

  background: #23282d;
  .artcle1 {
    left: 45%;
    top: -2%;
  }
  .artcle2 {
    right: 10%;
    top: -1%;
  }
  .artcle3 {
    right: 70%;
    top: 44%;
  }
  .artcle4 {
    right: 38%;
    top: 44.5%;
  }
  .artcle5 {
    right: 7.5%;
    top: 44%;
  }
  .artcle6 {
    right: 21%;
    top: 93%;
  }
  .artcle7 {
    right: 53%;
    top: 93%;
  }
  .artcle8 {
    right: 86%;
    top: 93%;
  }
  @media only screen and (min-width: 514px) and (max-width: 1000px) {
    height: 100vh;
    .svgHiding {
      display: none;
    }
    .step-wrapper {
      display: grid;
      grid-template-columns: auto auto;
      position: unset;
      justify-content: space-around;
      margin: 0px !important;
      padding: 30px 0px;
    }
    .linestep {
      position: unset !important;
    }
  }
`;
const SecomdHalf = styled.div`
  .home-steps-container {
    border: 1px solid #b49164;
    height: 210px;
    width: 200px;
    margin-bottom: 0 !important;
    border-radius: 0.357rem;
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
    padding-right: 1rem !important;
    padding-left: 1rem !important;
    text-align: -webkit-center;
    margin-top: 10px;
    .main-title {
      color: #b49164;
    }
  }
  background-color: #23282d;
  .container {
    svg {
      filter: invert(1);
    }
    max-width: 960px;
    margin: 0 auto;
    position: relative;
  }

  .step-wrapper {
    margin: 30px;
    margin-bottom: 245px;

    position: relative;
  }

  .linestep {
    text-align: center;
    max-width: 250px;
    position: absolute;
    .num {
      color: #fff;
      border-radius: 100px;
      display: inline-block;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-weight: bold;
      background: #8b6f15;
      border: 1px solid #ffff;
    }
    p {
      width: 250px;
      position: absolute;
      margin-top: 7px;
      font-weight: 500;
      line-height: normal;
      font-size: 18px;
    }

    p.top {
      bottom: 50px;
      left: -110px;
    }
    p.bottom {
      left: -110px;
    }
    p.left {
      width: 200px;
      right: 34px;
      top: -17px;
    }
    p.right {
      width: 200px;
      left: 34px;
      top: -17px;
    }
  }

  .linestep {
    visibility: hidden;
  }
  .path {
    visibility: hidden;
  }

  .move-line {
    .path {
      visibility: visible;
      stroke-dasharray: 3700;
      stroke-dashoffset: 3700;
      animation: moveline 4s linear forwards;
    }
    .linestep {
      animation-name: show-step-item;
      animation-duration: 0.2s;
      animation-fill-mode: forwards;
    }
    .linestep1 {
      animation-delay: 0.4s;
    }
    .linestep2 {
      animation-delay: 0.8s;
    }
    .linestep3 {
      animation-delay: 1.2s;
    }
    .linestep4 {
      animation-delay: 1.6s;
    }
    .linestep5 {
      animation-delay: 2s;
    }
    .linestep6 {
      animation-delay: 2.4s;
    }
    .linestep7 {
      animation-delay: 2.8s;
    }
    .linestep8 {
      animation-delay: 3.2s;
    }
  }

  @keyframes show-step-item {
    from {
      transform: scale(0.2);
      opacity: 0;
    }
    to {
      visibility: visible;
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes moveline {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
