import React from 'react';

const Footer = () => {
  return (
    <footer style={{padding: '40px 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center'}}>
      <div className="container">
        <div className="logo" style={{marginBottom: '20px'}}>
          <span>ROSE</span>.DEV
        </div>
        <div className="social-links" style={{display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px'}}>
           <a href="https://github.com/rose-mwendwa-77b73b267" className="text-muted" target="in/rose-mwendwa-77b73b267" rel="noreferrer">GitHub</a>
           <a href="https://linkedin.com/in/rose-mwendwa-77b73b267" className="text-muted" target="linkedin.com/in/rose-mwendwa-77b73b267" rel="noreferrer">LinkedIn</a>
        </div>
        <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>
          &copy; {new Date().getFullYear()} Rose Mwendwa. Built with React & Passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
