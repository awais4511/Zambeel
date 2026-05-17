import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/IndividualServices.css'
import new_image from '../assets/new_image.webp'
import source_image from '../assets/source_image.webp'
import zambeel_container from '../assets/zambeel_container.webp'

const IndividualServices = () => {
  const navigate= useNavigate()
  return (
    <>
    <div className='individualservices'>
        <h1>Individual service</h1>
        <p className='individual-para'>Experience the best of Zambeel's services! We offer <span className='no-re'>highly competitive rates</span> for our <span className='no-re'>INDIVIDUAL services</span>, so you</p>
        <p className='individualservice-para'> can enjoy top-notch solutions</p>
        <button onClick={() => navigate("/signupform")}>SIGNUP</button>
      </div>
      <div className="individual-section">
        <span>
          <img src={new_image} alt="" height="350px" />
        </span>
        <span className="individual-product">
          <h1>WAREHOUSING & 3PL SERVICE</h1>
          <p>Enjoy seamless inventory management with our comprehensive warehouse network.Our cutting-edge system keeps track of every product detail, from storage and tracking to shipping and returns, all accessible through a single, intuitive dashboard</p>
          <ul>
            <li>Warehouse in <span className='no-re'>Saudi Arabia (Jeddah & Riyadh)</span></li>
            <li>Warehouse in <span className='no-re'>UAE (Sharjah)</span></li>
            <li>Warehouse in <span className='no-re'>Kuwait</span></li>
            <li>Warehouse in <span className='no-re'>Qatar</span></li>
          </ul>
          <button onClick={() => navigate("/signupform")}>SIGNUP</button>
        </span>
      </div>
      <div className="individual-section">
        <span>
          <img src={source_image} alt="" height="350px" />
        </span>
        <span className="individual-product">
          <h1>SOURCING</h1>
          <p>Say goodbye to supplier stress! Zambeel's extensive network of suppliers streamlines the process, handling everything from sourcing to delivery. Enjoy a fully customizable experience, with complete peace of mind</p>
          <ul>
          <li><span className='no-re'>China</span></li>
            <li><span className='no-re'>Saudi Arabia (Jeddah & Riyadh)</span></li>
            <li><span className='no-re'>UAE (Sharjah)</span></li>
            <li><span className='no-re'>Kuwait</span></li>
            <li><span className='no-re'>Qatar</span></li>
          </ul>
          <button onClick={() => navigate("/signupform")}>SIGNUP</button>
        </span>
      </div>
      <div className="individual-section">
       
        <span className="individual-product">
          <h1>SHIPPING & CUSTOM CLEARENCE</h1>
          <p>Leave the logistics to us! We'll guide your goods through customs and take care of all the paperwork, making sure your inventory arrives at your desired location without a hitch.</p>
          <ul>
          <li> Import from <span className='no-re'>China to UAE, Saudia Arabia, Kuwait & Qatar</span></li>
          <li>Import from <span className='no-re'>UAE to Saudia Arabia, Kuwait & Qatar</span></li>
          </ul>
          <button onClick={() => navigate("/signupform")}>SIGNUP</button>
        </span>
        <span>
          <img src={zambeel_container} alt="" height="350px" />
        </span>
      </div>
      </>
  )
}

export default IndividualServices