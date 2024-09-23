import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";

const CitiesInputBar = ({
  value,
  citiesData = [],
  selectedCity,
  setSelectedCity,
  isDisabled = false,
}) => {
  const handleChange = (event) => {
    setSelectedCity(event.target.value); // Set the selected item (city or state)
  };
  return (
    <Box width={"285px"}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{value}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={value}
          value={selectedCity}
          startAdornment={<SearchIcon />}
          onChange={handleChange}
        >
          {citiesData.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

CitiesInputBar.propTypes = {
  value: PropTypes.string.isRequired, // Prop type validation
  citiesData: PropTypes.array.isRequired, // Array of cities
  selectedCity: PropTypes.string, // Selected city
  setSelectedCity: PropTypes.func.isRequired, // Function to set the selected city
  isDisabled: PropTypes.bool, // Disable dropdown when necessary
};

export default CitiesInputBar;
