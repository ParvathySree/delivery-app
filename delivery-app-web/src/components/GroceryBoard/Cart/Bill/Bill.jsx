import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import './Bill.css'

const Bill = (props) => {

    const {totalBill} = props;
    const handlingFee = 5;
    const deliveryFee = 16;

  return (
    <>
          
      <Paper elevation={3} sx={{ marginBottom: '20px', padding: '20px' }}>
        <Typography className='bill-title' variant="h6">Bill Details</Typography>
        <Box className="main-bill">
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography>MRP Total</Typography>
          <Typography>₹{totalBill}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography>Handling Fee</Typography>
          <Typography>₹{handlingFee}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography>Delivery Partner Fee</Typography>
          <Typography>₹{deliveryFee}</Typography>
        </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={2} fontWeight="bold">
          <Typography>To Pay</Typography>
          <Typography>₹{totalBill + handlingFee + deliveryFee}</Typography>
        </Box>
      </Paper>
    </>
  )
}

export default Bill