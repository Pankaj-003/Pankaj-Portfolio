import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, 
  FaDatabase, 
  FaTools, 
  FaGraduationCap, 
  FaServer,
  FaMobile,
  FaLaptopCode,
  FaBrain,
  FaSearch,
  FaChartLine
} from 'react-icons/fa';
import './Skills.css';

const skillsData = {
  programming: {
    icon: FaCode,
    title: "Programming Languages",
    description: "Core programming languages and technologies I specialize in",
    skills: [
      { name: 'JavaScript/TypeScript', level: 90, years: 3 },
      { name: 'Python', level: 85, years: 2 },
      { name: 'Java', level: 80, years: 2 },
      { name: 'C++', level: 75, years: 3 },
      { name: 'HTML5/CSS3', level: 95, years: 3 },
    ]
  },
  frontEnd: {
    icon: FaLaptopCode,
    title: "Frontend Development",
    description: "Modern frontend frameworks and UI technologies",
    skills: [
      { name: 'React.js', level: 90, years: 2 },
      { name: 'Next.js', level: 85, years: 1 },
      { name: 'Redux', level: 80, years: 2 },
      { name: 'Tailwind CSS', level: 90, years: 1 },
      { name: 'Material-UI', level: 85, years: 2 },
    ]
  },
  backEnd: {
    icon: FaServer,
    title: "Backend Development",
    description: "Server-side technologies and database management",
    skills: [
      { name: 'Node.js', level: 85, years: 2 },
      { name: 'Express.js', level: 85, years: 2 },
      { name: 'MongoDB', level: 80, years: 1 },
      { name: 'MySQL', level: 75, years: 2 },
      { name: 'RESTful APIs', level: 90, years: 2 },
    ]
  },
  engineering: {
    icon: FaGraduationCap,
    title: "Engineering Fundamentals",
    description: "Core computer science and engineering concepts",
    skills: [
      { name: 'Data Structures', level: 85, years: 3 },
      { name: 'Algorithms', level: 80, years: 3 },
      { name: 'System Design', level: 75, years: 2 },
      { name: 'OOP Concepts', level: 90, years: 3 },
      { name: 'Database Design', level: 85, years: 2 },
    ]
  },
  devOps: {
    icon: FaTools,
    title: "DevOps & Cloud",
    description: "Development operations and cloud technologies",
    skills: [
      { name: 'Git & GitHub', level: 90, years: 3 },
      { name: 'Docker', level: 75, years: 1 },
      { name: 'AWS Services', level: 70, years: 1 },
      { name: 'CI/CD Pipelines', level: 75, years: 1 },
      { name: 'Linux/Shell', level: 80, years: 2 },
    ]
  },
  performance: {
    icon: FaChartLine,
    title: "Performance & Analytics",
    description: "Web performance optimization and analytics",
    skills: [
      { name: 'Web Vitals', level: 85, years: 1 },
      { name: 'SEO', level: 80, years: 2 },
      { name: 'Analytics', level: 75, years: 1 },
      { name: 'Performance Testing', level: 85, years: 1 },
      { name: 'Load Balancing', level: 70, years: 1 },
    ]
  }
};

const SkillBar = ({ name, level, years }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="skill-bar"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="skill-info">
        <div className="skill-name-container">
          <span className="skill-name">{name}</span>
          <span className="skill-years">{years} {years === 1 ? 'year' : 'years'}</span>
        </div>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-progress-container">
        <motion.div
          className="skill-progress"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="skill-tooltip"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <strong>{name}</strong>
              <p>{years} years experience</p>
              <p>Proficiency: {level}%</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const SkillSection = ({ data, isVisible }) => {
  const { icon: Icon, title, description, skills } = data;
  
  return (
    <motion.div
      className="skill-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0.3, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-header">
        <div className="section-icon-container">
          <Icon className="section-icon" />
        </div>
        <div className="section-title-container">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillBar key={index} {...skill} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterSkills = (category) => {
    setSelectedCategory(category);
    setSearchTerm('');
  };

  const isSkillVisible = (skills) => {
    if (!searchTerm) return true;
    return skills.some(skill => 
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="skills-page">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Technical Proficiency</h1>
        <p className="subtitle">Full Stack Developer & BTech Graduate</p>
        <div className="header-description">
          <p>Specialized in modern web technologies with a strong foundation in computer science</p>
        </div>
        
        <div className="skills-filter">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => filterSkills('all')}
            >
              All Skills
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'frontend' ? 'active' : ''}`}
              onClick={() => filterSkills('frontend')}
            >
              Frontend
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'backend' ? 'active' : ''}`}
              onClick={() => filterSkills('backend')}
            >
              Backend
            </button>
          </div>
        </div>
      </motion.div>
      
      <div className="skills-grid">
        {Object.entries(skillsData).map(([key, data]) => (
          <SkillSection
            key={key}
            data={data}
            isVisible={
              (selectedCategory === 'all' || key === selectedCategory) &&
              isSkillVisible(data.skills)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;