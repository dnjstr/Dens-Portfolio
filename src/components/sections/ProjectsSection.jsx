import React from 'react';
import { Briefcase } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import ProjectCard from '../ui/ProjectCard';

const ProjectsSection = ({ isVisible }) => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gray-50">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="bg-white rounded-2xl shadow-2xl border-4 border-gray-200 p-8 md:p-12" style={{ boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff' }}>
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            <Briefcase className="inline-block mr-2" /> Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                delay={idx * 200} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;