import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ParticlesBackground from './components/ui/ParticlesBackground';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import './index.css';
import './styles.css';
import './custom.css';
import './navbar-fix.css';
import './responsive-utils.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'About', 'services', 'Projects', 'testimonials', 'Contact'];
      const scrollPosition = window.scrollY + 100; // offset for better accuracy
      
      // Check each section
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(sectionId);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#5e3bee] flex items-center justify-center z-[100]">
        <div className="text-white text-center">
          <div className="inline-block relative w-24 h-24">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h2 className="text-2xl font-bold mt-4">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <Router>
      {/* Particle animation background with lower z-index */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      <div className="flex flex-col min-h-screen font-sans text-gray-700 relative overflow-hidden">
        {/* Decorative shapes with controlled z-indices */}
        <div className="fixed -top-20 -right-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30 animate-blob z-[1]"></div>
        <div className="fixed top-1/2 -left-20 w-80 h-80 bg-yellow-100 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000 z-[1]"></div>
        <div className="fixed -bottom-20 right-1/2 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000 z-[1]"></div>
        
        {/* Navbar with highest z-index */}
        <Navbar activeSection={activeSection} />
        
        {/* Main content with appropriate padding-top to account for fixed navbar */}
        <div className="flex-grow relative z-[10] pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
