import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLink, FaGithub, FaArrowDown } from 'react-icons/fa';

// Helper function to generate a data URI pattern
const generatePatternUrl = (text, bgColor = '#f0f0f0', textColor = '#5e3bee') => {
  return `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect fill='${bgColor}' width='600' height='400'/%3E%3Ctext fill='${textColor}' font-family='Arial' font-size='24' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3E${text}%3C/text%3E%3C/svg%3E`;
};

// Sample project data - replace with your actual projects
const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'fullstack',
    image: generatePatternUrl('E-commerce Project'),
    description: 'A complete MERN stack e-commerce platform with user authentication, product management, and payment integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    category: 'frontend',
    image: generatePatternUrl('Social Media Dashboard'),
    description: 'A responsive social media dashboard with interactive charts and real-time notifications.',
    technologies: ['React', 'Redux', 'Chart.js', 'CSS Modules'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 3,
    title: 'Task Management API',
    category: 'backend',
    image: generatePatternUrl('Task Management API'),
    description: 'RESTful API for task management with user authentication, task CRUD operations, and team collaboration.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 4,
    title: 'Weather Application',
    category: 'frontend',
    image: generatePatternUrl('Weather App'),
    description: 'A beautiful weather application that shows current and forecasted weather using OpenWeatherMap API.',
    technologies: ['React', 'Axios', 'Styled Components'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 5,
    title: 'Blog Platform',
    category: 'fullstack',
    image: generatePatternUrl('Blog Platform'),
    description: 'A full-featured blog platform with markdown support, comments, and user profiles.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Markdown'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 6,
    title: 'Authentication Service',
    category: 'backend',
    image: generatePatternUrl('Auth Service'),
    description: 'A secure authentication service with JWT, social logins, and user management.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'OAuth'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 7,
    title: 'Real-time Chat App',
    category: 'fullstack',
    image: generatePatternUrl('Chat App'),
    description: 'A real-time chat application with private messaging, group chats, and file sharing capabilities.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 8,
    title: 'Portfolio Template',
    category: 'frontend',
    image: generatePatternUrl('Portfolio Template'),
    description: 'A customizable portfolio template for developers and designers with smooth animations and responsive design.',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    liveLink: '#',
    githubLink: '#'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6); // Initially show 6 projects
  const [filteredProjects, setFilteredProjects] = useState(projectsData); // Initialize with all projects
  const [showNoMoreMessage, setShowNoMoreMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const projectsPerLoad = 3; // Number of projects to load each time
  
  // Update filtered projects when filter changes
  useEffect(() => {
    const newFilteredProjects = filter === 'all' 
      ? projectsData 
      : projectsData.filter(project => project.category === filter);
    
    setFilteredProjects(newFilteredProjects);
    setVisibleProjects(6); // Reset to show first 6 projects when filter changes
    setShowNoMoreMessage(false);
  }, [filter]);
  
  // Function to load more projects
  const loadMoreProjects = () => {
    setIsLoading(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      if (visibleProjects + projectsPerLoad >= filteredProjects.length) {
        setVisibleProjects(filteredProjects.length);
        setShowNoMoreMessage(true);
      } else {
        setVisibleProjects(prevVisible => prevVisible + projectsPerLoad);
      }
      setIsLoading(false);
    }, 600);
  };
  
  // Calculate if there are more projects to load
  const hasMoreProjects = visibleProjects < filteredProjects.length;
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  
  // Get the projects to display based on current filter and visible count
  const visibleProjectsList = filteredProjects.slice(0, visibleProjects);
  
  return (
    <section id="Projects"  className="py-20 bg-gradient-to-b from-lightBlue to-white relative overflow-hidden">
      {/* Decorative elements */}
      {/* <div className="absolute top-20 left-10 w-24 h-24 bg-primary opacity-5 rounded-full animate-pulse"></div> */}
      {/* <div className="absolute bottom-40 right-10 w-32 h-32 bg-secondary opacity-10 rounded-full animate-pulse"></div> */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary opacity-5 rounded-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            className="text-primary font-medium mb-2 uppercase tracking-wider"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            My Projects
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-darkBlue mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            Digital Product Showcases
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            Check out some of my recent work. These projects demonstrate my skills
            in full stack development using the MERN stack and other modern technologies.
          </motion.p>
        </div>
        
        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          {['all', 'frontend', 'backend', 'fullstack','AI-ML Projects'].map((category) => (
            <motion.button 
              key={category}
              className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base transition-all duration-300
                ${filter === category 
                  ? 'bg-primary text-white shadow-lg transform scale-105' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: filter !== category ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? 'All Projects' : 
               category === 'frontend' ? 'Frontend' :
               category === 'AI-ML Projects' ? 'AI-ML Projects' :
               category === 'backend' ? 'Backend' : 'Full Stack'
               
               }
            </motion.button>
          ))}
        </motion.div>
        
        {visibleProjectsList.length === 0 ? (
          <motion.div 
            className="text-center py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-500 italic">No projects found for this category.</p>
          </motion.div>
        ) : (
          /* Projects Grid */
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {visibleProjectsList.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-end space-x-3">
                        {project.liveLink && (
                          <motion.a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                            whileHover={{ y: -5, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaLink />
                          </motion.a>
                        )}
                        {project.githubLink && (
                          <motion.a 
                            href={project.githubLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                            whileHover={{ y: -5, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaGithub />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-darkBlue">{project.title}</h3>
                    <span className="bg-lightBlue text-primary text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-lightBlue text-primary px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        {/* Load More Button or No More Projects Message */}
        <div className="text-center mt-16">
          {/* Show the button if there are more projects to load */}
          {hasMoreProjects ? (
            <motion.button
              onClick={loadMoreProjects}
              disabled={isLoading}
              className={`inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-medium shadow-lg hover:bg-primary-dark transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl'}`}
              whileHover={{ scale: isLoading ? 1 : 1.05 }}
              whileTap={{ scale: isLoading ? 1 : 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {isLoading ? (
                <>
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>Loading...</span>
                </>
              ) : (
                <>
                  <span>Load More Projects</span>
                  <FaArrowDown className="text-sm" />
                </>
              )}
            </motion.button>
          ) : (
            // Show "No more projects" message when all projects are loaded
            filteredProjects.length > 0 && showNoMoreMessage && (
              <motion.p
                className="text-gray-500 italic"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                You've reached the end of the projects.
              </motion.p>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;