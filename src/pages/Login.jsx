import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

// SVG Icons
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

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9V6ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17Z"/>
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

const HeadsetIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1C6.48 1 2 5.48 2 11V19C2 20.66 3.34 22 5 22H7V13H4V11C4 6.58 7.58 3 12 3C16.42 3 20 6.58 20 11V13H17V22H19C20.66 22 22 20.66 22 19V11C22 5.48 17.52 1 12 1Z"/>
  </svg>
);

const LockCircleIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15 11V16C15 16.55 14.55 17 14 17H10C9.45 17 9 16.55 9 16V11C9 10.45 9.45 10 10 10H10.5V8.5C10.5 7.67 11.17 7 12 7C12.83 7 13.5 7.67 13.5 8.5V10H14C14.55 10 15 10.45 15 11ZM12.5 8.5C12.5 8.22 12.28 8 12 8C11.72 8 11.5 8.22 11.5 8.5V10H12.5V8.5Z"/>
  </svg>
);

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [activeTab, setActiveTab] = useState('phone'); // 'phone' or 'email'

  return (
    <div className="login-container">
      <div className="login-wrapper">
        
        {/* Header Section */}
        <div className="login-header">
          <div className="login-header-top">
            <button className="login-back-btn" onClick={() => navigate('/')}>
              <BackIcon />
            </button>
            <div className="login-logo-area">
              <div className="login-logo-icon">
                <svg viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/><text x="12" y="16" fontSize="12" textAnchor="middle" fill="white" fontWeight="bold">OK</text></svg>
              </div>
              OK.Win
            </div>
            <div className="login-lang-selector">
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
          <div className="login-header-text">
            <h1>Log in</h1>
            <p>Please log in with your phone number or email</p>
            <p>If you forget your password, please contact customer service</p>
          </div>
        </div>

        {/* Main Form Area */}
        <div className="login-form-area">
          <div className="login-tabs">
            <div 
              className={`login-tab ${activeTab === 'phone' ? 'active' : ''}`}
              onClick={() => setActiveTab('phone')}
            >
              <PhoneIcon />
              phone number
            </div>
            <div 
              className={`login-tab ${activeTab === 'email' ? 'active' : ''}`}
              onClick={() => setActiveTab('email')}
            >
              <EmailIcon />
              Email Login
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            
            {activeTab === 'phone' ? (
              <div className="login-form-group">
                <div className="login-input-label">
                  <PhoneIcon /> Phone number
                </div>
                <div className="login-input-wrapper">
                  <select className="login-country-code" defaultValue="+91">
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input type="tel" placeholder="Please enter the phone number" />
                </div>
              </div>
            ) : (
              <div className="login-form-group">
                <div className="login-input-label">
                  <EmailIcon /> Email address
                </div>
                <div className="login-input-wrapper">
                  <input type="email" placeholder="Please enter your email" />
                </div>
              </div>
            )}

            {/* Password Input */}
            <div className="login-form-group">
              <div className="login-input-label">
                <LockIcon /> Password
              </div>
              <div className="login-input-wrapper">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password" 
                />
                <button 
                  type="button" 
                  className="login-icon-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                </button>
              </div>
            </div>

            {/* Remember password */}
            <div className="login-remember-group">
              <div 
                className={`login-radio ${rememberMe ? 'active' : ''}`}
                onClick={() => setRememberMe(!rememberMe)}
              >
                {/* Empty when false, filled maybe? The image shows an empty circle */}
              </div>
              <span className="login-remember-text">Remember password</span>
            </div>

            {/* Actions */}
            <div className="login-actions">
              <button type="button" className="login-btn-primary" onClick={() => navigate('/game')}>
                Log in
              </button>
              <button type="button" className="login-btn-secondary" onClick={() => navigate('/')}>
                Register
              </button>
            </div>

            {/* Bottom Links */}
            <div className="login-bottom-links">
              <div className="login-bottom-link">
                <div className="login-bottom-icon">
                  <LockCircleIcon />
                </div>
                <span>Forgot password</span>
              </div>
              <div className="login-bottom-link">
                <div className="login-bottom-icon">
                  <HeadsetIcon />
                </div>
                <span>Customer Service</span>
              </div>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
