import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import profileImg from '../assets/images/HeroSection.png'; // Your profile image
import ArrowImgone from '../assets/images/Arrow1.png';
import '../Navbar.css';

const Hero = () => {
  const socialLinks = [
    { 
      icon: FaGithub, 
      url: 'https://github.com/yourusername',
      color: '#333',
      hoverColor: '#6e5494',
      delay: 0.7
    },
    { 
      icon: FaLinkedin, 
      url: 'https://linkedin.com/in/yourusername',
      color: '#0077b5',
      hoverColor: '#00a0dc',
      delay: 0.8
    },
    // { 
    //   icon: FaTwitter, 
    //   url: 'https://twitter.com/yourusername',
    //   color: '#1da1f2',
    //   hoverColor: '#1a91da',
    //   delay: 0.9
    // },
    { 
      icon: FaInstagram, 
      url: 'https://instagram.com/yourusername',
      color: '#e4405f',
      hoverColor: '#f77737',
      delay: 1.0
    },
    // { 
    //   icon: FaYoutube, 
    //   url: 'https://youtube.com/yourusername',
    //   color: '#ff0000',
    //   hoverColor: '#cc0000',
    //   delay: 1.1
    // },
    { 
      icon: FaFacebook, 
      url: 'https://facebook.com/yourusername',
      color: '#1877f2',
      hoverColor: '#0d6efd',
      delay: 1.2
    }
  ];

  return (
    <section id="home" className="bg-gradient-to-br from-[#7B6EF6] to-[#5952cc] pt-20 relative overflow-hidden hero-main">
      {/* 3D Curved Pattern Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large curved shape at the bottom */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-[50%] bg-blue-500/5 rounded-t-[100%] scale-x-125"
          animate={{
            scale: [1, 1.02, 1],
            y: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Curved shape at the top */}
        <motion.div 
          className="absolute top-0 right-0 w-full h-[40%] bg-indigo-600/5 rounded-bl-[100%]"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, -1, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Additional decorative elements */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.05, 0.08, 0.05],
            scale: [1, 1.1, 1]
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/5 rounded-full"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
            rotate: [0, 5, 0]
          }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJoNnptLTYgNmMwIDYuNjI3LTUuMzczIDEyLTEyIDEycy0xMi01LjM3My0xMi0xMkg0OHYtNkg2eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')]"></div>
      </div>
      
      {/* Side navigation dots */}
      <div className="absolute dot-t space-y-6 z-20">
              {[1, 2, 3, 4, 5].map((num) => (
                <motion.div 
                  key={num} 
                  className="w-4 h-4 dot-t-main bg-white rounded-full"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 2,
                    delay: num * 0.2
                  }}
                />
              ))}
            </div>

      {/* Main content container */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left text content */}
          <div className="md:w-1/2 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.span 
                className="text-[#ffa62b] text-lg font-medium mb-2 block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Welcome to my portfolio
              </motion.span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                Hello, I'm{' '}
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 inline-block"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: '200% 100%' }}
                >
                  Pankaj Biswas
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  A Full Stack Developer
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-white/80 mb-8 max-w-lg text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Passionate about creating beautiful, functional, and user-centered digital experiences. Specialized in building modern web applications with cutting-edge technologies.
            </motion.p>

            {/* Social Media Links */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-white text-lg font-medium mb-4">Connect With Me</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map(({ icon: Icon, url, color, hoverColor, delay }) => (
                  <motion.a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-white/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      style={{ 
                        border: `1px solid ${color}`,
                        boxShadow: `0 0 15px ${color}40`
                      }}
                    >
                      <Icon 
                        className="text-white transition-colors duration-300" 
                        size={24}
                        style={{ color }}
                      />
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 10 }}
                      animate={{ y: 0 }}
                    >
                      <span className="text-white text-sm font-medium whitespace-nowrap">
                        {url.split('/')[2].replace('www.', '')}
                      </span>
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Right image with decorative elements */}
          <div className="md:w-1/2 mt-10 md:mt-0 relative">
            {/* Main orange blob */}
            <motion.div 
              className="absolute main-circle-shape  w-[300px] h-[300px] bg-gradient-to-br from-[#ffa62b] to-[#ff8a00] rounded-full opacity-90 z-0 blur-[2px]"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />
            {/* arrow1 */}
            <motion.img 
  src={ArrowImgone} 
  alt="arrow1"
  className="arrow1 absolute"
  animate={{
    scale: [1, 1.1, 1], // zoom in and out
  }}
  transition={{
    repeat: Infinity,
    duration: 1.2,
    ease: "easeInOut",
  }}
/>

            {/* Smaller orange circle decoration */}
            <motion.div 
              className="absolute small-shape bottom-21 bg-gradient-to-br from-[#ffa62b] to-[#ff8a00] rounded-full opacity-80 z-0 blur-[1px]"
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            
            {/* Main profile image */}
            <motion.div
              className="relative profile-div"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
             
              <motion.img 
                src={profileImg} 
                alt="Pankaj Biswas"
                className="relative progle-main"
             
              />
            </motion.div>
            
            {/* Small decoration dots on right */}
            <div className="absolute dot-b space-y-6 z-20">
              {[1, 2, 3, 4, 5].map((num) => (
                <motion.div 
                  key={num} 
                  className="w-4 h-4 dot-b-main bg-white rounded-full"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 2,
                    delay: num * 0.2
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
