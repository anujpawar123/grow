import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

// SVG Icons as simple functional components to avoid external library dependencies
const BackIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2ZM17 18H7V6H17V18Z"/>
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9V6ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17Z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.92V12H5V6.3L12 3.19V11.99Z"/>
  </svg>
);

const EyeOffIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 7C14.76 7 17 9.24 17 12C17 12.64 16.87 13.26 16.64 13.82L19.57 16.75C21.07 15.5 22.27 13.86 23 12C21.27 7.11 17.1 4 12 4C10.68 4 9.42 4.24 8.24 4.67L10.36 6.79C10.88 6.89 11.43 7 12 7ZM2.01 3.87L4.69 6.55C3.06 7.83 1.77 9.53 1 12C2.73 16.89 6.9 20 12 20C13.68 20 15.28 19.64 16.72 19.01L19.73 22.02L21.14 20.61L3.42 2.46L2.01 3.87ZM8.53 10.39L10.15 12.01C10.05 12.33 10 12.66 10 13C10 14.1 10.9 15 12 15C12.34 15 12.67 14.95 12.99 14.85L14.76 16.62C13.9 16.87 12.98 17 12 17C9.24 17 7 14.76 7 12C7 11.02 7.13 10.1 7.38 9.24L8.53 10.39Z"/>
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(true);

  return (
    <div className="register-container">
      <div className="register-wrapper">
        
        {/* Header Section */}
        <div className="register-header">
          <div className="header-top">
            <button className="back-btn" onClick={() => navigate('/')}>
              <BackIcon />
            </button>
            <div className="logo-area">
              <div className="logo-icon">
                {/* Simplified OK.Win logo icon representation */}
                <svg viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/><text x="12" y="16" fontSize="12" textAnchor="middle" fill="white" fontWeight="bold">OK</text></svg>
              </div>
              OK.Win
            </div>
            <div className="lang-selector">
              {/* Simplified US Flag representation */}
              <svg viewBox="0 0 24 16" width="24" height="16">
                <rect width="24" height="16" fill="#e0162b"/>
                <rect width="24" height="2" y="2" fill="white"/>
                <rect width="24" height="2" y="6" fill="white"/>
                <rect width="24" height="2" y="10" fill="white"/>
                <rect width="24" height="2" y="14" fill="white"/>
                <rect width="10" height="9" fill="#0052a5"/>
              </svg>
              EN
            </div>
          </div>
          <div className="header-text">
            <h1>Register</h1>
            <p>Please register by phone number or email</p>
          </div>
        </div>

        {/* Main Form Area */}
        <div className="register-form-area">
          <div className="register-tabs">
            <div className="tab">
              <PhoneIcon />
              Register your phone
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            
            {/* Phone Number Input */}
            <div className="form-group">
              <div className="input-label">
                <PhoneIcon /> Phone number
              </div>
              <div className="input-wrapper">
                <select className="country-code" defaultValue="+91">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input type="tel" placeholder="Please enter the phone number" />
              </div>
            </div>

            {/* Set Password Input */}
            <div className="form-group">
              <div className="input-label">
                <LockIcon /> Set password
              </div>
              <div className="input-wrapper">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Set password" 
                />
                <button 
                  type="button" 
                  className="icon-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="form-group">
              <div className="input-label">
                <LockIcon /> Confirm password
              </div>
              <div className="input-wrapper">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="Confirm password" 
                />
                <button 
                  type="button" 
                  className="icon-btn"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeIcon /> : <EyeOffIcon />}
                </button>
              </div>
            </div>

            {/* Invite Code Input */}
            <div className="form-group">
              <div className="input-label">
                <ShieldIcon /> Invite code
              </div>
              <div className="input-wrapper">
                <input 
                  type="text" 
                  value="4512815279602" 
                  readOnly 
                  style={{ color: '#888', backgroundColor: '#f5f5f5' }}
                />
              </div>
            </div>

            {/* Privacy Agreement */}
            <div className="agreement-group">
              <div 
                className="custom-checkbox" 
                onClick={() => setAgreed(!agreed)}
                style={{ background: agreed ? '#FF5B5B' : '#ccc' }}
              >
                {agreed && <CheckIcon />}
              </div>
              <span className="agreement-text">
                I have read and agree <a href="#" className="agreement-link">【Privacy Agreement】</a>
              </span>
            </div>

            {/* Actions */}
            <div className="form-actions">
              <button type="button" className="btn-primary" onClick={() => navigate('/game')}>
                Register
              </button>
              <button type="button" className="btn-secondary" onClick={() => navigate('/login')}>
                I have an account <span className="login-text">Login</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
