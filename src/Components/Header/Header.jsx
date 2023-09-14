import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import useStyles from "./styles.jsx";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography varient="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography varient="h5" className={classes.h5}>
            {" "}
            Explore New...
          </Typography>
          {/* <Autocomplete> */}
            <div className={classes.search}>
              <div className={classes.icons}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="search..."
                classes={{ root: classes.inputRoot, input: classes.inputinput }}
              />
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
