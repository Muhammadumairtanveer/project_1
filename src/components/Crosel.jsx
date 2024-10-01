import React from 'react'


import Umair from "../assets/pic2.jpg"
import Umair3 from "../assets/pic3.jpg"
import Umair4 from "../assets/pic4.jpg"
import Umair5 from "../assets/pic5.jpg"
import Umair6 from "../assets/pic6.jpg"
import Umair7 from "../assets/pic7.jpg"
import Umair8 from "../assets/pic8.jpg"


const Crosel = () => {
  return (
    <div>
        <div className="carousel carousel-end rounded-box">
  <div className="carousel-item">
    <img className='w-80 h-80' src={Umair} alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
    className='w-80 h-80'
      src={Umair3}
          />
  </div>
  <div className="carousel-item">
    <img
    className='w-80 h-80'
      src={Umair4}
      />
  </div>
  <div className="carousel-item">
    <img
    className='w-80 h-80'
      src={Umair5}
      alt="Drink" />
  </div>
  <div className="carousel-item">
    <img  className='w-80 h-80' src= {Umair6} />
  </div>
  <div className="carousel-item">
    <img 
    className='w-80 h-80'

    
    src= {Umair7} />
  </div>
  <div className="carousel-item">
    <img
    className='w-80 h-80'
      src= {Umair8} />
  </div>
</div>




    </div>
  )
}

export default Crosel