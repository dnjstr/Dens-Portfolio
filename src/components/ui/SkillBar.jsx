import React from 'react';

const SkillBar = ({ skill, isVisible, delay }) => {
  return (
    <div className="mb-4" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between mb-1">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;