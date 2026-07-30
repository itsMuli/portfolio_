import React from 'react';
import './About.css';
import "./Hero.css"

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header">
          <div className="profile-info">
            <h1 className="name">ROSE MWENDWA</h1>
            <div className="title">Fullstack Developer (React, Next.js & Node.js)</div>
            <div className="contact-info">
              <div className="contact-item">
                <span>Nairobi, Kenya</span>
              </div>
              <div className="contact-item">
                <span>(+254) 110839077</span>
              </div>
              <div className="contact-item">
                <a href="mailto:rosemwendwa163@gmail.com" className="contact-link">rosemwendwa163@gmail.com</a>
              </div>
              <div className="contact-item">
                <a href="https://github.com/itsMuli" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/itsMuli</a>
              </div>
              <div className="contact-item">
                <a href="http://www.linkedin.com/in/rose-mwendwa-77b73b267" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/rose-mwendwa-77b73b267</a>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="blob"></div>
            <img src="/me.png" alt="Rose Mwendwa" className="hero-image" />
          </div>
        </div>

        <div className="about-content">
          <div className="section career-objective">
            <h2>Professional Summary</h2>
            <div className="glass-card">
              <p>
                Fullstack Developer and Solutions Architect with hands-on experience building and shipping production web applications using React.js, Next.js, TypeScript, and Node.js. Currently working with Supabase (PostgreSQL, Auth, Storage) as a backend platform. Experienced across the full application lifecycle including architecture, API design, integration, deployment, and maintenance, with a track record of taking ownership of technical solutions as both a technical lead and a sole developer/product owner. Comfortable working autonomously, translating business requirements into scalable technical solutions, and collaborating closely with product, design, and business stakeholders. Strong Git-based workflow, code quality, and CI/CD fundamentals, with growing interest in AI-assisted development.
              </p>
            </div>
          </div>

          <div className="section skills-section">
            <h2>Technical Skills</h2>
            <div className="glass-card">
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Languages & Frameworks</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">JavaScript (ES6+)</span>
                    <span className="skill-tag">TypeScript</span>
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">Next.js</span>
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">Express.js</span>
                    <span className="skill-tag">HTML5</span>
                    <span className="skill-tag">CSS3</span>
                    <span className="skill-tag">Solidity</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h3>APIs & Integration</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">REST API Design</span>
                    <span className="skill-tag">Third-party Integration</span>
                    <span className="skill-tag">Async Operations</span>
                    <span className="skill-tag">Auth & Authorization</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h3>Backend & Databases</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Supabase (PostgreSQL, Auth, Storage)</span>
                    <span className="skill-tag">MongoDB</span>
                    <span className="skill-tag">CRM Systems</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h3>Styling & UI</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Tailwind CSS</span>
                    <span className="skill-tag">Material UI</span>
                    <span className="skill-tag">Bootstrap</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h3>Version Control & Workflow</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">GitHub</span>
                    <span className="skill-tag">Agile Development</span>
                    <span className="skill-tag">Code Reviews</span>
                    <span className="skill-tag">Clean Code Practices</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h3>Cloud & Deployment</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Vercel</span>
                    <span className="skill-tag">Netlify</span>
                    <span className="skill-tag">CI/CD Fundamentals</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h3>AI Tools</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Cursor</span>
                    <span className="skill-tag">GitHub Copilot</span>
                    <span className="skill-tag">Magic Patterns</span>
                    <span className="skill-tag">Antigravity</span>
                    <span className="skill-tag">Prompt Engineering</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section experience-section">
            <h2>Experience</h2>
            <div className="experience-timeline">
              <div className="experience-item glass-card">
                <div className="experience-header">
                  <h3>Digital Qatalyst</h3>
                  <span className="duration">Aug 2025 – Present</span>
                </div>
                <div className="position">Team Lead / Software Developer</div>
                <div className="sub-role">Khalifa Fund Platform — Team Lead (Oct 2025 – Apr 2026)</div>
                <ul className="responsibilities">
                  <li>Led a cross-functional development team delivering the Khalifa Fund platform end-to-end, owning architecture, technical decisions, and delivery timelines</li>
                  <li>Directed system design and implementation using React.js/Next.js on the frontend and Node.js-based APIs on the backend, prioritizing scalability, maintainability, and performance</li>
                  <li>Ran code reviews and technical governance to enforce clean-code, testing, and maintainability standards across the team</li>
                  <li>Delivered technical demonstrations and progress updates to executive leadership and client stakeholders</li>
                  <li>Mentored developers on React.js, frontend architecture, API integration, and software engineering best practices</li>
                </ul>
                <div className="sub-role">DWS Product — Sole Developer & Product Owner (Apr 2026 – Present)</div>
                <ul className="responsibilities">
                  <li>Took full ownership of the DWS product as sole developer and product owner, covering requirements definition, technical architecture, implementation, deployment, and ongoing maintenance</li>
                  <li>Built the application full-stack with React.js/Next.js, TypeScript, and Node.js, using Supabase (PostgreSQL, Auth) for backend data and authentication, and designing/integrating REST APIs to support core product functionality</li>
                  <li>Made autonomous technical and product decisions on features, data models, and integrations, translating business needs directly into shipped functionality</li>
                  <li>Managed deployment and monitoring via Vercel, and iterated on the product based on stakeholder feedback and usage</li>
                </ul>
              </div>

              <div className="experience-item glass-card">
                <div className="experience-header">
                  <h3>Statsspeak</h3>
                  <span className="duration">Nov 2024 – Mar 2025</span>
                </div>
                <div className="position">Frontend Developer Intern</div>
                <ul className="responsibilities">
                  <li>Developed responsive web applications using React.js and JavaScript, building reusable UI components with modern frontend architecture patterns</li>
                  <li>Integrated frontend applications with backend APIs and data services to power data-driven dashboards for business use cases</li>
                  <li>Optimized application performance, responsiveness, and user experience across devices</li>
                  <li>Collaborated closely with design and product teams to translate requirements into intuitive user experiences</li>
                </ul>
              </div>

              <div className="experience-item glass-card">
                <div className="experience-header">
                  <h3>Modcom Institute of Technology</h3>
                  <span className="duration">Jan 2020 – Apr 2020</span>
                </div>
                <div className="position">Python Programming & Web Development Intern</div>
                <ul className="responsibilities">
                  <li>Built proficiency in Python programming for dynamic applications and developed responsive web interfaces using modern web technologies</li>
                  <li>Collaborated on team projects to deliver functional web solutions, building foundational full-stack development skills</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">
                <a href="https://infinitynailspa.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                  Infinity Nail Spa
                </a>
                <a href="https://chadstore.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                  Chad Store
                </a>
                <a href="https://backup-eventours-git-main-itsmulis-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                  Eventours
                </a>
              </div>
            </div>

          <div className="section education-section">
            <h2>Education</h2>
            <div className="glass-card">
              <div className="education-item">
                <h3>KCA University</h3>
                <div className="degree">B.Sc. Information Technology</div>
                <div className="duration">Sep 2020 – Jul 2026</div>
                <div className="coursework">
                  <h4>Relevant Coursework:</h4>
                  <div className="course-tags">
                    <span className="course-tag">Web Development</span>
                    <span className="course-tag">Object-Oriented Programming</span>
                    <span className="course-tag">Operating Systems</span>
                    <span className="course-tag">Computer Networks</span>
                    <span className="course-tag">Application Programming</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section profiles-section">
            <h2>Online Profiles</h2>
            <div className="glass-card">
              <div className="profiles-grid">
                <a href="https://github.com/itsMuli" target="_blank" rel="noopener noreferrer" className="profile-link">
                  <span>GitHub</span>
                </a>
                <a href="http://www.linkedin.com/in/rose-mwendwa-77b73b267" target="_blank" rel="noopener noreferrer" className="profile-link">
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
