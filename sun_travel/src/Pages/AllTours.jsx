import styled from "styled-components";
import { tourPackages } from "./toursPackages";
import TourCard from "./TourCard";
import { useState } from "react";
import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ListIcon from "@mui/icons-material/List";
import PublicIcon from "@mui/icons-material/Public";
import HomeIcon from "@mui/icons-material/Home";
import WcIcon from "@mui/icons-material/Wc";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import MuseumIcon from "@mui/icons-material/Museum";
const useTabStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
  scroller: {
    flexGrow: "0",
  },
});

const AllTours = () => {
  const { number } = useParams();
  const classes = useTabStyles();
  const [value, setValue] = useState(number);
  const scrollToTop = () => {
    var element = document.getElementById("detailMainWrapper");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  useEffect(() => {
    scrollToTop();
    setValue(number);
  }, [number]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <WrapperCard id="detailMainWrapper">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            className="TabMenu"
          >
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              classes={{ root: classes.root, scroller: classes.scroller }}
            >
              <Tab label="All" value="1" icon={<ListIcon />} />
              <Tab label="International" value="2" icon={<PublicIcon />} />
              <Tab label="Domestic" value="3" icon={<HomeIcon />} />
              <Tab label="Honeymoon" value="4" icon={<WcIcon />} />
              <Tab label="Cruise" value="5" icon={<DirectionsBoatIcon />} />
              <Tab label="MICE" value="6" icon={<MuseumIcon />} />
            </TabList>
          </Box>
          <TabPanel value="1">
            {tourPackages.map((item) => {
              return <TourCard key={item.id} item={item} />;
            })}
          </TabPanel>
          <TabPanel value="2">
            {tourPackages.map((item) => {
              if (item.name == "international") {
                return <TourCard key={item.id} item={item} />;
              }
            })}
          </TabPanel>
          <TabPanel value="3">
            {tourPackages.map((item) => {
              if (item.name == "Domestic") {
                return <TourCard key={item.id} item={item} />;
              }
            })}
          </TabPanel>
          <TabPanel value="4">
            {tourPackages.map((item) => {
              if (item.name == "Honey Moon") {
                return <TourCard key={item.id} item={item} />;
              }
            })}
          </TabPanel>
          <TabPanel value="5">
            {tourPackages.map((item) => {
              if (item.name == "Cruise") {
                return <TourCard key={item.id} item={item} />;
              }
            })}
          </TabPanel>
          <TabPanel value="6">
            {tourPackages.map((item) => {
              if (item.name == "mice") {
                return <TourCard key={item.id} item={item} />;
              }
            })}
          </TabPanel>
        </TabContext>
      </Box>
    </WrapperCard>
  );
};

export default AllTours;
const WrapperCard = styled.div`
  background-color: transparent;
  height: auto;
  padding: 100px 35px 35px 35px;
  justify-content: center;
  background-color: #eef1f4;
  .MuiTabPanel-root {
    padding: 0px !important;
  }

  .TabMenu {
    border-bottom: 1px solid #fff !important;
    .Mui-selected {
      color: #0b2f6a !important;
      background-color: #8aace352;
      border-radius: 10px 10px 0px 0px;
    }

    .MuiTabs-root {
      overflow: hidden;
      border-radius: 10px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
    /* background-color: red; */
    .MuiTabs-flexContainer {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      background-color: #fff;
    }

    .MuiButtonBase-root {
      min-height: auto !important;
      font-size: 15px;
      text-transform: capitalize !important;
      transition: 0.5s all ease-in;
      color: #000;
      .MuiSvgIcon-root {
        width: 20px !important;
      }
    }
    .MuiTab-iconWrapper {
      margin-bottom: 0px !important;
    }
  }
  .MuiTabPanel-root {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 30px;
    &[hidden] {
      display: none;
    }
  }
  @media (max-width: 991px) {
    .MuiTabPanel-root {
      grid-template-columns: auto;
    }
  }
  @media (min-width: 991px) and (max-width: 1249px) {
    .MuiTabPanel-root {
      grid-template-columns: auto auto;
    }
  }
`;
