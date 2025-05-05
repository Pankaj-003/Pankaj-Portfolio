import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Charles Byrum",
    position: "CEO",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus quam malesuada est pellentesque rhoncus."
  },
  {
    id: 2,
    name: "William Campisi",
    position: "CTO",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus quam malesuada est pellentesque rhoncus."
  },
  {
    id: 3,
    name: "Michael Miller",
    position: "CEO",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus quam malesuada est pellentesque rhoncus."
  },
  {
    id: 4,
    name: "Sophia Williams",
    position: "UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus quam malesuada est pellentesque rhoncus."
  },
  {
    id: 5,
    name: "Emily Davis",
    position: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus quam malesuada est pellentesque rhoncus."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  
  // Get visible cards based on screen size
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) {
        return 3;
      } else if (window.innerWidth >= 768) {
        return 2;
      } else {
        return 1;
      }
    }
    return 1;
  };

  // Handle next/prev buttons
  const handleNext = () => {
    const visibleCards = getVisibleCards();
    if (currentIndex < testimonials.length - visibleCards) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Loop back to start
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    const visibleCards = getVisibleCards();
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      // Loop to end
      setCurrentIndex(testimonials.length - visibleCards);
    }
  };
  
  // Move to specific dot index
  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  
  return (
    <section className="py-20 overflow-hidden relative">
      {/* 3D Isometric Grid Background Pattern */}
      <div className="absolute inset-0 bg-gray-50 -z-10">
        <div className="absolute inset-0 opacity-10">
          <svg 
            width="100%" 
            height="100%" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern 
                id="isometric-grid" 
                width="56" 
                height="100" 
                patternUnits="userSpaceOnUse" 
                patternTransform="scale(0.5) rotate(0)"
              >
                <rect width="56" height="100" fill="#f8fafc" />
                <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke="#6C63FF" strokeWidth="0.5" />
                <path d="M0 50L28 66L56 50" fill="none" stroke="#6C63FF" strokeWidth="0.5" />
                <path d="M0 16L28 32L56 16" fill="none" stroke="#6C63FF" strokeWidth="0.5" />
                <path d="M28 32L28 66" fill="none" stroke="#6C63FF" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#isometric-grid)" />
          </svg>
        </div>
      </div>
      
      {/* Floating 3D elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 3D Cube */}
        <div className="absolute top-[15%] left-[10%] opacity-20 animate-float">
          <div className="cube">
            <div className="cube__face cube__face--front"></div>
            <div className="cube__face cube__face--back"></div>
            <div className="cube__face cube__face--right"></div>
            <div className="cube__face cube__face--left"></div>
            <div className="cube__face cube__face--top"></div>
            <div className="cube__face cube__face--bottom"></div>
          </div>
        </div>
        
        {/* 3D Pyramid */}
        <div className="absolute top-[60%] right-[15%] opacity-15 animate-float-reverse">
          <div className="pyramid">
            <div className="pyramid__face pyramid__face--front"></div>
            <div className="pyramid__face pyramid__face--right"></div>
            <div className="pyramid__face pyramid__face--left"></div>
            <div className="pyramid__face pyramid__face--back"></div>
          </div>
        </div>
        
        {/* Floating spheres */}
        <div className="absolute top-[30%] right-[25%] w-20 h-20 bg-gradient-to-br from-purple-300 to-indigo-400 rounded-full opacity-10 blur-sm animate-pulse"></div>
        <div className="absolute bottom-[20%] left-[20%] w-32 h-32 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full opacity-10 blur-md animate-pulse-slow"></div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-400 rounded-full opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 rounded-full opacity-10"></div>
      <div className="absolute top-1/4 right-10 w-8 h-8 bg-yellow-300 rounded-full opacity-30"></div>
      <div className="absolute bottom-1/4 left-10 w-8 h-8 bg-purple-300 rounded-full opacity-30"></div>
      
      {/* Dotted background pattern */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #6c63ff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <p className="uppercase text-[#6C63FF] text-sm font-medium tracking-wider mb-2">TESTIMONALS</p>
          <h2 className="text-4xl font-bold text-gray-800">What People Say's About Me</h2>
        </div>
        
        {/* Testimonial cards */}
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="overflow-hidden">
            <motion.div
              ref={carouselRef}
              className="flex gap-8 py-8"
              animate={{
                x: `-${currentIndex * (100 / getVisibleCards())}%`
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {testimonials.map((testimonial) => (
                <motion.div 
                  key={testimonial.id} 
                  className="flex-shrink-0 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
                  whileHover={{ 
                    scale: 1.03, 
                    rotateY: 5,
                    rotateX: 5,
                    translateZ: 10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }}
                  style={{ 
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 h-full backdrop-blur-sm bg-white/90 border border-white/20">
                    {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                        >
                          <FaStar className="text-yellow-400 mr-1" />
                        </motion.div>
                ))}
              </div>
              
                    {/* Testimonial Text */}
                    <p className="text-gray-600 mb-6">
                      {testimonial.text}
                    </p>
              
                    {/* Person Info */}
                    <div className="flex items-center mt-auto">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#6C63FF] to-purple-500 rounded-full opacity-20 blur-sm"></div>
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                          className="w-12 h-12 rounded-full mr-4 object-cover relative z-10 border-2 border-white"
                />
                      </div>
                <div>
                        <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.position}</p>
                      </div>
                </div>
              </div>
            </motion.div>
          ))}
            </motion.div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(Math.ceil(testimonials.length - (getVisibleCards() - 1)))].map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'bg-[#6C63FF] w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows - Hidden on Mobile */}
          <div className="hidden md:block">
            <motion.button
              onClick={handlePrev}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
              aria-label="Previous"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button
              onClick={handleNext}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10"
              aria-label="Next"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* CSS for 3D elements */}
      <style jsx>{`
        /* 3D Cube */
        .cube {
          width: 40px;
          height: 40px;
          transform-style: preserve-3d;
          transform: rotateX(-20deg) rotateY(30deg);
        }
        
        .cube__face {
          position: absolute;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(108, 99, 255, 0.5);
          opacity: 0.7;
        }
        
        .cube__face--front {
          transform: translateZ(20px);
          background-color: rgba(108, 99, 255, 0.1);
        }
        
        .cube__face--back {
          transform: rotateY(180deg) translateZ(20px);
          background-color: rgba(108, 99, 255, 0.1);
        }
        
        .cube__face--right {
          transform: rotateY(90deg) translateZ(20px);
          background-color: rgba(108, 99, 255, 0.2);
        }
        
        .cube__face--left {
          transform: rotateY(-90deg) translateZ(20px);
          background-color: rgba(108, 99, 255, 0.2);
        }
        
        .cube__face--top {
          transform: rotateX(90deg) translateZ(20px);
          background-color: rgba(108, 99, 255, 0.3);
        }
        
        .cube__face--bottom {
          transform: rotateX(-90deg) translateZ(20px);
          background-color: rgba(108, 99, 255, 0.1);
        }
        
        /* 3D Pyramid */
        .pyramid {
          width: 40px;
          height: 40px;
          transform-style: preserve-3d;
          transform: rotateX(-20deg) rotateY(45deg);
          position: relative;
        }
        
        .pyramid__face {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          border-bottom: 35px solid rgba(255, 213, 79, 0.2);
          transform-origin: 50% 100%;
        }
        
        .pyramid__face--front {
          transform: translateZ(0px) rotateX(30deg);
        }
        
        .pyramid__face--right {
          transform: rotateY(90deg) translateZ(0px) rotateX(30deg);
        }
        
        .pyramid__face--back {
          transform: rotateY(180deg) translateZ(0px) rotateX(30deg);
        }
        
        .pyramid__face--left {
          transform: rotateY(-90deg) translateZ(0px) rotateX(30deg);
        }
        
        /* Animations */
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        
        @keyframes float-reverse {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        
        @keyframes pulse {
          0% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.05); }
          100% { opacity: 0.1; transform: scale(1); }
        }
        
        @keyframes pulse-slow {
          0% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
          100% { opacity: 0.1; transform: scale(1); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials; 