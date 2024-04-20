import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SnCard from "./SnCard";
import { useRef } from "react";
import styled from "styled-components";



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SnExTab({
  handleDrag,
  currentPage,
  cardsPerPage,
  dataOne,
  dataTwo,
  dataThree,
  dataFour
}) {
  const [value, setValue] = React.useState(1);
  // Current carousel page
  const cardContainerRef = useRef(null);

  const handleChange = (
    event,
    newValue,
  ) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <p className="para-title">
            Exclusive <b>Deals</b>
          </p>
          <Tab label="HOT DEAL" {...a11yProps(0)} />
          <Tab label="INTERNATIONAL HOLIDAYS" {...a11yProps(1)} />
          <Tab label="DOMESTIC HOLIDAYS" {...a11yProps(2)} />
          <Tab label="FIXED DEPARTURES" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={1}>
        <Box
          ref={cardContainerRef}
          sx={{
            display: "flex",
            overflowX: "scroll",
            scrollSnapType: "x mandatory",
            className: "carousel-container",
            overflow: "visible",
          }}
        >
          <SnCard
            data={dataOne}
            currentPage={currentPage}
            cardsPerPage={cardsPerPage}
            handleDrag={handleDrag}
          />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box
          ref={cardContainerRef}
          sx={{
            display: "flex",
            overflowX: "scroll",
            scrollSnapType: "x mandatory",
            className: "carousel-container",
            overflow: "visible",
          }}
        >
          <SnCard
            data={dataTwo}
            currentPage={currentPage}
            cardsPerPage={cardsPerPage}
            handleDrag={handleDrag}
          />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Box
          ref={cardContainerRef}
          sx={{
            display: "flex",
            overflowX: "scroll",
            scrollSnapType: "x mandatory",
            className: "carousel-container",
            overflow: "visible",
          }}
        >
          <SnCard
            data={dataThree}
            currentPage={currentPage}
            cardsPerPage={cardsPerPage}
            handleDrag={handleDrag}
          />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Box
          ref={cardContainerRef}
          sx={{
            display: "flex",
            overflowX: "scroll",
            scrollSnapType: "x mandatory",
            className: "carousel-container",
            overflow: "visible",
          }}
        >
          <SnCard
            data={dataFour}
            currentPage={currentPage}
            cardsPerPage={cardsPerPage}
            handleDrag={handleDrag}
          />
        </Box>
      </CustomTabPanel>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  .para-title {
    font-size: 24px;
  }
  .carousel-container {
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    transition: transform 0.3s ease-in-out; /* Add transition properties */
  }
  .MuiButtonBase-root {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    color: #000;
    background-color: transparent;
  }
  .MuiTabs-flexContainer {
    align-items: baseline;
  }
  .Mui-selected {
    color: #d32f2f !important;
  }
  .MuiTabs-indicator {
    background-color: #d32f2f !important;
  }
  .MuiTabs-fixed ::before,
  .MuiTabs-fixed ::after {
    border-color: transparent !important;
  }
`;
