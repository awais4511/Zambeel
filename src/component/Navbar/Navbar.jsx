import React, { useState } from 'react';
import zambel from '../../assets/zambel.avif';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const[menu,setMenu]=useState("home")
  return (
    <>
    <div className='navbar'>
      <img className='logo' src={zambel} alt="" />
      <div className='navbar-right'>
        <div className='input-camera'>
          <i className="fa-solid fa-magnifying-glass icon-left"></i> 
          <input type="text" placeholder='Search' />
          <i className="fa-solid fa-camera icon-right"></i>
        </div>
        <div className='auth-buttons'>
          <Link className='btn-login' to="/login">Login</Link>
          <Link className='btn-signup' to="/signupform">Sign Up</Link>
        </div>
      </div>
    </div>
    <ul className='home'>
        <div className='home-home'>
        <i className="fa-solid fa-house house" ></i>
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:"none",  color:" #002D73"}} to="/">Home</Link>{menu==="home" ?<hr/>:<></>}</li></div>
            <div className='home-zambeeldropshipping'> <i className="fa-solid fa-bookmark drop"></i><li onClick={()=>{setMenu("zambeeldropshipping")}}><Link style={{textDecoration:"none", color:" #002D73"}} to="/zambeeldropshipping">Zambeel Dropshipping</Link>{menu==="zambeeldropshipping" ?<hr/>:<></>}</li></div>
            <div className='home-zambeel3'><i className="fa-solid fa-percent"></i><li onClick={()=>{setMenu("zambeel360")}}><Link style={{textDecoration:"none",color:" #002D73"}} to="/zambeel360">Zambeel 360</Link>{menu==="zambeel360" ?<hr/>:<></>}</li></div>
            <div className='home-individual'><i className="fa-solid fa-handshake"></i><li onClick={()=>{setMenu("individualservices")}}><Link style={{textDecoration:"none",color:"#002D73"}} to="/individualservices">Individual Services</Link>{menu==="individualservices" ?<hr/>:<></>}</li></div>
            <div className='home-about'><i className="fa-solid fa-circle-info"></i><li onClick={()=>{setMenu("aboutus")}}><Link style={{textDecoration:"none",color:" "}} to="/aboutus">About Us</Link>{menu==="aboutus" ?<hr/>:<></>}</li></div>
        </ul>
        <hr />
  </>
  );
};

export default Navbar;
