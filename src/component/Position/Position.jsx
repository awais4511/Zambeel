import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Position.css';
import web_icon from '../../assets/imges_4_files/web_icon.png'; 
import uae_icon from '../../assets/imges_4_files/UAE_2.jpg'
import qatar_icon from '../../assets/imges_4_files/Qatar.jpg'
import kuwait_icon from '../../assets/imges_4_files/Kuwait.jpg'
import saudia_icon from '../../assets/imges_4_files/KSA_3.jpg'
import image_icon from '../../assets/image.jpg'
import image_icon2 from '../../assets/image2.png'
import image_icon3 from '../../assets/image3.jpg'
import image_icon4 from '../../assets/image4.png'
import image_icon5 from '../../assets/image5.png'

const Position = () => {
    const navigate = useNavigate();  
    
    const handleGetStarted = (route) => {
        navigate(route);  
    };

    return (
        <>
            <div className='position'>
                <img src={web_icon} alt="Web Icon" />
            </div>

            <div className='left-icon'>
                <p>You can join us by choosing the model that suits you</p>
                <h1>Join us today!</h1>
            </div>

            <div className="position-icons-container">
                <div className='position-icon'>
                    <div className='position-icon-left'>
                        <h1>Zambeel Dropshipping</h1>
                        <p>Join Zambeel and unlock a wide range of trending products
                            for UAE and KSA Dropshipping. No upfront inventory
                            investment needed.</p>
                        <button onClick={() => handleGetStarted('/zambeeldropshipping')}>GET STARTED</button>
                    </div>
                </div>

                <div className='position-icon1'>
                    <div className='position-icon-right'>
                        <h1>Zambeel 360</h1>
                        <p>Join Zambeel and unlock a wide range of trending products
                            for UAE and KSA Dropshipping. No upfront inventory
                            investment needed.</p>
                        <button onClick={() => handleGetStarted('/zambeel360')}>GET IN TOUCH</button>
                    </div>
                </div>
            </div>

            <div className='flag'>
                <h1>Where You Can Sell?</h1>
                <div className='flag-icon'>
                    <img src={uae_icon} alt="UAE" />
                    <img src={qatar_icon} alt="Qatar" />
                    <img src={kuwait_icon} alt="Kuwait" />
                    <img src={saudia_icon} alt="Saudi Arabia" />
                </div>
            </div>

            <div className='delivery'>
                <h1>Our Courier Delivery Partners</h1>
                <div className='delivery-info'>
                    <img src={image_icon} alt="Courier 1" />
                    <img src={image_icon2} alt="Courier 2" />
                    <img src={image_icon3} alt="Courier 3" />
                    <img src={image_icon4} alt="Courier 4" />
                    <img src={image_icon5} alt="Courier 5" />
                </div>
            </div>
        </>
    );
};

export default Position;
