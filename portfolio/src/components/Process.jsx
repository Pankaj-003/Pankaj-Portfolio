import { motion } from 'framer-motion';
import { FaDatabase, FaReact, FaServer } from 'react-icons/fa';
import '../styles/process.css';
// Updated process steps to reflect MERN stack development
const processSteps = [
  {
    id: 1,
    icon: <FaReact className="text-white text-2xl" />,
    title: "Frontend Development",
    description: "React.js responsive UI/UX with state management, custom hooks and performance-optimized components"
  },
  
  {
    id: 2,
    icon: <FaServer className="text-white text-2xl" />,
    title: "Backend Development",
    description: "Express.js and Node.js API development with robust authentication, security, and performance optimization"
  },
  {
    id: 3,
    icon: <FaDatabase className="text-white text-2xl" />,
    title: "Database Design",
    description: "MongoDB schema design, data modeling, and cloud setup for optimal performance and scalability"
  }
  
];

const Process = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 opacity-50 process-star">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 0L37.5 22.5L60 30L37.5 37.5L30 60L22.5 37.5L0 30L22.5 22.5L30 0Z" fill="#FFD770"/>
        </svg>
      </div>
      <div className="absolute top-40 left-20 opacity-30 process-triangle">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L40 20H0L20 0Z" fill="#E6E6FA"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p 
            className="text-purple-600 uppercase tracking-wider font-medium mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            PROCESS
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My Working Process
          </motion.h2>
        </div>
        
        {/* Process Steps */}
        <div className="flex flex-wrap justify-center items-center relative process-steps-container">
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.id}
              className="w-full md:w-1/3 px-4 mb-12 md:mb-0 relative process-step"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center process-step-content">
                {/* Icon Circle */}
                <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg mb-6 process-icon">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 max-w-xs mx-auto">{step.description}</p>
                
                {/* Curved Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block process-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ffcc66">
                      <path d="M500.33 238.59L347.34 85.61c-15.13-15.13-41-4.41-41 17v74.14C186.89 182.43 32 223.67 0 448c92.64-136.55 223.89-161.33 306.34-167.48v76.86c0 21.42 25.87 32.13 41 17l152.99-152.99c9.38-9.38 9.37-24.57 0-33.86z"/>
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process; 