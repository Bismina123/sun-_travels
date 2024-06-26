import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Tab, TextField } from "@mui/material";
import swap from "./assets/swap.png";
import right from "./assets/right.png";
import shield from "./assets/shield.png";
import flight from "./assets/flight-mode.png";
import tag from "./assets/tag.png";
import customer from "./assets/customer.png";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import UpdatedFooter from "../../Components/UpdatedFooter";
import emailjs from "@emailjs/browser";
import axios from "axios";
import LocationInput from "../HotelBookingPage/LocationInput";

const useTabStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
  scroller: {
    flexGrow: "0",
  },
});

const FlightPage = () => {
  const classes = useTabStyles();
  const { where } = useParams();
  const scrollToTop = () => {
    var element = document.getElementById("detailMainWrapper");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const [date, setDate] = React.useState(dayjs("2022-04-17"));
  const [cityOptions, setCityOptions] = useState([]);
  const [value, setValue] = useState(where);
  const [fromCity, setFromCity] = useState(""); // Add state for 'From' city
  const [toCity, setToCity] = useState(""); // Add state for 'To' city
  const [travellers, setTravellers] = useState("1"); // Add state for travellers
  const [departureDate, setDepartureDate] = useState(dayjs(new Date())); // Add state for departure date
  const [returnDate, setReturnDate] = useState(dayjs(new Date())); // Add state for return date

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    scrollToTop();
    setValue(where);
  }, [where]);

  const handleSearchClick = (e) => {
    e.preventDefault();
    const emailContent = `
      From: ${fromCity}
      To: ${toCity}
      Departure Date: ${departureDate.format("DD/MM/YYYY")}
      Return Date: ${returnDate.format("DD/MM/YYYY")}
      Travellers: ${travellers}
    `;

    emailjs
      .send(
        "service_vi7q9io",
        "template_6bhsgru",
        {
          from_name: "",
          to_email: "",
          message: emailContent,
        },
        "cYu6EiV1UyKWKu4q-"
      )
      .then(() => {
        alert("Thank you. I will get back to you as soon as possible.");
      })
      .catch((error) => {
        console.error(error);
        alert("Ahh, something went wrong. Please try again.");
      });
  };

  return (
    <>
      <MianWrapper id="detailMainWrapper">
        <div className="content-wrapper">
          <div className="top-header-content">
            <div>
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box
                    sx={{ borderBottom: 1, borderColor: "divider" }}
                    className="helloo"
                  >
                    <StyledTab
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      classes={{
                        root: classes.root,
                        scroller: classes.scroller,
                      }}
                      sx={{ justifyContent: "center" }}
                    >
                      <Tab label="Domestic" value="1" />
                      <Tab label="International" value="2" />
                    </StyledTab>
                  </Box>
                  <TabPanel value="1">
                    <div className="input-feild">
                      <div className="top-header">
                        <span>Book Domestic Flights</span>
                      </div>
                      <div className="input-content">
                        <LocationInput
                          address={fromCity}
                          setAddress={setFromCity}
                          className="cities"
                        />
                        <img src={swap} alt="swap" />
                        <LocationInput
                          address={toCity}
                          setAddress={setToCity}
                          className="cities"
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            components={["DatePicker", "DatePicker"]}
                          >
                            <DatePicker
                              label="Departure"
                              value={departureDate}
                              onChange={(newValue) =>
                                setDepartureDate(newValue)
                              }
                              format="DD/MM/YYYY"
                            />
                            <DatePicker
                              label="Return"
                              value={returnDate}
                              onChange={(newValue) => setReturnDate(newValue)}
                              format="DD/MM/YYYY"
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                        <TextField
                          required
                          id="outlined-required"
                          label="Travellers"
                          defaultValue="1 Traveller"
                          value={travellers}
                          onChange={(e) => setTravellers(e.target.value)}
                        />
                      </div>
                      <div className="bottom-content">
                        <span className="font12 latoBold">
                          Trending Searches:
                        </span>
                        <div className="from-card">
                          Kochi <img src={right} alt="right" />
                          Goa
                        </div>
                        <div className="from-card">
                          Dubai <img src={right} alt="right" />
                          Delhi
                        </div>
                      </div>
                    </div>
                    <div className="btn-wrapper" onClick={handleSearchClick}>
                      <button>SEARCH</button>
                    </div>
                  </TabPanel>
                  <TabPanel value="2">
                    <div className="input-feild">
                      <div className="top-header">
                        <span>Book International Flights</span>
                      </div>
                      <div className="input-content">
                        <LocationInput
                          address={fromCity}
                          setAddress={setFromCity}
                          className="cities"
                        />
                        <img src={swap} alt="swap" />
                        <LocationInput
                          address={toCity}
                          setAddress={setToCity}
                          className="cities"
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            components={["DatePicker", "DatePicker"]}
                          >
                            <DatePicker
                              label="Departure"
                              value={departureDate}
                              onChange={(newValue) =>
                                setDepartureDate(newValue)
                              }
                            />
                            <DatePicker
                              label="Return"
                              value={returnDate}
                              onChange={(newValue) => setReturnDate(newValue)}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                        <TextField
                          required
                          id="outlined-required"
                          label="Travellers"
                          defaultValue="2 Traveller"
                          value={travellers}
                          onChange={(e) => setTravellers(e.target.value)}
                        />
                      </div>
                      <div className="bottom-content">
                        <span className="font12 latoBold">
                          Trending Searches:
                        </span>
                        <div className="from-card">
                          Kochi <img src={right} alt="right" />
                          New York
                        </div>
                        <div className="from-card">
                          Dubai <img src={right} alt="right" />
                          Singapore
                        </div>
                      </div>
                    </div>
                    <div className="btn-wrapper" onClick={handleSearchClick}>
                      <button>SEARCH</button>
                    </div>
                  </TabPanel>
                </TabContext>
              </Box>
            </div>
          </div>
        </div>
      </MianWrapper>
      <AboutUs className="conatier">
        <h2 className="why-us">
          Why Book With Us?
          <span>
            We offer best airfares, special discounts and a seamless online
            ticket booking experience.
          </span>
        </h2>
        <ul className="why-book">
          <li className="hovicon effect-1 sub-a">
            <img src={shield} alt="assured" />
            <span>
              Assured Best <br />
              Fares
            </span>
          </li>
          <li className="hovicon effect-1 sub-a">
            <img src={customer} alt="24/7" />
            <span>
              24x7 Customer
              <br />
              Support
            </span>
          </li>
          <li className="hovicon effect-1 sub-a">
            <img src={flight} alt="flight" />
            <span>
              One Stop for
              <br />
              All Travel Services{" "}
            </span>
          </li>
          <li className="hovicon effect-1 sub-a">
            <img src={tag} alt="tag" />
            <span>
              Instant Deals on
              <br />
              Flights &amp; Holidays
            </span>
          </li>
        </ul>
      </AboutUs>
      <UpdatedFooter />
    </>
  );
};

export default FlightPage;
const AboutUs = styled.div`
  @media (max-width: 800px) {
    ul {
      display: grid !important;
      grid-template-columns: 1fr 1fr;
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
  .why-us {
    display: grid;
    font-size: 24px;
    margin-top: 20px;
    color: #0b2f6a;
    span {
      font-size: 17px;
      position: relative;
      &::after {
        position: absolute;
        width: 275px;
        left: 0;
        right: 0;
        margin: 0 auto;
        border-bottom: 2px dotted #0b2f6a;
        content: "";
        bottom: -10px;
      }
    }
  }
`;
const MianWrapper = styled.div`
  .helloo {
    position: relative;
    display: flex;
    justify-content: center;
    border-bottom: 0;
    .MuiTabs-scroller {
      background: #eefaffb5;
      border-radius: 30px;
      padding: 10px 20px;
      box-shadow: 0 1px 5px 0 rgb(0 0 0 / 10%);
    }
    .MuiTabs-indicator {
      display: none;
    }
    .Mui-selected {
      color: #ffff !important;
      background: #0b2f6a;
      border-radius: 25px;
      transition: 0.3s all ease;
    }
    .MuiButtonBase-root {
      font-weight: 700;
      letter-spacing: 1px;
      color: #000;
    }
  }
  @media (min-width: 991px) and (max-width: 1210px) {
    .content-wrapper {
      .input-feild {
        width: 820px !important;
      }
    }
  }
  @media (max-width: 990px) {
    height: 100vh;
    .content-wrapper {
      .input-feild {
        width: auto !important;
        padding: 20px;
        .input-content {
          display: grid !important;
        }
      }
    }
  }
  /* margin-top: 60px; */
  height: 85vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  .content-wrapper {
    .top-header-content {
      @media (max-width: 990px) {
        padding-top: 40px;
      }
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;

      display: flex;
      justify-content: center;

      /* .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
        color: #065af3;
      } */
    }
    .btn-wrapper {
      button {
        @media (max-width: 990px) {
          margin: -7px;
        }
        margin: -45px;
        border-radius: 34px;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 3px;
        background: linear-gradient(93deg, #1678c8, #0b2f6a);
        box-shadow: 0 1px 7px 0 rgb(0 0 0 / 20%);
        display: inline-block;
        flex-shrink: 0;
        color: #fff;
        text-transform: uppercase;
        cursor: pointer;
        outline: 0;
        border: 0;
        text-align: center;
        width: 216px;
        padding: 10px;
        transition: 0.5s all ease;
        &:hover {
          background: linear-gradient(93deg, #0b2f6a, #1678c8);
        }
      }
    }
    .input-feild {
      margin-top: 3%;
      background-color: #eefaffb5;
      box-shadow: 0 1px 5px 0 rgb(0 0 0 / 10%);
      width: 1200px;
      border-radius: 30px;
      padding: 1% 50px 1% 50px;
      .top-header {
        padding: 1%;
        span {
          color: #4a4a4a;
          font-size: 22px;
          border-bottom: 1px solid #d5d5d5;
        }
        /* .css-w8dmq8 {
          .css-heg063-MuiTabs-flexContainer {
            justify-content: center;
          }
        } */
      }
      .bottom-content {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
        padding: 10px;
        span {
          color: #4a4a4a;
          font-size: 14px;
        }
        .from-card {
          @media (max-width: 990px) {
            padding: 8px 15px;
          }
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #4a4a4a;
          font-size: 12px;
          padding: 8px 10px;
          border-radius: 4px;
          margin-left: 10px;
          background: #f2f2f2;
          img {
            width: 10px;
            height: 10px;
          }
        }
      }
      .input-content {
        .cities {
          input {
            padding: 28px 20px;
            border: 1px solid #8e918d;
            border-radius: 8px;
            background-color: transparent;
            width: 100%;
          }
        }
        img {
          width: 20px;
          height: 20px;
        }
        gap: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        .MuiStack-root {
          padding-top: 0px;
          overflow: unset;
        }
        .MuiInputBase-root {
          height: 80px;
          font-size: 25px;
        }
        .MuiInputBase-root {
          height: 80px;
          font-size: 25px;
        }
      }
    }
  }
`;
const StyledTab = styled(TabList)``;
