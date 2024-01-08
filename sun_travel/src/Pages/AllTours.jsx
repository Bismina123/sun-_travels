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
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              classes={{ root: classes.root, scroller: classes.scroller }}
            >
              <Tab label="All" value="1" />
              <Tab label="International" value="2" />
              <Tab label="Domestic" value="3" />
              <Tab label="Honeymoon" value="4" />
              <Tab label="Cruise" value="5" />
              <Tab label="MICE" value="6" />
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
  height: 100vh;
  margin-top: 150px;
  justify-content: center;
  margin-left: 10%;
  margin-right: 10%;

  .css-13xfq8m-MuiTabPanel-root {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    &[hidden] {
      display: none;
    }
  }
  @media (max-width: 991px) {
    .css-13xfq8m-MuiTabPanel-root {
      grid-template-columns: 1fr;
    }
  }
  @media (min-width: 991px) and (max-width: 1249px) {
    .css-13xfq8m-MuiTabPanel-root {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
