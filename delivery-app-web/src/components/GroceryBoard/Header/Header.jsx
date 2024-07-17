import React, { useEffect, useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, circularProgressClasses, Badge } from '@mui/material';
import { Menu as MenuIcon, Adb as AdbIcon } from '@mui/icons-material';
import cartIcon from '../../../utils/images/cart-icon.png';
import './Header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logOut, setLoader } from '../../../redux/userReducer'
import { getToken, getUserDetailsFromToken, removeToken } from '../../../utils/cookie-services/cookie';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroceries } from '../../../redux/groceryReducer';
import { fetchCartList } from '../../../redux/cartReducer';


const Header = () => {
  const location = useLocation();
  const token = getToken()
  const dispatch = useDispatch()
  const units = useSelector((state) => state.cart.totalCartUnit)
  const groceryList = useSelector((state) => state.grocery.groceryList)
  const [userDetails, setUserDetails] = useState();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(  setLoader(true))
    setUserDetails(getUserDetailsFromToken())
    dispatch(fetchGroceries(token))
  }, [])

  useEffect(() => {
    if(groceryList.length > 0){
      dispatch(fetchCartList(token))
      dispatch(  setLoader(false))
    }
  }, [groceryList])


  const getPathName = () => {
    return location.pathname
  }

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
    <AppBar position="static" className='app-bar' sx={{ backgroundColor: '#b11f0e' }}>
      <Container maxWidth="none">
        <Toolbar disableGutters sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          
          <Button component={Link} to="/instacart/shop" sx={{display:'flex',alignItems:'center', textDecoration: 'none'}}>
          <IconButton >
            <img className="cart-icon" src={cartIcon}></img>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            Instacart
          </Typography>
          </Button>

          <Box sx={{ display:'flex',flexGrow: 0, flexDirection: 'row',alignItems:'center',justifyContent:'center' }}>
          <Tooltip title="Cart">
          <Button
              component={Link} to="/instacart/cart"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block',p:0 }}
            >
              <Badge badgeContent={units} color="error" sx={{ '& .MuiBadge-badge': { backgroundColor: '#fff', color: '#b11f0e' }, paddingLeft: '3px' }}>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Button>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ color: '#b11f0e', backgroundColor: '#fff',height:'30px',width:'30px' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px', p: 5 }}
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
              <Typography sx={{ p: 3, bgcolor: '#b11f0e', color: "#fff" }}>{userDetails?.email}</Typography>

              <MenuItem onClick={handleLogOut} sx={{ p: 3 }}>
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