import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css';
import { IconButton, InputAdornment, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../redux/userReducer';
import { useDispatch } from 'react-redux';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const INITIAL_FORM_DATA = {
    email: '',
    password: '',
  }
  
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const [formData,setFormData] = useState(INITIAL_FORM_DATA );

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
      const handleMouseDownPassword = () => {
        setShowPassword(true);
      };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("first")
        const body = {email : formData.email, password : formData.password}
        userLogin(body)
   
    };

    const userLogin = (body) => {
        try{
          dispatch(loginUser(body))
        }
        catch(e){
    
        }
      }

    const handleNavigate = () => {
        navigate("/signup");
    };

    return (
        <>
            <h1 className='title'>
                Start Shopping Now!
            </h1>
            <form onSubmit={handleSubmit} >
                <TextField
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    fullWidth
                    required
                    size='small'
                    className='textbox'
                    sx={{ borderRadius: 10 }}
                    name="email"
                />
                <TextField
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    margin="normal"
                    fullWidth
                    required
                    size='small'
                    className='textbox'
                    name="password"
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                />
                <Typography sx={{ mt: 2 }}>
                    <span className='acc-text'>Don't have an account yet?</span>
                    <span onClick={handleNavigate} className='signup-btn'>{" " + "Sign up"}</span>
                </Typography>
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2, bgcolor: '#b11e0c', fontWeight: 700, '&:hover': { bgcolor: '#BE4333' } }}>
                    Log in
                </Button>
            </form>
        </>
    );
};

export default Login;
