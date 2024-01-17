import React, { useEffect } from "react";
import { BrowserRouter, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import TabComponent from "./Tabcomponent/tabComponent";
import { Box, Tab } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import umrah from "./assets/kaaba.svg";
import hajj from "./assets/hajj.svg";
import holy from "./assets/christian.svg";
import hajjMain from "./assets/beautiful-view-city-mecca-also-place-worship-kaaba.jpg";
import ProductPage from "./ProductPage";
import Userspage from "./UsersPage";
import Salespage from "./SalesPage";

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
        justifyContent: "center",
        gap: "20px",
        padding: "10px",
        position: "absolute",
        top: "23%",
        transform:" translate(-50%, -50%)",
        left: "50%"
      },
      "&  .MuiTab-root": {
        background: "#fff ",
        height: " 80px",
        width: " 110px",
        borderRadius: "7px",
        display: "block",
        textAlign: "-webkit-center",
        fontSize: "14px",
        boxShadow: "0 3px 5px 0 rgba(0,0,0,.3)",
        fontFamily: "Lato !important",
        fontWeight: 700,
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
        marginTop: "38%",
      },
    },
  };
  const location = useLocation();
  let currentvalue = "";
  switch (location.pathname) {
    case "/pilgrims/umra":
      currentvalue = "1";

      break;
    case "/pilgrims/hajj":
      currentvalue = "2";

      break;
    case "/pilgrims/holiland":
      currentvalue = "3";

      break;
    case "/pilgrims":
      currentvalue = "1";

      break;

    default:
    // Use a default country list or handle the case as needed
  }
  const [value, setValue] = React.useState(currentvalue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    setValue(currentvalue);
  }, [location.pathname]);
  return (
    <PilgrimsWrapper>
      <MainWrapper>
        <img src={hajjMain} alt={hajjMain} />
        <div className="boxShadow"></div>
      </MainWrapper>
      <BackgroundWrapper>hiii</BackgroundWrapper>
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
                <ProductPage />
              </TabPanel>
              <TabPanel value="2">
                <Userspage />
              </TabPanel>
              <TabPanel value="3">
                <Salespage />
              </TabPanel>
            </Box>
          </TabContext>
        </Box>
      </TabWrapper>
    </PilgrimsWrapper>
  );
}

export default PilgrimsPage;
const PilgrimsWrapper = styled.div`
  position: relative;
  height: 100vh;
  background-color: red;
  padding-top: 80px;
  .pilGrimstabHeading {
    img {
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
  height: 135px;
  border-radius: 6px;
  padding-top: 40px;
`;
