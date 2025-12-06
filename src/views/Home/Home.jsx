import React, { useEffect, useState } from 'react'
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

import "./Home.css"

function Home() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {

    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  const carouselImages = [Coffee3, Coffee1, Coffee2, Coffee4, Coffee5, Coffee6, Coffee7, Coffee8];

  return (
    <>
      <Navbar />
       <div style={{ padding: '20px' }}>
      {currentUser ? (
        <h1>Welcome, {currentUser.name}!</h1>
      ) : (
        <h1>Welcome, Guest!</h1>
      )}
    </div>
      <Carousel images={carouselImages} interval={4000} />
      Home
    </>
  )
}

export default Home