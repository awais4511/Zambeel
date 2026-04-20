import React from 'react'
import map_icon from '../../assets/map123.webp'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <h1 className='hero-text'>
        We Enable Brands, Sellers and Dropshippers from Across the Globe to Start and Grow E-commerce Business in{' '}
        <span className='uae'>United Arab Emirates</span>,{' '}
        <span className='sa'>Saudi Arabia</span>,{' '}
        <span className='k'>Kuwait</span> &amp;{' '}
        <span className='q'>Qatar</span>
      </h1>
      <div className='hero-image-wrapper'>
        <img src={map_icon} alt="Map of Gulf region" />
      </div>
    </div>
  )
}

export default Hero