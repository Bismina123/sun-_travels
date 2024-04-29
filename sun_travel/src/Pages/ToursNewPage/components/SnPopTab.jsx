import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SnCard from "./SnCard";
import styled from "styled-components";
import Card from "@mui/material/Card";
import { DestinationTable } from "./destinationTable";
import PopCard from "./popCard";
const destinationData = [
  {
    id: 1,
    destination: "Ladakh",
    price: 16625,
    imageUrl:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Ladakh12-3-21.webp",
  },
  {
    id: 2,
    destination: "Kashmir",
    price: 15750,
    imageUrl:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Ladakh12-3-21.webp",
  },
  {
    id: 3,
    destination: "Kerala",
    price: 16250,
    imageUrl:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Ladakh12-3-21.webp",
  },
  {
    id: 4,
    destination: "Chardham",
    price: 195000,
    imageUrl:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Ladakh12-3-21.webp",
  },
  {
    id: 5,
    destination: "Ladakh",
    price: 16625,
    imageUrl:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Ladakh12-3-21.webp",
  },
  {
    id: 6,
    destination: "Kashmir",
    price: 15750,
    imageUrl:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Ladakh12-3-21.webp",
  },
  {
    id: 7,
    destination: "Kerala",
    price: 16250,
    imageUrl:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Ladakh12-3-21.webp",
  },
  {
    id: 8,
    destination: "Chardham",
    price: 195000,
    imageUrl:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Ladakh12-3-21.webp",
  },
  {
    id: 9,
    destination: "Chardham",
    price: 195000,
    imageUrl:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Ladakh12-3-21.webp",
  },
  {
    id: 10,
    destination: "Ladakh",
    price: 16625,
    imageUrl:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Ladakh12-3-21.webp",
  },
  {
    id: 11,
    destination: "Kashmir",
    price: 15750,
    imageUrl:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Ladakh12-3-21.webp",
  },
  {
    id: 12,
    destination: "Kerala",
    price: 16250,
    imageUrl:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Ladakh12-3-21.webp",
  },
  {
    id: 13,
    destination: "Chardham",
    price: 195000,
    imageUrl:
      "https://dhiz4uvf5rpaq.cloudfront.net/deal-files/deal-images/IN/destinations/flight/Domestic/big/webp/Ladakh12-3-21.webp",
  },
];

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

export default function SnPopTab({
  handleDrag,
  currentPage,
  cardsPerPage,
  dataOne,
  dataTwo,
  dataThree,
  dataFour,
}) {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
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
            Popular <b>Destinations</b>
          </p>
          <Tab label="HOT DEAL" {...a11yProps(0)} />
          <Tab label="INTERNATIONAL HOLIDAYS" {...a11yProps(1)} />
          <Tab label="DOMESTIC HOLIDAYS" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={1}>
        <DestinationTable data={destinationData} className="card-left-style" />

        <PopCard
          data={dataOne}
          currentPage={currentPage}
          cardsPerPage={cardsPerPage}
          handleDrag={handleDrag}
          className="card-right"
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Card className="card-left-style">sasd</Card>
        <SnCard
          data={dataTwo}
          currentPage={currentPage}
          cardsPerPage={cardsPerPage}
          handleDrag={handleDrag}
          className="card-right"
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Card className="card-left-style">asasd</Card>
        <SnCard
          data={dataThree}
          currentPage={currentPage}
          cardsPerPage={cardsPerPage}
          handleDrag={handleDrag}
          className="card-right"
        />
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
  .card-right {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5%;
    width: 55%;
    padding: 0px;
    max-height: 100%;
    .card-style {
      width: 100%;
    }
  }
  .MuiTypography-root {
    display: flex;
    gap: 20px;
  }
  .card-left-style {
    width: 45%;
    height: 100%;
  }
  #simple-tabpanel-1 {
    height: 100%;
    padding: 20px 0px;
    > .MuiBox-root:first-child {
      padding: 0px;
    }
  }
  .MuiDataGrid-virtualScrollerRenderZone {
    gap: 15px;
  }
  .MuiDataGrid-row {
    img {
      border-radius: 8px !important;
    }
    :hover {
      img {
        border-radius: 50% !important;
      }
    }
  }
  .MuiDataGrid-columnHeaderTitle {
    font-weight: 600;
    font-size: 12px;
  }
`;
