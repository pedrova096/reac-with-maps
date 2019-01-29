import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const defaultCenter = { lat: 10.9810912, lng: -74.7829539 }
const Map = withGoogleMap((props) =>
{
    console.log(props);
    return(
        <GoogleMap
            defaultZoom={8}
            defaultCenter={defaultCenter}
            center={props.current_location || defaultCenter}
            >
            <Marker position={props.current_location || defaultCenter} />
        </GoogleMap>)
})

export default Map;
