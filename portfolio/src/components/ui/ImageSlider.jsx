import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageSlider = ({ images, interval = 5000, autoPlay = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    let timer;
    if (autoPlay) {
      timer = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
    }

    return () => clearInterval(timer);
  }, [autoPlay, images.length, interval]);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const slideVariants = {
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
      scale: 0.8,
      rotateY: -30,
      z: -100
    },
    hiddenRight: {
      x: '100%',
      opacity: 0,
      scale: 0.8,
      rotateY: 30,
      z: -100
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      z: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    },
    exit: direction => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 30 : -30,
      z: -100,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    })
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto perspective overflow-hidden rounded-xl shadow-xl h-80 md:h-96">
      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#5e3bee]"
        aria-label="Previous image"
      >
        <FaChevronLeft />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#5e3bee]"
        aria-label="Next image"
      >
        <FaChevronRight />
      </button>

      {/* Slides */}
      <div className="w-full h-full preserve-3d">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute w-full h-full"
            custom={direction}
            variants={slideVariants}
            initial={direction > 0 ? 'hiddenRight' : 'hiddenLeft'}
            animate="visible"
            exit="exit"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt || `Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            {images[currentIndex].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <h3 className="text-xl font-bold">{images[currentIndex].caption}</h3>
                {images[currentIndex].description && (
                  <p className="text-sm">{images[currentIndex].description}</p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full focus:outline-none transition-all ${
              index === currentIndex ? 'bg-[#5e3bee] w-6' : 'bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider; 