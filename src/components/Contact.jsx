import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Try using Formspree (you'll need to set up a form at formspree.io)
      // For now, we'll use mailto as fallback
      
      // Create email subject and body
      const subject = `Portfolio Contact: Message from ${formData.name}`;
      const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: You can reach me via WhatsApp at +254110839077

Message:
${formData.message}

---
Sent from Rose Mwendwa Portfolio Contact Form`;

      // Create mailto link
      const mailtoLink = `mailto:rosemwendwa163@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      alert('Thank you for your message! Your email client should open now. If it doesn\'t open automatically, please email me directly at rosemwendwa163@gmail.com or contact me via WhatsApp at +254110839077');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message. Please email me directly at rosemwendwa163@gmail.com or contact me via WhatsApp at +254110839077');
    }
  };

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
                <span className="icon">💬</span>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/254110839077" target="_blank" rel="noopener noreferrer">(+254) 110839077</a>
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

          <form className="glass-card contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary email-btn" style={{width: '100%'}}>
              <span className="btn-icon">📧</span>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
