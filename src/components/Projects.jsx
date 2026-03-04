import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Simpivalex",
      category: "Web Application",
      link: "https://simpivalex.netlify.app/",
      image: "https://via.placeholder.com/400x250/1e293b/8b5cf6?text=Simpivalex"
    },
    {
      title: "Chadedon",
      category: "Web Application",
      link: "https://chadedon.netlify.app/",
      image: "https://via.placeholder.com/400x250/1e293b/3b82f6?text=Chadedon"
    },
    {
      title: "Calvickobs",
      category: "Web Application",
      link: "https://calvickobs.netlify.app/",
      image: "https://via.placeholder.com/400x250/1e293b/8b5cf6?text=Calvickobs"
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Selected Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="glass-card project-card">
              <div className="project-img">
                <img src={proj.image} alt={proj.title} />
              </div>
              <div className="project-info">
                <span className="proj-cat">{proj.category}</span>
                <h3>{proj.title}</h3>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="proj-link">
                  Visit Website <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
