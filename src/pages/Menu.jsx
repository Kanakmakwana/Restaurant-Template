import React, { Component } from 'react'
import { MenuList } from '../data/data'
import Layout from '../components/Layot/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const Menu = () => {
  return (
    <Layout>
      <h1>Menu</h1>
     <Box sx={{display:'flex' , justifyContent:'center'}}>
      {
        MenuList.map(menu=>(
          <Card sx={{maxWidth:'390px', display:'flex', m:2}}>
            <CardActionArea >
                <CardMedia sx={{minHeight:'400px'}} Component={'img'} src={menu.image} alt={menu.name}/>
                  <CardContent>
                    <Typography varient='h5' gutterBottom component={'div'}
                    >
                      {menu.name}
                    </Typography>
                  </CardContent>
              
            </CardActionArea>
          </Card>
        ))
      }
     </Box>
    </Layout>
  )
}

export default Menu
