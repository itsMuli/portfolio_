import React from 'react';
import './Experience.css';

const Experience = () => {
  const jobs = [
    {
      company: "Blasterpeak",
      role: "Frontend Developer Intern",
      period: "Nov 2024 - March 2025",
      points: [
        "Designed and developed user-friendly web interfaces using ReactJs and JavaScript.",
        "Implemented responsive layouts and UI/UX for data-driven applications."
      ]
    },
    {
      company: "Modcom Institute of Technology",
      role: "Python & Web Intern",
      period: "Jan 2025 - April 2025",
      points: [
        "Developed Python scripts for automating dynamic applications.",
        "Built and optimized responsive interfaces using modern web technologies.",
        "Collaborated on projects to deliver functional web applications."
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {jobs.map((job, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-content">
                <span className="job-period">{job.period}</span>
                <h3>{job.role} @ <span className="gradient-text">{job.company}</span></h3>
                <ul>
                  {job.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
