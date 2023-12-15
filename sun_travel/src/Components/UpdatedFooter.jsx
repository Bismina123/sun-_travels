import React from "react";
import styled from "styled-components";
import whatspp from "./assets/twitter.png";
import Logo from "../assets/Logo-01 (3).svg";
const UpdatedFooter = () => {
  return (
    <FooterWrapper>
      <footer className="footer-section">
        <div className="container">
          <div className="firstSection">
            <div className="single-cta">
              <img src={whatspp} alt="" />
              <div className="cta-text">
                <h4>Find us</h4>
                <span>1010 Avenue, sw 54321, chandigarh</span>
              </div>
            </div>
            <div className="single-cta">
              <img src={whatspp} alt="" />
              <div className="cta-text">
                <h4>Find us</h4>
                <span>1010 Avenue, sw 54321, chandigarh</span>
              </div>
            </div>
            <div className="single-cta">
              <img src={whatspp} alt="" />
              <div className="cta-text">
                <h4>Find us</h4>
                <span>1010 Avenue, sw 54321, chandigarh</span>
              </div>
            </div>
          </div>
          <div className="secondSection">
            <div className="sub3">
              <div className="footerWidget">
                <div className="footerLogo">
                  <img src={Logo} alt="" />
                </div>
                <div className="footerText">
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                  do eiusmod tempor incididuntut consec tetur adipisicing
                  elit,Lorem ipsum dolor sit amet.
                </div>
                <div className="footerIcon">
                  <span>Follow us</span>
                  <div className="socialIcon">
                  <img src={whatspp} alt="" />
                  <img src={whatspp} alt="" />
                  <img src={whatspp} alt="" />
                  </div>
                </div>
              </div>
              <div className="footerWidget">
                <div className="footerLogo">
                  <img src={Logo} alt="" />
                </div>
                <div className="footerText">
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                  do eiusmod tempor incididuntut consec tetur adipisicing
                  elit,Lorem ipsum dolor sit amet.
                </div>
                <div className="footerIcon">
                  <span>Follow us</span>
                  <div className="socialIcon">
                  <img src={whatspp} alt="" />
                  <img src={whatspp} alt="" />
                  <img src={whatspp} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FooterWrapper>
  );
};

export default UpdatedFooter;

const FooterWrapper = styled.div`
  background-color: #151414;
  font-family: "lato";
  color: #fff;
  .container {
    margin: 0px;
    padding: 20px 80px;
  }
  .firstSection {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 3rem;
    border-bottom: 1px solid #373636;
  }
  .secondSection {
    padding: 3rem;
  }
  .single-cta {
    display: flex;
    img {
      width: 40px;
    }
    .cta-text {
      padding-left: 15px;
      text-align: left;
      h4 {
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 2px;
      }
      span {
        color: #757575;
        font-size: 15px;
      }
    }
  }
  .sub3 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: -15px;
    margin-left: -15px;
    .footerWidget {
      .footerLogo {
        max-width: 200px;
        margin-bottom: 30px;
        width: 200px;
      }
      .footerText {
        margin-bottom: 14px;
        font-size: 14px;
        color: #7e7e7e;
        line-height: 28px;
        text-align: left;
      }
      .footerIcon {
        text-align: left;
        .socialIcon{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 4px;
        }
        span {
          color: #fff;
          display: block;
          font-size: 20px;
          font-weight: 700;

          margin-bottom: 20px;
        }
        img {
          color: #fff;
          font-size: 16px;
          margin-right: 15px;
          width: 30px;
        }
      }
    }
  }
`;
