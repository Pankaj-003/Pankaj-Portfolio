import { useState, useRef, useEffect } from 'react';

const Card3D = ({ children, className = '', depth = 20, disabled = false }) => {
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  });
  
  const cardRef = useRef(null);
  
  useEffect(() => {
    if (disabled) {
      setStyle({
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease'
      });
    }
  }, [disabled]);
  
  const handleMouseMove = (e) => {
    if (disabled || !cardRef.current) return;
    
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const { clientX, clientY } = e;
    
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    
    const rotateY = (x - 0.5) * depth;
    const rotateX = (0.5 - y) * depth;
    
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      boxShadow: `
        ${-rotateY}px ${rotateX}px 30px -15px rgba(0, 0, 0, 0.1),
        0 10px 15px -3px rgba(0, 0, 0, 0.1)
      `,
      transition: 'none'
    });
  };
  
  const handleMouseLeave = () => {
    if (disabled) return;
    
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease'
    });
  };
  
  return (
    <div
      ref={cardRef}
      className={`overflow-hidden ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default Card3D; 