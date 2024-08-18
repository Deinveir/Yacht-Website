import React from 'react'
import "./Navbar.css"

import Logo from "../assets/img/Yacht-Logo.png"

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='container'>
        <div className='row'>
            <div className='logo'>
              <img src={Logo} alt="" />
            </div>
            <div className='navbar-nav'>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Boat Hire</li>
                  <li>Our Crew</li>
                  <li>Contact Us</li>
                </ul>
            </div>
            <a className='btn btn-secondary'>Get A Quote</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
