import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

const SearchBar = ({
  value,
  statesData = [],
  selectedState,
  setSelectedState,
  isDisabled = false,
}) => {
  // Handle change and log the selected value
  const handleChange = (event) => {
    setSelectedState(event.target.value); // Update the local state
    console.log("Selected state data is:", event.target.value);
  };

  return (
    <Box width={"285px"}>
      <FormControl fullWidth>
        <InputLabel required id="demo-simple-select-label">
          {value}
        </InputLabel>
        <Select
          required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={value}
          value={selectedState}
          startAdornment={<SearchIcon />}
          onChange={handleChange}
        >
          {statesData.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired, // Ensure value is a string and required
  statesData: PropTypes.array, // Optional array for statesData (default to empty)
  selectedState: PropTypes.string, // Currently selected state
  setSelectedState: PropTypes.func.isRequired, // Function to set the selected state
};

export default SearchBar;
