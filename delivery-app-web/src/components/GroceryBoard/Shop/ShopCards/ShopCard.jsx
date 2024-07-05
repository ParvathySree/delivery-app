import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Button, getListSubheaderUtilityClass } from '@mui/material';
import './ShopCard.css'
import { Add, Remove } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { getToken } from '../../../../utils/cookie-services/cookie';
import { addToCart,fetchCartList,removeFromCart } from '../../../../redux/cartReducer';
import { fetchGroceries } from '../../../../redux/groceryReducer';
const ShopCard = (props) => {

  const token = getToken()
  const { image, name, description, price, minQuantity,_id } = props.item
  const {units} = props
  const dispatch = useDispatch()

  const removeItem = (id) => {
    const data = {token:token,id : {itemId:id}}
    dispatch(removeFromCart(data)).then(() => {
      dispatch(fetchGroceries(data.token))
  })
  .catch((error) => {

  });
  }

  
  const addItem = (id) => {
    const data = {token:token,id : {itemId:id}}
    dispatch(addToCart(data)).then(() => {
      dispatch(fetchGroceries(data.token))
  })
  .catch((error) => {

  });
  }

  return (
    <>
      <Card sx={{ maxWidth: 345, margin: 2 }} className="item-card">
        <CardMedia
          component="img"
          height="194"
          width="300"
          image={image}
          className="item-img"
        />
        <CardContent sx={{ backgroundColor: '#b11f0e', color: "#fff" ,pb:0}} className="card-content">
          <Typography sx={{ fontWeight: 700, textAlign: 'center' }}>{name}</Typography>
          <Typography variant="body2" sx={{ textAlign: 'center', fontStyle: 'italic' }}>
            {description}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            {price + "₹/" + minQuantity / 1000 + "kg"}
          </Typography>
          <CardActions disableSpacing>
            {
            units === 0 ?
            <Button variant="outlined" size="small" className="add-btn" onClick={()=>addItem(_id)}>
             { "Add +"}
            </Button> : 
            <>
             <IconButton className='unit-btn' onClick={()=>removeItem(_id)} ><Remove /></IconButton>
             <Typography className=' unit-txt'>{units}</Typography>
             <IconButton className='unit-btn' onClick={()=>addItem(_id)}><Add /></IconButton>
            </>
            }
          </CardActions>
        </CardContent>
      </Card>
    </>
  )
}

export default ShopCard