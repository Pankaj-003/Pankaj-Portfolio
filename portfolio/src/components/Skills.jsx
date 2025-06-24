import React, { useEffect, useState, useRef } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGitAlt, FaDatabase, FaServer, FaPython, FaJava,
  FaCode, FaMobile, FaDesktop, FaLaptopCode, FaNpm,
  FaTerminal, FaAmazon, FaLayerGroup, FaBrain
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, SiTypescript, SiMysql, 
  SiCplusplus, SiAndroidstudio, SiFirebase, SiRedux,
  SiBootstrap, SiGithub, SiJira, SiFigma, 
  SiDocker, SiPostgresql, SiGraphql,
  SiNextdotjs, SiWebpack, SiVercel, SiJavascript
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Stagger the animation of skill items
  const getAnimationDelay = (categoryIndex, skillIndex) => {
    return `${0.2 + (categoryIndex * 0.05) + (skillIndex * 0.1)}s`;
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaReact />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", progress: 95 },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", progress: 90 },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", progress: 85 },
        { name: "React.js", icon: <FaReact />, color: "#61DAFB", progress: 80 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", progress: 85 },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3", progress: 90 },
        { name: "Material UI", icon: <FaLayerGroup />, color: "#0081CB", progress: 75 },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000", progress: 70 },
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933", progress: 75 },
        { name: "Express.js", icon: <FaServer />, color: "#000000", progress: 70 },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", progress: 65 },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1", progress: 70 },
        { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", progress: 65 },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", progress: 60 },
        { name: "GraphQL", icon: <SiGraphql />, color: "#E10098", progress: 55 },
        { name: "RESTful APIs", icon: <FaServer />, color: "#3182CE", progress: 80 },
      ]
    },
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", progress: 85 },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", progress: 70 },
        { name: "Java", icon: <FaJava />, color: "#007396", progress: 75 },
        { name: "Python", icon: <FaPython />, color: "#3776AB", progress: 80 },
        { name: "C++", icon: <SiCplusplus />, color: "#00599C", progress: 65 },
        { name: "Bash/Shell", icon: <FaTerminal />, color: "#4EAA25", progress: 60 },
      ]
    },
    {
      title: "Libraries & Frameworks",
      icon: <SiRedux />,
      skills: [
        { name: "React.js", icon: <FaReact />, color: "#61DAFB", progress: 80 },
        { name: "Redux", icon: <SiRedux />, color: "#764ABC", progress: 70 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", progress: 85 },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3", progress: 90 },
        { name: "npm", icon: <FaNpm />, color: "#CB3837", progress: 85 },
        { name: "Webpack", icon: <SiWebpack />, color: "#8DD6F9", progress: 60 },
      ]
    },
    {
      title: "Tools & Software",
      icon: <FaGitAlt />,
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032", progress: 85 },
        { name: "GitHub", icon: <SiGithub />, color: "#181717", progress: 80 },
        { name: "VS Code", icon: <FaCode />, color: "#007ACC", progress: 95 },
        { name: "Figma", icon: <SiFigma />, color: "#F24E1E", progress: 70 },
        { name: "JIRA", icon: <SiJira />, color: "#0052CC", progress: 65 },
        { name: "Docker", icon: <SiDocker />, color: "#2496ED", progress: 60 },
        { name: "AWS", icon: <FaAmazon />, color: "#FF9900", progress: 55 },
        { name: "Vercel", icon: <SiVercel />, color: "#000000", progress: 75 },
      ]
    },
    {
      title: "Computer Science Fundamentals",
      icon: <FaLaptopCode />,
      skills: [
        { name: "Data Structures", icon: <FaDatabase />, color: "#E94C6F", progress: 80 },
        { name: "Algorithms", icon: <FaLaptopCode />, color: "#38B2AC", progress: 75 },
        { name: "System Design", icon: <FaDesktop />, color: "#6B46C1", progress: 65 },
        { name: "Problem Solving", icon: <FaBrain />, color: "#6C63FF", progress: 85 },
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="section-padding skills-section">
      <div className="container">
        <div className="text-center skill-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            My technical capabilities as a BTech student focusing on web development.
          </p>
        </div>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="category-container"
            >
              <div className="category-header">
                <h3 className="category-title">
                  <span className="category-icon" style={{ color: category.skills[0]?.color }}>
                    {category.icon}
                  </span>
                  {category.title}
                </h3>
              </div>
              
              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item vertical"
                    style={{ 
                      transitionDelay: animated ? getAnimationDelay(categoryIndex, skillIndex) : '0s'
                    }}
                  >
                    <div className="skill-info">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div>
                        <h4>{skill.name}</h4>
                      </div>
                    </div>
                    
                    <div className="progress-wrapper">
                      <div className="progress-container">
                        <div className="progress-bar">
                          <div 
                            className={`progress-fill ${animated ? 'animated' : ''}`}
                            style={{ 
                              width: animated ? `${skill.progress}%` : '0%',
                              backgroundColor: skill.color,
                              transitionDelay: getAnimationDelay(categoryIndex, skillIndex)
                            }}
                            data-percentage={`${skill.progress}%`}
                          ></div>
                        </div>
                        <div className={`progress-text ${animated ? 'animated' : ''}`}
                             style={{ transitionDelay: getAnimationDelay(categoryIndex, skillIndex) }}>
                          <span>{skill.progress}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
