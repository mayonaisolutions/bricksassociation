import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Column 1: Logo & About */}
          <div className="footer-col">
            <Link to="/" className="footer-logo-link" onClick={scrollToTop}>
              <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Tamilnadu Fly Ash Bricks Association Logo" className="footer-logo-img" />
            </Link>
            <p className="footer-about-text">
              Established with a vision to propel the use of fly ash bricks and solid blocks in the building industry, we are committed to shaping a greener, more resilient future for Tamil Nadu.
            </p>
            <div className="footer-social-icons">
              {/* Facebook */}
              <a href="https://facebook.com" className="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" className="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" className="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links-list">
              <li><Link to="/" className="footer-link" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/aboutus" className="footer-link" onClick={scrollToTop}>About Us</Link></li>
              <li><Link to="/contact-us" className="footer-link" onClick={scrollToTop}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Helps & Support */}
          <div className="footer-col">
            <h3>Helps & Support</h3>
            <ul className="footer-links-list">
              <li><a href="#chennai-zone" className="footer-link">Chennai Zone</a></li>
              <li><a href="#mettur-zone" className="footer-link">Mettur Zone</a></li>
              <li><a href="#tuticorin-zone" className="footer-link">Tuticorin Zone</a></li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="footer-col">
            <h3>Get in touch</h3>
            <div className="footer-contact-details">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <p>AD61, New No. 3 AD Block, 3rd Street, Anna Nagar, Chennai - 600040</p>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <p>(+91) 88831 44777</p>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <p>smtflyashbricks@gmail.com</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>© Copyrights Tamilnadu Flyash Bricks Association.</p>
          </div>
          <div className="footer-bottom-right">
            <p>Powered by <a href="https://mayonaisolutions.com" className="footer-brand-highlight" target="_blank" rel="noopener noreferrer">Mayon AI Solutions</a></p>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button 
        className={`back-to-top ${isVisible ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5"/>
          <polyline points="5 12 12 5 19 12"/>
        </svg>
      </button>
    </footer>
  );
};