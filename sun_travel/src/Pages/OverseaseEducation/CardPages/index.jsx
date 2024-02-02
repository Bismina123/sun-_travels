import React from "react";
import styled from "styled-components";
import bulb from "../assets/idea.svg";
import building from "../assets/building.svg";
import flight from "../assets/airplane.svg";
import accomodation from "../assets/home (4).svg";
import visa from "../assets/visa (4).svg";
function CardPages() {
  return (
    <Wrapper>
      <div className="mainWrapper">
        <div className="card">
          <div className="round">
            <img src={bulb} alt="" />
          </div>
          <h1>Career counselling</h1>
          <p>
            We identify your strengths and suggest you appropriate courses for
            your growth.
          </p>
        </div>
        <div className="card">
          <div className="round">
            <img src={building} alt="" />
          </div>
          <h1>University Admissions</h1>
          <p>
            {" "}
            We do the end to end processing of your application,including SOP
            and Thesis.
          </p>
        </div>
        <div className="card">
          <div className="round">
            <img src={flight} alt="" />
          </div>
          <h1>Pre-Departure Briefing</h1>
          <p>
            We actively prepare you for your departure in all aspects so that
            you can fulfil your dream.
          </p>
        </div>
      </div>
      <div className="mainWrapper2">
        <div className="card">
          <div className="round">
            <img src={accomodation} alt="" />
          </div>
          <h1>Accomodation</h1>
          <p>
            We plan for your temporary accomodation when you land for your
            convinience
          </p>
        </div>
        <div className="card">
          <div className="round">
            <img src={visa} alt="" />
          </div>
          <h1>Visa Consultancy</h1>
          <p>
            We provide your visa consultancy service to make your visa process
            hassle free.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default CardPages;
const Wrapper = styled.div`
  .mainWrapper {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
  }
  .mainWrapper2 {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
  }
  .round {
    background-color: #e57706;
    z-index: 3;
    border-radius: 50%;
    padding: 10px;
    img {
      z-index: 4;
      width: 30px;
    }
  }
  .card {
    /* border-radius: 10px; */
    width: 270px;
    height: 250px;
    margin: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    transition: all 1s;
    padding: 1.5em;
    h1 {
      color: #0b2f6a;
      z-index: 3;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 1px;
      font-family: "Lato";
    }
    p {
      color: #0b2f6a;
      z-index: 3;
      font-size: 14px;
      font-weight: 400;
      text-align: left;
      font-family: "Lato";
      margin-top: 12px;
    }
  }

  .card:hover {
    color: white;
  }

  .card::before,
  .card::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 2;
    border-radius: 10px;
    transition: all 1s;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .card::after {
    background: #fcc17d;
    transform-origin: right bottom;
    transform: translate(10%, 10%) scale(0.3);
    border-radius: 50%;
    transition: all 1s;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .card:hover::after {
    transform: translate(0) scale(1);
    border-radius: 0;
    border-radius: 10px;
  }

  .card:hover::before {
    transform-origin: right bottom;
    transform: translate(10%, 10%) scale(0.3);
    border-radius: 50%;
    z-index: 1;
  }
`;
