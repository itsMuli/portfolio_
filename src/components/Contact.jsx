import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          <div className="glass-card contact-info-card">
            <h3>Let's talk about your project</h3>
            <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            
            <div className="contact-methods">
              <div className="method">
                <span className="icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:rosemwendwa163@gmail.com">rosemwendwa163@gmail.com</a>
                </div>
              </div>
              <div className="method">
                <span className="icon">📞</span>
                <div>
                  <h4>Call</h4>
                  <a href="tel:+254110939077">(+254) 110939077</a>
                </div>
              </div>
              <div className="method">
                <span className="icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <form className="glass-card contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Your Message" rows="5"></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{width: '100%'}}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
