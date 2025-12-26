import React from 'react';
import { Code } from 'lucide-react';
import { personalInfo, skills } from '../../data/portfolioData';
import SkillBar from '../ui/SkillBar';

const AboutSection = ({ isVisible }) => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-4xl font-bold mb-12 text-center">
          <Code className="inline-block mr-2" /> About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-300 mb-6">
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Skills</h3>
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
    </section>
  );
};

export default AboutSection;