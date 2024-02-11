import React from "react";
import styled from "styled-components";
import backAbout from "../../assets/about-bg.9efa2af0386cfb6b34ad.png";

import kaaba from "../../assets/kaaba (1).svg";
import miqat from "../../assets/compass.svg";
import hlyMusq from "../../assets/open-door.svg";
import tips from "../../assets/bulb.svg";
import accesblity from "../../assets/toilet.svg";
import ziyarah from "../../assets/mosque.svg";
import UpdatedFooter from "../../../../Components/UpdatedFooter";
function AboutOfPilgrims() {
  const mainIcon = [
    {
      id: 1,
      icon: kaaba,
      label: "PILLARS OF UMRAH",
    },
    {
      id: 2,
      icon: miqat,
      label: "MIQAT",
    },
    {
      id: 3,
      icon: hlyMusq,
      label: "ACCESS TO HOLY MOSQUE",
    },
    {
      id: 4,
      icon: tips,
      label: "IMPORTANT TIPS",
    },
    {
      id: 5,
      icon: accesblity,
      label: "ACCESSIBILITY",
    },
    {
      id: 6,
      icon: ziyarah,
      label: "ZIYARAH",
    },
  ];
  return (
    <Wrapper>
      <div className="conentWrapper">
        <div className="labelWrapper">
          <label className="about">
            <div>
              About
              <span>Umrah</span>
            </div>
          </label>
          <p className="paragraph">
            A permit is required to do Umrah and can be readily obtained by
            scheduling an appointment through the Nusuk app.
          </p>
          <p className="subPara">
            Allahumma Labbayka Umrah, is a statement that every Muslim in the
            world has always desired to make.The Prophet, may peace and prayers
            be upon him,spoke of its characteristics as follows
          </p>
          <p className="subPara">
            The Prophet, peace and blessings be upon him, made four Umrahs and
            one Hajj during his lifetime.Umrah entails performing tawaf,the
            Sa’ee between Mount Safa and Mount Marwah, and a visit to the
            Kaaba.Anytime of the year is suitable for performing the umrah.
          </p>
        </div>
      </div>
      <div className="cardWrapper">
        {mainIcon.map((item) => {
          return (
            <>
              <div className="cardWrapper">
                <a className="card1" href="#">
                  <div className="imagewrapper">
                    <img src={item.icon} alt="" />
                  </div>
                  <p className="small">{item.label}</p>
                  <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                  </div>
                </a>
              </div>
            </>
          );
        })}
      </div>
      <UpdatedFooter />
    </Wrapper>
  );
}

export default AboutOfPilgrims;
const Wrapper = styled.div`
  height: auto;
  background-color: red;
  background: url(${backAbout}) right top no-repeat #f1f0ec;
  /* @media only screen and(min-width: 992px)and (max-width: 1200px) {
    .conentWrapper {
      width: 1140px;
    }
  } */
  /* @media (min-width: 992px) {
    .conentWrapper {
      width: 960px;
    }
  }

  @media (min-width: 768px) {
    .conentWrapper {
      width: 720px;
    }
  } */
  @media only screen and (min-width: 1000px) and (max-width: 4000px) {
    .conentWrapper {
      width: 1000px !important;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1000px) {
    .conentWrapper {
      width: 700px !important;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    .conentWrapper {
      width: 560px !important;
    }
  }
  @media only screen and (min-width: 514px) and (max-width: 768px) {
    .conentWrapper {
      width: 450px !important;
    }
  }
  @media only screen and (min-width: 300px) and (max-width: 514px) {
    .conentWrapper {
      width: 270px !important;
    }
  }
  .conentWrapper {
    padding: 80px 55px;
    text-align: left;
    width: 100%;
    /* background-color: red; */
  }
  .about {
    font-size: 25px;
    color: #000;
    font-weight: 400;
    padding-top: 3px;
    margin-bottom: 15px;
    span {
      font-weight: 700;
      margin-left: 5px;
    }
  }
  .paragraph {
    font-size: 18px;
    font-weight: 600;
    color: #363636;
    margin-bottom: 1rem;
  }
  .subPara {
    font-size: 13px;
    margin-bottom: 1rem;
  }
  .labelWrapper {
  }
  .cardWrapper {
    .card1 {
      @media only screen and (min-width: 320px) and (max-width: 414px) {
        width: 130px;
      }
      @media only screen and (min-width: 414px) and (max-width: 514px) {
        width: 150px;
      }
      display: block;
      position: relative;
      width: 180px;
      max-width: 262px;
      background-color: #f2f8f9;
      border-radius: 4px;
      padding: 32px 24px;
      margin: 12px;
      text-decoration: none;
      z-index: 0;
      overflow: hidden;
      text-align: -webkit-center;

      &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: -16px;
        right: -16px;
        background: #002d8d;
        height: 32px;
        width: 32px;
        border-radius: 32px;
        transform: scale(1);
        transform-origin: 50% 50%;
        transition: transform 0.25s ease-out;
      }

      &:hover:before {
        transform: scale(21);
      }
    }
    .go-corner {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 32px;
      height: 32px;
      overflow: hidden;
      top: 0;
      right: 0;
      background-color: #002d8d;
      border-radius: 0 4px 0 32px;
    }
    .card1:hover {
      p {
        transition: all 0.3s ease-out;
        color: rgba(255, 255, 255, 0.8);
      }
      h3 {
        transition: all 0.3s ease-out;
        color: #ffffff;
      }
    }
  }
  .cardWrapper {
    @media only screen and (min-width: 320px) and (max-width: 600px) {
      display: grid;
      grid-template-columns: auto auto;
    }
    @media only screen and (min-width: 600px) and (max-width: 1200px) {
      display: grid;
      grid-template-columns: auto auto auto;
  }
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    /* grid-template-columns: auto  ; */
    .imagewrapper {
      /* background-color: red; */
      width: 100px;
      text-align: center;
      @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 50px;
      }
    }
    .small {
      @media only screen and (min-width: 320px) and (max-width: 514px) {
        font-size: 15px;
      }
    }
  }
`;
