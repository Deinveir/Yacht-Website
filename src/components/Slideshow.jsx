import React, {useState, useRef} from 'react'
import "./Slideshow.css"

import Example from "../assets/img/Yacht-Features-1.jpg"
import Example2 from "../assets/img/Yacht-Features-2.jpg"
import Slide_Next from "../assets/img/Icon_Slide-Next.svg"
import Slide_Prev from "../assets/img/Icon_Slide-Prev.svg"

const Slideshow = () => {
  const [sliderIndex, setSliderIndex] = useState(null);
  const [transform, setTransform] = useState(null);
  const sliderContainer = useRef(null);

  function handleNextClick() {
    if (transform > -50){ 
      setTransform(item => item - 50);
    }
  }

  function handlePrevClick() {
    if (transform < 0){ 
      setTransform(item => item + 50);
    }
  }
  return (
    <div className='slideshow-container'>
      <div className='slideshow'>
        <ul style={{
        transform: `translatex(${transform}%)`
      }}>
          <li className='slideshow-item'><img src={Example} alt="" /></li>
          <li className='slideshow-item'><img src={Example2} alt="" /></li>
        </ul>
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
  )
}

export default Slideshow
