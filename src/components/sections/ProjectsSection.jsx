import React from 'react';
import { Briefcase } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import Stack from '../ui/Stack';

const ProjectsSection = ({ isVisible }) => {
  const projectCards = projects.map((project) => (
    <div key={project.id} className="project-stack-card">
      <div className="project-image-container">
        <img 
          src={project.image} 
          alt={project.title}
          className="project-image"
        />
      </div>
      
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  ));

  console.log('Projects:', projects);
  console.log('Project Cards:', projectCards);

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gray-50">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="bg-white rounded-2xl shadow-2xl border-4 border-gray-200 p-8 md:p-12" style={{ boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff' }}>
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            <Briefcase className="inline-block mr-2" /> Projects
          </h2>
          
          <div className="flex justify-center">
            <div className="stack-wrapper">
              <Stack
                cards={projectCards}
                randomRotation={true}
                sensitivity={150}
                autoplay={true}
                autoplayDelay={4000}
                pauseOnHover={true}
                sendToBackOnClick={true}
                mobileClickOnly={true}
                animationConfig={{ stiffness: 300, damping: 25 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;