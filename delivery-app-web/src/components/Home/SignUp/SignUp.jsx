import { Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import React, {  useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  signupUser } from '../../../redux/userReducer';


const INITIAL_FORM_DATA = {
  email: '',
  password: '',
  repassword: ''
}


const SignUp = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [noMatch,setNoMatch] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  

  const handleSubmit = (event) => {
    event.preventDefault();
    setNoMatch(!(formData.password === formData.repassword))
    if(!noMatch){
      const body = {email : formData.email, password : formData.password}
      newUserSignUp(body)
    }
  };

  const newUserSignUp = async (body) => {
    try{
      const response = await dispatch(signupUser(body))
    }
    catch(e){

    }
  }


  const handleNavigate = () => {
    navigate("/login");
  }

  return (
    <>
      <h1 className='title'>
        Join Us
      </h1>
      <form onSubmit={handleSubmit}>
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
          type='password'
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
          size='small'
          className='textbox'
          name='password'
          error={noMatch}
          inputProps={{minLength: 8}}
        />
        <TextField
          label="Re-enter Password"
          type="password"
          value={formData.repassword}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
          size='small'
          className='textbox'
          name='repassword'
          error={noMatch}
          inputProps={{minLength: 8}}
          helperText={noMatch?"Passwords does not match.":""}
        />
        <Typography sx={{ mt: 2 }}><span className='acc-text'>Already have an account?</span><span onClick={handleNavigate} className='signup-btn'>{" " + "Log In"}</span></Typography>
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2, bgcolor: '#b11e0c', fontWeight: 700, '&:hover': { bgcolor: '#BE4333' } }}>
          Sign Up
        </Button>
      </form>
    </>
  )
}

export default SignUp