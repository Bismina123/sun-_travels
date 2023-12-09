import React from "react";
import { Tabs, Tab } from "@mui/material";
import Flight from "./flightSection.jsx/Flight";
import Hotel from "./HotelSection.jsx/Hotel";
import styled from "styled-components";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import DirectionsBoatFilledOutlinedIcon from "@mui/icons-material/DirectionsBoatFilledOutlined";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import AllCategory from "./AllCategory/AllCategory";
import Cruise from "./CruiseSection/Cruise";
import { Parallax } from "react-parallax";

// Add the entire solid icons library to the FontAwesome library
library.add(fas);
const TabsExclusive = () => {
  const [tabvalue, setTabValue] = React.useState(0);

  const handleTabsChange = (event, newValue) => {
    console.log(event);
    console.log(newValue);
    setTabValue(newValue);
  };
  const styles = {
    tabStyle: {
      "& .MuiTabs-flexContainer": {
        padding: "10px",
      },
      "& .MuiButtonBase-root.MuiTab-root": {
        margin: "11px 0px",
        padding: "0px 0px",
        background: "white",
        // borderRadius: "30px",
        boxShadow: " 0px 7px 17px rgb(0 0 0 / 20%)",
        fontFamily: "Lato",
        color: "#000",
        transition: " transform 0.5s ease",
        minHeight: "45px",
        minWidth: " 110px",
        fontSize: "13px",
        "&.Mui-selected": {
          color: "#fff",
          background: "#001499",
        },
        "&:hover": {
          background: "#0523eb63",
          color: "#fff",
          fontFamily: "Lato",
          transform: "scale(1.05)",
          transition: " transform 0.5s ease",
        },
        "& > .MuiTab-iconWrapper": {
          marginRight: "4px",
          width: "14px",
          height: "15px",
        },
      },

      "& .MuiTabs-indicator": {
        backgroundColor: "#001499 !important",
      },
    },
  };

  return (
    <WrapperTab>
      <Parallax
        className="image"
        blur={2}
        bgImage="https://res.cloudinary.com/dubjhsibu/image/upload/v1701454388/sun-images/bgBlue_o8vbgg.jpg"
        strength={100}
        bgImageStyle={{ minHeight: "100vh" }}
      >
        <HeadingLabel>
          <span>Exclusive</span> Deals from sun
        </HeadingLabel>
        <InnerDiv>
          <Tabs
            sx={styles.tabStyle}
            orientation="vertical"
            onChange={handleTabsChange}
            value={tabvalue}
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="Vertical tabs example"
          >
            <Tab
              label="Hot Deals"
              icon={<WidgetsOutlinedIcon />}
              iconPosition="start"
            />
            <Tab
              label="Flight"
              icon={<FlightOutlinedIcon />}
              iconPosition="start"
            />
            <Tab
              label="Hotel"
              icon={<FontAwesomeIcon icon={faHotel} />}
              iconPosition="start"
            />
            <Tab
              label="Cruise"
              icon={<DirectionsBoatFilledOutlinedIcon />}
              iconPosition="start"
            />

            {/* <Tab label="Menu6" icon={<FontAwesomeIcon icon={['fas', 'island-tropical'] }/> }iconPosition="start"/> */}
          </Tabs>
          {tabvalue === 0 && <AllCategory />}
          {tabvalue === 1 && <Flight />}
          {tabvalue === 2 && <Hotel />}
          {tabvalue === 3 && <Cruise />}
        </InnerDiv>
      </Parallax>
    </WrapperTab>
  );
};

export default TabsExclusive;
const BackDrop = styled.div`
  position: absolute;
  background: rgb(0 0 0 / 20%);
  height: 70%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;
const WrapperTab = styled.div`
  height: 100vh;
  width: 100%;
  .image {
    min-height: 100vh;
    position: relative;
    transition: transform 0.2s ease-in-out;
  }

  .image .content {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }

  .content span.img-txt {
    background-color: #333;
    text-transform: uppercase;
    color: #fff;
    padding: 1rem;
    font-size: 1.5rem;
    letter-spacing: 10px;
  }
  /* background-color: green; */
`;
const InnerDiv = styled.div`
  /* margin: 20px; */
  /* padding: 70px 20px; */
  /* background-color: #8287eed6; */
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  margin: 20px auto;
  padding: 0px 14px;
`;
const HeadingLabel = styled.div`
  font-family: "Lato";
  font-size: 40px;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  margin: 20px auto;
  span {
    color: #001499;
  }
  /* margin-top: 100px; */
`;
