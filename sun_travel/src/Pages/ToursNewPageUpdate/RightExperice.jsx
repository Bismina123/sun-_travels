import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { tourPackages } from "../toursPackages";

const RightExperice = ({ item }) => {
  const [allData, setAllData] = useState(item);
  useEffect(() => {
    setAllData(item);
  }, [item]);
  return (
    <>
      <Wrapper>
        <div className="img-container">
          <img src={allData.titleImage} alt={allData.titleImage} />
          <div className="contentsection">
            <h5 className="swiperClass">
              {allData.destination}
              <span className="swiperClass">
                Starting @<strong>{allData.price}</strong>
              </span>
            </h5>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default RightExperice;
const Wrapper = styled.div`
  height: 100%;
  .img-container {
    height: 255px;
    width: 255px;
    border-radius: 7px;
    margin-bottom: 30px;
    padding: 20px 30px;
    position: relative;
    height: 100%;
    overflow: hidden;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      -webkit-transition: all 0.5s linear;
      transition: all 0.5s linear;
      -o-object-fit: cover;
      object-fit: cover;
      z-index: 0;
      background: #ddd;
      display: block;
      &:hover {
        transition: transform 0.3s ease-in-out;
        transform: scale(1.1);
        cursor: pointer;
      }
    }
    .contentsection {
      width: 100%;
      height: 100%;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
      h5 {
        color: #fff;
        font-size: 23px;
        font-weight: 700;
        margin: 0;
        position: relative;
        z-index: 10;
        cursor: pointer;
        width: 100%;
      }
      span {
        display: block;
        font-size: 15px;
        font-weight: 400;
        strong {
          margin-left: 3px;
          font-size: 19px;
          font-weight: 500;
          white-space: nowrap;
        }
      }
    }
  }
`;
