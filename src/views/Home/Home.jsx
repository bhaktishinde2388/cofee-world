import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer.jsx'


import Navbar from '../../components/Navbar/Navbar.jsx'
import Carousel from '../../components/Carousel/Carousel.jsx'
import Coffee1 from '../../assets/images/Coffee-1.jpg'
import Coffee2 from '../../assets/images/Coffee-2.webp'
import Coffee3 from '../../assets/images/Coffee-3.jpg'
import Coffee4 from '../../assets/images/Coffee-4.webp'
import Coffee5 from '../../assets/images/Coffee-5.webp'
import Coffee6 from '../../assets/images/Coffee-6.jpg'
import Coffee7 from '../../assets/images/Coffee-7.webp'
import Coffee8 from '../../assets/images/Coffee-8.webp'
import Coffee9 from '../../assets/images/Coffee-9.webp'
import Coffee10 from '../../assets/images/Coffee-10.webp'
import Coffee11 from '../../assets/images/Coffee-11.webp'
import Coffee12 from '../../assets/images/Coffee-12.png'
import Coffee13 from '../../assets/images/Coffee-13.jpg'

import "./Home.css"

function Home() {

  const carouselImages = [Coffee3, Coffee1, Coffee2, Coffee4, Coffee5, Coffee6, Coffee7, Coffee8,Coffee9,Coffee10,Coffee11,Coffee12,Coffee13];

  return (
    <>
      <Navbar />
      
      <Carousel images={carouselImages} interval={4000} />
     <Footer/>
    </>
  )
}

export default Home