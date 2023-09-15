import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import { LocationOnOutlined } from "@mui/icons-material";
// import Rating from "@mui/material";

import useStyles from "./styles";

const Map = ({ setCoords, coords, setBounds }) => {
  const classes = useStyles();
  const isMObile = useMediaQuery("(min-width:600px)");
  // const co_ordinates = { lat: 0, lng: 0 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAxI3YPaZ61fjfMwEWOw4muNjpdYLJ888M" }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        option={() => {}}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
