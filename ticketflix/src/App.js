import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleLogInClick = () => {
    setIsSignUpActive(false);
  };

  return (
    <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container log-in-container">
        <form action="#">
          <h1>Log in</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Log In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className={`overlay ${isSignUpActive ? 'right-panel-active' : ''}`}>
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>Already have an account? Log In</p>
            <button className="ghost" onClick={handleLogInClick}>Log In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, There!</h1>
            <p>Don't have an account? Sign Up Free</p>
            <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;