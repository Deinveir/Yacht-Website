import React, { useRef, useState } from 'react'
import "./Grid_Slider.css"

import { products } from '../assets/data/products.jsx'
import Background_Img from "../assets/img/Yacht_Home_Featured-Products-Bg.jpg"
import Slide_Next from "../assets/img/Icon_Slide-Next.svg"
import Slide_Prev from "../assets/img/Icon_Slide-Prev.svg"
import Yacht_Featured from "../assets/img/Yacht-Home-Featured-Products.png"

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
    <div className='grid-slider-container' style={{
      background : 
      `linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 95%, rgba(255, 255, 255, 1) 100%),
      linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%),
      url("${Background_Img}") no-repeat top/cover`
    }}>
      <div className='container light'>
        <div className='row'>
          <div className='column column-left'>
            <h2 className='heading-h1'>Our Premium Boats</h2>
          </div>
          <div className='column column-right'>
            <a href="" className='btn btn-primary-inverse'>Discover More</a>
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
                    <div className='caption'>
                      <div className='category'>{product.category}</div>
                      <h3 className='heading-h3'>{product.name}</h3>
                      <ul className='attributes'>
                        {product.attributes.map((item, index) => {
                          return <li key={index}>{item}</li>
                        })}
                      </ul>
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
        <div className='row yacht-row'>
          <h2 className='heading-h2'>Featured Yachts</h2>
          <div className='yacht-container'>
            <div className='column column-left'>
              <div>Category</div>
              <h3 className='heading-h3'>Boat Name</h3>
              <p className='text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
              </p>
            </div>
            <div className='column column-center'>
              <img src={Yacht_Featured} alt="" />
            </div>
            <div className='column column-right'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grid_Slider
