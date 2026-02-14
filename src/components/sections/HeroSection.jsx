import React from 'react';
import { Github, Linkedin, Facebook, ChevronDown } from 'lucide-react'
import { personalInfo } from '../../data/portfolioData';

const HeroSection = ({ isVisible, scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 to-gray-200/20"></div>
      <div className={`text-center z-10 px-8 py-12 bg-white rounded-2xl shadow-2xl border-4 border-gray-200 transform transition-all duration-1000 hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`} style={{ boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff' }}>
        
        {/* Profile Image */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full shadow-xl border-4 border-white overflow-hidden bg-gradient-to-br from-gray-600 to-gray-800">
          <img src="/profile.jpg" alt="Den Jester Antonio" className="w-full h-full object-cover" />
        </div>

        <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          {personalInfo.name}
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          {personalInfo.title}
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <a href={personalInfo.social.github} className="p-3 bg-white border-2 border-gray-300 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1" aria-label="GitHub" style={{ boxShadow: '5px 5px 15px #bebebe, -5px -5px 15px #ffffff' }}>
            <Github size={24} className="text-gray-700" />
          </a>
          <a href={personalInfo.social.linkedin} className="p-3 bg-white border-2 border-gray-300 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1" aria-label="LinkedIn" style={{ boxShadow: '5px 5px 15px #bebebe, -5px -5px 15px #ffffff' }}>
            <Linkedin size={24} className="text-gray-700" />
          </a>
          <a href={personalInfo.social.facebook} className="p-3 bg-white border-2 border-gray-300 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1" aria-label="Facebook" style={{ boxShadow: '5px 5px 15px #bebebe, -5px -5px 15px #ffffff' }}>
            <Facebook size={24} className="text-gray-700" />
          </a>
        </div>
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} className="text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;