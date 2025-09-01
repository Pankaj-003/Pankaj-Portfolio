import React from 'react';
import "../styles/footer.css"
import arrow from "../assets/images/FooterArrow.png"
// import star from "../assets/images/FooterStar.png"
import star from '../assets/images/Footerstar.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white text-gray-800 py-12 px-6 main-footer shadow-inner relative overflow-hidden">
      {/* Decorative star with slow zoom animation */}
      <div className='star-icon'>
        <img src={star} alt="Decorative star" className='star-img' />
      </div>
      
      {/* Arrow decoration */}
      <div className='arrow-icon'>
        <img src={arrow} alt="Decorative arrow" className='arrow-icon-img' />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Subscribe Text */}
        <div>
          <h5 className="text-sm text-purple-600 font-semibold uppercase Sub-head">Subscribe</h5>
          <h2 className="font-bold mb-4 Sub-text">Subscribe To Get Latest Update From Us</h2>
        </div>

        {/* Right Side - Input Field */}
        <div>
          <form className="flex items-center max-w-md w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 py-3 px-4 rounded-l-md border footerinput border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 footerbutton rounded-r-md hover:bg-purple-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-600">
        <div className="mb-4 md:mb-0 font-bold text-xl">Pankaj</div>
        <nav className="flex flex-wrap gap-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-purple-600 transition-colors">Home</a>
          <a href="#" className="hover:text-purple-600 transition-colors">About</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Services</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Portfolio</a>
          <a href="#" className="hover:text-purple-600 transition-colors">Contact</a>
        </nav>
      </div>
      
      <div className='boder-line'>
        <p className="text-center md:text-right mt-10">
          © Copyright {currentYear} | All Rights Reserved by Pankaj ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
