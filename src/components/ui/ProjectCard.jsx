import React from 'react';

const ProjectCard = ({ project, delay }) => {
  return (
    <div
      className="bg-white border-3 border-gray-300 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
      style={{ 
        animationDelay: `${delay}ms`,
        boxShadow: '10px 10px 30px #bebebe, -10px -10px 30px #ffffff'
      }}
    >
      <div className="h-40 border-b-4 border-gray-200 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-justify">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 border-2 border-gray-300 rounded-full text-sm text-gray-700 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;