import React from 'react'
import "../styles/Contact.css"
import Layout from '../components/Layot/Layout'
import { Box, Typography } from '@mui/material'

const contact = () => {
  return (
    <Layout>

      <Box sx={{my:5, textAlign:"center"}}>
        <Typography sx={{fontSize:'32px', fontWeight:'bold', my:2}}> Contact US  </Typography>
          <p className='contactpara'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quisquam exercitationem mollitia nisi aliquam aut, qui numquam, molestias accusamus voluptatem incidunt labore itaque, modi ad quo. Facere error nisi nostrum.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis voluptatem provident quod? Ipsum qui similique error eum doloremque voluptatem iste, id, eveniet, eos perspiciatis repellat hic voluptate eaque veniam unde.
          </p>
          <br />
          <p className='contactpara'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio culpa dolore vitae accusamus nisi a impedit, tempora nesciunt, est aut excepturi asperiores voluptatum eaque autem omnis? Quis ab magni nihil.</p>

          <br/>
          <h3 className='heading'>---Contact For any querry---</h3>
<section>
        <div> 
        <form className='contactForm'>
        <input className='name' type='text' name='fname' placeholder='Name'/>
        <br/>
        <input className='name' type='email' name='email' placeholder='Email'></input>
        <br/>
        <input className='name' type='text' placeholder='Subject'/>
        <br/>
        <textArea className='name1' type='text' placeholder='Message'/>
      </form>
      
      <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.49482607495!2d75.69903738855072!3d22.72388828988633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1721377564497!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
    </section>
      </Box>
    </Layout>
  )
}

export default contact
