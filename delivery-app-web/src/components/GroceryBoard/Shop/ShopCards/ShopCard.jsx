import React, { useEffect, useState } from 'react'
import { Card, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Button, getListSubheaderUtilityClass, Box, Grid } from '@mui/material';
import './ShopCard.css'
import { Add, Remove } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { getToken } from '../../../../utils/cookie-services/cookie';
import { addToCart,removeFromCart } from '../../../../redux/cartReducer';
import { fetchGroceries } from '../../../../redux/groceryReducer';
import {BeatLoader} from 'react-spinners'
import Loader from '../../../Loader/Loader';

const ShopCard = (props) => {

  const token = getToken()
  const { image, name, description, price, minQuantity,_id } = props.item
  const {units} = props
  const dispatch = useDispatch()
  const [imgLoad,setImgLoad] = useState(true)

  // useEffect(() => {
  //   setImgLoad(true)
  // }, [])
  

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



  // const handleImgLoad = () => {
  //   setImgLoad(true)
  // }

  return (
    <>
     <Box sx={{ width: '100%', margin: '10px',height:'100px' }}>
      <Card sx={{ display: 'flex', width: '100%', elevation: 10 }} className="item-card">
        <Grid container alignItems="center">
          <Grid item xs={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }} >
            <CardMedia
              component="img"
           
              image={image}
              className="item-img"
            />
          </Grid>
          <Grid item xs={5} lg={6}>
            <CardContent  className="card-content">
              <Typography sx={{ fontWeight: 700 }}>{name}</Typography>
              <Typography variant="body2" sx={{ fontStyle: 'italic', fontSize: '10px', fontWeight: '700',color:'#6c6c6c' }}>
                {description}
              </Typography>
              <Typography variant="body2">
                {price + '₹/' + minQuantity / 1000 + 'kg'}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center', paddingRight: '10px' }}>
            <CardActions disableSpacing className="cart-action-con">
              {units === 0 ? (
                <Button variant="outlined" size="small" className="add-btn" onClick={() => addItem(_id)}>
                  {'Add +'}
                </Button>
              ) : (
                <>
                  <IconButton className="unit-btn" onClick={() => removeItem(_id)}>
                    <Remove />
                  </IconButton>
                  <Typography className="unit-txt">{units}</Typography>
                  <IconButton className="unit-btn" onClick={() => addItem(_id)}>
                    <Add />
                  </IconButton>
                </>
              )}
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Box>
    </>
  )
}

export default ShopCard