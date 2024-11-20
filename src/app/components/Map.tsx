'use client'
import React from 'react'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Map({location}:any) {
    const mapContainerStyle = {
      width: "100%",
      height: `${location.height}px`,
    };

    const center = {
      lat: location.center.lat, 
      lng: location.center.lng, 
    };
    const markerDetails = {
      name: `Imara Fellowship`, 
      position: { lat: location.center.lat, lng: location.center.lng },
    };
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY || ""}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={location.zoom}
      >
        <Marker
          position={markerDetails.position}
          label={{
            text: markerDetails.name,
            color: `#1D4C94`,
            fontSize: "14px",
            fontWeight: "bold",
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map