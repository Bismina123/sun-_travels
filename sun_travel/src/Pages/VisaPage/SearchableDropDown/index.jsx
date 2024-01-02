import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from '@mui/icons-material/Search';
import {
  europeanCountries,
  americanCountries,
  asianCountries,
  australianCountries,
  africanCountries,
} from "./countrylistdata";
function SearchableDropdown({ location }) {
  const styles = {
    tabStyle: {
      "& .MuiStack-root": {
        // width:"500px"
      },
      "& .MuiOutlinedInput-root": {
        background: "#fff",
        borderRadius: "15px",
        boxShadow: " 0px 7px 17px rgb(0 0 0 / 20%)",
        color: "#0b2f6a",
      },
      "& .MuiInputLabel-root": {
        color: "#0b2f6a",
        fontFamily: "Lato",
      },
      "& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
        {
          borderColor: "#fff",
          /* other styles */
        },
      "& .MuiAutocomplete-listbox": {
        maxHeight: "27vh",
      },
      // "& .MuiPopper-root": {
        "& .MuiPaper-root": {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderTop: "1px solid rgba(255, 255, 255, 0.5)",
          borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(5px)",
        },
      // },
    },
  };

  console.log(location, "location");
  let countryOptions = [];

  // Choose the country list based on the location
  switch (location) {
    case "/Visa/europeanVisa":
      countryOptions = europeanCountries.map((country) => country.name);
      break;
    case "/Visa/americanVisa":
      countryOptions = americanCountries.map((country) => country.name);
      break;
    case "/Visa/asianVisa":
      countryOptions = asianCountries.map((country) => country.name);
      break;
    case "/Visa/australianVisa":
      countryOptions = australianCountries.map((country) => country.name);
      break;
    case "/Visa/africanVisa":
      countryOptions = africanCountries.map((country) => country.name);
      break;
    default:
      // Use a default country list or handle the case as needed
      countryOptions = [];
  }
  console.log(countryOptions, "countryOptions");
  return (
    <Stack spacing={2} sx={styles.tabStyle} style={{ width: 500 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={countryOptions}
        // popupOpen={true}
        // open={true}
        // onOpen={true}
        className="muiDropDown"
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for a country"
            InputProps={{
              ...params.InputProps,
              type: "search",
              endAdornment: (
                <>
                  <SearchIcon style={{ marginRight: 8, color: '#0b2f6a' }} />
                  {params.InputProps.startAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </Stack>
  );
}

export default SearchableDropdown;
