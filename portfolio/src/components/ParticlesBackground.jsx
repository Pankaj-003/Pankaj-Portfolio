import React, { useRef, useEffect } from 'react';

const ParticlesBackground = ({ 
  count = 100, 
  color = '#4cc9f0', 
  speed = 0.5,
  mouseInteraction = true,
  depth = 50,
  minSize = 1,
  maxSize = 4
}) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 });
  const frameRef = useRef(null);
  
  // Initialize particles
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    
    if (mouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    // Initialize particles
    particlesRef.current = Array(count).fill().map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * depth,
      size: Math.random() * (maxSize - minSize) + minSize,
      speedX: (Math.random() - 0.5) * speed,
      speedY: (Math.random() - 0.5) * speed,
      speedZ: (Math.random() - 0.5) * speed * 0.5
    }));
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particlesRef.current.forEach(particle => {
        // Calculate perspective (particles closer to viewer are larger and move faster)
        const perspective = depth / (depth - particle.z);
        const perspectiveSize = particle.size * perspective;
        
        // Projected coordinates
        const projectedX = particle.x * perspective;
        const projectedY = particle.y * perspective;
        
        // Calculate opacity based on z-position
        const opacity = Math.min(1, (particle.z / depth) + 0.3);
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, perspectiveSize, 0, Math.PI * 2);
        ctx.fillStyle = color.replace(')', `, ${opacity})`).replace('rgb', 'rgba');
        ctx.fill();
        
        // Mouse interaction
        if (mouseInteraction) {
          // Calculate distance between mouse and particle
          const dx = projectedX - mouseRef.current.x;
          const dy = projectedY - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Repel particles near mouse
          if (distance < mouseRef.current.radius) {
            const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
            particle.x += dx * force * 0.02;
            particle.y += dy * force * 0.02;
          }
        }
        
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.z += particle.speedZ;
        
        // Reset particle if it goes off-screen or out of depth
        if (
          particle.x < 0 || 
          particle.x > canvas.width || 
          particle.y < 0 || 
          particle.y > canvas.height ||
          particle.z < 0 ||
          particle.z > depth
        ) {
          if (Math.random() > 0.5) {
            // Reset position on edge
            particle.x = Math.random() * canvas.width;
            particle.y = Math.random() * canvas.height;
            particle.z = Math.random() > 0.5 ? 0 : depth;
          } else {
            // Reset z in the middle
            particle.z = Math.random() > 0.5 ? 0 : depth;
            if (particle.z === 0) {
              particle.x = Math.random() * canvas.width;
              particle.y = Math.random() * canvas.height;
            }
          }
        }
      });
      
      frameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mouseInteraction) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(frameRef.current);
    };
  }, [count, color, speed, mouseInteraction, depth, minSize, maxSize]);
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'transparent',
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticlesBackground; 