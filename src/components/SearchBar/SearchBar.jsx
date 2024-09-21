import React from "react";
import "./SearchBar.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ value }) => {
  return (
    <Box width={"285px"}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{value}</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          /* value={"age"}  */
          label="State"
          startIcon={<SearchIcon />}
          onChange={() => console.log("Selected data")}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchBar;
