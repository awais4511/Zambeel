import React from 'react'
import '../CSS/Zambeel360.css'
import zambeel360_icon from '../assets/zambeel360_1.webp'
import source_image from '../assets/source_image.webp'
import zambeel_container from '../assets/zambeel_container.webp'
import warehouse_zambeel from '../assets/imagessss.webp'
import zambeel_24s from '../assets/24S.webp'
import zambeel_customer from '../assets/customer-d.webp'
import zambeel_world from '../assets/world-z.webp'
import { useNavigate } from 'react-router-dom'

const Zambeel360 = () => { 
  const navigate =useNavigate()
  return (
    <>
      <div className='zambeel360'>
        <h1>Zambeel 360</h1>
        <p className='zambeel360-para'>Source anything from China with Zambeel and sell in  <br />
          <span className='no-re'>UAE, KSA , Kuwait & Qatar</span>
        </p>
        <button onClick={() => navigate("/signupform")}>SIGNUP</button>
      </div>
      <div className="zambeel-section">
        <span>
          <img src={zambeel360_icon} alt="" height="350px" />
        </span>
        <span className="zambeel-product">
          <h1>Zambeel 360-Charges Breakdown</h1>
          <p>Source anything from China</p>
          <p>Sell in UAE, Saudia Arabia, Kuwait & Qatar!</p>
        </span>
      </div>
      <div className="how-to-start-container">
        <h2 className="section-title">How The Process Will Work?</h2>
        <div className="steps-grid">
          <div className="step-box">
            <div className="step-number">1</div>
            <div>
              <h3 className="step-title">Sourcing</h3>
              <p>
                Tell us the product you want to source and Zambeel will provide you the quotation
              </p>
            </div>
          </div>
          <div className="step-box">
            <div className="step-number">2</div>
            <div>
              <h3 className="step-title">Shipping</h3>
              <p>
                Once you approve the price, we will handle the shipment and custom clearance to your desired destination
              </p>
            </div>
          </div>
          <div className="step-box">
            <div className="step-number">3</div>
            <div>
              <h3 className="step-title">Warehousing & Fulfilment</h3>
              <p>
                We will store your product in our warehouse and get your products ready to be delivered
              </p>
            </div>
          </div>
          <div className="step-box">
            <div className="step-number">4</div>
            <div>
              <h3 className="step-title">Order Confirmation & Followup</h3>
              <p>
                Zambeel will confirm your orders from your Customer
              </p>
            </div>
          </div>
          <div className="step-box">
            <div className="step-number">5</div>
            <div>
              <h3 className="step-title">Order Delivery to your Customer</h3>
              <p>
                Once orders are confirmed, Zambeel will deliver them to your customers
              </p>
            </div>
          </div>
          <div className="step-box">
            <div className="step-number">6</div>
            <div>
              <h3 className="step-title">COD Remittance</h3>
              <p>
                Zambeel will transfer the funds received from your customers to your bank account, every week
              </p>
            </div>
          </div>
        </div>
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
      <div className="individual-section">
        <span>
          <img src={warehouse_zambeel} alt="" height="200px" />
        </span>
        <span className="individual-product">
          <h1>Warehousing & Fulfilment</h1>
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
        <span className="individual-product">
          <h1>Order Confirmation & Followup</h1>
          <p>Take order confirmation to the next level with our top-notch call centre agents! With years of experience, they expertly verify order details with customers, providing a personalised touch and ensuring accuracy. Plus, our agents are trained to seize upsell opportunities, boosting sales and revenue for our retail clients</p>
          <button onClick={() => navigate("/signupform")}>SIGNUP</button>
        </span>
        <span>
          <img src={zambeel_24s} alt="" height="450px" />
        </span>
      </div>
      <div className="individual-section">
      <span>
          <img src={zambeel_customer} alt="" height="300px" />
        </span>
        <span className="individual-product">
          <h1>Order Confirmation & Followup</h1>
          <p>Take order confirmation to the next level with our top-notch call centre agents! With years of experience, they expertly verify order details with customers, providing a personalised touch and ensuring accuracy. Plus, our agents are trained to seize upsell opportunities, boosting sales and revenue for our retail clients</p>
          <button onClick={() => navigate("/signupform")}>SIGNUP</button>
        </span>
      </div>
      <div className="individual-section">
        <span className="individual-product">
          <h1>COD Remittance</h1>
          <p>Let us take care of payment collection from customers, and then we'll ensure you receive your funds quickly and efficiently. And, as a bonus, we offer global payment reach - whether you're in the next city or on the other side of the world, we'll get your money to you.</p>
          <button onClick={() => navigate("/signupform")}>SIGNUP</button>
        </span>
        <span>
          <img src={zambeel_world} alt="" height="650px" />
        </span>
      </div>
    </>
  )
}

export default Zambeel360