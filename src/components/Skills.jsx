import React from 'react';
import './Skills.css';

const Skills = () => {
  const categories = [
    {
      title: "Programming",
      skills: ["JavaScript", "Python", "HTML", "Solidity", "MQL"]
    },
    {
      title: "Frameworks",
      skills: ["React.js", "Node.js", "Express.js"]
    },
    {
      title: "UI & Design",
      skills: ["CSS", "Bootstrap", "Tailwind CSS", "Material-UI"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "MongoDB", "CRM"]
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="glass-card skill-card">
              <h3>{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
