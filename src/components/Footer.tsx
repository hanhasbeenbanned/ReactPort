import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
        
        <div className="footer-section social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;