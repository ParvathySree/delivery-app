import Login from '../Home/Login/Login';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { getToken } from '../../utils/cookie-services/cookie';
import Header from './Header/Header'
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';

const GroceryBoard = () => {

 

  return (
    <>
      <Outlet />
    </>
  )
}

export default GroceryBoard