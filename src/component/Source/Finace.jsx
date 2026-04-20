import React from 'react';
import dropshipIcon from '../../assets/dropshipIcon.webp';
import finaceIcon from '../../assets/finaceIcon.webp';
import ourceIcon from '../../assets/ourceIcon.webp';
import shipIcon from '../../assets/shipIcon.webp';
import warehouseIcon from '../../assets/warehouseIcon.webp';
import './Finace.css';
import Zambeel360 from '../../Pages/Zambeel360';

const Finace = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Zambeel360 = () => {
    window.open('zambeel360' ,'_self');
  };
  const ZambeelDropshipping=()=>{
    window.open("zambeeldropshipping","_self");
  }

  return (
    <div className='finace'>

      <div onClick={Zambeel360} style={{ cursor: 'pointer' }}>
        <img className='img1' src={ourceIcon} alt="China Sourcing" width="50" />
        <h4 className='h1'>China sourcing</h4>
      </div>

      <div onClick={Zambeel360} style={{ cursor: 'pointer' }}>
        <img className='img2' src={warehouseIcon} alt="Warehouse Icon" width="50" />
        <h4 className='h2'>Warehousing &</h4>
        <h4 className='h2'>Fulfilment</h4>
      </div>

      <div onClick={Zambeel360} style={{ cursor: 'pointer' }}>
        <img className='img3' src={shipIcon} alt="Shipping Icon" width="50" />
        <h4 className='h3'>Shipping</h4>
      </div>

      <div onClick={ZambeelDropshipping} style={{ cursor: 'pointer' }}>
        <img className='img4' src={finaceIcon} alt="Financing Icon" width="50" />
        <h4 className='h4'>Financing</h4>
      </div>

      <div onClick={ZambeelDropshipping} style={{ cursor: 'pointer' }}>
        <img className='img5' src={dropshipIcon} alt="Dropshipping Icon" width="50" />
        <h4 className='h5'>Dropshipping</h4>
      </div>

    </div>
  );
};

export default Finace;

