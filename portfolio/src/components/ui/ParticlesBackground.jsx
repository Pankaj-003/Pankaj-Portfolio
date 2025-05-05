import { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set canvas to full screen
    canvas.width = width;
    canvas.height = height;
    
    // Particle properties
    const particlesArray = [];
    const numberOfParticles = 100;
    const colors = ['#5e3bee33', '#f5a62333', '#4930be33'];

    // Handle window resize
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      // Recreate particles
      particlesArray.length = 0;
      init();
    }

    window.addEventListener('resize', handleResize);

    // Define particle class
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off walls
        if (this.x + this.size > width || this.x - this.size < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y + this.size > height || this.y - this.size < 0) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      requestAnimationFrame(animate);
    }

    init();
    animate();

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20"
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticlesBackground; 