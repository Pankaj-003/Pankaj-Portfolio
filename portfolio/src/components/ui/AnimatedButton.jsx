import React from 'react';
import PropTypes from 'prop-types';

const AnimatedButton = ({ 
  text, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  icon = null, 
  fullWidth = false,
  animated = true
}) => {
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-6 py-2.5 text-base',
    large: 'px-8 py-3 text-lg'
  };
  
  // Base classes for all buttons
  const baseClasses = `
    font-medium rounded-lg relative overflow-hidden
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
  `;
  
  // Variant specific classes
  const variantClasses = {
    primary: `
      bg-[#5e3bee] text-white
      hover:bg-[#4f32c7] 
      focus:ring-[#5e3bee]
      active:bg-[#3f28a0]
      ${animated ? 'transform hover:-translate-y-1 active:translate-y-0' : ''}
    `,
    
    secondary: `
      bg-transparent border-2 border-[#5e3bee] text-[#5e3bee]
      hover:bg-[#5e3bee] hover:text-white
      focus:ring-[#5e3bee]
      ${animated ? 'transform hover:-translate-y-1 active:translate-y-0' : ''}
    `,
    
    gradient: `
      text-white
      bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500
      hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500
      focus:ring-indigo-500
      active:opacity-90
      ${animated ? 'background-size-200 hover:bg-pos-100' : ''}
    `,
    
    neon: `
      bg-black text-[#5e3bee] border border-[#5e3bee]
      hover:text-white hover:border-transparent
      focus:ring-[#5e3bee]
      shadow-[0_0_10px_rgba(94,59,238,0.5)]
      hover:shadow-[0_0_20px_rgba(94,59,238,0.8)]
      ${animated ? 'transform hover:-translate-y-1 active:translate-y-0' : ''}
    `,
    
    glass: `
      bg-white/10 backdrop-blur-md text-gray-900 dark:text-white
      border border-white/30
      hover:bg-white/20
      focus:ring-white
      ${animated ? 'transform hover:-translate-y-1 active:translate-y-0' : ''}
    `,
  };

  // Ripple effect handler
  const handleRipple = (e) => {
    if (!animated) return;
    
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = 'absolute rounded-full bg-white/30 pointer-events-none';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 600ms linear';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={(e) => {
        handleRipple(e);
        onClick && onClick(e);
      }}
    >
      <span className="relative z-10 flex items-center justify-center">
        {icon && <span className={`mr-2 ${animated ? 'group-hover:animate-bounce' : ''}`}>{icon}</span>}
        {text}
      </span>
    </button>
  );
};

AnimatedButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'gradient', 'neon', 'glass']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.element,
  fullWidth: PropTypes.bool,
  animated: PropTypes.bool
};

export default AnimatedButton;