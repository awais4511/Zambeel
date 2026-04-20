import React from 'react';
import '../CSS/AboutUs.css';
import our_team from '../assets/our_team.webp'

const About = () => {
  return (
    <>
    <div>
       <main className="about-container">
        <h1 className="title">About Us</h1>
        
        <p className="highlight">
          <strong>MyZambeel.com</strong> is a fully owned subsidiary of Tazah Technologies Pvt Ltd, a Singaporean company with interests in agri-businesses, cross-border trade, e-commerce and logistics.
        </p>

        <p className="normal">
          MyZambeel was founded with a vision of <em>“Enabling the next million entrepreneurs to increase their incomes and live better lives”</em>
        </p>

        <p className="normal">
          Through a team spread across the globe, MyZambeel is able to source breakout products directly at OEM prices from different parts of the world including China, India, Pakistan and UAE. These best-selling products have high demand in UAE & KSA enabling resellers to make decent returns and increase their incomes.
        </p>

        <p className="normal">
          Based on demand planning and forecast, Zambeel holds stock for some of the items while some items are sourced based on demand. This sophisticated planning allows Zambeel to ensure high service levels while remaining light on inventory.
        </p>

        <p className="normal">
          A strong on-ground team helps with efficient warehousing, fulfillment and logistics, thereby reducing the effective price to the customers and high service levels.
        </p>
      </main>
    </div>
    <div className="zambeel-section">
        <span>
          <img src={our_team} alt="" height="350px" />
        </span>
        <span className="zambeel-product">
          <h1>Our Team</h1>
          <h2>Meet our diverse team members with backgrounds in successful startups such as Uber, Delivery Hero and SWVL. Together, we strive to make Zambeel and its partners super successful.</h2>
        </span>
      </div>

    </>
  );
};

export default About;
