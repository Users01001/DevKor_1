// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchBar from '../SearchBar/SearchBar';

// function Header() {
//   return (
//     <AppBar position="static" style={{ background: 'midnightblue' }}>
//       <Toolbar>
//         <IconButton edge="start" color="inherit" aria-label="menu">
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center', color: 'white' }}>
//           내로마로
//         </Typography>
//         <SearchBar />
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="poderblue"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}style={{ flexGrow: 1, textAlign: 'center', color: 'white' }}>
          내로마로
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
