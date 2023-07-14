import React, { useState, useEffect } from 'react';
import { Autocomplete } from '@react-google-maps/api';

function SearchBar({ google }) {
  const [autocomplete, setAutocomplete] = useState(null);

  useEffect(() => {
    if (!google) return;
    setAutocomplete(new google.maps.places.Autocomplete());
  }, [google]);

  const handlePlaceChanged = () => {
    if (autocomplete !== null) {
      console.log(autocomplete.getPlace());
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  return (
    <input
      type="text"
      placeholder="Search location"
      style={{ width: 200 }}
      onPlaceChanged={handlePlaceChanged}
    />
  );
}

export default SearchBar;
