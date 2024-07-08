import React from 'react';
import './EmptyCart.css'; // Import the CSS file for styling
import emptyImg from '../../../../utils/images/empty-cart.svg';
import { Box, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <Grid container justifyContent="center" alignItems="center" className="empty-cart-container">
            <Box textAlign="center" className="empty-img-con">
                <img src={emptyImg} alt="Empty Cart" className="empty-cart-img" />
                <h1>Your Cart is getting lonely!</h1>
                <Button
                    component={Link}
                    to="/instacart/shop"
                    variant="contained"
                    sx={{ marginTop: 2, bgcolor: '#b11e0c', fontWeight: 700, '&:hover': { bgcolor: '#BE4333' } }}
                >
                    Start Shopping
                </Button>
            </Box>
        </Grid>
    );
}

export default EmptyCart;
