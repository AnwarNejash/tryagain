import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025   Your Name. All rights reserved.</p>
        <h2> Yeroo barbaaddetti na arkachuu dandeessa</h2>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:your.email@domain.com">
            Email
          </a>
           <a href="mailto:your.email@domain.com">
           Facebook
          </a>
           <a href="mailto:your.email@domain.com">
          Tiktok
          </a>
           <a href="mailto:your.email@domain.com">
           Telegram
          </a>
          <h1> Dhaloota Teknoolojitti haa makamnuu hundumtumman keenyaahu</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;