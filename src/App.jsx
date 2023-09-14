import React from "react";
import "./App.css";
import { CssBaseline, Grid ,ThemeProvider } from "@mui/material";
// import { useTheme } from '@mui/material/styles';

import Header from "./Components/Header/Header";
import PlaceDetails from "./Components/Placedetails/PlaceDetails";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";

const App = () => {
  // const theme = useTheme();
  return (
    <>
    {/* <ThemeProvider thme={theme} > */}
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
      {/* </ThemeProvider> */}
    </>
  );
};

export default App;
