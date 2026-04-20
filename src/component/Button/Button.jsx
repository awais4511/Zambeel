import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.css';
import SignupForm from '../../Pages/SignupForm';

const Button = () => {
  const navigate = useNavigate();

  return (
    <div onClick={SignupForm} style={{ textAlign: 'center', marginTop: '50px' }}>
      <button className="custom-signup-button" onClick={() => navigate('/signupform')}>
        SIGN UP
      </button>

    </div>
  );
};

export default Button;
