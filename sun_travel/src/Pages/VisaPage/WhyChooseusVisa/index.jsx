import React from 'react'
import styled from 'styled-components';
import visaAll from "../assets/visa (2).svg";
import experience from "../assets/visa (3).svg";
import up from "../assets/redo.svg";
import {  Slide } from "react-awesome-reveal";
import global from "../assets/global-shipping.svg";
import locations from "../assets/call-center.svg";
import van from "../assets/delivery-truck.svg";
import security from "../assets/secure.svg";
function WhyChooseusVisa() {
  return (
    <WhyChooseUs>
        <MainSection>
          <Slide direction="left">
            <FirstSection>
              <div className="dotted">
                {/* //01 */}
                <div>
                  <img className="arrowright" src={up} alt={up} />
                  <ChatBox>
                    <div className="number">01</div>
                    <div className="textAlign">
                      <img
                        className="toolTipImage"
                        src={visaAll}
                        alt="visaAll"
                      />
                      <label>
                        Visa Services for <br /> all Countries
                      </label>
                    </div>
                  </ChatBox>
                </div>
                {/* 02 */}
                <div>
                  <img className="arrowLeft" src={up} alt={up} />
                  <ChatBox className="second">
                    <div className="number">02</div>
                    <div className="textAlign">
                      <img
                        className="toolTipImage"
                        src={experience}
                        alt="experience"
                      />
                      <label>40 years of experience in Visa processing</label>
                    </div>
                  </ChatBox>
                </div>
                {/* 03 */}
                <div>
                  <img className="arrowright03" src={up} alt={up} />
                  <ChatBox className="third">
                    <div className="number">03</div>
                    <div className="textAlign">
                      <img className="toolTipImage" src={global} alt="global" />
                      <label>150+ Branches Worldwide</label>
                    </div>
                  </ChatBox>
                </div>
                {/* 04 */}
                <div>
                  <img className="arrowright04" src={up} alt={up} />
                  <ChatBox className="fourth">
                    <div className="number">04</div>
                    <div className="textAlign">
                      <img
                        className="toolTipImage"
                        src={locations}
                        alt="global"
                      />
                      <label>End-to-End Visa Assistance</label>
                    </div>
                  </ChatBox>
                </div>
                {/* 05 */}
                <div>
                  <img className="arrowright05" src={up} alt={up} />
                  <ChatBox className="fifth">
                    <div className="number">05</div>
                    <div className="textAlign">
                      <img className="toolTipImage" src={van} alt="van" />
                      <label>
                        Pick Up & Drop of Documents from your Doorstep
                      </label>
                    </div>
                  </ChatBox>
                </div>
                {/* 06 */}
                <div>
                  <img className="arrowright06" src={up} alt={up} />
                  <ChatBox className="sixth">
                    <div className="number">06</div>
                    <div className="textAlign">
                      <img
                        className="toolTipImage"
                        src={security}
                        alt="security"
                      />
                      <label>Safety & Confidentiality</label>
                    </div>
                  </ChatBox>
                </div>
              </div>
            </FirstSection>
          </Slide>
          </MainSection>
      </WhyChooseUs>
  )
}

export default WhyChooseusVisa
const WhyChooseUs = styled.div`
  margin-top: 15px;
  /* padding: 10px 25px; */
`;
const MainSection = styled.div`
  /* display: grid; */
  /* display: grid; */
  /* grid-template-columns: 70% 30%; */
  /* background-color: red; */
  height: auto;
  padding: 10px 20px;
`;
const FirstSection = styled.div`
  /* /* background-color: yellow; */
  /* height: auto; */
  background: linear-gradient(to bottom, #acd3f3, #d4e1e9);
  border-radius: 10px 10px 0px 0px;
  .dotted {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
    /* background-color: red; */
    &::after {
      content: "";
      position: absolute;
      height: 80%;
      border-left: 3px dashed #fff;
      right: 50%;
      transform: translateX(50%);
    }
  }
  .arrowright {
    width: 50px;
    position: absolute;
    top: 12%;
    filter: invert(1) drop-shadow(2px 3px 1px black);
  }
  .arrowright03 {
    width: 50px;
    position: absolute;
    top: 38%;
    filter: invert(1) drop-shadow(2px 3px 1px black);
  }
  .arrowright05 {
    width: 50px;
    position: absolute;
    top: 64%;
    filter: invert(1) drop-shadow(2px 3px 1px black);
  }
  .arrowLeft {
    transform: rotate(180deg);
    width: 50px;
    position: absolute;
    top: 25%;
    left: 45%;
    filter: invert(1) drop-shadow(2px 3px 1px black);
  }
  .arrowright04 {
    width: 50px;
    position: absolute;
    top: 51%;
    left: 45%;
    filter: invert(1) drop-shadow(2px 3px 1px black);
    transform: rotate(180deg);
  }
  .arrowright06 {
    width: 50px;
    position: absolute;
    top: 77%;
    left: 45%;
    filter: invert(1) drop-shadow(2px 3px 1px black);
    transform: rotate(180deg);
  }
  .second {
    left: 30% !important;
    top: 25%;
  }
  .third {
    top: 38%;
  }
  .fourth {
    left: 30% !important;
    top: 51%;
  }
  .fifth {
    top: 64%;
  }
  .sixth {
    left: 30% !important;
    top: 77%;
  }
`;
const ChatBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #0b2f6a;
  padding: 10px;
  gap: 5px;
  border-radius: 10px;
  width: 155px;
  position: absolute;
  left: 55%;
  top: 12%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  .number {
    font-size: 25px;
    color: #fff;
    font-weight: bolder;
  }
  label {
    font-size: 14px;
    font-family: "lato";
    color: #fff;
  }
  .toolTipImage {
    width: 50px;
  }
  .textAlign {
    text-align: left;
  }
`;