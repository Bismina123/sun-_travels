import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import styled from "styled-components";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
function LocationInput({address,setAddress}) {
  const handleChangeAddress = (newAddress) => {
    setAddress(newAddress);
  };
  const handleSelectAddress = (newAddress) => {
    setAddress(newAddress);
    geocodeByAddress(newAddress)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };
  return (
    <Wrapper>
      <PlacesAutocomplete
        value={address}
        onChange={handleChangeAddress}
        onSelect={handleSelectAddress}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="inputDiv">
            <div className="imputerapper">

            <FmdGoodOutlinedIcon/>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input",
              })}
            />
            </div>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    key={suggestion.placeId}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </Wrapper>
  );
}

export default LocationInput;
const Wrapper = styled.div`
  input:focus-visible {
    outline: none;
  }
  .imputerapper{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .inputDiv{
    position: relative;
  }
  .autocomplete-dropdown-container{
    position: absolute;
    transform:translate(-50%,-50%);
    top:90px;
    left:50%;
    width: 100%;
    max-height: 100px;
    overflow: auto;
    border-radius: 5px;
    min-height: 100px;
    /* margin: 10px 20px; */

  }
`;
