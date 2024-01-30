import React from "react";
import styled from "styled-components";
import bg from "./../../../../PilgrimsPage/assets/bckgBlack.jpg";
import palestine from './../../../../PilgrimsPage/assets/dome-rock-al-aqsa-mosque-old-city-jerusalem-palestine.jpg'

function HolyLandAbout() {
  return (
    <Wrapper>
      <div className="flow">
        <div className="flowContent">
          <p>
            For thousands of years Christians have travelled to the holy land to
            learn more about the events of scripture and nurture their own
            faith.
          </p>
          <div className="gridWrapper">
            <div className="firstGrid">
              <p className="pTag1">
                Bring the events of the Bible to life with a holy land tour.
                Visit Bethlehem - the birthplace of Jesus, the Sea of Galilee
                where Jesus called his disciples, and Jerusalem, the Holy City
                where Jesus ultimately died and rose again. Join other
                Christians as you journey through the holy places and share
                devotions at the major sites.
              </p>
              <p className="pTag1">
                We have multiple tours, fast-paced or at a relaxed pace, that
                are chaperoned by Christians, or we can organise a tour for your
                church or community group.
              </p>
              <p className="pTag1">
                Join the multitude of Christians who have their life and faith
                changed by a tour of Israel and the Holy Land.
              </p>
              
            </div>
            <div className="secondGrid">
                <img src={palestine} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default HolyLandAbout;
const Wrapper = styled.div`
  height: 100vh;
  background-color: #fff;
  background-image: url(${bg});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: scroll;
  margin: 0;
  padding: 0;
  .flow {
    padding: 100px 20px 40px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .flowContent {
    padding: 10px 20px;
    text-align: left;
    position: relative;
    flex: 1 1 auto;
    max-width: 1000px;
    font-family: 'lato';

    p {
      font-size: 1.2rem;
      margin-bottom: 25px;
    }
  }
  .gridWrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 50px;
    .secondGrid{
        height: 100%;
    width: 100%;
    overflow: hidden;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    }
  }
`;
