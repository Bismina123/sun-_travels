import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import couple from "./assets/coupleImage.jpg";
import family from "./assets/low-angle-view-people-beach-against-sky.jpg";
import group from "./assets/tourImage.jpg";
function BannerSlider({ bestSellingRef }) {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    arrows: true,
    draggable: true,
  };
  return (
    <Wrapper>
      <BlogsText>Blogs</BlogsText>
      <Slider {...settings} className="sliderwrapper">
        <div className="imagediv">
          <img src={couple} alt="" />
          <h3>
            Explore current trends in honeymoon travel, such as unique
            destination weddings, adventurous honeymoons, and themed experiences
          </h3>
        </div>
        <div className="imagediv">
          <img src={family} alt="" />
          <h3>
            Create content catering to families, including kid-friendly
            destinations and activities.
          </h3>
        </div>
        <div className="imagediv">
          <img src={group} alt="" />
          <h3>
            Cover adventurous activities such as hiking, trekking, scuba diving,
            and other outdoor pursuits.
          </h3>
        </div>
      </Slider>
    </Wrapper>
  );
}

export default BannerSlider;
const Wrapper = styled.div`
  /* background-color: red; */
  width: 100%;
  height: auto;
  /* max-height: 450px; */
  position: relative;
  overflow: hidden;
  .sliderwrapper {
    margin: 30px;
  }
  .imagediv {
    width: 100%;
    height: 450px; /* Set the height of the container */
    /* position: relative; */
    overflow: hidden;
    h3 {
      color: #fff;
      font-size: 33px;
      position: absolute;
      transform: translate(-50%, -50%);
      left: 30%;
      top: 55%;
      width: 50%;
      font-weight: 700;
      @media only screen and (min-width: 300px) and (max-width: 414px) {
      font-size: 20px;
    }
    @media only screen and (min-width: 414px) and (max-width: 514px) {
      font-size: 23px;
    }
    @media only screen and (min-width: 514px) and (max-width: 600px) {
      font-size: 25px;
    }
    @media only screen and (min-width: 600px) and (max-width: 768px) {
      font-size: 26px;
    }
    @media only screen and (min-width: 768px) and (max-width: 900px) {
      font-size: 27px;
    }
    @media only screen and (min-width: 900px) and (max-width: 1024px) {
      font-size: 30px;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1200px) {
      font-size: 33px;
    }
    }

    img {
      width: 100%; /* Make the image width 100% of its container */
      height: 100%; /* Make the image height 100% of its container */
      object-fit: cover; /* Cover the entire container */
      object-position: center;
    }
  }

  .slick-prev {
    /* position: absolute;

    transform: translate(-50%, -50%);
    left: 5%;
    top: 30%; */
    z-index: 1;
    width: 100px;
    height: 100px;
    filter: invert(1);
    &::before {
      font-size: 30px;
    }
  }
  .slick-next {
    /* position: absolute;

    transform: translate(-50%, -50%);
    right: -4%;
    top: 30%; */
    z-index: 1;
    width: 100px;
    height: 100px;
    filter: invert(1);
    &::before {
      font-size: 30px;
    }
  }
  /* } */
`;
const BlogsText = styled.div`
  text-align: left;
  /* padding: 0px; */
  margin-left: 40px;
  font-family: "Lato";
  text-transform: uppercase;
  font-size: 35px;
  font-weight: 800;
  color: #001499;
`;
