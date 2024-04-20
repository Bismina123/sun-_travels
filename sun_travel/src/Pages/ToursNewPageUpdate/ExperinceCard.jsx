import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useRef } from "react";
import styled from "styled-components";
import TourCard from "./card";
import Slider from "react-slick";
import LeftExperice from "./LeftExperice";
import RightExperice from "./RightExperice";

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

export default function ExperienceCard({
  handleDrag,
  currentPage,
  cardsPerPage,
  dataOne,
  dataTwo,
  dataThree,
  dataFour,
}) {
  const [value, setValue] = React.useState(1);
  // Current carousel page
  const cardContainerRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
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
            Browse by <b>Experience</b>
          </p>
          <Tab label="ALL DESTINATIONS" {...a11yProps(0)} />
          <Tab label="INTERNATIONAL" {...a11yProps(1)} />
          <Tab label="DOMESTIC" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={1}>
        <Box
          ref={cardContainerRef}
          sx={{
            display: "flex",
            gap: "20px",
            overflowX: "scroll",
            scrollSnapType: "x mandatory",
            className: "carousel-container",
            overflow: "visible",
          }}
        >
          <LeftExperice />
          <RightExperice />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CustomSlider {...settings}>
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} style={{ margin: "10px" }}>
              <TourCard />
            </div>
          ))}
        </CustomSlider>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <CustomSlider {...settings}>
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} style={{ margin: "10px" }}>
              <TourCard />
            </div>
          ))}
        </CustomSlider>
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
const CustomSlider = styled(Slider)`
  .slick-slide {
    > div {
      margin-right: 20px;
    }
  }
`;
