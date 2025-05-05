import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const MorphingText = ({ 
  words = [],
  baseText = "I'm a",
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
  textColor = 'text-[#5e3bee]',
  className = ''
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [cursorBlinking, setCursorBlinking] = useState(true);
  const timeoutRef = useRef(null);
  
  useEffect(() => {
    // Clear any existing timeout when component unmounts
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  
  useEffect(() => {
    if (words.length === 0) return;
    
    const currentWord = words[currentWordIndex];
    
    // Handle typing and deleting animation
    const handleTypingAnimation = () => {
      setCursorBlinking(false);
      
      // If deleting, remove a character
      if (isDeleting) {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
      } 
      // Otherwise, add a character
      else {
        setDisplayText(prev => 
          currentWord.substring(0, prev.length + 1)
        );
      }
      
      // Determine the typing speed
      let typingDelay = isDeleting ? deletingSpeed : typingSpeed;
      
      // If completed typing the word
      if (!isDeleting && displayText === currentWord) {
        // Start deleting after delay
        typingDelay = delayBetweenWords;
        setCursorBlinking(true);
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
          setCursorBlinking(false);
        }, typingDelay);
        return;
      }
      
      // If deleted the whole word
      if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentWordIndex(prev => (prev + 1) % words.length);
        setCursorBlinking(true);
        // Small pause before typing the next word
        typingDelay = 500;
      }
      
      // Continue the animation
      timeoutRef.current = setTimeout(handleTypingAnimation, typingDelay);
    };
    
    // Start the typing animation
    timeoutRef.current = setTimeout(handleTypingAnimation, 100);
    
    // Cleanup function
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [words, currentWordIndex, isDeleting, displayText, typingSpeed, deletingSpeed, delayBetweenWords]);
  
  return (
    <span className={`inline-flex items-center ${className}`}>
      {baseText && <span className="mr-2">{baseText}</span>}
      <span className={`font-bold ${textColor}`}>
        {displayText}
        <span className={`inline-block w-0.5 h-5 ml-0.5 bg-current ${cursorBlinking ? 'animate-blink' : ''}`}></span>
      </span>
    </span>
  );
};

MorphingText.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  baseText: PropTypes.string,
  typingSpeed: PropTypes.number,
  deletingSpeed: PropTypes.number,
  delayBetweenWords: PropTypes.number,
  textColor: PropTypes.string,
  className: PropTypes.string
};

export default MorphingText; 