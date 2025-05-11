import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
// Import Swiper and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow, FreeMode } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Anderson",
    position: "CTO at TechVision Inc.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    stars: 5,
    text: "Working with this developer was an exceptional experience. Their expertise in React and modern web technologies transformed our platform completely. The attention to detail, clean code architecture, and ability to deliver complex features ahead of schedule exceeded our expectations. What truly sets them apart is their proactive approach to solving problems and suggesting innovative solutions."
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Lead Developer at InnovateSoft",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    stars: 5,
    text: "I've collaborated with many developers, but their technical prowess and problem-solving abilities are outstanding. They implemented our new microservices architecture with exceptional skill, improving our system performance by 40%. Their deep understanding of both frontend and backend technologies, combined with excellent communication skills, made complex technical discussions effortless."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Product Manager at DesignHub",
    avatar: "https://randomuser.me/api/portraits/women/54.jpg",
    stars: 5,
    text: "Their eye for design and user experience is remarkable. They took our basic wireframes and transformed them into a beautiful, intuitive interface that our users love. The responsive design work was flawless, and they added thoughtful animations that enhanced the overall experience. Their ability to translate business requirements into technical solutions is invaluable."
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Startup Founder & CEO",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    stars: 5,
    text: "As a startup founder, finding a developer who understands both technical and business aspects is crucial. They didn't just write code; they contributed valuable insights to our product strategy. Their work on our MVP was instrumental in securing our first round of funding. The codebase they created is clean, scalable, and easy to maintain."
  },
  {
    id: 5,
    name: "Lisa Zhang",
    position: "Senior UX Designer at CreativeFlow",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    stars: 5,
    text: "Their commitment to creating accessible and inclusive web applications is admirable. They implemented complex UI components while ensuring WCAG compliance and optimal performance. The animation work they did on our product pages significantly improved user engagement. It's rare to find a developer who cares equally about code quality and user experience."
  },
  {
    id: 6,
    name: "James Wilson",
    position: "Engineering Director at CloudScale",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    stars: 5,
    text: "The migration of our legacy system to a modern React-based architecture was handled brilliantly. Their expertise in performance optimization and state management resulted in a 60% improvement in load times. They also implemented an excellent CI/CD pipeline that significantly improved our development workflow. A true professional who delivers enterprise-grade solutions."
  },
  {
    id: 7,
    name: "Anna Martinez",
    position: "Digital Marketing Manager",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    stars: 5,
    text: "Their work on our e-commerce platform was transformative. They implemented advanced features like real-time inventory tracking and personalized recommendations that boosted our conversion rates by 35%. The SEO optimizations and performance improvements they made had a direct impact on our bottom line. A developer who truly understands business impact."
  },
  {
    id: 8,
    name: "Robert Kim",
    position: "Technical Architect at SecureNet",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    stars: 5,
    text: "Security and scalability were our top priorities, and they delivered on both fronts. Their implementation of OAuth 2.0 and handling of sensitive data was impeccable. The microservices architecture they designed handles our peak loads effortlessly. Their documentation and knowledge transfer process was thorough and professional."
  }
];

const Testimonials = () => {
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
          <p className="uppercase text-[#6C63FF] text-sm font-medium tracking-wider mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl font-bold text-gray-800">What People Say About Me</h2>
        </div>
        
        {/* Testimonial cards with Swiper */}
        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            freeMode={{
              enabled: true,
              sticky: true,
              momentumRatio: 0.25,
              momentumVelocityRatio: 0.5
            }}
            speed={800}
            slideToClickedSlide={true}
            coverflowEffect={{
              rotate: 5,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              enabled: true,
              hideOnClick: true
            }}
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow, FreeMode]}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 20,
                centeredSlides: true
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: true
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                centeredSlides: true
              }
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div 
                  className="testimonial-card bg-white rounded-lg p-6 h-full"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }}
                >
                  {/* Star Rating */}
                  <div className="flex mb-4 star-rating">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="star"
                      >
                        <FaStar className="text-yellow-400 mr-1" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-600 mb-6 testimonial-text">
                    {testimonial.text}
                  </p>
                  
                  {/* Person Info */}
                  <div className="flex items-center mt-auto">
                    <div className="relative avatar-container">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#6C63FF] to-purple-500 rounded-full opacity-20 blur-sm"></div>
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover relative z-10 border-2 border-white avatar-image"
                        onLoad={(e) => e.target.classList.add('loaded')}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 testimonial-name">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm testimonial-position">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      {/* CSS for 3D elements */}
      <style jsx="true">{`
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

        /* Swiper Custom Styles */
        .testimonials-swiper {
          padding: 2rem 0 4rem 0 !important;
        }

        .swiper-slide {
          width: auto;
          height: auto;
          transition: transform 0.3s ease;
        }

        .testimonial-card {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
          height: 100%;
          min-height: 300px;
          display: flex;
          flex-direction: column;
        }

        /* Navigation Buttons */
        .swiper-button-next,
        .swiper-button-prev {
          background-color: white;
          padding: 2rem;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          color: #6C63FF !important;
          transition: all 0.3s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: #6C63FF;
          color: white !important;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 1.5rem !important;
        }

        /* Pagination Bullets */
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #6C63FF;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .testimonials-swiper {
            padding: 1rem 0 3rem 0 !important;
          }

          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }

          .testimonial-card {
            min-height: 250px;
          }
        }

        @media (max-width: 640px) {
          .testimonial-card {
            min-height: 200px;
          }
        }

        /* Enhanced Typography */
        .testimonial-text {
          font-size: 1rem;
          line-height: 1.8;
          color: #374151;
        }

        .testimonial-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #111827;
        }

        .testimonial-position {
          font-size: 0.9rem;
          color: #6B7280;
        }

        /* Star Rating Animation */
        .star-rating {
          display: inline-flex;
          gap: 2px;
        }

        .star {
          transition: transform 0.2s ease;
        }

        .star:hover {
          transform: scale(1.2);
        }

        /* Avatar Image */
        .avatar-container {
          position: relative;
          transition: transform 0.3s ease;
        }

        .avatar-container:hover {
          transform: scale(1.1);
        }

        .avatar-image {
          transition: opacity 0.3s ease;
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .swiper-container {
            --swiper-autoplay-delay: 0;
          }
          
          .testimonial-card,
          .star,
          .avatar-container {
            transition: none;
          }
        }

        /* Enhanced Swiper Styles for One-Hand Usage */
        .testimonials-swiper {
          touch-action: pan-y;
          user-select: none;
          -webkit-user-select: none;
          -webkit-touch-callout: none;
        }

        .swiper-slide {
          transition: transform 0.3s ease, opacity 0.3s ease;
          opacity: 0.5;
        }

        .swiper-slide-active {
          opacity: 1;
          transform: scale(1.05);
        }

        /* Improved Navigation for One-Hand Usage */
        .swiper-button-next,
        .swiper-button-prev {
          transform: scale(0.8);
          transition: transform 0.2s ease;
        }

        .swiper-button-next:active,
        .swiper-button-prev:active {
          transform: scale(0.7);
        }

        /* Enhanced Touch Area for Mobile */
        @media (max-width: 768px) {
          .swiper-slide {
            touch-action: pan-y pinch-zoom;
          }

          .testimonial-card {
            min-height: auto;
            padding: 1.5rem;
          }
        }

        /* Momentum Scrolling Enhancement */
        @supports (-webkit-overflow-scrolling: touch) {
          .testimonials-swiper {
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials; 