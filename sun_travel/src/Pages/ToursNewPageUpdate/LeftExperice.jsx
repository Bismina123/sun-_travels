import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

const LeftExperice = () => {
  return (
    <Box
      sx={{
        border: "1px solid #dadada",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <>
          <Wrapper>
            <div className="imgdiv">
              <img
                src="https://images.unsplash.com/photo-1601158935942-52255782d322?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvZ298ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
            <div className="text-block">
              <div>
                <h4>Honeymoon</h4>
                <span>
                  Maldives | Dubai | Kerala | Rajasthan | Bali | Georgia | Sri
                  Lanka | Mauritius |Jordan | Dubai | Egypt | New Zealand |
                  Europe | Switzerland | Singapore | Turkey | Hong Kong | Fiji |
                  New Zealand
                </span>
              </div>
              <h3>₹11,025/-</h3>
            </div>
          </Wrapper>
        </>
      ))}
    </Box>
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
