import React, { useState } from "react";
import styled from "styled-components";
import whatspp from "./assets/twitter.png";
import Logo from "../assets/Logo-01 (3).svg";
import emailjs from "@emailjs/browser";
import "./footer.css";
const UpdatedFooter = () => {
  const [subscribe, setSubsribe] = useState('');
  console.log(subscribe, "subscribe");
  // service_69qwdhs service id
  // template_sil3r8l temlate id
  // TRppiY3iP50vtBpob public key
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_69qwdhs",
        "template_zpg0qnl",
        {
          from_name: subscribe,
          to_email: "sidharth.codingo@gmail.com",
          message: subscribe,
        },
        "4T1PPRyKB0JCqFyCV"
      )
      .then(
        () => {
          alert("Thank you. I will get back to you as soon as possible.");

          setSubsribe({
            email: "",
          });
        },
        (error) => {
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <>
      <footer className="footer-section">
        <div className="container main-wrapper">
          <div className="footer-cta pt-5 pb-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Avenue, sw 54321, chandigarh</span>
                </div>
              </div>
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9876543210 0</span>
                </div>
              </div>
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src={Logo} className="img-fluid" alt="logo" />
                  </a>
                </div>
                <div className="footer-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consectetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#">
                    <i className="fab fa-facebook-f facebook-bg"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter twitter-bg"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-google-plus-g google-bg"></i>
                  </a>
                </div>
              </div>
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>
                  <li>
                    <a href="#">services</a>
                  </li>
                  <li>
                    <a href="#">portfolio</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Expert Team</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Latest News</a>
                  </li>
                </ul>
              </div>
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className="subscribe-form">
                  <form action="#" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Email Address"
                      value={subscribe?.email}
                      onChange={(e) => setSubsribe(e.target.value)}
                    />
                    <button>
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="text-center md:text-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2018, All Right Reserved{" "}
                    <a href="https://codepen.io/anupkumar92/">
                      Sun International
                    </a>
                  </p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
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
        .socialIcon {
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
