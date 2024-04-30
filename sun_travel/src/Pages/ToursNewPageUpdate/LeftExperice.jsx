import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { tourPackages } from "../toursPackages";

const LeftExperice = ({ item }) => {
  const [allData, setAllData] = useState(item);
  useEffect(() => {
    setAllData(item);
  }, [item]);
  console.log(allData, 'allData')
  return (
    <>
      <Wrapper>
        <div className="imgdiv">
          <img src={allData.titleImage} alt={allData.titleImage} />
        </div>
        <div className="text-block">
          <div>
            <h4>{allData.name}</h4>
            <span>{allData.arrivalDetails}</span>
          </div>
          <h3>{allData.price}</h3>
        </div>
      </Wrapper>
    </>
  );
};

export default LeftExperice;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .text-block {
    text-align: left;
    display: flex;
    padding: 10px;
    padding-top: 0;
    align-items: center;
    h4 {
      font-size: 19px;
      color: #000;
      font-weight: 500;
      margin: 0;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
      z-index: 10;
    }
    span {
      display: block;
      font-size: 14px;
      font-weight: 400;
      color: #363636;
      margin-top: 3px;
    }
    h3 {
      font-size: 14px;
      font-weight: 400;
      color: #525252;
      height: 25px;
      line-height: 25px;
      border-radius: 999px;
      border: 1px solid #ebebeb;
      padding: 0 10px;
      white-space: nowrap;
      background: #fff;
    }
  }
  .imgdiv {
    height: 40px;
    width: 50px;
    border-radius: 10px;
    img {
      border-radius: 10px;
      object-fit: cover;
    }
  }
`;
