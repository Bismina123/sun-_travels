import { useEffect, useState } from "react";
import styled from "styled-components";
import hotel from "../assets/hotel.png";
import hiking from "../assets/hiking.png";
import airplane from "../assets/airplane.png";
import bus from "../assets/bus.png";
import { useNavigate } from "react-router-dom";
const TourCard = ({ item }) => {
  const navigate = useNavigate();
  const [allData, setAllData] = useState(item);
  useEffect(() => {
    setAllData(item);
  }, [item]);
  const handleClick = (id) => {
    console.log(id, "id");
    navigate(`/tours-inner/${id}`);
  };
  return (
    <CardWrapper onClick={() => handleClick(allData.id)}>
      <span className="heading-wrapper">{allData.title}</span>
      <div className="image-wrapper">
        <img src={allData.titleImage} alt={allData.titleImage} />
      </div>
      <div className="trip-content">
        <div>
          <img src={airplane} alt="" />
          <span>{allData.arrivalPlans.numberOfFLights} Flights</span>
        </div>
        <div>
          <img src={hotel} alt="" />
          <span>{allData.arrivalPlans.hotels} Hotels</span>
        </div>
        <div>
          <img src={hiking} alt="" />
          <span>{allData.arrivalPlans.activities} Activities</span>
        </div>
        <div>
          <img src={bus} alt="" />
          <span>{allData.arrivalPlans.transfers} Transfers</span>
        </div>
      </div>
      <div className="day-content">
        <div>
          <span>{allData.stays.numberOfDays}</span>
          <div>{allData.destination}</div>
        </div>
      </div>
      <div className="attraction-content">
        <ul>
          <li>&#8226; {allData.stays.placeOne}</li>
          <li>&#8226; {allData.stays.placeTwo}</li>
        </ul>
        <div>
          <span>{allData.price}</span>
          <span>per person</span>
        </div>
      </div>
    </CardWrapper>
  );
};

export default TourCard;
const CardWrapper = styled.div`
  margin-top: 30px;
  cursor: pointer;
  margin-bottom: 30px;
  position: relative;
  max-width: 350px;
  height: 450px;
  border-radius: 12px;
  background: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  .heading-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #000000;
    font-weight: 700;
    font-size: 18px;
    padding: 10px;
  }
  .image-wrapper {
    padding: 10px;
    img {
      border-radius: 10px;
      height: 200px;
      width: 100%;
      object-fit: cover;
    }
  }
  .trip-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    div {
      img {
        margin: 0 auto;
        width: 15px;
      }
      span {
        font-size: 13px;
      }
    }
  }
  .day-content {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    div {
      display: flex;
      align-items: baseline;
      gap: 3px;
      span {
        color: #eb2026;
        font-size: 16px;
        font-weight: bold;
      }
      div {
        color: #676767;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
  .attraction-content {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      text-align: left;
      li {
        color: #333333;
      }
    }
    div {
      display: grid;
      :nth-child(1) {
        color: #000000;
        font-size: 22px;
        font-weight: bold;
      }
      :nth-child(2) {
        color: #676767;
        font-size: 13px;
      }
    }
  }
`;
