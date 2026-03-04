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
            <div className="contact-info">
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>Kenafric Business Center, Nairobi</span>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <span>(+254) 110839077</span>
              </div>
              <div className="contact-item">
                <span className="icon">✉️</span>
                <span>rosemwendwa163@gmail.com</span>
              </div>
            </div>
          </div>
          {/* <div className="profile-image">
            <img src="/public/me.png" alt="Rose Mwendwa" />
          </div> */}
          <div className="hero-visual">
          <div className="blob"></div>
          <img src="/me.png" alt="Rose Mwendwa" className="hero-image" />
        </div>
        </div>

        <div className="about-content">
          <div className="section career-objective">
            <h2>Career Objective</h2>
            <div className="glass-card">
              <p>
                I am a motivated and passionate Software Developer with a strong foundation in technology and programming, 
                aiming to contribute to innovative projects. I seek an opportunity to enhance my technical expertise, 
                collaborate effectively within teams, and deliver high-quality solutions that drive success and innovation.
              </p>
            </div>
          </div>

          <div className="section skills-section">
            <h2>Skills</h2>
            <div className="glass-card">
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Programming Languages</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">TypeScript</span>
                    <span className="skill-tag">HTML</span>
                    <span className="skill-tag">Solidity</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h3>Frameworks</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Next.js</span>
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">Express.js</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h3>Styling & Design</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">CSS</span>
                    <span className="skill-tag">Bootstrap</span>
                    <span className="skill-tag">Tailwind CSS</span>
                    <span className="skill-tag">Material-UI</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h3>Version Control</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">GitHub</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h3>Databases</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">MongoDB</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h3>AI Tools</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Cursor</span>
                    <span className="skill-tag">Magic Patterns</span>
                    <span className="skill-tag">GitHub Copilot</span>
                    <span className="skill-tag">Antigravity</span>
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
                  <span className="duration">Aug 2025 - Current</span>
                </div>
                <div className="position">Frontend Developer</div>
                <div className="location">Kenafric Business Park, Baba Dogo</div>
                <ul className="responsibilities">
                  <li>Accountable for end-to-end delivery governance across the Solutions Factory, bridging product, development, and architecture</li>
                  <li>Established operational frameworks for planning, resourcing, and execution efficiency</li>
                  <li>Currently leading as Solutions Architect / Dev Lead on Khalifa Fund, owning both technical direction and client-facing delivery</li>
                  <li>Successfully executed critical demos with leadership stakeholders</li>
                </ul>
              </div>

              <div className="experience-item glass-card">
                <div className="experience-header">
                  <h3>Statsspeak</h3>
                  <span className="duration">Nov 2024 - March 2025</span>
                </div>
                <div className="position">Frontend Developer Intern</div>
                <div className="location">Mercure Hotel, Wojo Offices, 10th Floor Longonot Rd, Nairobi</div>
                <ul className="responsibilities">
                  <li>Designed and developed user-friendly web interfaces using React.js and JavaScript</li>
                  <li>Implemented responsive layouts and UI/UX for data-driven applications</li>
                </ul>
              </div>

              <div className="experience-item glass-card">
                <div className="experience-header">
                  <h3>Modcom Institute of Technology</h3>
                  <span className="duration">Jan 2020 - April 2020</span>
                </div>
                <div className="position">Python Programming & Web Development Intern</div>
                <ul className="responsibilities">
                  <li>Developed proficiency in Python Programming for dynamic applications</li>
                  <li>Built and optimized responsive web interfaces using modern web technologies</li>
                  <li>Collaborated on projects to deliver functional web solutions, enhancing team-oriented development practices</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section projects-section">
            <h2>Projects</h2>
            <div className="glass-card">
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
          </div>

          <div className="section education-section">
            <h2>Education</h2>
            <div className="glass-card">
              <div className="education-item">
                <h3>KCA University</h3>
                <div className="degree">Bachelor of Science Information Technology</div>
                <div className="duration">Sep 2020 - Expected graduation (July 2026)</div>
                <div className="coursework">
                  <h4>Significant Coursework:</h4>
                  <div className="course-tags">
                    <span className="course-tag">Web Development</span>
                    <span className="course-tag">Object Oriented Programming</span>
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
                  <span className="icon">🔗</span>
                  <span>GitHub</span>
                </a>
                <a href="http://www.linkedin.com/in/rose-mwendwa-77b73b267" target="_blank" rel="noopener noreferrer" className="profile-link">
                  <span className="icon">💼</span>
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
