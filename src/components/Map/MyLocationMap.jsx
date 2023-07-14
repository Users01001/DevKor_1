import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

function MyLocationMap() {
  const [location, setLocation] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLocation(pos);
        },
        () => {
          alert('Error: The Geolocation service failed.');
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert('Error: Your browser doesn\'t support geolocation.');
    }
  }, []);

  const panToLocation = () => {
    if (location && mapRef.current) {
      mapRef.current.panTo(location);
    }
  };

  return (
    location && (
      <div>
        <LoadScript
          googleMapsApiKey = {process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={location}
            zoom={15}
            onLoad={(map) => {
              // Store the Google Map instance in the ref
              mapRef.current = map;
            }}
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
        <button onClick={panToLocation}>Go to My Location</button>
      </div>
    )
  );
}

export default MyLocationMap;
