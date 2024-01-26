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
  const [date, setDate] = React.useState(dayjs("2022-04-17"));
  const [value, setValue] = useState(where);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    setValue(where);
  }, [where]);
  return (
    <>
      <MianWrapper>
        <div className="content-wrapper">
          <div className="top-header-content">
            <div>
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
                        <TextField
                          required
                          id="outlined-required"
                          label="From"
                          defaultValue="Delhi"
                        />
                        <img src={swap} alt="swap" />
                        <TextField
                          required
                          id="outlined-required"
                          label="To"
                          defaultValue="Bengaluru"
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            components={["DatePicker", "DatePicker"]}
                          >
                            <DatePicker
                              label="Departure"
                              value={date}
                              onChange={(newValue) => setDate(newValue)}
                            />
                            <DatePicker
                              label="Return"
                              value={date}
                              onChange={(newValue) => setDate(newValue)}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                        <TextField
                          required
                          id="outlined-required"
                          label="Travellers"
                          defaultValue="1 Traveller"
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
                    <div className="btn-wrapper">
                      <button>SEARCH</button>
                    </div>
                  </TabPanel>
                  <TabPanel value="2">
                    <div className="input-feild">
                      <div className="top-header">
                        <span>Book International Flights</span>
                      </div>
                      <div className="input-content">
                        <TextField
                          required
                          id="outlined-required"
                          label="From"
                          defaultValue="Kochi"
                        />
                        <img src={swap} alt="swap" />
                        <TextField
                          required
                          id="outlined-required"
                          label="To"
                          defaultValue="London"
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer
                            components={["DatePicker", "DatePicker"]}
                          >
                            <DatePicker
                              label="Departure"
                              value={date}
                              onChange={(newValue) => setDate(newValue)}
                            />
                            <DatePicker
                              label="Return"
                              value={date}
                              onChange={(newValue) => setDate(newValue)}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                        <TextField
                          required
                          id="outlined-required"
                          label="Travellers"
                          defaultValue="2 Traveller"
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
                    <div className="btn-wrapper">
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
    margin-top: 15px;
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
    color: #065af3;
    span {
      font-size: 17px;
      position: relative;
      &::after {
        position: absolute;
        width: 275px;
        left: 0;
        right: 0;
        margin: 0 auto;
        border-bottom: 2px dotted #065af3;
        content: "";
        bottom: -10px;
      }
    }
  }
`;
const MianWrapper = styled.div`
  @media (min-width: 991px) and (max-width: 1210px) {
    .content-wrapper {
      .input-feild {
        width: 820px !important;
      }
    }
  }
  @media (max-width: 990px) {
    margin-top: 10%;
    height: 100%;
    .content-wrapper {
      .input-feild {
        width: auto !important;
        .input-content {
          display: grid !important;
        }  
      }
    }
  }
  @media (max-width: 500px) {
    margin-top: 15%;
  }
  margin-top: 7%;
  height: calc(100vh - 400px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1613310023042-ad79320c00ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  .content-wrapper {
    .top-header-content {
      display: flex;
      justify-content: center;
      .css-1gsv261 {
        display: flex;
        justify-content: center;
      }
      .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
        color: #fdfeff;
      }
    }
    .btn-wrapper {
      button {
        margin: -45px;
        border-radius: 34px;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 3px;
        background: linear-gradient(93deg, #53b2fe, #065af3);
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
      }
    }
    .input-feild {
      background-color: #eefaff;
      box-shadow: 0 1px 5px 0 rgb(0 0 0 / 10%);
      width: 1200px;
      border-radius: 15px;
      padding: 1% 50px 1% 50px;
      .top-header {
        padding: 5%;
        span {
          color: #4a4a4a;
          font-size: 22px;
          border-bottom: 1px solid #d5d5d5;
        }
        .css-w8dmq8 {
          .css-heg063-MuiTabs-flexContainer {
            justify-content: center;
          }
        }
      }
      .bottom-content {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
        padding-top: 7%;
        span {
          color: #4a4a4a;
          font-size: 14px;
        }
        .from-card {
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
        img {
          width: 20px;
          height: 20px;
        }
        gap: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        .css-4jnixx-MuiStack-root {
          padding-top: 0px;
          overflow: unset;
        }
        .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root {
          height: 80px;
          font-size: 35px;
        }
        .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
          height: 80px;
          font-size: 35px;
        }
      }
    }
  }
`;
const StyledTab = styled(TabList)``;
