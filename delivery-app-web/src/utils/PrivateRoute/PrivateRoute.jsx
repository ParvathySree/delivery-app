import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../../components/GroceryBoard/Header/Header';
import { setJwtToken } from '../../redux/userReducer';
import { getToken } from '../cookie-services/cookie';

const PrivateRoute = () => {
    // debugger;
    const jwtToken = useSelector((state)=>state.user.token)
    const [token,setToken] = useState(getToken())

    useEffect(() => {
      setToken(getToken())
    }, [jwtToken])
    

    return token ? <><Header/><Outlet/></> : <Navigate to="/"  />;
};

export default PrivateRoute;
