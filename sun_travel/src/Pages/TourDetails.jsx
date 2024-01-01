import Slider from "react-slick";
import styled from "styled-components";
import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TourDetails = ({ item }) => {
  const [allData, setAllData] = useState(item);
  useEffect(() => {
    setAllData(item);
  }, [item, allData]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    fade: true,
    slidesToScroll: 1,
  };
  return (
    <>
      <SliderWrapper>
        <Slider {...settings}>
          {allData.tourMainPic.map((slides) => {
            return (
              <>
                <div className="imagediv" key={slides.id}>
                  <img src={slides.slides} alt={slides.slides} />
                  <h3>{slides.content}</h3>
                </div>
              </>
            );
          })}
        </Slider>
      </SliderWrapper>
      <DetailWrapper>
        <div className="left-content">
          <div>
            <h2>IDEAL DURATION</h2>
            <span>{allData.duration}</span>
          </div>
          <div>
            <h2>BEST TIME</h2>
            <span>{allData.bestTime}</span>
          </div>
          <div>
            <h2>PRICES STARTS AT</h2>
            <span>{allData.price}</span>
          </div>
          <div>
            <h2>VISA PROCESSING</h2>
            <span>{allData.visa}</span>
          </div>
        </div>
        <div className="right-content">
          <h2>OUR PLANNING EXPERTISE</h2>
          <div>
            <Rating name="4.0" value={allData.rating.ratingValue} readOnly />
            <span className="rating">({allData.rating.ratedBy})</span>
          </div>
        </div>
      </DetailWrapper>
      <SummaryDetails>
        <div className="arrival-details">
          <span className="dot"></span>
          <img
            src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/icon-16-flight@3x.png"
            alt=""
          />
          <span>{allData.arrivalDetails}</span>
        </div>
        <div className="day-details">
          <div className="title-details">
            <h2>{allData.destination}</h2>
          </div>
          {allData.numberOfDays.map((day) => {
            return (
              <>
                <div className="sub-day">
                  <span key={day.id}>{day.title}</span>
                  <div>
                    <img src={day.iconOne} alt="" />
                    <span>{day.contentOne}</span>
                  </div>
                  <div>
                    <img src={day.iconTwo} alt="" />
                    <span>{day.contentTwo}</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="arrival-details">
          <span className="dot"></span>
          <img
            src="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/phonixImages/icon-16-flight@3x.png"
            alt=""
          />
          <span>{allData.departureDetails}</span>
        </div>
      </SummaryDetails>
    </>
  );
};

export default TourDetails;
const SliderWrapper = styled.div`
  height: auto;
  padding: 0;
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
      height: 80vh;
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
const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10%;
  background: #011530;
  @media (min-width: 554px) and (max-width: 991px) {
    display: block;
    .right-content {
      padding-top: 15px;
      h2 {
        text-align: center;
      }
    }
  }
  @media (max-width: 554px) {
    display: block;
    .left-content {
      display: grid !important;
      grid-template-columns: 1fr 1fr;
    }
    .right-content {
      padding-top: 15px;
      div {
        justify-content: flex-start !important;
      }
      h2 {
        text-align: left !important;
      }
    }
  }
  .left-content {
    display: flex;
    gap: 30px;
    text-align: left;
    div {
      padding: 0 15px;
      h2 {
        padding-bottom: 10px;
        color: #ffffff80;
      }
      span {
        color: #ffffff;
      }
    }
  }
  .right-content {
    h2 {
      padding-bottom: 10px;
      color: #ffffff80;
      text-align: right;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      .rating {
        color: #ffffff;
      }
    }
  }
`;
const SummaryDetails = styled.div`
  @media (max-width: 701px) {
    .day-details {
      .sub-day {
        display: block !important;
        div {
          padding: 5px;
        }
      }
    }
  }
  background: #fff;
  min-height: 200px;
  padding: 20px;
  margin: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.1);
  .arrival-details {
    display: flex;
    align-items: center;
    gap: 20px;
    img {
      width: 25px;
      height: 25px;
    }
    span {
      color: #4a4a4a;
    }
    .dot {
      width: 12px;
      height: 12px;
      background: #9b9b9b;
      border-radius: 50%;
    }
  }
  .day-details {
    border-radius: 12px;
    margin-top: 20px;
    margin-bottom: 20px;
    .title-details {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      min-height: 44px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      background-image: linear-gradient(93deg, #f3d1c9, #e6d7b7 100%);
      h2 {
        font-size: 22px;
        padding: 0 15px;
        color: #4a4a4a;
        font-weight: 900;
      }
    }
    .sub-day {
      display: flex;
      align-items: center;
      gap: 50px;
      padding: 15px;
      border: 1px solid #d4d4d4;
      span {
        color: #4a4a4a;
        font-weight: 900;
      }
      div {
        display: flex;
        align-items: center;
        gap: 10px;
        img {
          width: 25px;
          height: 25px;
        }
        span {
          color: #4a4a4a;
          font-weight: 500 !important;
          font-size: 14px;
        }
      }
    }
  }
`;
