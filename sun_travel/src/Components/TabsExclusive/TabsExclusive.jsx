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
        "@media only screen and (min-width: 300px) and (max-width: 1200px)": {
          display: "block",
        },
      },
      "& .MuiButtonBase-root.MuiTab-root": {
        "@media only screen and (min-width: 300px) and (max-width: 1200px)": {
          margin: "11px 3px",
        },
        "@media only screen and (min-width: 300px) and (max-width: 514px)": {
          minWidth: " 90px",
          fontSize: "10px",
        },
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
        "@media only screen and (min-width: 300px) and (max-width: 1200px)": {
          display: "none",
        },
        backgroundColor: "#001499 !important",
      },
    },
  };

  return (
    <WrapperTab>
      <Parallax
        className="image"
        blur={2}
        bgImage="https://res.cloudinary.com/dubjhsibu/image/upload/v1702788563/sun-images/bluesky_apll11.jpg"
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

const WrapperTab = styled.div`
  height: auto;
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
  @media only screen and (min-width: 300px) and (max-width: 1200px) {
    display: block;
    }
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
  @media only screen and (min-width: 300px) and (max-width: 768px) {
    font-size: 25px;
  }
  span {
    color: #001499;
  }
  /* margin-top: 100px; */
`;
