import { IconButton, InputBase, Paper } from '@mui/material';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { setSearchKey } from '../../../../redux/groceryReducer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


const Search = () => {
    const [searchGrocery,setSearchGrocery] = useState('')
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setSearchGrocery(e.target.value)
    }

    useEffect(() => {
      dispatch(setSearchKey(searchGrocery))
    }, [searchGrocery])
    

  return (
   <>
   <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',mb:'20px',mt:'20px'}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1}}
        placeholder='Search "Apple"'
        inputProps={{ 'aria-label': 'search groceries' }}
        value={searchGrocery}
        onChange={(e)=>handleChange(e)}
      />
      {/* <IconButton type="button" sx={{ p: '10px' }} aria-label="search"> */}
        <SearchIcon sx={{ p: '10px',color:'#b11f0e'}}/>
      {/* </IconButton> */}
    </Paper>
   
   </>
  )
}

export default Search