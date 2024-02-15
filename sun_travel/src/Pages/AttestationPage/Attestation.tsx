import React from "react";
import styled from "styled-components";
import wave from "./Assets/wave.svg";
import building from "./Assets/building.png";
import notary from "./Assets/notary.png";
import attestation from "./Assets/attestation.png";
import checking from "./Assets/checking.png";
import uae from "./Assets/uae.png";
import bahrain from "./Assets/bahrain.png";
import kuwait from "./Assets/kuwait.png";
import oman from "./Assets/oman.png";
import qatar from "./Assets/qatar.png";
import saudi from "./Assets/saudi-arabia.png";
import europe from "./Assets/european-union.png";
import attes from "./Assets/attest.png";
import AtCard from "./AtCard";
import UpdatedFooter from "../../Components/UpdatedFooter";
import { attesttionData } from "./Data";

const Attestation = () => {
  return (
    <MainWrapper>
      <BackGroundWrapp src={wave} alt="" />
      <div className="container first-div">
        <img
          src="https://theattestation.in/assets/img/heroo-img.webp"
          alt="attestaion"
        />
        <img
          src={attes}
          alt="attestaion"
        />
      </div>
      <div className="container second-div">
        <h1>Our Services</h1>
        <ul className="why-book">
          <li className="hovicon effect-1 sub-a">
            <img src={building} alt="building" />
            <span>HOME DEPARTMENT</span>
          </li>
          <li className="hovicon effect-1 sub-a">
            <img src={notary} alt="24/7" />
            <span>NOTARY</span>
          </li>
          <li className="hovicon effect-1 sub-a">
            <img src={attestation} alt="flight" />
            <span>MEA</span>
          </li>
          <li className="hovicon effect-1 sub-a">
            <img src={checking} alt="tag" />
            <span>APPOSTILE</span>
          </li>
        </ul>
      </div>
      <div className="container third-div">
        {attesttionData.map((item) => {
          return (
            <>
              <AtCard item={item} />
            </>
          );
        })}
      </div>
      <div className="container second-div">
        <h2>Countries We Provide Our Service's</h2>
        <ul className="why-book">
          <li className="hovicon effect-1 sub-a">
            <img src={uae} alt="uae" />
            <span>UAE</span>
          </li>
          <li className="hovicon effect-1 sub-a">
            <img src={qatar} alt="qatar" />
            <span>QATAR</span>
          </li>
          <li className="hovicon effect-1 sub-a">
            <img src={oman} alt="oman" />
            <span>OMAN</span>
          </li>
          <li className="hovicon effect-1 sub-a">
            <img src={kuwait} alt="kuwait" />
            <span>KUWAIT</span>
          </li>
          <li className="hovicon effect-1 sub-a">
            <img src={bahrain} alt="bahrain" />
            <span>BAHRAIN</span>
          </li>
          <li className="hovicon effect-1 sub-a">
            <img src={saudi} alt="saudi" />
            <span>SAUDI ARABIA</span>
          </li>
          <li className="hovicon effect-1 sub-a">
            <img src={europe} alt="europe" />
            <span>ALL EUROPEAN COUNTRIES</span>
          </li>
        </ul>
      </div>
      <UpdatedFooter />
    </MainWrapper>
  );
};

export default Attestation;
const MainWrapper = styled.div`
  position: relative;
  .third-div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 80px;
    padding: 5%;
    @media (max-width: 800px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 550px) {
      grid-template-columns: 1fr !important;
    }
  }
  .first-div {
    padding-top: 90px;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    :nth-child(1) {
      width: 30%;
      z-index: 1;
      object-fit: cover;
    }
    :nth-last-child(1) {
      width: 70%;
      height: 500px;
      z-index: 1;
      object-fit: contain;
    }
    @media (max-width: 600px) {
      display: grid;
      :nth-child(1) {
        width: 100%;
      }
      :nth-last-child(1) {
        width: 100%;
      }
    }
  }
  .second-div {
    @media (max-width: 800px) {
      ul {
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        padding: 10px;
      }
    }
    @media (max-width: 1149px) {
      ul {
        display: grid !important;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 10px;
      }
    }
    ul {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 35px;
      margin-bottom: 25px;
      li {
        display: flex;
        align-items: center;
        gap: 10px;
        background: #f2f2f2;
        padding: 10px;
        border-radius: 10px;
        img {
          height: 40px;
          width: 40px;
        }
      }
    }
    h1 {
      position: relative;
      font-size: 36px;
      font-weight: 600;
      color: #065af3;
      letter-spacing: 4px;
      &::before {
        bottom: 0;
        position: absolute;
        content: "";
        width: 244px;
        height: 2px;
        background: #065af3;
      }
    }
    h2 {
      position: relative;
      font-size: 36px;
      font-weight: 600;
      color: #065af3;
      letter-spacing: 4px;
      &::before {
        bottom: 0;
        position: absolute;
        content: "";
        width: 44%;
        height: 2px;
        background: #065af3;
      }
    }
  }
`;
const BackGroundWrapp = styled.img`
  position: absolute;
  top: 0;
  z-index: 0;
`;
