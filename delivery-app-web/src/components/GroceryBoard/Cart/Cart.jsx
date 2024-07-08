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
import CartCard from './CartCard/CartCard';
import Bill from './Bill/Bill';
import Address from './Address/Address';
import EmptyCart from './EmptyCart/EmptyCart';
import Loader from '../../Loader/Loader';

const CartPage = () => {
    const token = getToken()
    const [finalCart,setFinalCart] = useState([])
    const dispatch = useDispatch()
    const groceryList = useSelector((state)=>state.grocery.groceryList)
    const cartObj = useSelector((state)=>state.cart.cartObj)
    const loading = useSelector((state)=>state.user.loading)
    const [total,setTotal] = useState(0);
    
    useEffect(() => {
      const products = filterProducts()
      setFinalCart(products)
  }, [cartObj, groceryList]);

  useEffect(() => {
    getOrderTotal()
  }, [finalCart])
  


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

  const getOrderTotal = () => {
    const totalSum = finalCart?.reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);
    setTotal(totalSum)
  }


  function isValidObject(obj) {
    return Object.keys(obj).length === 0 || Object.values(obj).every(value => value <= 0);
  }


      
 

  return (
    <>
    {!isValidObject(cartObj) ?
    <Container>
      <Typography variant="h4" gutterBottom sx={{textAlign:'center',marginTop:'30px',marginBottom:'30px'}}></Typography>
      <Paper elevation={3} style={{ marginBottom: '20px',  padding: {
          xs: '8px',  
          sm: '12px', 
          md: '16px', 
          lg: '20px', 
          xl: '24px'  
        }}} >
        <List sx={{maxHeight:'400px' ,overflow:'auto'}}>
          {finalCart?.map(item => (
            <CartCard key={item._id} item={item}/>
          ))}
        </List>
      </Paper>
      <Bill totalBill = {total} />
      <Address/>
    </Container>
    :
    <EmptyCart/>
  }
    {loading&& <Loader loading={loading}/>}
    </> 
  );
};

export default CartPage;
