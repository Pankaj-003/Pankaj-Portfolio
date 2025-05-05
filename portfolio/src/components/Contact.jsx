import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn, MdClose } from 'react-icons/md';
import ContactImage from '../assets/images/contact.png';
// import "../Contact.css"
import "../Contact.css";
import "../ContactAnimations.css";
import ArrowImage from '../assets/images/ContactArrowImage.png';

const Contact = () => {
  // State for form and popup visibility
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleInputFocus = (inputId) => {
    setFocusedInput(inputId);
  };

  const handleInputBlur = () => {
    setFocusedInput(null);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default page reload
    setIsSubmitting(true); // Show loading state
    
    // Simulate form submission delay
    setTimeout(() => {
      // Here you would typically handle form data (e.g., send it to a backend)
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());
      console.log("Form data:", data); 
      
      setShowForm(false); // Close the form
      setShowPopup(true); // Show the thank you popup
      setConfetti(true); // Trigger confetti
      setIsSubmitting(false); // Reset loading state

      // Optional: Hide popup after a few seconds
      setTimeout(() => {
        setShowPopup(false);
        setConfetti(false);
      }, 4000); // Hide after 4 seconds
    }, 1500); // Simulate network delay
  };

  // Create confetti effect
  useEffect(() => {
    if (!confetti) return;
    
    const createConfetti = () => {
      const colors = ['#7B6EF6', '#FFC107', '#4CAF50', '#2196F3', '#FF5722'];
      const confettiContainer = document.createElement('div');
      confettiContainer.className = 'confetti-container';
      document.body.appendChild(confettiContainer);
      
      for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDelay = Math.random() * 3 + 's';
        confettiPiece.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiContainer.appendChild(confettiPiece);
      }
      
      // Clean up confetti after animation completes
      setTimeout(() => {
        if (confettiContainer && confettiContainer.parentNode) {
          confettiContainer.parentNode.removeChild(confettiContainer);
        }
      }, 5000);
    };
    
    createConfetti();
  }, [confetti]);

  return (
    <section id="Contact" className="relative contact-main-section overflow-hidden">
      
      {/* Background pattern (you can replace with your own svg if needed) */}
      {/* <div className="inset-0 opacity-30 bg-[url('/pattern.svg')] bg-cover bg-center pointer-events-none"></div> */}

      <div className="sub-contact-section">

        {/* Left Side */}
        <div className="text-white max-w-xl space-y-6 contact-content">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <h2 className="text-4xl font-bold">Got A Project? Let's Talk!</h2>
          </div>

          <p className="text-lg opacity-90">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to get in touch with me using the contact information below.
          </p>

          <div className="space-y-4 contact-links">
            <div className="flex items-center space-x-3">
              <MdEmail size={24} />
              <a href="mailto:pankajbiswas@example.com" className="underline">
                pankajbiswas@example.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MdPhone size={24} />
              <a href="tel:+919876543210" className="underline">
                +91 98765 43210
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MdLocationOn size={24} />
              <p>West Bengal, India</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-6 social-icons-container">
            <a href="#" className="text-white hover:text-yellow-400">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-white hover:text-yellow-400">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-white hover:text-yellow-400">
              <FaTwitter size={24} />
            </a>
          </div>

          {/* Button - Opens the form modal */}
          <button 
            onClick={() => setShowForm(true)} // Set showForm to true on click
            className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-md transition-all duration-300">
            Send Me A Message
          </button>
        </div>

      </div>
      <div className="image-div">
        <img 
          src={ContactImage}
          alt="Contact" 
          className="contact-main-image"
        />
      </div>

      {/* arrow image */}
      <div className="arrow-image">
        <img src={ArrowImage} alt="Arrow" />
      </div>
      
      {/* Contact Form Modal */}
      {showForm && (
        <div className="contact-form-overlay form-div">
          <div className="contact-form-container form-sub-div white-theme">
            <div className="form-header">
              <button className="close-form-btn" onClick={() => setShowForm(false)}>
                <MdClose size={24} />
              </button>
              <h3 className="form-title">Let's discuss your project</h3>
            </div>
            
            <form onSubmit={handleFormSubmit} className="contact-form" id="contact-form-id">
              <div className="form-body">
                <div className="form-row" style={{ display: 'flex', gap: '20px' }}>
                  <div className={`form-group ${focusedInput === 'name' ? 'focused' : ''}`} style={{ flex: 1 }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '10px' }}>Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Your name" 
                      required
                      className={`${focusedInput === 'name' ? 'focused' : ''}`}
                      onFocus={() => handleInputFocus('name')}
                      onBlur={handleInputBlur}
                      style={{ 
                        display: 'block', 
                        width: '100%', 
                        padding: '16px 20px',
                        border: '2px solid #eeeef7',
                        borderRadius: '8px',
                        backgroundColor: '#f9f9fd'
                      }}
                    />
                  </div>
                  <div className={`form-group ${focusedInput === 'email' ? 'focused' : ''}`} style={{ flex: 1 }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '10px' }}>Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="your.email@example.com" 
                      required
                      className={`${focusedInput === 'email' ? 'focused' : ''}`}
                      onFocus={() => handleInputFocus('email')}
                      onBlur={handleInputBlur}
                      style={{ 
                        display: 'block', 
                        width: '100%', 
                        padding: '16px 20px',
                        border: '2px solid #eeeef7',
                        borderRadius: '8px',
                        backgroundColor: '#f9f9fd'
                      }}
                    />
                  </div>
                </div>
                
                <div className={`form-group ${focusedInput === 'project-type' ? 'focused' : ''}`}>
                  <label htmlFor="project-type" style={{ display: 'block', marginBottom: '10px' }}>Project Type</label>
                  <select 
                    id="project-type" 
                    name="projectType" 
                    required
                    className={`${focusedInput === 'project-type' ? 'focused' : ''}`}
                    onFocus={() => handleInputFocus('project-type')}
                    onBlur={handleInputBlur}
                    style={{ 
                      display: 'block', 
                      width: '100%', 
                      padding: '16px 20px',
                      border: '2px solid #eeeef7',
                      borderRadius: '8px',
                      backgroundColor: '#f9f9fd'
                    }}
                  >
                    <option value="" disabled selected>Select a project type...</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ui-design">UI/UX Design</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className={`form-group ${focusedInput === 'message' ? 'focused' : ''}`}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '10px' }}>Project Details</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                    required
                    className={`${focusedInput === 'message' ? 'focused' : ''}`}
                    onFocus={() => handleInputFocus('message')}
                    onBlur={handleInputBlur}
                    style={{ 
                      display: 'block', 
                      width: '100%', 
                      padding: '16px 20px',
                      border: '2px solid #eeeef7',
                      borderRadius: '8px',
                      backgroundColor: '#f9f9fd',
                      minHeight: '120px'
                    }}
                  ></textarea>
                </div>
              </div>
              
              <div className="form-footer">
                <button type="submit" className="submit-form-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      <span style={{ marginLeft: '10px' }}>Sending...</span>
                    </>
                  ) : 'Send Message'}
                </button>
              </div>
            </form>
            
          </div>{/* End contact-form-container */}
        </div>
      )}{/* End contact-form-overlay */}

      {/* Thank You Popup */}
      {showPopup && (
        <div className="popup-message white-theme"> 
          <p><strong>Thank You!</strong><br />Your message has been received. I'll get back to you soon.</p>
          <button onClick={() => setShowPopup(false)} className="close-popup-btn icon-btn">
             <MdClose size={20} />
          </button>
        </div>
      )}

    </section>
  ); // End return statement
}; // End component definition

export default Contact;
