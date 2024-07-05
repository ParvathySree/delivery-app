import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartList } from '../../../redux/cartReducer';
import { fetchGroceries } from '../../../redux/groceryReducer';
import { setLoader } from '../../../redux/userReducer';
import { getToken } from '../../../utils/cookie-services/cookie';
import Loader from '../../Loader/Loader';
import './Shop.css'
import ShopCard from './ShopCards/ShopCard'




const Shop = () => {
  
  const token = getToken()
  const dispatch = useDispatch();
  const loading = useSelector((state)=>state.user.loading)
  const cart = useSelector((state)=>state.cart.cartObj)
  const groceryList = useSelector((state)=>state.grocery.groceryList)

  useEffect(() => {
    dispatch(setLoader(true))
    dispatch(fetchGroceries(token)).then(()=>{
      dispatch(setLoader(false))
    })
  }, [])

  useEffect(() => {
    dispatch(fetchCartList(token))
  }, [groceryList])



  const findNumberOfUnits = (id) => {
    if(cart)
    if(!cart[id] || cart[id]===0){
      return 0
    }
    return cart[id]
  }
  
  return (
    <>
    <div className='shop-list'>
      {groceryList?.map((item, index) => {
        return <ShopCard item={item} key={index} 
        units={findNumberOfUnits(item._id)}
        />;
      })}
    </div>
     { loading && <Loader loading={loading}/>}
    </>
  );
};

export default Shop;

