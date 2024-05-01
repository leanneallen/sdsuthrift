import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import Brightness4Icon from '@mui/icons-material/Brightness4';  // Importing the dark mode icon
import { useTheme } from './ThemeContext'; // Import useTheme hook
import LogoHeader from '../assets/LogoHeader.png';

const pages = ['Home', 'Listings', 'About', 'Support'];
const settings = ['Profile', 'Settings', 'Signup', 'Login', 'Logout'];

function Header() {
  const { toggleTheme } = useTheme(); // Get toggleTheme from context
  const user = useUser();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="fixed" style={{ top: 0, left: 0, right: 0 }} sx={{ backgroundColor: '#A6192E' }}>
          <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center'}}>

              <Box sx={{ display: { xs: 'none', md: 'flex'}}}>
                <img src={LogoHeader} alt='SDSU Thrift Logo' style={{ width: 65, height: 50, marginRight: 20}}/> 
              </Box>
                
              <Typography
                variant="h6"
                noWrap
                component={RouterLink} to="/"
                href="#Header"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                SDSU Thrift
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page}
                    onClick={handleCloseNavMenu}
                    component={RouterLink} to={"/" + page}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component={RouterLink} to="/"
              href="#Header"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              SDSU Thrift
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  component={RouterLink} to={"/" + page}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Toggle theme">
                <IconButton onClick={toggleTheme} color="inherit">
                  <Brightness4Icon />
                </IconButton>
              </Tooltip>

              <SignedOut>
                <Tooltip title="Sign In">
                  <SignInButton>
                    <Button color="inherit">Sign In</Button>
                  </SignInButton>
                </Tooltip>
              </SignedOut>
              <SignedIn>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <UserButton />
                  </IconButton>
                </Tooltip>
              </SignedIn>
            </Box>
          </Toolbar>
      </AppBar>
    </>
  );
}
export default Header;
