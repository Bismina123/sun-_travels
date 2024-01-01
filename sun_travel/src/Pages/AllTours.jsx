import styled from "styled-components";
import { tourPackages } from "./toursPackages";
import TourCard from "./TourCard";
import { useState } from "react";
import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const AllTours = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <WrapperCard>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
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
          <TabPanel value="2">International</TabPanel>
          <TabPanel value="3">Domestic</TabPanel>
          <TabPanel value="4">Honeymoon</TabPanel>
          <TabPanel value="5">Cruise</TabPanel>
          <TabPanel value="6">MICE</TabPanel>
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
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  margin-left: 10%;
  margin-right: 10%;
  .css-13xfq8m-MuiTabPanel-root {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;