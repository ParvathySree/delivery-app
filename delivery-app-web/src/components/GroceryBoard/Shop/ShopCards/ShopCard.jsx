import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Button } from '@mui/material';
import './ShopCard.css'
const ShopCard = (props) => {

  const { image, name, description, price, minQuantity } = props.item
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
            <Button variant="outlined" size="small" className="add-btn">
             { "Add +"}
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  )
}

export default ShopCard