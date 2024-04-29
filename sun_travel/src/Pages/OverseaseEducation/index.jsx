import React, { useEffect, useState } from "react";
import styled from "styled-components";
import education1 from "./assets/graduation-mortarboard-top-stack-books-background.jpg";
import education2 from "./assets/freepik_perkasa_048.jpg";
import CardPages from "./CardPages";
import SlickPage from "./SlickPage";
import TestiMonials from "./Testimonials";
import UpdatedFooter from "../../Components/UpdatedFooter";
import icon1 from "./assets/university-of-sydney-logo-DBC20EBA62-seeklogo.com.png";
import icon2 from "./assets/university_of_western_australia_logo-freelogovectors.net_.png";
import icon3 from "./assets/Monash_University_logo.svg.png";
import icon4 from "./assets/McMaster_University_logo.svg.png";
import icon5 from "./assets/d38e69159ac03416bac96d0f0ea97168.png";
import ContactUsPage from "../ContactusPage";
const OverseasEducation = () => {
  const [modal, setModal] = useState(false);

  const buttonClicked = () => {
    setModal(true);
    console.log("clickedddd");
  };
  const scrollToTop = () => {
    var element = document.getElementById("detailMainWrapper");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <Wrapper id="detailMainWrapper">
      <section className="1">
        <section className="parallax">
          <div className="parallax-inner">
            <div></div>
            <div>
              <h1 className="h1Tag">
                We help to Build
                <br /> Your Dream{" "}
              </h1>
              <p className="pTag">
                We are available to consult for taking your higher education to
                the next level so that you can stay competitive
                <div className="buttonNow" onClick={buttonClicked}>
                  <button className="btnbook">
                    <span>Apply Now</span>
                  </button>
                </div>
              </p>
              {modal ? <ContactUsPage modal={modal} setModal={setModal} /> : ""}
            </div>

            <br />
          </div>
        </section>
        <section className="logoMarqueeSection">
          <div className="container" id="logoMarqueeSection">
            <div className="default-content-container flex items-center">
              <div className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
                <div className="marquee" style={{ animationDuration: "57s" }}>
                  <a target="_blank">
                    <img
                      src={icon1}
                      title=""
                      className="marqueelogo"
                      style={{ width: "auto", maxWidth: "none" }}
                    />
                  </a>
                  <a target="_blank">
                    <img
                      src={icon2}
                      title=""
                      className="marqueelogo"
                      style={{ width: "auto", maxWidth: "none" }}
                    />
                  </a>
                  <a target="_blank">
                    <img
                      src={icon3}
                      title=""
                      className="marqueelogo"
                      style={{ width: "auto", maxWidth: "none" }}
                    />
                  </a>
                  <a target="_blank">
                    <img
                      src={icon4}
                      title=""
                      className="marqueelogo"
                      style={{ width: "auto", maxWidth: "none" }}
                    />
                  </a>
                  <a target="_blank">
                    <img
                      src={icon5}
                      title=""
                      className="marqueelogo"
                      style={{ width: "auto", maxWidth: "none" }}
                    />
                  </a>
                  <a target="_blank">
                    <img
                      src={icon1}
                      title=""
                      className="marqueelogo"
                      style={{ width: "auto", maxWidth: "none" }}
                    />
                  </a>
                  <a target="_blank">
                    <img
                      src={icon2}
                      title=""
                      className="marqueelogo"
                      style={{ width: "auto", maxWidth: "none" }}
                    />
                  </a>
                  <a target="_blank">
                    <img
                      src={icon3}
                      title=""
                      className="marqueelogo"
                      style={{ width: "auto", maxWidth: "none" }}
                    />
                  </a>
                  <a target="_blank">
                    <img
                      src={icon4}
                      title=""
                      className="marqueelogo"
                      style={{ width: "auto", maxWidth: "none" }}
                    />
                  </a>
                  <a target="_blank">
                    <img
                      src={icon5}
                      title=""
                      className="marqueelogo"
                      style={{ width: "auto", maxWidth: "none" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> 

        <section className="parallax-1">
          <div className="">
            <br />
            <div className="servicesWrapper">
              <h2>Our Services</h2>
              <p>
                We have expert consultants on board to guide your foreign study
                aspirations. We cover the following services. and your other
                requirements as well.
              </p>
            </div>

            <CardPages />

            <br />
          </div>
        </section> 
      </section>

      <section className="2 class2">
        <SlickPage />
        <section className="parallax-2">
          <TestiMonials />
        </section>
      </section>
      <UpdatedFooter />
    </Wrapper>
  );
};

export default OverseasEducation;

const Wrapper = styled.div`

  height: 100vh;
  @media screen and (min-width: 300px) and (max-width: 1000px) {
    .parallax-inner {
      grid-template-columns: auto !important;
    }
    .h1Tag {
      padding: 60px 30px 30px 30px !important;
    }
    .parallax {
      height: auto !important;
    }
    .servicesWrapper {
      padding: 10px 20px !important;
    }
    .mainWrapper {
      grid-template-columns: auto !important;
    }
    .mainWrapper2 {
      grid-template-columns: auto !important;
    }
    .parallax-2{
      height: 100vh !important;
    }
  }
  /* margin-top: 100px; */
  .logoMarqueeSection {
    /* padding-top: 50vh;
  padding-bottom: 150vh; */
  }

  #logoMarqueeSection {
    /* max-width: 1920px !important; */
    margin: 0 auto;
  }

  .default-content-container {
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
    margin-bottom: 0;
    /* padding-left: 5rem; */
    /* padding-right: 5rem; */
    padding-top: 4.5rem;
    padding-bottom: 4.5rem;
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
  }

  div.marquee > a > img {
    height: 55px;
  }

  .logoMarqueeSection > div > div {
    padding-top: 0;
    padding-bottom: 0;
    min-height: 0;
  }

  .marquee-wrapper {
    display: inline-block;
    white-space: nowrap;
    background-color: #ffff;
  }

  .marquee {
    display: inline-block;
    white-space: nowrap;
    position: relative;
    transform: translate3d(0%, 0, 0);
    animation-name: marquee;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .marquee a {
    display: inline-block;
    white-space: nowrap;
    padding: 10px 30px;
  }

  .marquee-wrapper:hover .marquee {
    animation-play-state: paused !important;
  }

  @keyframes marquee {
    0% {
      transform: translate3d(0%, 0, 0);
    }

    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }

  .buttonNow {
    position: absolute;
    bottom: -45px;
    left: 0px;
  }
  .btnbook {
    border: none;
    display: block;
    text-align: center;
    cursor: pointer;
    text-transform: capitalize;
    outline: none;
    overflow: hidden;
    position: relative;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    background-color: #0b2f6a;
    padding: 7px 10px;
    margin: 0 auto;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }

  .btnbook span {
    position: relative;
    z-index: 1;
  }

  .btnbook:after {
    content: "";
    position: absolute;
    left: 0;
    top: -5px;
    height: 490%;
    width: 140%;
    background: #ffc40d;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
    transform: translateX(-98%) translateY(-25%) rotate(45deg);
  }

  .btnbook:hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }
  .h1Tag {
    font-size: 70px;
    text-align: left;
    padding: 10px 30px;
    max-width: 800px;
    line-height: 70px;
    font-weight: 900;
    color: #0b2f6a;
  }
  .pTag {
    font-size: 20px;
    text-align: left;
    padding: 10px 30px;
    max-width: 700px;
    line-height: 26px;
    font-weight: 400;
    position: relative;
    color: #0f0f6ab3;
  }
  .parallax {
    background: url(${education1}) repeat fixed 100%;
    background-size: cover;
    color: aliceblue;
    backdrop-filter: blur(10px);
    height: 100vh;
  }
  .parallax-1 {
    background: url(${education2}) repeat fixed 100%;
    background-size: cover;
    color: aliceblue;
    height: auto;
  }
  .parallax-2 {
    background: url(https://alcs-slider.netlify.app/images/pattern-curve.svg)
      repeat fixed 100%;
    background-size: cover;
    color: aliceblue;
    height: 80vh;
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 280px 72px;
    position: relative;
  }
  .parallax-inner {
    padding-top: 15%;
    padding-bottom: 20%;
    /* background-color: green; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* text-align: -webkit-right; */
  }
  h3 {
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  /* h1 {
    font-size: 160px;
    text-align: center;
  } */
  .servicesWrapper {
    text-align: center;
    padding: 10px 150px;
    /* width: 1000px; */
    h2 {
      color: #212176;
      font-size: 26px;
      font-weight: 800;
      letter-spacing: 1px;
    }
    p {
      padding-top: 20px;
      color: #212176;
      font-size: 20px;
      font-weight: 800;
      letter-spacing: 1px;
    }
  }
  .mainCardWrapper {
  }
`;
