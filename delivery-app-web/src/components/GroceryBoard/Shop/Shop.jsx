import Search from './Search/Search';
import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';
import Loader from '../../Loader/Loader';
import './Shop.css'
import ShopCard from './ShopCards/ShopCard'
import { Box } from '@mui/system';
import { Grid } from '@mui/material';




const Shop = () => {
  
  const loading = useSelector((state)=>state.user.loading)
  const cart = useSelector((state)=>state.cart.cartObj)
  const groceryList = useSelector((state)=>state.grocery.groceryList)
  const searchKey = useSelector((state)=>state.grocery.searchKey)
  const [filteredList,setFilteredList] = useState()

  useEffect(() => {
    const data = filterGroceryList()
    setFilteredList(data)
  }, [searchKey])


  useEffect(() => {
    setFilteredList(groceryList)
  }, [groceryList])

  
  

  const filterGroceryList = () => {
    const filtered = groceryList.filter(obj => obj.name.toLowerCase().includes(searchKey.toLowerCase()))
    return filtered;
  }


  const findNumberOfUnits = (id) => {
    if(cart)
    if(!cart[id] || cart[id]===0){
      return 0
    }
    return cart[id]
  }
  
  return (
    <>
    <div className='shop-con'>
      <Box className='search-con'>
      <Search />
      </Box>
      <Grid container spacing={2} className='shop-list'>
        {filteredList?.length > 0 ? filteredList?.map((item, index) => (
          <Grid item xs={10} md={8} lg={8}key={index} className="shop-item" elevation={6}>
            <ShopCard item={item} units={findNumberOfUnits(item._id)} />
          </Grid>
        )) : (
          <Box className='no-data'>Sorry, we couldn't find any results for "{searchKey}".</Box>
        )}
      </Grid>
    </div>
    {loading && <Loader loading={loading} />}
  </>
  );
};

export default Shop;

