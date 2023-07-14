import React from 'react';
import IconButton from '@mui/material/IconButton';
import MyLocationIcon from '@mui/icons-material/MyLocation';

function Footer({ panToLocation }) {
  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
      <IconButton onClick={panToLocation} color="primary" aria-label="go to my location">
        <MyLocationIcon />
      </IconButton>
    </div>
  );
}

export default Footer;
