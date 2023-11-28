import React from "react";
import styled from "styled-components";
import Logo from "./assets/sun-logo.svg";
import insta from "./assets/instagram.png";
import faceBook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import whatsapp from "./assets/whatsapp.png";
const Footer = () => {
  return (
    <>
      <ContentWrapper>
        <div className="content-wrapper">
          <div className="first-content">
            <h2>About Us</h2>
            <p>
              Sun International Tours & travels, is a professionally run
              complete Travel and Tour Management Company turpis olestie, dictum
              est a, mattis tellus. Sed dignissim, metus nec fringilla risus sem
              sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas
              eget cond.
            </p>
            <h2>Location</h2>
            <p>
              695001, YMCA Rd, Statue, Palayam, Thiruvananthapuram, Kerala
              695001
            </p>
            <h2>Branches</h2>
            <p>UAE . OMAN . SINGAPORE . KSA MALASIA . INDIA .</p>
          </div>
          <div className="second-content">
            <h2>Packages</h2>
            <a href="">Popular</a>
            <a href="">Pilgrim</a>
            <a href="">Student</a>
            <a href="">Cruise</a>
            <a href="">Domestic</a>
            <a href="">International</a>
          </div>
          <div className="third-content">
            <h2>Services</h2>
            <a href="">FRRO Services</a>
            <a href="">Medical Appointments</a>
            <a href="">Certificate Attestation</a>
            <a href="">Passport Services</a>
            <a href="">Visa Services</a>
            <a href="">Embassy Services</a>
          </div>
          <div className="fourth-content">
            <h2>Quick Links</h2>
            <a href="">Air ticket</a>
            <a href="">Study Aboard</a>
            <a href="">Migration Support</a>
            <a href="">Package Customizer</a>
            <a href="">Seasonal Pakages</a>
            <a href="">Latest Offers</a>
          </div>
          <div className="fifth-content">
            <h1>Subscribe Newsletter</h1>
            <input type="text" placeholder="Email ID" />
            <button>Subscribe</button>
          </div>
        </div>
      </ContentWrapper>
      <FooterWrapper>
        <div className="bottom-wrapper">
          <div className="left-wrapper">
            <div className="first-circle"></div>
            <div className="second-circle">
              <div className="second-circle-content">
                <span> Travel With Us</span>
                <button>Get in touch</button>
              </div>
            </div>
            <div className="third-circle"></div>
          </div>
          <div className="right-wrapper">
            <div className="image-wrapper">
              <img src={Logo} alt="" />
            </div>
            <div className="phone-wrapper">
              <a href="">985224150</a>
            </div>
            <div className="email-wrapper">
              <a href="">sid@email.com</a>
            </div>
            <div className="approved-wrapper">
              <a href="">Approved by Govt. of India, Ministry of Tourism</a>
            </div>
            <div className="sccial-wrapper">
              <a href="">
                <img src={faceBook} alt="" />
              </a>
              <a href="">
                <img src={insta} alt="" />
              </a>
              <a href="">
                <img src={whatsapp} alt="" />
              </a>
              <a href="">
                <img src={twitter} alt="" />
              </a>
            </div>
            <div className="terms-wrapper">
              <div className="terms-sub-wrapper">
                <a href="">Terms & Conditions</a>
                <a href="">Privacy Policy</a>
              </div>
              <div className="copyright">
                Copyright © Sun International 2023
              </div>
            </div>
          </div>
        </div>
      </FooterWrapper>
    </>
  );
};

export default Footer;
const ContentWrapper = styled.div`
  background: #f6f6f6;
  padding: 20px 30px;
  margin: 50px;
  border-radius: 30px;
  .content-wrapper {
    padding: 30px;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
    .first-content {
      display: grid;
      h2 {
        padding: 10px;
        color: #000000;
        font-size: 20px;
        font-weight: 500;
      }
      p {
        color: #1e1e1e80;
        font-size: 16px;
      }
    }
    .second-content {
      display: grid;
      h2 {
        padding: 10px;
        color: #000000;
        font-size: 20px;
        font-weight: 500;
      }
      a {
        color: #1e1e1e80;
        font-size: 16px;
        &:hover {
          color: #ffc400;
        }
      }
    }
    .third-content {
      display: grid;
      h2 {
        padding: 10px;
        color: #000000;
        font-size: 20px;
        font-weight: 500;
      }
      a {
        color: #1e1e1e80;
        font-size: 16px;
        &:hover {
          color: #ffc400;
        }
      }
    }
    .fourth-content {
      display: grid;
      h2 {
        padding: 10px;
        color: #000000;
        font-size: 20px;
        font-weight: 500;
        &:hover {
          color: #ffc400;
        }
      }
      a {
        color: #1e1e1e80;
        font-size: 16px;
        &:hover {
          color: #ffc400;
        }
      }
    }
    .fifth-content {
      display: block;
      h1 {
        padding: 10px;
        color: #000000;
        font-size: 20px;
        font-weight: 500;
      }
      input {
        margin-top: 30px;
        height: 50px;
        border-radius: 18px;
        padding: 10px 20px;
      }
      button {
        padding: 10px 20px;
        background: #2033b399;
        border-radius: 12px;
        margin: 20px;
        color: #ffffff;
      }
    }
  }
`;
const FooterWrapper = styled.div`
  margin-top: -85px;
  margin-bottom: 50px;
  background: #3e2093;
  min-height: 80vh;
  margin: 30px;
  margin-top: -66px;
  border-radius: 30px;
  position: relative;
  .bottom-wrapper {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 2fr 1fr;

    .left-wrapper {
      .first-circle {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background: #fa949d;
        position: absolute;
        top: 10%;
        left: 10%;
        z-index: 1;
      }
      .second-circle {
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background: #4c68fbdb;
        position: absolute;
        top: 20%;
        left: 18%;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        .second-circle-content {
          display: grid;
          padding: 10px;
          span {
            padding: 10px;
            color: #ffffff;
          }
          button {
            color: #c0bebe;
          }
        }
      }
      .third-circle {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: #8ec1c0c2;
        position: absolute;
        top: 60%;
        left: 35%;
        z-index: 3;
      }
    }
    .right-wrapper {
      padding-top: 10%;
      .image-wrapper {
        padding: 20px;
      }
      .phone-wrapper {
        padding: 10px;
        display: flex;
        justify-content: flex-start;
        a {
          background: #2033b399;
          border-radius: 20px;
          padding: 15px;
          color: #ffffff;
          min-width: 180px;
        }
      }
      .email-wrapper {
        padding: 10px;
        display: flex;
        justify-content: flex-start;
        a {
          background: #2033b399;
          border-radius: 20px;
          padding: 15px;
          color: #ffffff;
          min-width: 180px;
        }
      }
      .approved-wrapper {
        padding: 10px;
        display: flex;
        justify-content: flex-start;
        a {
          background: #2033b399;
          border-radius: 20px;
          padding: 15px;
          color: #ffffff;
          min-width: 180px;
        }
      }
      .sccial-wrapper {
        display: flex;
        justify-content: flex-start;
        padding: 10px;
        align-items: center;
        a {
          padding: 15px;
          margin: 10px;
          border-radius: 50%;
          background: #2033b399;
          img {
            width: 20px;
            height: 20px;
            filter: brightness(0) invert(1);
          }
        }
      }
      .terms-wrapper {
        .copyright {
          padding-top: 15px;
          display: flex;
          justify-content: flex-start;
          color: #ffffff;
        }
        padding: 20px;
        display: grid;
        justify-content: flex-start;
        .terms-sub-wrapper {
          display: flex;
          justify-content: space-between;
          a {
            padding-right: 20px;
            color: #ffffff;
          }
        }
      }
    }
  }
`;
