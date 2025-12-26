import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const Portfolio = () => {
  const { isVisible, activeSection } = useIntersectionObserver();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <HeroSection 
        isVisible={isVisible.home} 
        scrollToSection={scrollToSection} 
      />
      
      <AboutSection isVisible={isVisible.about} />
      
      <ProjectsSection isVisible={isVisible.projects} />
      
      <ContactSection isVisible={isVisible.contact} />
      
      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;