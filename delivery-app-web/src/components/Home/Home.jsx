import React from 'react';
import iconImg from '../../assets/images/icon.png'
import './Home.css'
import AppDesc from './AppDesc/AppDesc';
import OfferCards from './OfferCards/OfferCards';


const Home = () => {

  return (
    <div className='parent-con'>
        <div className='sub-con'>
            <div className='title-con'>
                <img className="icon-img" src={iconImg}></img>
                <span className='title'>InstaCart.</span>
            </div>
            <div className='menu-con'>
                <span>Sign Up</span>
                <span>Log In</span>
            </div>
        </div>
        <div className='body-con'>
            <AppDesc/>
        </div>
        <div className='card-con'>
            {/* <div className='offer-card-con'><OfferCards/></div>
            <div className='offer-card-con'></div> */}
        </div>
    </div>
  )
}

export default Home