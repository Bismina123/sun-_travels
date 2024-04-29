import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styled from "styled-components";

export default function SnCard({
  data,
  currentPage,
  cardsPerPage,
  handleDrag,
  className,
}) {
  return (
    <Wrapper {...handleDrag} className={className}>
      {data
        .slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)
        .map((item) => (
          <Card sx={{}} key={item.id} className="card-style">
            <LeftWrapper>
              <ImageWrapper>
                <img src={item.image} alt={item.title} />
              </ImageWrapper>
            </LeftWrapper>
            <CardContent className="CardContent-style">
              <CardActions>
                <Button size="small" className="title-button">
                  FIXED DEPARTURES
                </Button>
              </CardActions>
              <h3>{item.title}</h3>
              <p>{item.para}</p>
              <CardActions>
                <Button size="small" className="submit-button">
                  Book Now
                </Button>
              </CardActions>
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
  transition: transform 0.3s ease-in-out;
  @media (min-width: 100px) and (max-width: 1200px) {
    padding: 0px 10px;
  }
  .card-style {
    overflow: visible;
    cursor: pointer;
    padding: 5px;
    gap: 5px;
    display: flex;
    align-items: center;
    min-width: 150px;
    min-height: 300px;
    display: flex;
    scroll-snap-align: start;
    width: 33.33%;
    padding: 30px 10px;
    height: auto;
    &:hover img {
      transform: scale(1.1);
    }
    @media (min-width: 100px) and (max-width: 1200px) {
      min-height: 250px;
    }
  }
  .CardContent-style {
    width: 55%;
    height: 100%;
    padding: 0 !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    button {
      font-size: 11px;
      font-weight: 500;
      padding: 0px;
    }
    h3 {
      font-size: 15px;
      font-weight: 600;
    }
    p {
      font-size: 13px;
    }
    .title-button {
      color: #6d6c6c;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      background: #f5f6f8;
      border: 1px solid #e4e4e4;
      border-radius: 5px;
      height: 20px;
      line-height: 20px;
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
const LeftWrapper = styled.div`
  width: 45%;
  height: 100%;
  position: relative;
`;
const ImageWrapper = styled.div`
  min-width: 150px;
  width: 100%;
  height: 100%;
  left: -15%;
  top: 0%;
  position: absolute;
  overflow: hidden;
  border-radius: 11px;
  @media (min-width: 100px) and (max-width: 1200px) {
    right: 4%;
    left: unset;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s linear;
    background-repeat: no-repeat;
    transition: transform 0.5s linear;
  }
`;
