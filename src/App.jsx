import React, { useEffect, useState } from "react";
import "./App.css";
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
// import { useTheme } from '@mui/material/styles';
import { getPlaces } from "./Api/index";
import Header from "./Components/Header/Header";
import PlaceDetails from "./Components/Placedetails/PlaceDetails";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";

const App = () => {
  // const theme = useTheme();
  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState(null);
  //  bounds => boundary of the map like a specific geo location 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
        console.log(bounds);
      }
    );
  },[bounds]);
  const get =()=>{}
  useEffect(() => {
    console.log(coords, bounds);
    // getPlaces(bounds)
    get()
      .then((data) => {
        console.log(data);
        setPlaces(data);
      })
      .catch((e) => console.log(e));
  }, [coords, bounds]);
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
          <Map
            setCoords={setCoords}
           setBounds={setBounds}
            coords={coords}
          />
        </Grid>
      </Grid>
      {/* </ThemeProvider> */}
    </>
  );
};

export default App;
