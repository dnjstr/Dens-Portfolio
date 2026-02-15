import React from 'react';
import { Code } from 'lucide-react';
import { personalInfo, skills } from '../../data/portfolioData';
import SkillBar from '../ui/SkillBar';

const AboutSection = ({ isVisible }) => {

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 bg-white">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="bg-white rounded-2xl shadow-2xl border-4 border-gray-200 p-8 md:p-12 transform hover:scale-105 transition-all duration-300" style={{ boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff' }}>
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            <Code className="inline-block mr-2" /> About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 mb-6 text-justify">
                  {paragraph}
                </p>
              ))}
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">GitHub Activity</h3>
                <div className="border-4 border-gray-200 rounded-lg p-4 bg-gray-50">
                  <img 
                    src="https://ghchart.rshah.org/dnjstr"
                    alt="GitHub Contribution Chart"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Skills</h3>
              {skills.map((skill, idx) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  isVisible={isVisible} 
                  delay={idx * 100} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;