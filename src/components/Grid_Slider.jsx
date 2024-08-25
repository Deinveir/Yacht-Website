import React, { useRef, useState } from 'react'
import "./Grid_Slider.css"

import { products } from '../assets/data/products.jsx'
import Background_Img from "../assets/img/Yacht_Home_Featured-Products-Bg.jpg"
import Slide_Next from "../assets/img/Icon_Slide-Next.svg"
import Slide_Prev from "../assets/img/Icon_Slide-Prev.svg"

const Grid_Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(null);
  const [transform, setTransform] = useState(null);
  const sliderContainer = useRef(null);

  function handleNextClick() {
    if (transform > -66.66){ 
      setTransform(item => item - 33.33);
    }
  }

  function handlePrevClick() {
    if (transform < 0){ 
      setTransform(item => item + 33.33);
    }
  }

  return (
    <div className='grid-slider-container'>
      <div className='container'>
        <div className='row'>
          <div className='column column-left'>
            <h2 className='heading-h1'>Sailing In For Every Occasion</h2>
          </div>
          <div className='column column-right'>
            <a href="" className='btn btn-default'>Discover More</a>
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            <div className='grid-slider'>
              <ul ref={sliderContainer} style={{
                transform: `translatex(${transform}%)`
              }}>
                {products.map((product) => {
                  return(
                    <li className='grid-item' key={product.id}>
                    <div className='image-container'>
                      <img src={product.imageId} alt="" />
                      {console.log(product.imageId)}
                    </div>
                    <div className='caption light'>
                      <h3 className='heading-h32'>{product.name}</h3>
                      <div className='category'>{product.category}</div>
                    </div>
                  </li>
                  )
                })}
              </ul>
              <div className='navigation'>
                <div className='dotnav'>
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div className='slidenav'>
                  <a className='slide-prev' onClick={handlePrevClick}>
                    <img src={Slide_Prev} alt="" />
                  </a>
                  <a className='slide-next' onClick={handleNextClick}>
                    <img src={Slide_Next} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grid_Slider
