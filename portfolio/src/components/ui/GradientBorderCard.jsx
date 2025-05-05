import React from 'react';
import PropTypes from 'prop-types';

const GradientBorderCard = ({ 
  title, 
  description, 
  image 
}) => {
  return (
    <div className="relative rounded-xl overflow-hidden group">
      {/* Animated gradient border */}
      <div className="absolute -z-10 inset-0 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-80 
                     group-hover:opacity-100 group-hover:animate-gradient-xy transition-all duration-300"></div>
      
      {/* Inner card with small transparent border for gradient to show through */}
      <div className="m-[2px] bg-white dark:bg-gray-900 rounded-lg h-full p-5 backdrop-blur-sm 
                     transition-all duration-300 group-hover:bg-opacity-95 dark:group-hover:bg-opacity-80">
        {/* Card content */}
        <div className="flex flex-col h-full">
          {/* Image if provided */}
          {image && (
            <div className="mb-4 overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-48 object-cover transform transition-transform duration-500 
                           group-hover:scale-110"
              />
            </div>
          )}
          
          {/* Title with animated underline */}
          <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white relative inline-block">
            {title}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                           transition-all duration-300 group-hover:w-full"></span>
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 flex-grow">
            {description}
          </p>
          
          {/* Button with hover effect */}
          <button className="mt-4 px-5 py-2 rounded-lg bg-transparent border border-purple-500
                           text-purple-500 font-medium transition-all duration-300
                           hover:bg-purple-500 hover:text-white transform
                           active:scale-95">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

GradientBorderCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default GradientBorderCard; 