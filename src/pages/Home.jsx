import React from 'react'
import Layout from '../components/Layot/Layout'
import '../styles/Home.css'
import {Link} from 'react-router-dom'
import Banner from '../images/banner1.jpeg'
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food in India</p>
          <Link to="/menu">
            <button>
              Order Now
            </button>
          </Link>
         
        </div>
      </div>
    </Layout>
  )
}

export default Home
