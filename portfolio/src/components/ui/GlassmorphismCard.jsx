import React from 'react';
import PropTypes from 'prop-types';

const GlassmorphismCard = ({ 
  title, 
  description, 
  icon, 
  color = 'rgba(94, 59, 238, 0.5)'  // Default purple color from the theme
}) => {
  return (
    <div className="relative group">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl 
                    border border-white border-opacity-20 shadow-xl 
                    group-hover:bg-opacity-20 group-hover:border-opacity-30
                    transition-all duration-500 ease-in-out"></div>
      
      {/* Content */}
      <div className="relative p-6 sm:p-8">
        {/* Animated gradient circle in the background */}
        <div 
          className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-xl opacity-60 
                    group-hover:opacity-80 transition-all duration-500 ease-in-out" 
          style={{ background: `radial-gradient(circle at 50% 50%, ${color}, transparent 70%)` }}
        ></div>
        
        {/* Icon */}
        {icon && (
          <div className="mb-4 text-4xl text-[#5e3bee] group-hover:scale-110 
                        transition-transform duration-300 ease-in-out">
            {icon}
          </div>
        )}
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white 
                     group-hover:text-[#5e3bee] transition-colors duration-300 ease-in-out">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

GlassmorphismCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element,
  color: PropTypes.string
};

export default GlassmorphismCard; 