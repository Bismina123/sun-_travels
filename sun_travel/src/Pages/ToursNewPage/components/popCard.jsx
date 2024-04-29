import * as React from "react";
import CardContent from "@mui/material/CardContent";
import styled from "styled-components";
import Card from "@mui/material/Card";

export default function PopCard({
  data,
  currentPage,
  cardsPerPage,
  handleDrag,
  className,
  bgImage,
}) {
  return (
    <Wrapper {...handleDrag} className={className}>
      {data
        .slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)
        .map((item) => (
          <Card key={item.id} className="card-style">
            <ImageWrapper>
              <img src={item.image} alt={item.title} />
            </ImageWrapper>
            <CardContent className="CardContent-style">
              <h3>{item.title}</h3>
              <p>{item.para}</p>
            </CardContent>
          </Card>
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 8%;
  width: 100%;
  display: flex;
  padding: 0px 30px;
  justify-content: space-between;
  @media (min-width: 100px) and (max-width: 1200px) {
    padding: 0px 10px;
  }
  .card-style {
    cursor: pointer;
    padding: 5px;
    gap: 5px;
    display: flex;
    align-items: center;
    min-width: 150px;
    min-height: 300px;
    display: flex;
    scroll-snap-align: start;
    padding: 0px;
    position: relative;
    &:hover img {
      transform: scale(1.1);
    }
    @media (min-width: 100px) and (max-width: 1200px) {
      min-height: 250px;
    }
  }
  .CardContent-style {
    width: 100%;
    height: 100%;
    padding: 0px 12px !important;
    display: flex;
    flex-direction: column;
    justify-content: end;
    z-index: 2;
    h3 {
      font-size: 20px;
      font-weight: 600;
      color: #fff;
    }
    p {
      font-size: 13px;
      color: #fff;
    }
  }
  .MuiCardActions-root {
    padding: 0 5px;
    justify-content: end;
    button {
      color: #d32f2f;
      font-size: 13px;
      font-weight: 700;
    }
  }
`;
const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out; 
  }
`;
