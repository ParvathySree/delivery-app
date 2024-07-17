import { Add, Remove } from '@mui/icons-material';
import { IconButton, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../../redux/cartReducer';
import { fetchGroceries } from '../../../../redux/groceryReducer';
import { setLoader } from '../../../../redux/userReducer';
import { getToken } from '../../../../utils/cookie-services/cookie';
import './CartCard.css';

const CartCard = (props) => {
  const { item } = props;
  const token = getToken();
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(setLoader(true))
    const data = {token:token,id : {itemId:id}}
    dispatch(removeFromCart(data)).then(() => {
      dispatch(fetchGroceries(data.token))
  })
  .catch((error) => {

  });
  }

  
  const addItem = (id) => {
    dispatch(setLoader(true))
    const data = {token:token,id : {itemId:id}}
    dispatch(addToCart(data)).then(() => {
      dispatch(fetchGroceries(data.token))
  })
  .catch((error) => {

  });
  }

  return (
    <ListItem  className="cart-item">
      <span className="image-con"><img src={item.image} alt={item.name} /></span>
      <ListItemText className='cart-name' primary={item.name} secondary={`₹${item.quantity * item.minQuantity / 1000} kg`} />
      <span className='action-btn'>
      <IconButton className="cart-btn" onClick={()=>removeItem(item._id)}><Remove /></IconButton>
      <Typography className="cart-btn-txt">{item.quantity}</Typography>
      <IconButton className="cart-btn" onClick={()=>addItem(item._id)}><Add /></IconButton>
      </span>
      <Typography className="item-total">{`₹${item.price * item.quantity}`}</Typography>
    </ListItem>
  );
}

export default CartCard;
