import React from 'react';
import CardSwap, { Card } from './CardSwap';
import ResumeDownload from './ResumeDownload';
import './Hero.css';

const Hero = () => {
  const projects = [
    {
      title: "Infinity Nail Spa",
      description: "A modern, elegant website for a nail spa business featuring booking system and service showcase.",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
      url: "https://infinitynailspa.netlify.app/",
      tech: ["React", "CSS", "JavaScript"]
    },
    {
      title: "Chad Store",
      description: "E-commerce platform with modern UI/UX, product catalog, and shopping cart functionality.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      url: "https://chadstore.netlify.app/",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Eventours",
      description: "Event management and tour booking platform with interactive features and responsive design.",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop",
      url: "https://backup-eventours-git-main-itsmulis-projects.vercel.app/",
      tech: ["Next.js", "TypeScript", "Tailwind"]
    }
  ];

  const handleCardClick = (index) => {
    window.open(projects[index].url, '_blank');
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="role-tag">Frontend & Solutions Architect Engineer</div>
          <h1 className="hero-title">
            Delivering Systems<span className="dot">.</span>
          </h1>
          <p className="hero-description">
            I craft minimalist, high-performance web experiences with a focus on 
            clean code and premium aesthetics.
          </p>
          <div className="hero-btns">
            <ResumeDownload />
            <a href="/about" className="btn-secondary">About Me</a>
          </div>
        </div>
        <div className="hero-visual">
          <CardSwap
            width={400}
            height={500}
            cardDistance={40}
            verticalDistance={50}
            delay={4000}
            pauseOnHover={true}
            onCardClick={handleCardClick}
            skewAmount={4}
            easing="elastic"
          >
            {projects.map((project, index) => (
              <Card key={index} customClass="project-card">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-link-overlay">
                  <span className="project-link-text">View Project →</span>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default Hero;
