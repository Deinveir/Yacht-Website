import React from 'react'
import "./Slider_Up.css"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Yacht_Featured from "../assets/img/Yacht-Home-Featured-Products.png"
import Slideshow from './Slideshow';
import Background_Img from "../assets/img/Yacht_Home_Featured-Products-Bg.jpg"

const Slider_Up = () => {
  return (
    <div className='slider-up-container' style={{
      background : 
      `linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
      url("${Background_Img}") no-repeat bottom/cover`
    }}>
      <div className='container light'>
        <div className='row yacht-row'>
            <h2 className='heading-h1'>Featured Yachts</h2>
            <div className='yacht-container'>
              <div className='column column-left'>
                <div className='category uppercase'>Category</div>
                <h3 className='heading-h2 hprimary'>Boat Name</h3>
                <p className='text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                </p>
                <div className='accordion-container'>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Accordion 1
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Accordion 2
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Accordion 3
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Accordion 4
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
                </div>
              </div>
              <div className='column column-center'>
                <img src={Yacht_Featured} alt="" />
              </div>
              <div className='column column-right'>
                <Slideshow/>
                <div className='grid-container'>
                  <div className='grid-item'>
                    <h3 className='heading-x-large htertiary'>20</h3>
                    <p>Max Number of Guest</p>
                  </div>
                  <div className='grid-item'>
                    <h3 className='heading-x-large htertiary'>20</h3>
                    <p>Max Number of Guest</p>
                  </div>
                  <div className='grid-item'>
                    <h3 className='heading-x-large htertiary'>20</h3>
                    <p>Max Number of Guest</p>
                  </div>
                  <div className='grid-item'>
                    <h3 className='heading-x-large htertiary'>20</h3>
                    <p>Max Number of Guest</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Slider_Up
