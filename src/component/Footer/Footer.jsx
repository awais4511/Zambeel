import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      {/* Follow Us */}
      <div className='footer-box'>
        <h3>FOLLOW US:</h3>
        <div className='footer-social'>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>

      {/* Support */}
      <div className='footer-box'>
        <h3>Support</h3>
        <ul className='footer-links'>
          <li>Refund &amp; Replacement Policy (For Resellers)</li>
          <li>Refund and Replacement Policy (Customers)</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>

      {/* Career */}
      <div className='footer-box'>
        <h3>Career Opportunities</h3>
        <ul className='footer-links'>
          <li>Careers Page</li>
        </ul>
      </div>

      {/* Powered by */}
      <div className='footer-box'>
        <h3>Powered by</h3>
        <p className='footer-powered'>myzambeel is powered and owned by</p>
        <p className='footer-company'>Tazah Global L.L.C-FZ</p>
        <p className='footer-address'>Warehouse # 13, Plot # 4488, PO Box 5841, Al Sajaa Industrial, Sharjah</p>
      </div>
    </div>
  )
}

export default Footer