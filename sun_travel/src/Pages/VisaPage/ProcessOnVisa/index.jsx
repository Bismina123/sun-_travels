import React from 'react'
import styled from 'styled-components';
import first from "../assets/submit.svg";
import second from "../assets/payment-method.svg";
import third from "../assets/verification.svg";
import fourth from "../assets/recieved.svg";
import down from "../assets/arrow-right.svg";
import up from "../assets/redo.svg";
function ProcessOnVisa() {
  return (
   <StagesWrapper className='stageWrapper'>
          <label>Seamless Steps: Applying with Sun, Effortlessly Easy!</label>
          <StageDiv>
            <Submit>
              <img src={first} alt={first} />
              <div className="desc">Submit the required documents</div>
            </Submit>

            <img src={up} alt={up} />
            <Submit>
              <img src={second} alt={second} />
              <div className="desc">Pay the fee online</div>
            </Submit>
            <img src={down} alt={down} />
            <Submit>
              <img src={third} alt={third} />
              <div className="desc">Document verification by Sun</div>
            </Submit>
            <img src={up} alt={up} />
            <Submit>
              <img src={fourth} alt={fourth} />
              <div className="desc">Recieve your visa</div>
            </Submit>
          </StageDiv>
        </StagesWrapper> 
  )
}

export default ProcessOnVisa
const StagesWrapper = styled.div`
  background-color: #bcddf2ad;
  margin-top: 15px;
  padding: 10px 25px;
  label {
    font-size: 20px;
    font-weight: 900;
    color: #0b2f6a;
    text-transform: capitalize;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }
`;
const StageDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  margin-top: 25px;
  gap: 20px;
  img {
    width: 125px;
  }
  .desc {
    font-size: 14px;
    font-weight: 200;
    color: #000;
    text-transform: capitalize;
    letter-spacing: 1px;
    margin-top: 10px;
  }
`;
const Submit = styled.div`
  text-align: left;
`;