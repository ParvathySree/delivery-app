import React, { useEffect, useState } from 'react';
import "./Cart.css"
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroceries } from '../../../redux/groceryReducer';
import { fetchCartList } from '../../../redux/cartReducer';
import { getToken } from '../../../utils/cookie-services/cookie';





const CartPage = () => {
    const token = getToken()
    const [finalCart,setFinalCart] = useState([])
    const dispatch = useDispatch()
    const groceryList = useSelector((state)=>state.grocery.groceryList)
    const cartObj = useSelector((state)=>state.cart.cartObj)
    const [address, setAddress] = useState('');
    
    
    useEffect(() => {
      const products = filterProducts()
      setFinalCart(products)
  }, [cartObj, groceryList]);

  const filterProducts = () => {
    if (!groceryList || !cartObj) {
        return [];
    }
    const filteredProducts = groceryList.filter((product) => {
        const desiredQuantity = cartObj[product._id];
        return desiredQuantity && desiredQuantity > 0;
    }).map((product) => ({
        ...product,
        quantity: cartObj[product._id]
    }));
    return filteredProducts;
};


 

      
 

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{textAlign:'center',marginTop:'30px',marginBottom:'30px'}}>Your Cart</Typography>
      
      <Paper elevation={3} style={{ marginBottom: '20px', padding: '20px',}}>
        {/* <Typography variant="h6">Items</Typography> */}
        <List sx={{maxHeight:'400px' ,overflow:'auto'}}>
          {finalCart?.map(item => (
            <ListItem key={item.name}>
              <span className='image-con'><img src={item.image}></img> </span>
              <ListItemText primary={item.name} secondary={`₹${item.price}/${item.minQuantity/1000} kg`} />
              <IconButton ><Remove /></IconButton>
              <Typography>{item.quantity}</Typography>
              <IconButton ><Add /></IconButton>
              {/* <Button onClick={() => handleRemoveItem(item.id)}>Remove</Button> */}
            </ListItem>
          ))}
        </List>
      </Paper>
{/*       
      <Paper elevation={3} style={{ marginBottom: '20px', padding: '20px' }}>
        <Typography variant="h6">Order Summary</Typography>
        <Typography>Total Amount: ₹{totalAmount}</Typography>
      </Paper> */}
      
      <Paper elevation={3} style={{ marginBottom: '20px', padding: '20px' }}>
        <Typography variant="h6">Delivery Details</Typography>
        <TextField
          label="Delivery Address"
          variant="outlined"
          fullWidth
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </Paper>
      
      <Button variant="contained" color="primary" fullWidth>Checkout</Button>
    </Container>
  );
};

export default CartPage;
