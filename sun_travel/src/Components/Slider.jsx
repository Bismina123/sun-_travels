import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    // fade: true,
    slidesToScroll: 1,
  };
  return (
    <SliderWrapper>
      <Slider {...settings}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
        </div>
      </Slider>
    </SliderWrapper>
  );
};
const SliderWrapper = styled.div`
  height: auto;
  padding: 100px 0;
  .slick-slider {
    .slick-dots {
      display: none !important;
    }
    .slick-prev {
      z-index: 1;
      width: 100px;
      height: 100px;
      &::before {
        font-size: 30px;
      }
    }
    .slick-next {
      z-index: 1;
      width: 100px;
      height: 100px;
      &::before {
        font-size: 30px;
      }
    }
  }

  div {
    position: relative;
    h3 {
      position: absolute;
      bottom: 42px;
      width: 33%;
      left: 60px;
      color: #fff;
      font-size: 33px;
    }
    img {
      height: 350px;
      width: 100%;
      object-fit: cover;
    }
  }
`;
export default SliderComponent;
