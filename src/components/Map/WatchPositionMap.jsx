// import React, { useRef, useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import { useWatchPosition } from '../hooks/useWatchPosition';
// import SearchBar from '../SearchBar/SearchBar';
// import RoomIcon from '@mui/icons-material/Room';

// // import Header from '../Header/Header.jsx';
// import Footer from '../Footer/Footer.jsx';

// const containerStyle = {
//   width: '100%',
//   height: '80vh'
// };

// function WatchPositionMap() {
//   const [location, setLocation] = useState(null);
//   const mapRef = useRef();
//   const watchIdRef = useRef();
//   const [googleMapLibraries, setGoogleMapLibraries] = useState(null);

//   const [google, setGoogle] = useState(null);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       watchIdRef.current = navigator.geolocation.watchPosition(
//         (position) => {
//           const pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           setLocation(pos);
//         },
//         () => {
//           alert('Error: The Geolocation service failed.');
//         },
//         { enableHighAccuracy: true }
//       );
//     } else {
//       alert('Error: Your browser doesn\'t support geolocation.');
//     }

//     // Clean up function
//     return () => {
//       if (watchIdRef.current) {
//         navigator.geolocation.clearWatch(watchIdRef.current);
//       }
//     };
//   }, []);

//   const panToLocation = () => {
//     if (location && mapRef.current) {
//       mapRef.current.panTo(location);
//     }
//   };

//   return (
//     location && (
//       <div>
//         <LoadScript
//           googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
//           libraries={["places"]}
//           onLoad={() => setGoogle(window.google)}
//         >
//           <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={location}
//             zoom={15}
//             onLoad={(map) => {
//               // Store the Google Map instance in the ref
//               mapRef.current = map;
//             }}
//           >
//             {googleMapLibraries && (
//               <Marker
//                 position={location}
//                 icon={{
//                   url: RoomIcon,
//                   scaledSize: new googleMapLibraries.Size(35, 35),
//                 }}
//               />
//             )}
//           </GoogleMap>
//           <SearchBar google={google} />
//         </LoadScript>
//         <Footer panToLocation={panToLocation} />
//       </div>
//     )
//   );
// }

// export default WatchPositionMap;
import React, { useRef, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useWatchPosition } from '../hooks/useWatchPosition';
import SearchBar from '../SearchBar/SearchBar';
import RoomIcon from '@mui/icons-material/Room';
import Footer from '../Footer/Footer';

const containerStyle = {
  width: '100vw',
  height: '100vh',
};

function WatchPositionMap() {
  const { lat, lng } = useWatchPosition();
  const mapRef = useRef();
  const [googleMapLibraries, setGoogleMapLibraries] = useState(null);

  const location = {
    lat: lat,
    lng: lng,
  };

  const panToLocation = () => {
    const map = mapRef.current;
    if (map) {
      map.panTo(location);
    }
  };

  return (
    location && (
      <div>
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          libraries={["places"]}
          onLoad={(googleMapLibraries) => setGoogleMapLibraries(googleMapLibraries)}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={location}
            zoom={15}
            onLoad={(map) => {
              mapRef.current = map;
            }}
          >
            {googleMapLibraries && (
              <Marker
                position={location}
                icon={{
                  url: RoomIcon,
                  scaledSize: new googleMapLibraries.Size(35, 35),
                }}
              />
            )}
          </GoogleMap>
          <SearchBar googleMapLibraries={googleMapLibraries} />
        </LoadScript>
        <Footer panToLocation={panToLocation} />
      </div>
    )
  );
}

export default WatchPositionMap;
