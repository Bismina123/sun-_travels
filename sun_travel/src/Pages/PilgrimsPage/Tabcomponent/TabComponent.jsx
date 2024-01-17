import { AppBar, Box, Tab, Tabs } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductPage from "../ProductPage";
import Salespage from "../SalesPage";
import Userspage from "../UsersPage";
import { makeStyles } from "@material-ui/core";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box pt={4}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 640,
  },
}));

function TabComponent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    const pathname = props.history.location.pathname;
    switch (pathname) {
      default:
        setValue(0);
        break;
      case "/users":
        setValue(0);
        break;
      case "/products":
        setValue(1);
        break;
      case "/sales":
        setValue(2);
        break;
    }
  }, [props.history.location.pathname]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" color="inherit" className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Users" component={Link} to="/users" {...a11yProps(0)} />
          <Tab
            label="Products"
            component={Link}
            to="/products"
            {...a11yProps(1)}
          />
          <Tab label="Sales" component={Link} to="/sales" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Userspage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProductPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Salespage />
      </TabPanel>
    </div>
  );
}

export default TabComponent;
