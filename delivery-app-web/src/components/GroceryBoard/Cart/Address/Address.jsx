import { Box, Button, FormControl, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './Address.css'

const INITIAL_ADDR = {house:'',area:''}
const Address = () => {

    const [address,setAddress] = useState(INITIAL_ADDR)
    const placeOrder = () => {

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAddress({
          ...formData,
          [name]: value
        });
      };
    

    return (
        <>
            <Paper elevation={3} style={{ marginBottom: '20px', padding: '20px' }}>
                <Typography variant="h6" sx={{fontWeight:700}}>Delivery Details</Typography>
                <form onSubmit={placeOrder} >
                    <Box className="addr-form">
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        name='house'
                        size="small"
                        required
                        fullWidth
                        className='txt-box'
                        label='House / Flat / Block No.'
                        value={address.house}
                        onChange={handleChange}
                    />
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        size="small"
                        fullWidth
                        required
                        name='area'
                        className='txt-box'
                        label='Apartment / Road / Area'
                        value={address.area}
                        onChange={handleChange}
                    />
                    </Box>
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2, bgcolor: '#b11e0c', fontWeight: 700, '&:hover': { bgcolor: '#BE4333' } }}>Checkout</Button>
                </form>
            </Paper>
        </>
    )
}

export default Address