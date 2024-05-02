import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import bg from "../assets/top-view-white-pink-paint-texture.jpg";
import australia from "../assets/130974.jpg";

import usa from "../assets/5662.jpg";
import canada from "../assets/129581.jpg";
import uk from "../assets/25811.jpg";
import germany from "../assets/3043.jpg";
import france from "../assets/2150902034.jpg";
import japan from "../assets/18364.jpg";
import singapore from "../assets/2150666323.jpg";
import newZealand from "../assets/11706.jpg";
function SlickPage() {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const dataOfCountries = [
    {
      id: 1,
      countryName: "Study in Australia",
      desc: "Study in Australia and integrate into the society as a professional and start your life.",
      image: australia,
    },
    {
      id: 2,
      countryName: "Study in USA",
      desc: "Explore educational opportunities in the United States and experience a diverse learning environment.",
      image: usa,
    },
    {
      id: 3,
      countryName: "Study in Canada",
      desc: "Discover high-quality education and a welcoming culture by studying in Canada.",
      image: canada,
    },
    {
      id: 4,
      countryName: "Study in UK",
      desc: "Pursue your education in the United Kingdom and be a part of a rich academic tradition.",
      image: uk,
    },
    {
      id: 5,
      countryName: "Study in Germany",
      desc: "Experience world-class education and innovation by studying in Germany.",
      image: germany,
    },
    {
      id: 6,
      countryName: "Study in France",
      desc: "Immerse yourself in the vibrant culture and academic excellence of France.",
      image: france,
    },
    {
      id: 7,
      countryName: "Study in Japan",
      desc: "Discover unique learning opportunities and cultural richness in Japan.",
      image: japan,
    },
    {
      id: 8,
      countryName: "Study in Singapore",
      desc: "Embark on an educational journey in the dynamic and cosmopolitan city-state of Singapore.",
      image: singapore,
    },
    {
      id: 9,
      countryName: "Study in New Zealand",
      desc: "Explore quality education and natural beauty by studying in New Zealand.",
      image: newZealand,
    },
  ];

  // Make sure to replace usa, canada, uk, germany, france, japan, singapore, and newZealand with actual images or references.

  return (
    <Wrapper>
      <div className="headigLabel">Countries</div>
      <Slider {...settings} className="slick_wrapper">
        {dataOfCountries.map((item) => {
          return (
            <>
              <div className="slickCard">
                <div className="image_wrapper">
                  <img src={item.image} alt="" />
                </div>
                <div className="countryLabel">
                  {item.countryName}
                  <p>{item.desc}</p>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </Wrapper>
  );
}

export default SlickPage;
const Wrapper = styled.div`
  @media screen and (min-width: 414px) and (max-width: 768px) {
    .slickCard {
      height: 480px !important;
    }
  }
  background: url(${bg}) repeat fixed 100%;
  background-size: cover;
  color: aliceblue;
  /* height: auto; */
  padding: 25px;
  height: 100vh;
  .slick_wrapper {
    /* padding: 30px 30px; */
  }
  .slickCard {
    background-color: white;
    padding: 10px;
    margin: 15px;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  .headigLabel {
    color: #212176;
    font-size: 26px;
    font-weight: 800;
    letter-spacing: 1px;
    padding-top: 30px;
  }
  .image_wrapper {
    width: 100%;
    height: 230px;
    overflow: hidden;
    border-radius: 15px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .countryLabel {
    color: #0b2f6a;
    z-index: 3;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    font-family: "Lato";
    padding-top: 10px;
    text-align: left;
    p {
      color: #0b2f6a;
      z-index: 3;
      font-size: 14px;
      font-weight: 400;
      text-align: left;
      font-family: "Lato";
      margin-top: 12px;
    }
  }
`;
