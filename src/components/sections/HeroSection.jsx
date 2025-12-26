import React from 'react';
import { Github, Linkedin, Mail, User, ChevronDown } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const HeroSection = ({ isVisible, scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
      <div className={`text-center z-10 px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center animate-pulse">
          <User size={64} />
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          {personalInfo.name}
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          {personalInfo.title}
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <a href={personalInfo.social.github} className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href={personalInfo.social.linkedin} className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href={personalInfo.social.email} className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} className="text-purple-400" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;