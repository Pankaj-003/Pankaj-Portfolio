import React from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaJava, FaServer, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiNextdotjs, SiTailwindcss, SiBootstrap, SiMui, SiFirebase, SiGraphql, SiTypescript, SiJest, SiDocker } from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';
import { DiGit } from 'react-icons/di';

const Skills = () => {
  // Scroll based animations
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  
  // Text animation for headline letters
  const headlineText = "Technical Proficiency";
  const headlineLetters = Array.from(headlineText);
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5
      }
    })
  };
  
  // Enhanced container variants with bounce effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  // Enhanced item variants with multiple animations
  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.8 },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        damping: 10
      }
    }
  };

  // 3D flip card effect
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: { 
      y: -15, 
      transition: { duration: 0.3 },
      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
      transform: "perspective(1000px) rotateX(2deg)"
    }
  };
  
  // New zoom-in effect for skill cards
  const zoomVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };
  
  // SVG path animation
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const icons = [
    { Icon: FaHtml5, name: "HTML5", color: "#E34F26", bgColor: "bg-orange-100" },
    { Icon: FaCss3Alt, name: "CSS3", color: "#1572B6", bgColor: "bg-blue-100" },
    { Icon: FaJsSquare, name: "JavaScript", color: "#F7DF1E", bgColor: "bg-yellow-100" },
    { Icon: SiTypescript, name: "TypeScript", color: "#3178C6", bgColor: "bg-blue-100" },
    { Icon: FaReact, name: "React", color: "#61DAFB", bgColor: "bg-blue-50" },
    { Icon: SiRedux, name: "Redux", color: "#764ABC", bgColor: "bg-purple-100" },
    { Icon: SiNextdotjs, name: "Next.js", color: "#000000", bgColor: "bg-gray-100" },
    { Icon: FaNodeJs, name: "Node.js", color: "#339933", bgColor: "bg-green-100" },
    { Icon: SiExpress, name: "Express", color: "#000000", bgColor: "bg-gray-100" },
    { Icon: SiMongodb, name: "MongoDB", color: "#47A248", bgColor: "bg-green-50" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4", bgColor: "bg-cyan-100" },
    { Icon: SiBootstrap, name: "Bootstrap", color: "#7952B3", bgColor: "bg-purple-100" },
    { Icon: SiMui, name: "Material UI", color: "#0081CB", bgColor: "bg-blue-100" },
    { Icon: FaPython, name: "Python", color: "#3776AB", bgColor: "bg-blue-100" },
    { Icon: FaJava, name: "Java", color: "#007396", bgColor: "bg-red-100" },
    { Icon: DiGit, name: "Git", color: "#F05032", bgColor: "bg-red-50" },
    { Icon: SiFirebase, name: "Firebase", color: "#FFCA28", bgColor: "bg-yellow-100" },
    { Icon: SiGraphql, name: "GraphQL", color: "#E434AA", bgColor: "bg-pink-100" },
    { Icon: SiJest, name: "Jest", color: "#C21325", bgColor: "bg-red-100" },
    { Icon: SiDocker, name: "Docker", color: "#2496ED", bgColor: "bg-blue-100" },
    { Icon: TbBrandThreejs, name: "Three.js", color: "#000000", bgColor: "bg-gray-100" },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white overflow-hidden relative">
      {/* Animated background shapes with scroll-based transformations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-indigo-300 mix-blend-multiply"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
          style={{ 
            scale: useTransform(scrollYProgress, [0, 0.5], [1, 1.2])
          }}
        />
        <motion.div 
          className="absolute top-[30%] right-[5%] w-80 h-80 rounded-full bg-blue-200 mix-blend-multiply"
          animate={{ 
            y: [0, 40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut"
          }}
          style={{ 
            rotate: useTransform(scrollYProgress, [0, 1], [0, 45]) 
          }}
        />
        <motion.div 
          className="absolute bottom-[10%] left-[20%] w-72 h-72 rounded-full bg-purple-200 mix-blend-multiply"
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 9,
            ease: "easeInOut"
          }}
          style={{ 
            x: useTransform(scrollYProgress, [0, 1], [0, 50]) 
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header with staggered text animation */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6,
              type: "spring", 
              stiffness: 200 
            }}
            className="inline-block px-3 py-1 bg-indigo-100 rounded-md mb-3"
          >
            <span className="text-indigo-700 font-medium text-sm">SKILLS & EXPERTISE</span>
          </motion.div>
          
          <div className="overflow-hidden">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 flex justify-center flex-wrap"
            >
              {headlineLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={letter === " " ? "mr-2" : "inline-block"}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-gray-600"
          >
            As a BTech student specializing in MERN stack development, I've mastered various technologies 
            to create innovative, scalable, and responsive web applications.
          </motion.p>
        </div>

        {/* Main Skills - MERN Stack with 3D card transformations */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-gray-800 mb-10 text-center relative"
          >
            <span className="relative z-10">MERN Stack Expertise</span>
            {/* <motion.div 
              className="absolute left-1/2 -bottom-2 h-1 bg-indigo-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ x: "-50%" }}
            /> */}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* MongoDB Card with flip animation */}
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 h-full transform-gpu"
              variants={zoomVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="h-3 bg-green-500"></div>
              <div className="p-6">
                <motion.div 
                  className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 mx-auto"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.8 }}
                >
                  <SiMongodb className="text-green-600" size={40} />
                </motion.div>
                <h4 className="text-xl font-bold text-center mb-3 text-gray-800">MongoDB</h4>
                <p className="text-gray-600 mb-4 text-center">
                  NoSQL database expertise for scalable data storage with advanced schema design and aggregation pipelines.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <motion.span 
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
                  >
                    Schema Design
                  </motion.span>
                  <motion.span 
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
                  >
                    Aggregation
                  </motion.span>
                  <motion.span 
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
                  >
                    Atlas
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* Express Card with slide-in animation */}
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 h-full transform-gpu"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ 
                y: -15,
                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="h-3 bg-gray-600"></div>
              <div className="p-6">
                <motion.div 
                  className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6 mx-auto"
                  animate={{ 
                    rotateZ: [0, 10, -10, 10, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 5
                  }}
                >
                  <SiExpress className="text-gray-800" size={40} />
                </motion.div>
                <h4 className="text-xl font-bold text-center mb-3 text-gray-800">Express.js</h4>
                <p className="text-gray-600 mb-4 text-center">
                  Fast, minimalist web framework for building server-side applications and RESTful APIs with Node.js.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <motion.span 
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
                  >
                    REST APIs
                  </motion.span>
                  <motion.span 
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
                  >
                    Middleware
                  </motion.span>
                  <motion.span 
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
                  >
                    Authentication
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* React Card with rotating logo animation */}
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 h-full transform-gpu"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="h-3 bg-blue-400"></div>
              <div className="p-6">
                <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 8, 
                      ease: "linear" 
                    }}
                  >
                    <FaReact className="text-blue-500" size={40} />
                  </motion.div>
                </div>
                <h4 className="text-xl font-bold text-center mb-3 text-gray-800">React</h4>
                <p className="text-gray-600 mb-4 text-center">
                  JavaScript library for building dynamic user interfaces with reusable components and efficient state management.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <motion.span 
                    className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "#e0f2fe" }}
                  >
                    Hooks
                  </motion.span>
                  <motion.span 
                    className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "#e0f2fe" }}
                  >
                    Context API
                  </motion.span>
                  <motion.span 
                    className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "#e0f2fe" }}
                  >
                    Redux
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* Node.js Card with 3D rotation */}
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 h-full transform-gpu"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="h-3 bg-green-600"></div>
              <div className="p-6">
                <motion.div 
                  className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 mx-auto"
                  whileHover={{ 
                    rotateX: [0, 15, 0],
                    rotateY: [0, 15, 0],
                    transition: { duration: 1, repeat: Infinity }
                  }}
                >
                  <FaNodeJs className="text-green-700" size={40} />
                </motion.div>
                <h4 className="text-xl font-bold text-center mb-3 text-gray-800">Node.js</h4>
                <p className="text-gray-600 mb-4 text-center">
                  Runtime environment for executing JavaScript on the server with asynchronous, event-driven architecture.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <motion.span 
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
                  >
                    Event Loop
                  </motion.span>
                  <motion.span 
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
                  >
                    NPM
                  </motion.span>
                  <motion.span 
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
                  >
                    Async/Await
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Technologies Grid with staggered animation and animated grid */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-gray-800 mb-10 text-center relative"
          >
            <span className="relative z-10">Additional Technologies</span>
          </motion.h3>

          {/* Simple Auto-scrolling Slider */}
          <div className="relative overflow-hidden py-4">
            <SimpleSlider icons={icons} />
          </div>
        </div>

        {/* Development Categories with SVG path animations */}
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-gray-800 mb-10 text-center relative"
          >
            <span className="relative z-10">Development Areas</span>
            {/* <motion.div 
              className="absolute left-1/2 -bottom-2 h-1 bg-indigo-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ x: "-50%" }}
            /> */}
          </motion.h3>

          <div className="flex flex-row justify-center justify-items-center grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend with wave path animation */}
            <motion.div 
              className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100 overflow-hidden group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 10,
                delay: 0.1
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" 
              }}
            >
              {/* 3D effect elements */}
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-indigo-200 rounded-full -mt-10 -mr-10 opacity-20"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 1 }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-14 h-14 bg-blue-100 rounded-lg mb-6 flex items-center justify-center"
                  whileHover={{ 
                    rotate: [0, 10, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <FaReact className="text-blue-600" size={30} />
                </motion.div>
                <motion.h4 
                  className="text-xl font-bold mb-4 text-gray-800"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Frontend Development
                </motion.h4>
                <ul className="space-y-2 text-gray-700">
                  {["Responsive UI Design", "Interactive Web Applications", "Modern JavaScript Frameworks", "UI/UX Optimization", "CSS Frameworks & Preprocessors"].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                    >
                      <motion.span 
                        className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Backend with floating elements */}
            <motion.div 
              className="relative bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 10,
                delay: 0.2
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" 
              }}
            >
              {/* Floating particles */}
              <motion.div 
                className="absolute top-10 right-10 w-4 h-4 rounded-full bg-green-300 opacity-40"
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
              <motion.div 
                className="absolute bottom-10 left-10 w-3 h-3 rounded-full bg-green-400 opacity-30"
                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
              />
              <motion.div 
                className="absolute top-1/2 right-5 w-2 h-2 rounded-full bg-green-500 opacity-20"
                animate={{ y: [0, -5, 0], x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-14 h-14 bg-green-100 rounded-lg mb-6 flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2, yoyo: Infinity }
                  }}
                >
                  <FaServer className="text-green-600" size={30} />
                </motion.div>
                <motion.h4 
                  className="text-xl font-bold mb-4 text-gray-800"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Backend Development
                </motion.h4>
                <ul className="space-y-2 text-gray-700">
                  {["RESTful API Development", "Authentication & Authorization", "Server-side Logic", "Database Management", "API Integration"].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                    >
                      <motion.span 
                        className="w-2 h-2 bg-green-500 rounded-full mr-2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Database with typing effect */}
            <motion.div 
              className="relative bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-xl border border-purple-100 overflow-hidden group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 10,
                delay: 0.3
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" 
              }}
            >
              {/* 3D effect elements */}
              <motion.div 
                className="absolute top-0 right-0 w-40 h-40 bg-purple-200 rounded-full -mt-10 -mr-10 opacity-20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 15, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-14 h-14 bg-purple-100 rounded-lg mb-6 flex items-center justify-center"
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.1}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaDatabase className="text-purple-600" size={30} />
                </motion.div>
                <motion.h4 
                  className="text-xl font-bold mb-4 text-gray-800"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Database Management
                </motion.h4>
                <ul className="space-y-2 text-gray-700">
                  {["NoSQL & SQL Databases", "Schema Design & Modeling", "Data Optimization", "Aggregation & Queries", "Cloud Database Services"].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                    >
                      <motion.span 
                        className="w-2 h-2 bg-purple-500 rounded-full mr-2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated decoration - SVG path animation */}
        <motion.div 
          className="absolute bottom-10 right-10 z-0 opacity-70"
          style={{ rotate }}
        >
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <motion.path 
              d="M25 0L30.9 19.1L50 25L30.9 30.9L25 50L19.1 30.9L0 25L19.1 19.1L25 0Z" 
              fill="#6366F1" 
              fillOpacity="0.5"
              variants={pathVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

// Simple slider component
const SimpleSlider = ({ icons }) => {
  const [position, setPosition] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [width, setWidth] = React.useState(0);
  
  // Calculate total width of all icons
  React.useEffect(() => {
    if (sliderRef.current) {
      setWidth(sliderRef.current.scrollWidth / 3);
    }
  }, [icons]);
  
  // Auto-scrolling effect
  React.useEffect(() => {
    const scrollSpeed = 6; // pixels per frame
    let animationId;
    
    const animate = () => {
      setPosition(prev => {
        // Reset position when we've scrolled through first set of icons
        if (Math.abs(prev) >= width) {
          return 0;
        }
        return prev - scrollSpeed;
      });
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [width]);
  
  // Duplicate icons for seamless loop
  const displayIcons = [...icons, ...icons];
  
  return (
    <div className="overflow-hidden mx-auto max-w-5xl">
      <div 
        ref={sliderRef}
        className="flex items-center gap-8 py-4"
        style={{ 
          transform: `translateX(${position}px)`,
          transition: "transform 0.1s linear"
        }}
      >
        {displayIcons.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} p-4 rounded-xl flex flex-col items-center justify-center min-w-[110px] flex-shrink-0`}
            style={{ 
              transition: "transform 0.2s ease-in-out" 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
            }}
          >
            <div className="mb-3">
              <item.Icon size={30} style={{ color: item.color }} />
            </div>
            <p className="text-sm font-medium text-gray-800 text-center">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 