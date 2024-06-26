import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TourCard = ({ item }) => {
  const [allData, setAllData] = useState(item);
  useEffect(() => {
    setAllData(item);
  }, [item]);
  return (
    <>
      <Wrapper>
        <div className="imgsection">
          <picture>
            <img
              data-src={allData.titleImage}
              alt="deal thumb"
              src={allData.titleImage}
            />
          </picture>
        </div>
        <div className="content">
          <div className="sub-text">
            <span>{allData.arrivalPlans.numberOfFLights} Flight</span>
          </div>
          <div className="height">
            <div className="itemDesc">
              <h3>{allData.destination}</h3>
              <p>{allData.title} {allData.stays.numberOfDays} {allData.price}</p>
            </div>
            <div className="bookingsection">
              <span></span>
              <div className="copied"></div>
              <a href="/">Book Now</a>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default TourCard;

const Wrapper = styled.div`
  .imgsection {
    img {
      object-fit: cover;
      height: 200px;
    }
    height: 200px;
    width: 125px;
    min-width: 125px;
    overflow: hidden;
    pointer-events: all !important;
    margin: 20px 0px 20px -45px;
    border-radius: 7px;
    -webkit-mask-image: -webkit-radial-gradient(white, #000);
    border: 1px solid #d6dfe4;
    transition: transform 0.3s ease-in-out;
    &:hover img {
      transition: transform 0.3s ease-in-out;
      transform: scale(1.1);
    }
  }
  .sub-text {
    flex-direction: row;
    box-sizing: border-box;
    display: flex;
    place-content: flex-start flex-end;
    align-items: flex-start;
    margin-bottom: 15px;
    span {
      color: #6d6c6c;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      background: #f5f6f8;
      border: 1px solid #e4e4e4;
      border-radius: 5px;
      padding: 0 10px;
      height: 20px;
      line-height: 20px;
    }
  }
  max-width: 380px;
  min-width: fit-content;
  display: flex;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 10%);
  height: 100%;
  transition: all 0.5s ease-in;
  width: calc(100% - 45px);
  margin-left: 45px;
  border: 1px solid rgba(156, 170, 179, 0.28);
  padding-right: 15px;
  .content {
    flex-direction: column;
    box-sizing: border-box;
    display: flex;
    place-content: stretch flex-start;
    align-items: stretch;
    max-width: 100%;
    padding: 10px;
    h3 {
      font-size: 18px;
      font-weight: 700;
      margin: 0 0 5px;
      color: #000;
      width: 100%;
    }
    p {
      font-size: 13px;
      color: #525252;
      font-weight: 500;
      line-height: 20px;
      padding: 5px 0px 20px 10px;
    }
    .bookingsection {
      padding-top: 50px;
      a {
        display: flex;
        justify-content: flex-end;
        padding-top: 15px;
        padding: 0;
        background: 0 0;
        border: none;
        color: #d32f2f;
        font-size: 15px;
        font-weight: 700;
      }
    }
  }
`;
