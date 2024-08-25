import React from 'react'
import "./Home.css"
import App from '../App.jsx'
import Hero from '../components/Hero.jsx'

import Yacht_Sketch from "../assets/img/Yacht_Home_Sketch.jpg"
import Grid_Slider from '../components/Grid_Slider.jsx'
import Slider_Up from '../components/Slider_Up.jsx'

const Home = () => {
  return (
    <div>
      <App>
        <Hero/>
        <div className='deep-water-bg'>
          <div className='about-container padding-default'>
            <div className='container'>
              <div className='row'>
                <div className='column column-left'>
                  <img src={Yacht_Sketch} alt="" />
                </div>
                <div className='column column-right'>
                  <h2 className='heading-h2'>Elegance In Every Voyage</h2>
                  <p className='text'>Our yachts are designed with precision and attention to detail, offering both luxury and performance. Whether you&apos;re exploring new horizons or enjoying a peaceful day on the water, our yachts deliver an unmatched sailing experience.</p>
                  <a href="" className='btn btn-primary-inverse'>Learn more</a>
                </div>
              </div>
            </div>
          </div>
          <div className='features-container light'>
            <div className='container'>
              <div className='row row-2'>
                <div className='column'>
                  <div className='grid-container'>
                    <ul>
                      <li>
                        <h3 className='heading-x-large htertiary'>50</h3>
                        <p className='heading-h3'>Luxury Yachts</p>
                      </li>
                      <li>
                        <h3 className='heading-x-large htertiary'>20</h3>
                        <p className='heading-h3'>Unique Destinations</p>
                      </li>
                      <li>
                        <h3 className='heading-x-large htertiary'>100%</h3>
                        <p className='heading-h3'>Satisfaction</p>
                      </li>
                      <li>
                        <h3 className='heading-x-large htertiary'>24/7</h3>
                        <p className='heading-h3'>Customer Support</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slider_Up/>
        <Grid_Slider/>
      </App>
    </div>
  )
}

export default Home
