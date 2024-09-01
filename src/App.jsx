import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react';
import './App.css'
import Layout from './components/Layot/Layout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/contact';
import Menu from './pages/Menu';
import PagenotFound from './pages/PagenotFound';
function App() {
  return(
    <>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/menu" element={<Menu />}/>
            <Route path="/pagenotfound" element={<PagenotFound />}/>
          </Routes>
     
    </>
  );
}

export default App
