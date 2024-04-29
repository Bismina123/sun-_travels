import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  BrowserRouter,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import TabComponent from "./Tabcomponent/tabComponent";
import { Box, Tab } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import umrah from "./assets/kaaba.svg";
import hajj from "./assets/hajj.svg";
import umra from "./assets/makkah-kaaba-hajj-muslims.jpg";
import holyland from "./assets/church-middle-field.jpg";
import soudiflag from "./assets/saudi-arabia.svg";
import holy from "./assets/christian.svg";
import hajjMain from "./assets/beautiful-view-city-mecca-also-place-worship-kaaba.jpg";

import MyLocationIcon from "@mui/icons-material/MyLocation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Startdate from "./components/Startdate";
import UmraPage from "./UmrahPage";

import HajjPage from "./HajjPage";
import HolyLandPage from "./HolyLandPage";
import jordanFlag from "./assets/jordan.svg";
import palestineFlag from "./assets/palestine.svg";
import egyptFlag from "./assets/egypt.svg";
import israelFlag from "./assets/israel.svg";
import dayjs from "dayjs";

function PilgrimsPage() {
  const styles = {
    tabStyle: {
      " .pilGrimstabHeading": {
        // minHeight: "60px !important",
        background: "transparent",
        "& .MuiTabs-scroller": {
          position: "unset ",
        },
      },
      "& .MuiTabs-flexContainer": {
        "@media only screen and (min-width: 300px) and (max-width: 768px)": {
          top: "18%",
        },
        justifyContent: "center",
        gap: "20px",
        padding: "10px",
        position: "absolute",
        top: "23%",
        transform: " translate(-50%, -50%)",
        left: "50%",
      },
      "&  .MuiTab-root": {
        "@media only screen and (min-width: 300px) and (max-width: 768px)": {
          width: " 80px",
          fontSize: "12px",
          height: " 74px",
        },
        background: "#fff ",
        height: " 80px",
        width: " 110px",
        borderRadius: "7px",
        display: "block",
        textAlign: "-webkit-center",
        fontSize: "13px",
        boxShadow: "0 3px 5px 0 rgba(0,0,0,.3)",
        fontFamily: "Lato !important",
        fontWeight: 700,
        padding: "0",

        "&.Mui-selected": {
          color: "#fff",
          backgroundColor: "#0b2f6a !important",
          img: {
            filter: "invert(1) brightness(3.5)",
          },
        },
      },
      "& .MuiTabs-indicator ": {
        display: "none",
      },
    },
    mainTab: {
      "& .MuiTabPanel-root": {
        padding: "0px",

        position: "absolute",

        transform: " translate(-50%, -50%)",
        left: "50%",
        width: "100%",
        top: "125%",
      },
    },
  };
  const navigate = useNavigate();
  const location = useLocation();
  let currentvalue = "";
  let backImage = "";
  switch (location.pathname) {
    case "/pilgrims/umra":
      currentvalue = "1";
      backImage = hajjMain;

      break;
    case "/pilgrims/hajj":
      currentvalue = "2";
      backImage = umra;

      break;
    case "/pilgrims/holiland":
      currentvalue = "3";
      backImage = holyland;

      break;
    case "/pilgrims":
      currentvalue = "1";
      backImage = hajjMain;
      break;

    default:
    // Use a default country list or handle the case as needed
  }
  const [value, setValue] = React.useState(currentvalue);

  const handleChange = (event, newValue) => {
    console.log(newValue, "newValue");
    if (newValue === "1") {
      navigate("/pilgrims/umra");
      setopenmodal(false);
      setValue(newValue);
    } else if (newValue === "2") {
      navigate("/pilgrims/hajj");
      setValue(newValue);
      setopenmodal(false);
    } else if (newValue === "3") {
      navigate("/pilgrims/holiland");
      setValue(newValue);
      setopenmodal(false);
    }

    setValue(newValue);
  };
  useEffect(() => {
    setValue(currentvalue);

    if (currentvalue === "3") {
      setChoosedCity({
        id: 1,
        name: "Petra",
        country: "saudiArabia",
        flag: soudiflag,
      });
    } else {
      setChoosedCity({
        id: 1,
        name: "Makkah",
        country: "saudiArabia",
        flag: soudiflag,
      });
    }
  }, [currentvalue, location.pathname]);
  const [openmodal, setopenmodal] = useState(false);
  const modalopen = () => {
    setopenmodal(true);
  };
  const selectCity = [
    {
      id: 1,
      name: "Makkah",
      country: "saudiArabia",
      flag: soudiflag,
    },
    {
      id: 2,
      name: "Madinah",
      country: "saudiArabia",
      flag: soudiflag,
    },
  ];
  const holiLandCity = [
    {
      id: 1,
      name: "Petra",
      country: "Jordan", // Corrected country name for Petra
      flag: jordanFlag, // Assuming you have a variable jordanFlag for the flag
    },
    {
      id: 2,
      name: "Jordan",
      country: "Jordan", // Corrected country name for Jordan
      flag: jordanFlag, // Assuming you have a variable jordanFlag for the flag
    },
    {
      id: 3,
      name: "Palestine",
      country: "Palestine", // Corrected country name for Palestine
      flag: palestineFlag, // Assuming you have a variable palestineFlag for the flag
    },
    {
      id: 4,
      name: "Egypt",
      country: "Egypt",
      flag: egyptFlag, // Assuming you have a variable egyptFlag for the flag
    },
    {
      id: 5,
      name: "Israel",
      country: "Israel",
      flag: israelFlag, // Assuming you have a variable israelFlag for the flag
    },
  ];

  const [choosedCity, setChoosedCity] = useState({
    id: 1,
    name: "Makkah",
    country: "saudiArabia",
    flag: soudiflag,
  });
  console.log(openmodal, "modalOpen");
  const popupRef = React.useRef(null);

  const handleChoosedCity = (e, data) => {
    console.log(e, data, "idddddd");

    setChoosedCity(data);
    setopenmodal(false);
  };
  const cityList = currentvalue === "3" ? holiLandCity : selectCity;
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs().add(1, "day"));
  const [subscribe, setSubscribe] = useState("");
  const handleSearchClick = (e) => {
    console.log("Selected", choosedCity.name,startDate,endDate);
    e.preventDefault();
    emailjs
      .send(
        "service_vi7q9io",
        "template_6bhsgru",
        {
          from_name: subscribe,
          to_email: "",
          message: `City: ${choosedCity.name}, Start Date: ${startDate}, End Date: ${endDate}, `,
        },
        "cYu6EiV1UyKWKu4q-"
      )
      .then(
        () => {
          alert("Thank you. I will get back to you as soon as possible.");

          setSubscribe(""); // Clear the email state after successful submission
        },
        (error) => {
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  const scrollToTop = () => {
    var element = document.getElementById("detailMainWrapper");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  useEffect(() => {
    scrollToTop();
  }, [value]);
  return (
    <>
      <PilgrimsWrapper id="detailMainWrapper">
        <MainWrapper>
          <img src={backImage} alt={backImage} />
          <div className="boxShadow"></div>
        </MainWrapper>
        <BackgroundWrapper>
          <div className="gridSeperatingWrapper">
            <div className="firstGrid" onClick={modalopen}>
              <label htmlFor="" className="cityLabel">
                Select city
              </label>
              <div className="choosinglabel">{choosedCity.name}</div>
              <div className="counrtLabel">{choosedCity.country}</div>
            </div>
            {openmodal ? (
              <div className="modalOpen">
                <div ref={popupRef}>
                  <div className="input">
                    <input
                      className="location"
                      type="text"
                      placeholder="Select city"
                    />
                    <MyLocationIcon />
                  </div>
                  <div className="importantcity">Important Cities</div>
                  <div>
                    {cityList.map((item) => {
                      return (
                        <>
                          <div
                            className="drpDownCity alignIyem"
                            onClick={(e) => handleChoosedCity(e, item)}
                          >
                            <div className="drpDownCity">
                              <LocationOnIcon />

                              <div className="placesub" key={item.id}>
                                <label className="selectedlabel">
                                  {item.name}
                                </label>
                                <div className="bottonsub">
                                  <span>Place</span>

                                  <label style={{ cursor: "pointer" }}>
                                    {item.country}
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div>
                              <img src={item.flag} alt="" className="flagimg" />
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="secondGrid">
              <Startdate startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
            </div>
            <div className="thirdGrid">
              <div className="lastGridinner" onClick={handleSearchClick}>Search</div>
            </div>
          </div>
        </BackgroundWrapper>
        <TabWrapper>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value} sx={styles.mainTab}>
              <Box sx={styles.tabStyle}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  className="pilGrimstabHeading"
                >
                  <Tab
                    label="Umrah"
                    value="1"
                    icon={<img src={umrah} alt="Umrah" />}
                    iconPosition="start"
                  />
                  <Tab
                    label="Hajj"
                    value="2"
                    icon={<img src={hajj} alt="Umrah" />}
                    iconPosition="start"
                  />
                  <Tab
                    label="Holi Land"
                    value="3"
                    icon={<img src={holy} alt="Umrah" />}
                    iconPosition="start"
                  />
                </TabList>
              </Box>
              <Box sx={styles.mainTab}>
                <TabPanel value="1">
                  <UmraPage />{" "}
                </TabPanel>
                <TabPanel value="2">
                  <HajjPage />
                </TabPanel>
                <TabPanel value="3">
                  <HolyLandPage />
                </TabPanel>
              </Box>
            </TabContext>
          </Box>
        </TabWrapper>
      </PilgrimsWrapper>
    </>
  );
}

export default PilgrimsPage;
const PilgrimsWrapper = styled.div`
  position: relative;
  height: 100vh;
  /* background-color: red; */
  padding-top: 80px;
  .pilGrimstabHeading {
    img {
      @media only screen and (min-width: 300px) and (max-width: 514px) {
        width: 30px !important;
      }
      width: 35px !important;
      margin-bottom: 4px;
    }
  }
`;
const MainWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
  }
  .boxShadow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 75vh;
    width: 100%;
    background-image: linear-gradient(
      to top,
      rgb(0 0 0 / 97%) 0,
      rgb(197 191 191 / 9%) 35%,
      rgb(255 253 255 / 0%) 100%
    );
  }
`;
const TabWrapper = styled.div``;
const BackgroundWrapper = styled.div`
  background-color: #fff;
  position: absolute;
  top: 35%;
  transform: translate(-50%, -50%);
  left: 50%;
  width: 80%;
  height: auto;
  border-radius: 6px;
  padding-top: 20px;
  padding-bottom: 20px;
  @media only screen and (min-width: 300px) and (max-width: 514px) {
    top: 47%;
  }
 
  .gridSeperatingWrapper {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 0px 15px;
    @media only screen and (min-width: 300px) and (max-width: 1000px) {
      grid-template-columns: auto;
    }
  }
  .firstGrid {
    text-align: left;
    padding: 0px 20px;
    border-right: 1px solid #adadad;
    cursor: pointer;
    @media only screen and (min-width: 300px) and (max-width: 1000px) {
      border-right: 1px solid #fff;
    }
  }
  .cityLabel {
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    color: #545454;
    position: relative;
  }
  .choosinglabel {
    font-size: 20px;
    line-height: normal;
    color: #000;
    font-weight: 600;
    margin-bottom: 0;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .counrtLabel {
    font-size: 10px;
    color: #525252;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .modalOpen {
    background-color: red;
    position: absolute;
    top: 190%;
    width: 40%;
    transform: translate(-50%, -50%);
    left: 20%;
    /* padding: 10px 13px; */
    background: #fff;
    border: 1px solid #d4d4d4;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.23);
    z-index: 2;
    max-height: 190px;
    overflow: auto;
  }
  .importantcity {
    color: #187477;
    background-color: #e4f0f0;
    padding: 5px 10px;
    font-size: 13px;
    font-weight: 700;
    cursor: default;
  }
  .location {
    width: 100%;
    padding: 5px 10px;
    font-size: 16px !important;
  }
  .input {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
  }
  input:focus-visible {
    outline: none !important;
  }
  .drpDownCity {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 3px;

    cursor: pointer;
  }
  .selectedlabel {
    font-size: 14px;
    color: #010101;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  .bottonsub {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    font-size: 12px;
    font-weight: 400;
    color: #525252;
    display: flex;
    gap: 3px;
    align-items: center;
    span {
      border: 1px solid green;
      border-radius: 2px;
      padding: 0 3px;
      background-color: #fff;
      color: green;
      text-transform: capitalize;
      font-size: 11px;
    }
    label {
      font-size: 12px;
      font-weight: 400;
      color: #525252;
    }
  }
  .placesub {
    text-align: left;
  }
  .flagimg {
    width: 30px;
  }
  .alignIyem {
    justify-content: space-between !important;
    padding: 10px;
    cursor: pointer;
  }
  .secondGrid {
    border-right: 1px solid #adadad;
    @media only screen and (min-width: 300px) and (max-width: 1000px) {
      border-right: 1px solid #fff;
    }
  }
  .thirdGrid {
    margin-left: 10px;
    background-color: #0b2f6a !important;
    border-radius: 10px;
    cursor: pointer;
    @media only screen and (min-width: 300px) and (max-width: 900px) {
      margin-left: 0px;
      margin-top: 10px;
    }
    :hover {
      .lastGridinner {
        color: #0b2f6a;
      }
      border-radius: 10px;
      background-color: #82b8f1;
    }
    .lastGridinner {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Lato";
      color: #ffff;
      font-size: 20px;
      letter-spacing: 1px;
      @media only screen and (min-width: 300px) and (max-width: 768px) {
        font-size: 15px;
      }
    }
  }
  @media only screen and (min-width: 300px) and (max-width: 414px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 414px) and (max-width: 514px) {
    font-size: 23px;
  }
  @media only screen and (min-width: 514px) and (max-width: 600px) {
    font-size: 25px;
  }
  @media only screen and (min-width: 600px) and (max-width: 768px) {
    font-size: 26px;
  }
  @media only screen and (min-width: 768px) and (max-width: 900px) {
    font-size: 27px;
  }
  @media only screen and (min-width: 900px) and (max-width: 1024px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    font-size: 35px;
  }
`;
