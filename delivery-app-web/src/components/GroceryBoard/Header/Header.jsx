import React, { useEffect, useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, circularProgressClasses } from '@mui/material';
import { Menu as MenuIcon, Adb as AdbIcon } from '@mui/icons-material';
import cartIcon from '../../../utils/images/cart-icon.png';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import {logOut} from '../../../redux/userReducer'
import { getToken, getUserDetailsFromToken, removeToken } from '../../../utils/cookie-services/cookie';
import { useSelector } from 'react-redux';



const  Header = () => {
  const token = useSelector((state)=>state.user.token)
  const [userDetails,setUserDetails] = useState();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    token&&setUserDetails(getUserDetailsFromToken())
  }, [])



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

  const handleLogOut = () => {
    logOut();
    removeToken();
    handleCloseUserMenu();
    navigate('/')
  }

  return (
    <AppBar position="static" className='app-bar' sx={{backgroundColor:'#b11f0e'}}>
      <Container maxWidth="none">
        <Toolbar disableGutters>
        <IconButton sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >
          <img className="cart-icon" src={cartIcon}></img>
        </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Instacart
          </Typography>

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
              
              <MenuItem component={Link} to="/instacart/shop" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Shop</Typography>
              </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Contact Us</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Cart</Typography>
                </MenuItem>
             
            </Menu>
          </Box>
          <IconButton  sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} >
          <img className="cart-icon" src={cartIcon}></img>
        </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Instacart
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Shop
              </Button>
              <Button
        
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               Contact Us
              </Button>
              <Button
        
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              Cart
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0,flexDirection:'row' }}>
            {/* <Typography sx={{ display: { xs: 'none', md: 'flex'} }}>{userDetails?.email}</Typography> */}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{color:'#b11f0e',backgroundColor:'#fff'}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' ,p:5}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Typography sx={{p:3,bgcolor:'#b11f0e',color:"#fff"}}>{userDetails?.email}</Typography>
            
                <MenuItem  onClick={handleLogOut} sx={{p:3}}>
                  <Typography textAlign="center">Log Out</Typography>
                </MenuItem>
         
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;