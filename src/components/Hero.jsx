import React from 'react'
import "./Hero.css"
import Hero_Bg from "../assets/img/Yacht-Home-Hero.jpg"

const Hero = () => {
  return (
    <div className='hero-container light' style={{
      background : `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(255,255,255,0) 95%, rgba(0,0,0,1) 100%), url("${Hero_Bg}") no-repeat center/cover`
    }}>
      <div className='container'>
        <div className='row'>
          <div className='column'>
            <h1 className='heading-h1'>Yacht Site</h1>
            <p className='text x-large'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            <a href="" className='btn btn-primary'>Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
