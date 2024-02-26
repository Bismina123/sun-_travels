import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import {
  europeanCountries,
  americanCountries,
  asianCountries,
  australianCountries,
  africanCountries,
  allVisaCountries,
} from "./countrylistdata";

import { useNavigate } from "react-router-dom";
function SearchableDropdown({ location }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const navigate = useNavigate();
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionChange = (event, value) => {
    setSelectedOption(value);

    navigate(`/Visa/australianVisa/${value}`);
  };

  const handleSearchIconClick = () => {
    if (selectedOption) {
      navigate(`/Visa/australianVisa/${selectedOption}`);
    }
  };

  const styles = {
    tabStyle: {
      "& .MuiStack-root": {},
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
        },
      "& .MuiAutocomplete-listbox": {
        maxHeight: "27vh",
      },
      "& .MuiPaper-root": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderTop: "1px solid rgba(255, 255, 255, 0.5)",
        borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(5px)",
      },
    },
  };

  let countryOptions = [];

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
    case "/Visa":
      countryOptions = allVisaCountries.map((country) => country.name);
      break;
    default:
      countryOptions = [];
  }

  return (
    <Stack spacing={2} sx={styles.tabStyle} style={{ width: 500 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={countryOptions}
        value={selectedOption}
        onChange={handleOptionChange}
        className="muiDropDown"
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for a country"
            InputProps={{
              ...params.InputProps,
              type: "search",
              value: searchTerm,
              onChange: handleSearchInputChange,
              endAdornment: (
                <>
                  <SearchIcon
                    style={{
                      cursor: "pointer",
                      marginRight: 8,
                      color: "#0b2f6a",
                    }}
                    onClick={handleSearchIconClick}
                  />
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
