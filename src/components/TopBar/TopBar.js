import React from "react";
import { AppBar, Toolbar, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import { updateGenderFilter, updateNameFilter } from "../../Helpers";

const useStyles = makeStyles({
  toolBar: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: " rgb(100, 100, 100)",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
  },
});

const TopBar = ({ filter, setFilter }) => {
  const handleGenderChange = (event) => {
    updateGenderFilter(setFilter, event.target.value);
  };
  const handleSearchChange = (event) => {
    updateNameFilter(setFilter, event.target.value);
  };

  const classes = useStyles();
  return (
    <>
      <AppBar variant='elevation' position='fixed'>
        <Toolbar className={classes.toolBar}>
          <MenuItem style={{ fontSize: "1.5rem" }}>Contacts Book</MenuItem>
          <div className={classes.searchBox}>
            <SearchIcon />
            <TextField
              label='Search'
              variant='standard'
              onChange={handleSearchChange}></TextField>
          </div>
          <Select
            value={filter.genderFilter}
            onChange={handleGenderChange}
            displayEmpty>
            <MenuItem value={"All Genders"}>All Genders</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Male"}>Male</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;
