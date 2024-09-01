import React from 'react'
import "../styles/About.css"
import Layout from '../components/Layot/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{my:15,
        textAlign:"center"
      }}>
        <Typography sx={{fontWeight:'bold', fontSize:'32px', margin:'20px'}}> Welcome To My Restaurant</Typography>
        <p className='Aboutpara'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nobis, autem praesentium saepe unde dicta! Architecto officia tempora cupiditate, nostrum alias laudantium eaque? Nihil, deserunt magnam unde sunt libero quisquam.
        </p>
        <br/>
        <p className='Aboutpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facilis doloribus excepturi porro, dolor fugiat. Deserunt accusantium assumenda magni nemo facere, asperiores obcaecati ullam voluptate et harum, tempore iste quibusdam.
        </p>
      </Box>
    </Layout>
  )
}

export default About
