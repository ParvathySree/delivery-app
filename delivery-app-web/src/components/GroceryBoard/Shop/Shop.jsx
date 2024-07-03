import React from 'react'
import './Shop.css'
import ShopCard from './ShopCards/ShopCard'
import { items } from '../../../utils/constants/contants'
import Header from '../Header/Header';


const Shop = () => {
  const itemArray = items; 

  return (
    <>
    <div className='shop-list'>
      {itemArray.map((item, index) => {
        return <ShopCard item={item} key={index} />;
      })}
    </div>
    </>
  );
};

export default Shop;

