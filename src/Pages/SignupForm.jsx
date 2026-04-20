import React, { useState } from 'react';
import '../CSS/SignupForm.css';
import { useNavigate, Link } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    service: '',
    country: '',
    zambeelPackage: '',
    termsAccepted: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const renderStep1 = () => (
    <div className="form-step">
       <Link to="/login" className="login-link">Login</Link>
      <p className="step-text">Step 1 of 3</p>
      <h2>Email Details</h2>
     
      <div className="form-group">
        <label>Full Name *</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email Address *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Phone Number *</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleInputChange}
          />
          I accept the terms and conditions
        </label>
      </div>
      <button type="button" onClick={nextStep} className="btn-next">
        Next
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="form-step">
      <p className="step-text">Step 2 of 3</p>
      <h2>Service Selection</h2>
      <div className="form-group">
        <label>Select Zambeel Service To Proceed</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a service...</option>
          <option value="individual">Individual Services</option>
          <option value="business">Business Services</option>
          <option value="enterprise">Enterprise Solutions</option>
        </select>
        <p className="service-description">Services you may be eligible for based on your user type</p>
      </div>
      <div className="button-group">
        <button type="button" onClick={prevStep} className="btn-back">
          Back
        </button>
        <button type="button" onClick={nextStep} className="btn-next">
          Next
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="form-step">
      <p className="step-text">Step 3 of 3</p>
      <h2>Final Step</h2>
      <div className="form-group">
        <label>Select Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a country...</option>
          <option value="pakistan">Pakistan</option>
          <option value="india">India</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Select Zambeel Package</label>
        <select
          name="zambeelPackage"
          value={formData.zambeelPackage}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a package...</option>
          <option value="basic">Basic</option>
          <option value="premium">Premium</option>
          <option value="enterprise">Enterprise</option>
        </select>
      </div>
      <div className="button-group">
        <button type="button" onClick={prevStep} className="btn-back">
          Back
        </button>
        <button type="submit" className="btn-submit">
          Create Account
        </button>
      </div>
    </div>
  );

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Zambeel Account Signup</h1>
        <form onSubmit={handleSubmit}>
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
