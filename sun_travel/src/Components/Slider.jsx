import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ bestSellingRef }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // autoplay: true,
    // fade: true,
    slidesToScroll: 1,
  };
  return (
    <SliderWrapper ref={bestSellingRef}>
      <BlogsText>Blogs</BlogsText>
      <Slider {...settings}>
        <div className="imagediv">
          <img
            src="https://res.cloudinary.com/dubjhsibu/image/upload/v1702787808/sun-images/coupleupdate_ulez2d.jpg"
            alt=""
          />

          <h3>
            Explore current trends in honeymoon travel, such as unique
            destination weddings, adventurous honeymoons, and themed experiences
          </h3>
        </div>
        <div className="imagediv">
          <img
            src="https://res.cloudinary.com/dubjhsibu/image/upload/v1702788049/sun-images/couplefamily_jl5ccy.jpg"
            alt=""
          />
          <h3>
            Create content catering to families, including kid-friendly
            destinations and activities.
          </h3>
        </div>
        <div className="imagediv">
          <img
            src="https://res.cloudinary.com/dubjhsibu/image/upload/v1702788049/sun-images/trekingoptimized_ytyyti.jpg"
            alt=""
          />
          <h3>
            Cover adventurous activities such as hiking, trekking, scuba diving,
            and other outdoor pursuits.
          </h3>
        </div>
      </Slider>
    </SliderWrapper>
  );
};
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
const SliderWrapper = styled.div`
  height: auto;
  padding: 12px 0;
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
    h1 {
      position: absolute;
      top: 12px;
      font-weight: 900;
      left: 60px;
      color: #001499;
      font-size: 33px;
      text-transform: uppercase;
    }
    h3 {
      position: absolute;
      bottom: 42px;
      width: 45%;
      left: 60px;
      color: #fff;
      font-size: 33px;
    }
    .imagediv {
      height: 350px;
      width: 100%;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;
export default SliderComponent;
