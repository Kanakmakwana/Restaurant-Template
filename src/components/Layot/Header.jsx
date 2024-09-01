import React from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from'@mui/material';
import {Link} from 'react-router-dom';
import '../../styles/Header.css';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
function Header(){
  const [mobileOpen,setMobileOpen]=useState(false)
  //handle menu click
  const handleToggle=()=>{
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer=(
    <Box onClick={handleToggle} sx={{textAlign:'center'}}>
      <Typography
              color={"goldenrod"}
               variant='h6' 
               component='div' 
              sx={{flexGrow: 1, my:2}}
            >
                <FastfoodIcon/>
                My Restaurant
            </Typography>
           <Divider />
              <ul className='mobile-menu'>
                <li>
                  <Link to={'/'}> Home </Link>
                </li>
                <li>
                  <Link to={'/about'}> About </Link>
                </li>
                <li>
                  <Link to={'/contact'}> Contact </Link>
                </li>
                <li>
                  <Link to={'/menu'}> Menu </Link>
                </li>
              </ul>
            
    </Box>
  )
  return (
    <div>
     <Box>
        <AppBar component={'nav'} sx={{bgcolor:"black"}}>
          <Toolbar>
            <IconButton 
              color='inherit'
              aria-label='open drawer'
              edge='start'
              sx={{
                mr: 2,
                display:{sm:'none'}
              }}
              onClick={handleToggle}
            >
              <MenuIcon/>
            </IconButton>
            <Typography
              color={"goldenrod"}
               variant='h6' 
               component='div' 
              sx={{flexGrow: 1}}
            >
                <FastfoodIcon/>
                My Restaurant
            </Typography>
            <Box sx={{display: {xs:'none',sm:'block'}}}>
              <ul className='navigation-menu'>
                <li>
                  <Link to={'/'}> Home </Link>
                </li>
                <li>
                  <Link to={'/about'}> About </Link>
                </li>
                <li>
                  <Link to={'/contact'}> Contact </Link>
                </li>
                <li>
                  <Link to={'/menu'}> Menu </Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
          
        </AppBar>
              <Box component={'nav'}>
                  <Drawer  variant='temporary' open={mobileOpen} 
                  onClose={handleToggle}
                  sx={{display:{xs:'block', sm:'none'},
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                  width: '240px',
                  boxSizing: 'border-box',
              },}}
                  >
                    {drawer}
                  </Drawer>
              </Box>
              <Box>
                 <Toolbar/>
              </Box>
              
     </Box>
    </div>
  )
}

export default Header
