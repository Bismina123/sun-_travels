import React, { useState } from "react";
import styled from "styled-components";
import BusinessIcon from "@mui/icons-material/Business";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import MosqueIcon from "@mui/icons-material/Mosque";
import MoveingPath from "./MoveingPathHajj";
import ContactUsPage from "../../ContactusPage";
function HajjPage() {
  const hajjData = [
    {
      id: 1,
      number: "01",
      category: "Standard",
      desc: "A well-rounded blend of comfort and practicality, promising a convenient Hajj journey",
      hotel: " 4-Star or 3-Star Hotels",
      date: "14 Days (Min)",
      hotelBuilding: "3-Star Hotels or Residential Buildings",
      place: "Majar Al-Kabsh or Al-Muaisim",
    },
    {
      id: 2,
      number: "02",
      category: "Luxury",
      desc: " Marking the perfect balance between luxury and accessibility for a memorable Hajj journey",
      hotel: " 5-Star Hotels",
      date: "14 Days (Min)",
      hotelBuilding: "5-Star Hotels",
      place: "Majar Al-Kabsh or Al-Muaisim",
    },
    {
      id: 3,
      number: "03",
      category: "Premium",
      desc: " Matching an elevated level of service with ease of access for a perfectly balanced experience",
      hotel: " 4-Star Hotels",
      date: "14 Days (Min)",
      hotelBuilding: "4-Star Hotels",
      place: "Majar Al-Kabsh or Al-Muaisim",
    },
    {
      id: 4,
      number: "04",
      category: "Platinum",
      desc: "Encompassing all the basic services needed for a wholesome and affordable Hajj journey",
      hotel: " 3-Star Hotels or Residential Buildings",
      date: "14 Days (Min)",
      hotelBuilding: "3-Star Hotels",
      place: "Majar Al-Kabsh or Al-Muaisim",
    },
  ];
  const [modal, setModal] = useState(false);
  const buttonClicked=()=>{
    setModal(true)
    console.log("clickedddd")
  }
  return (
    <Warpper>
      <div className="dridWrapper">
        <section className="work-process-section " id="processDiv">
          <div className="container-fluid">
            <div className=" work-process-block work-process-layout1">
              <div className="row">
                {hajjData.map((item) => {
                  return (
                    <>
                      <div>
                        <div className="vs-work-process text-center">
                          <div className="work-process-top animate__slideInDown wow animate__animated">
                            <span className="shape"></span>
                            <span className="number border-white text-white">
                              {item.number}
                            </span>
                          </div>
                          <div className="work-process-content animate__zoomIn animate__animated wow"onClick={buttonClicked} >
                            <h3 className="process-title heading4">
                              {item.category}
                            </h3>
                            <p className="text">{item.desc}</p>
                            <div className="footerSection">
                              <div className="listFlex">
                                <BusinessIcon />
                                <label htmlFor="">{item.hotel}</label>
                              </div>
                              <div className="listFlex">
                                <CalendarTodayIcon />
                                <label htmlFor="">{item.date}</label>
                              </div>
                              <div className="listFlex">
                                <SwapHorizIcon />
                                <label htmlFor="">{item.hotelBuilding}</label>
                              </div>
                              <div className="listFlex">
                                <MosqueIcon />
                                <label htmlFor="">{item.place}</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {modal? <ContactUsPage modal={modal}setModal={setModal}/>:""}

      </div>
      <MoveingPath/>
    </Warpper>
  );
}

export default HajjPage;

const Warpper = styled.div`
  height: 100vh;
  background: #23282d;
  .footerSection {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 10px;
    .listFlex {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
      svg {
        width: 15px;
      }
      label {
        font-size: 13px;
        text-align: left;
      }
      /* gap: 10px; */
    }
  }
  .dridWrapper {
    /* padding: 30px 30px; */
  }
  .row {
    @media only screen and (min-width: 300px) and (max-width: 414px) {
      grid-template-columns: auto;
    }
    @media only screen and (min-width: 414px) and (max-width: 1000px) {
      grid-template-columns: auto auto;
    }
    display: grid;
    grid-template-columns: auto auto auto auto;
    padding: 10px 20px;
    gap: 10px;
  }
  .small-text {
    color: #2c2b0c;
  }
  .heading {
    color: #000;
    font-size: 39px;
    font-weight: 700;
  }
  .work-process-section {
    width: 100%;
    display: block;
    padding: 90px 0px 100px;
    background: #f7f6e2;
    background-size: cover;
    background-position: center;
  }
  .work-process-section .heading-block {
    width: 100%;
    display: block;
    max-width: 600px;
    margin: 0px auto 60px;
    text-align: center;
  }
  .work-process-section .heading-block .description {
    font-size: 16px;
    color: #666666;
    margin-bottom: 0px;
  }
  .work-process-block {
    max-width: 1600px;
    width: 100%;
    margin: 0px auto; /* height: 450px; */
  }

  .work-process-layout1 .work-process-top .number {
    display: inline-block;
    width: 80px;
    height: 80px;
    text-align: center;
    border: 5px solid;
    font-size: 26px;
    font-weight: 700;
    line-height: 73px;
    margin-left: 40px;
    margin-bottom: 25px;
    background-color: #b9b533 !important;
    border-radius: 50%;
    position: relative;
    -webkit-transition: all ease 0.4s;
    transition: all ease 0.4s;
  }
  .work-process-layout1 .work-process-top {
    text-align: center;
    position: relative;
  }
  .work-process-layout1 .work-process-top .shape {
    -webkit-transition: all ease 0.4s;
    transition: all ease 0.4s;
    display: inline-block;
    position: absolute;
    left: 25px;
    top: 63px;
    width: 100%;
    height: 270px;
    max-width: 270px;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 29% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 29% 100%);
    border-radius: 10px;
    z-index: 0;
    -webkit-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    transform: rotate(-5deg);
    background-color: #b9b533;
    @media only screen and (min-width: 414px) and (max-width: 600px) {
     left: 0px;
    }
  }

  .work-process-layout1 .vs-work-process-2 .shape {
    background: #99962a !important;
  }
  .work-process-layout1 .vs-work-process-2 .number {
    background: #99962a !important;
  }
  .work-process-layout1 .vs-work-process-2 .work-process-content {
    border-color: #99962a !important;
  }

  /* .work-process-layout1 .vs-work-process-3 .shape { background: #008dc4  !important; }
.work-process-layout1 .vs-work-process-3 .number{ background: #008dc4  !important; }
.work-process-layout1 .vs-work-process-3 .work-process-content { border-color: #008dc4  !important; }
 */
  .work-process-layout1 .vs-work-process-4 .shape {
    background: #99962a !important;
  }
  .work-process-layout1 .vs-work-process-4 .number {
    background: #99962a !important;
  }
  .work-process-layout1 .vs-work-process-4 .work-process-content {
    border-color: #99962a !important;
  }

  .work-process-layout1 .work-process-content {
    -webkit-transition: all ease 0.4s;
    transition: all ease 0.4s;
    border-radius: 10px;
    box-shadow: 0px 3px 0px 0px rgba(17, 180, 245, 0.004),
      0px 3px 50px 0px rgba(17, 180, 245, 0.1);
    background-color: rgba(255, 255, 255, 0.969);
    padding: 35px 20px;
    padding-bottom: 30px;
    max-width: 300px;
    border-bottom: 3px solid #b9b533;
    position: relative;
    @media only screen and (min-width: 414px) and (max-width: 600px) {
  min-height: 400px;
    }
    /* min-height: 300px; */
  }
  .work-process-layout1 .work-process-content.odd-block {
    border-color: #d9d675;
  }
  .work-process-layout1 .work-process-content .icon {
    width: 45px;
    height: 45px;
    margin: 0px auto 20px;
  }
  .work-process-layout1 .work-process-content .icon img {
    width: 100%;
    height: 100%;
  }
  .work-process-layout1 .work-process-content .process-title {
    color: #1d165c;
    font-size: 20px;
    line-height: 30px;
    transition: all 500ms ease;
    font-weight: 600;
    margin-bottom: 12px;
  }
  .work-process-layout1 .work-process-content .text {
    position: relative;
    font-size: 14px;
    line-height: 24px;
    color: #666666;
    transition: all 500ms ease;
    margin-bottom: 0px;
  }
  .work-process-layout1 .vs-work-process:hover .work-process-top .shape {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  .work-process-layout1 .vs-work-process:hover .work-process-top .number {
    margin-bottom: 0px;
    margin-left: 0%;
  }

  .section-title {
    position: relative;
    z-index: 1 !important;
    text-align: center;
    margin-bottom: 3rem !important;
    margin-top: 1.5rem !important;
    h5 {
      color: #b49164;
      text-transform: uppercase !important;
      position: relative !important;
    }
    span {
      font-size: 1rem;
      background-color: #23282d;
      padding-right: 3rem !important;
      padding-left: 3rem !important;
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }
  }
  .section-title:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #b49164;
    top: 50%;
    left: 0;
    right: auto;
  }
`;
