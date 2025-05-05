import { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Process from '../components/Process';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Process />
      <Skills />
      
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home; 