import React from 'react'
import '../CSS/ZambeelDropshipping.css'
import { useNavigate } from 'react-router-dom'
import UAE_flag from '../assets/imges_4_files/UAE_2.jpg'
import saudia_flag from '../assets/imges_4_files/KSA_3.jpg'
import zambeel_product from '../assets/zambeel 111.webp'
import image_0001 from '../assets/image_0001.webp'
import icon_image from '../assets/iiiii.webp'

const ZambeelDropshipping = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='zambeeldropshipping'>
        <h1>Zambeel Dropshipping</h1>
        <p className='zambeeldrop-para'>Promote huge variety of trendy products listed on our platform for UAE</p>
        <h5> Dropshipping 🇦🇪 and KSA Dropshipping 🇸🇦—with no upfront cost! Start selling</h5>
        <p className='zambeel-para'> today and grow your business with ease!</p>
        <button onClick={() => navigate("/signupform")}>START NOW</button>
      </div>
      <div className='zambeeldropship-icon'>
        <h1>Why Should You Join Zambeel </h1>
        <h1>Dropshipping?</h1>
        <div className="zambeeldropship-left">
          <div className="zambeeldropship-icon-left">
            <i class="fa-regular fa-bookmark"></i>
            <h4>No Business</h4>
            <h4> Registration</h4>
          </div>
          <div className="zambeeldropship-icon-left1">
            <i class="fa-solid fa-coins"></i>
            <h4>No Need to Buy</h4>
            <h4> Inventory</h4>
          </div>
          <div className="zambeeldropship-icon-left2">
            <i class="fa-solid fa-calendar"></i>
            <h4>Weekly Payment in </h4>
            <h4>any Bank</h4>
          </div>
          <div className="zambeeldropship-icon-left3">
            <i class="fa-solid fa-gift"></i>
            <h4>Exclusive Products</h4>
          </div>
          <div className="zambeeldropship-icon-left4">
            <i class="fa-solid fa-truck"></i>
            <h4>75%+ Delivery Ratio</h4>
          </div>
          <div className="zambeeldropship-icon-left5">
            <i class="fa-solid fa-hand-holding-dollar"></i>
            <h4>Financing to Scale</h4>
          </div>
        </div>
      </div>
      <div className="scrolling">
        <p>KNOW MORE - See this video to know in detail about Zambeel Dropshipping:</p>
      </div>
      <div className="how-to-start-container">
        <h2 className="section-title">How To Start Work?</h2>
        <div className="steps-grid">
          <div className="step-box">
            <div className="step-number">1</div>
            <div>
              <h3 className="step-title">Sign up</h3>
              <p>
                Create account with Zambeel. Once it's created, it will be automatically approved.
                <a href="#"> Sign Up Here</a>
              </p>
            </div>
          </div>
          <div className="step-box">
            <div className="step-number">2</div>
            <div>
              <h3 className="step-title">Explore Account Page</h3>
              <p>
                After signup, <a href="#">Log In</a> to your Zambeel account page to get a step-by-step guide to start and access all the necessary information.
                <br /><a href="#">Login Here</a>
              </p>
            </div>
          </div>
          <div className="step-box">
            <div className="step-number">3</div>
            <div>
              <h3 className="step-title">Store Integration</h3>
              <p>
                To Integrate Shopify: <a href="#">Zambeel Shopify App</a><br />
                To Integrate Easyorders: <a href="#">Integrate</a><br />
                To Integrate Lightfunnels: <a href="#">Integrate</a><br />
                To Integrate Youcan: <a href="#">Integrate</a>
              </p>
            </div>
          </div>
          <div className="step-box">
            <div className="step-number">4</div>
            <div>
              <h3 className="step-title">Subscription Plan</h3>
              <p>
                You will be subscribed to our free plan automatically.<br />
                To upgrade the subscription plan, please select the relevant plan on your account page.
              </p>
            </div>
          </div>
          <div className="step-box">
            <div className="step-number">5</div>
            <div>
              <h3 className="step-title">List Products</h3>
              <p>
                Go to Products on Zambeel website and select any product you want to list on your own store with the correct <strong>SKU Code</strong>.
                <br /><a href="#">How to List Zambeel Products</a>
              </p>
            </div>
          </div>
          <div className="step-box">
            <div className="step-number">6</div>
            <div>
              <h3 className="step-title">Sending Orders</h3>
              <p>
                To send orders, please see the step-by-step guide on the account page after log in.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='heading'>
        <h1>Where you can Sell?</h1>
        <div className="heading-img">
          <img src={UAE_flag} alt="" height="300px" />
          <img src={saudia_flag} alt="" height="300px" />
        </div>
      </div>
      <div className="zambeel-section">
        <span>
          <img src={zambeel_product} alt="" height="250px" />
        </span>
        <span className="zambeel-product">
          <h1>Dropshipping Products</h1>
          <p>Enjoy the vast variety of Trendy products ready to dropship</p>
          <button>View Products</button>
        </span>
      </div>
      <div className="zambeel-section1">
        <span className="zambeel-product1">
          <h1>Subscription Plan</h1>
          <p>To buy subscription plan, please signup or log in to your account page.To see details</p>
          <p>about subscription, Please see the video below:</p>
          <p>*Subscription charges are <span className='no-re'>Non Refundable</span> </p>
          <button>BUY SUBSCRIPTION PLAN</button>
        </span>
        <span>
          <img src={image_0001} alt="" height="400px" />
        </span>
      </div>
      <div className="zambeel-section">
        <span>
          <img src={icon_image} alt="" height="350px" />
        </span>
        <span className="zambeel-product">
          <h1>Delivery Charges</h1>
          <p>To see details about delivery charges and profit calculation of your orders,</p>
          <p>please see this video:</p>
          <button>DELIVERY CHARGES VIDEOS</button>
        </span>
      </div>


    </>
  )
}

export default ZambeelDropshipping