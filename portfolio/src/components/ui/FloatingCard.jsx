import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const FloatingCard = ({ 
  children, 
  maxRotation = 10, 
  maxFloatDistance = 20,
  perspective = 1000,
  shadowOpacity = 0.2,
  className = '',
  resetOnLeave = true
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mouseOver, setMouseOver] = useState(false);
  const [centerPoint, setCenterPoint] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  
  // Initialize center point of card
  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCenterPoint({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      });
    }
  }, []);

  // Handle mouse movement and update rotation/position values
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    // Get card dimensions and position
    const rect = cardRef.current.getBoundingClientRect();
    const { width, height } = rect;
    
    // Calculate mouse position relative to card center (from -1 to 1)
    const x = (e.clientX - rect.left) / width * 2 - 1;
    const y = (e.clientY - rect.top) / height * 2 - 1;
    
    // Calculate rotation based on mouse position
    setRotation({
      x: -y * maxRotation, // Negative to make it follow the mouse naturally
      y: x * maxRotation
    });
    
    // Calculate floating position
    setPosition({
      x: x * maxFloatDistance / 2,
      y: y * maxFloatDistance / 2
    });
  };
  
  // Reset card to initial position
  const resetCard = () => {
    if (resetOnLeave) {
      setRotation({ x: 0, y: 0 });
      setPosition({ x: 0, y: 0 });
    }
    setMouseOver(false);
  };

  return (
    <div 
      ref={cardRef}
      className={`transition-transform duration-200 ${className}`}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d'
      }}
      onMouseEnter={() => setMouseOver(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetCard}
    >
      <div
        style={{
          transform: `
            translateZ(0)
            rotateX(${rotation.x}deg)
            rotateY(${rotation.y}deg)
            translate(${position.x}px, ${position.y}px)
          `,
          transition: mouseOver ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
          transformStyle: 'preserve-3d',
          boxShadow: mouseOver
            ? `
              0 ${20 + Math.abs(rotation.x)}px ${20 + Math.abs(rotation.y)}px rgba(0,0,0,${shadowOpacity}),
              ${rotation.y * -0.5}px ${rotation.x * 0.5}px ${Math.abs(rotation.x) + Math.abs(rotation.y)}px rgba(0,0,0,${shadowOpacity * 0.7})
            `
            : `0 10px 30px rgba(0,0,0,${shadowOpacity * 0.6})`
        }}
      >
        {children}
      </div>
    </div>
  );
};

FloatingCard.propTypes = {
  children: PropTypes.node.isRequired,
  maxRotation: PropTypes.number,
  maxFloatDistance: PropTypes.number,
  perspective: PropTypes.number,
  shadowOpacity: PropTypes.number,
  className: PropTypes.string,
  resetOnLeave: PropTypes.bool
};

export default FloatingCard; 