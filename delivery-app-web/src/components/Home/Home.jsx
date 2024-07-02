import React from 'react';
import { Grid } from '@mui/material';
import './Home.css';
import { Outlet,  } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';

const Home = () => {
  const loading = useSelector((state)=>state.user.loading)


  return (
    <>
    <Grid container className='home' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column' }}>
      <Grid item xs={12} sm={10} md={6} lg={6} xl={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='center-box'>
        <Outlet/>
        </div>
      </Grid>
    </Grid>
    {loading &&<Loader loading={loading}/>}
    </>
  );
}

export default Home;
