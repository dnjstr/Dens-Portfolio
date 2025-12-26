import React from 'react';
import { Briefcase } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import ProjectCard from '../ui/ProjectCard';

const ProjectsSection = ({ isVisible }) => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gray-800/50">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-4xl font-bold mb-12 text-center">
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
    </section>
  );
};

export default ProjectsSection;