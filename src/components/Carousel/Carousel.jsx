import React from 'react'
import { useState } from 'react'

function Carousel({images}) {

  const [img , setImg] = useState(0);

  return (
    <div>
      <p>slide index of current image :{img}</p>
    </div>
  )
}

export default Carousel