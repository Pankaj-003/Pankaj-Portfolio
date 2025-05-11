import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaServer, FaMobileAlt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiJavascript, SiTypescript, SiGraphql } from 'react-icons/si';
import '../styles/services-responsive.css';
import '../styles/services-edge-fixes.css';
import '../styles/services-animations.css';

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }
  };

  return (
    <section id="services" className="py-20 px-4 md:px-10 lg:px-20 relative overflow-hidden bg-white">
      {/* Decorative elements - left spiral */}
      <div className="absolute top-20 left-10 z-0 opacity-50">
        <motion.svg 
          width="80" 
          height="80" 
          viewBox="0 0 100 100" 
          fill="none"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear",
            opacity: { duration: 1 }
          }}
        >
          <path 
            d="M50 0C55.5 0 60.9 1.1 65.8 3.3C70.7 5.5 75.1 8.5 78.5 12.4C82 16.3 84.5 20.9 85.9 25.9C87.3 30.9 87.5 36.1 86.7 41.1C85.8 46.2 83.9 51 81 55.2C78.1 59.4 74.4 62.9 70 65.4C65.7 67.9 60.8 69.3 55.9 69.6C50.9 69.8 45.9 68.9 41.4 66.8C36.8 64.8 32.7 61.7 29.5 57.8C26.2 53.9 23.8 49.3 22.6 44.4C21.3 39.4 21.2 34.2 22.2 29.2C23.3 24.2 25.4 19.5 28.4 15.5C31.5 11.4 35.4 8.1 39.9 5.9C44.4 3.7 49.3 2.5 54.3 2.5C59.2 2.5 64.1 3.7 68.5 6C72.9 8.3 76.7 11.6 79.6 15.7C82.5 19.8 84.4 24.5 85.2 29.5C86 34.5 85.6 39.6 84.1 44.4C82.6 49.2 80.1 53.7 76.7 57.4C73.2 61.1 69 63.9 64.3 65.7C59.6 67.6 54.6 68.3 49.6 67.9C44.6 67.5 39.8 65.9 35.6 63.3C31.3 60.7 27.8 57.1 25.2 52.8C22.7 48.5 21.2 43.7 20.9 38.7C20.7 33.8 21.6 28.8 23.7 24.3C25.8 19.8 28.9 15.8 32.8 12.7"
            stroke="#FFD700"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.svg>
      </div>
      
      {/* Decorative elements - right bubbles */}
      <div className="absolute top-20 right-10 z-0">
        <div className="relative">
          <motion.div 
            className="w-10 h-10 rounded-full bg-indigo-200"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <motion.div 
            className="w-6 h-6 rounded-full bg-indigo-300 absolute -top-4 right-2"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div 
            className="w-4 h-4 rounded-full bg-indigo-400 absolute top-2 -right-2"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          />
        </div>
      </div>
      
      {/* Yellow star decoration - moved to top section */}
      <motion.div 
        className="absolute top-32 right-1/4 transform -translate-x-1/2"
        animate={{ rotate: 360, y: [0, -10, 0] }}
        transition={{ 
          rotate: { repeat: Infinity, duration: 20, ease: "linear" },
          y: { repeat: Infinity, duration: 3, ease: "easeInOut" }
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L24.4 15.6L40 20L24.4 24.4L20 40L15.6 24.4L0 20L15.6 15.6L20 0Z" fill="#FFC107" />
        </svg>
      </motion.div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 bg-indigo-50 rounded-full mb-4"
          >
            <p className="text-indigo-600 font-medium tracking-wider uppercase text-sm">SERVICES</p>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Expertise Services
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Specialized in MERN stack development delivering scalable, high-performance 
            web applications that transform ideas into digital reality.
          </motion.p>
        </div>

        {/* Service Cards - fixed flex vs grid issue */}
        <div className="flex flex-row grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Frontend Development */}
          <motion.div
            className="bg-white rounded-2xl p-8 text-center transition-all border border-gray-100 h-full"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              hover: { duration: 0.3 }
            }}
          >
            <div className="relative mb-8">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-indigo-50 rounded-lg -rotate-6"></div>
              <motion.div 
                className="w-20 h-20 mx-auto rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 relative z-10"
                whileHover={{ rotate: 10, scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <FaReact size={38} className="group-hover:text-indigo-600 transition-all" />
              </motion.div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Frontend Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Creating responsive, interactive UIs with React, Redux, and modern JavaScript. Implementing pixel-perfect designs with advanced animations and state management.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">React</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Redux</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Tailwind</span>
            </div>
          </motion.div>
          
          {/* Card 2: Backend Development - Changed from blue to gradient with enhanced design */}
          <motion.div 
            className="bg-white bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-8 text-center border border-indigo-100 shadow-lg relative h-full"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{
              y: -10,
              boxShadow: "0 30px 60px -12px rgba(79, 70, 229, 0.3)",
              backgroundImage: "linear-gradient(to bottom right, white, #eef2ff, #e0e7ff)",
              scale: 1.02
            }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              hover: { duration: 0.3 }
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-10 left-4 w-3 h-3 bg-indigo-300 rounded-full"></div>
            <div className="absolute bottom-10 right-6 w-3 h-3 bg-indigo-300 rounded-full"></div>
            <div className="absolute top-1/2 right-4 w-2 h-2 bg-indigo-200 rounded-full"></div>
            <div className="absolute bottom-20 left-6 w-2 h-2 bg-indigo-200 rounded-full"></div>
            
            <div className="relative mb-8">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-indigo-100 rounded-lg -rotate-6"></div>
              <motion.div 
                className="w-20 h-20 mx-auto rounded-2xl bg-indigo-500 flex items-center justify-center text-white relative z-10"
                whileHover={{ rotate: 10, scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <FaNodeJs size={38} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </motion.div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Backend Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Building robust APIs and server-side applications with Node.js and Express. Creating secure authentication systems, efficient data processing, and real-time features.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">Express</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">REST API</span>
            </div>
          </motion.div>

          {/* Card 3: Database Management */}
          <motion.div 
            className="bg-white rounded-2xl p-8 text-center transition-all border border-gray-100 h-full"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: 0.4,
              hover: { duration: 0.3 }
            }}
          >
            <div className="relative mb-8">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-50 rounded-lg -rotate-6"></div>
              <motion.div 
                className="w-20 h-20 mx-auto rounded-2xl bg-green-50 flex items-center justify-center text-green-600 relative z-10"
                whileHover={{ rotate: 10, scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <SiMongodb size={38} className="transition-all group-hover:text-green-600" />
              </motion.div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Database Management</h3>
            <p className="text-gray-600 leading-relaxed">
              Designing scalable MongoDB databases with efficient schema design, data validation, indexes, and advanced aggregation pipelines for optimal performance.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">MongoDB</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Mongoose</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Atlas</span>
            </div>
          </motion.div>
        </div>

        {/* Additional Services Section */}
        <div className="mt-16 text-center">
          <motion.h3 
            className="text-2xl font-bold text-gray-800 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Additional Expertise
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {/* Additional service 1 */}
            <motion.div 
              className="p-6 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-all group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex justify-center mb-4">
                <SiTypescript size={28} className="text-indigo-500" />
              </div>
              <h4 className="font-semibold text-gray-800">TypeScript</h4>
            </motion.div>
            
            {/* Additional service 2 */}
            <motion.div 
              className="p-6 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-all group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex justify-center mb-4">
                <FaServer size={28} className="text-indigo-500" />
              </div>
              <h4 className="font-semibold text-gray-800">AWS Deployment</h4>
            </motion.div>
            
            {/* Additional service 3 */}
            <motion.div 
              className="p-6 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-all group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex justify-center mb-4">
                <FaCode size={28} className="text-indigo-500" />
              </div>
              <h4 className="font-semibold text-gray-800">API Integration</h4>
            </motion.div>
            
            {/* Additional service 4 */}
            <motion.div 
              className="p-6 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-all group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex justify-center mb-4">
                <FaDatabase size={28} className="text-indigo-500" />
              </div>
              <h4 className="font-semibold text-gray-800">Database Design</h4>
            </motion.div>
            
            {/* Additional service 5 */}
            <motion.div 
              className="p-6 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-all group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex justify-center mb-4">
                <SiGraphql size={28} className="text-indigo-500" />
              </div>
              <h4 className="font-semibold text-gray-800">GraphQL</h4>
            </motion.div>
            
            {/* Additional service 6 */}
            <motion.div 
              className="p-6 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-all group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex justify-center mb-4">
                <FaMobileAlt size={28} className="text-indigo-500" />
              </div>
              <h4 className="font-semibold text-gray-800">Responsive Design</h4>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 