import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import  logo from  './logo/Tinder.png';
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
  return (
    <div className = "header">
        <IconButton>
        <PersonIcon fontSize='large' className='header_icon'></PersonIcon>
       </IconButton>
       <img className='header_logo' src={logo} ></img>
       <IconButton>
        <ForumIcon fontSize='large' className='header_icon'/>
        </IconButton>
    </div>
  )
}

export default Header