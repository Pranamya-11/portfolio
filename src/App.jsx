import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import profile from "./assets/profile.jpg";

function App() {
  const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const springX = useSpring(mouseX, {
  stiffness: 100,
  damping: 20,
});

const springY = useSpring(mouseY, {
  stiffness: 100,
  damping: 20,
});

useEffect(() => {
  const handleMouseMove = (event) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);
  return (
    <div className="hero">
      {/* <motion.div
  className="profile-wrapper"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  <img
    src={profile}
    alt="Pranamya"
    className="profile-image"
  />
</motion.div> */}
      <motion.div
  className="mouse-glow"
  style={{
    x: springX,
    y: springY,
  }}
/>
      {/* Floating Tech Badges */}
<motion.div
  className="tech-float java"
  animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
  transition={{ duration: 4, repeat: Infinity }}
>
  Java
</motion.div>

<motion.div
  className="tech-float spring"
  animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
  transition={{ duration: 5, repeat: Infinity }}
>
  Spring Boot
</motion.div>

<motion.div
  className="tech-float react"
  animate={{ y: [0, -15, 0], rotate: [0, -4, 0] }}
  transition={{ duration: 4.5, repeat: Infinity }}
>
  React
</motion.div>

<motion.div
  className="tech-float database"
  animate={{ y: [0, 18, 0], rotate: [0, 4, 0] }}
  transition={{ duration: 5.5, repeat: Infinity }}
>
  PostgreSQL
</motion.div>

      <nav className="navbar">
      <div className="logo">PR</div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#hobbies">Beyond Coding</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>

      {/* Moving background */}
      <motion.div
        className="orb orb1"
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="orb orb2"
        animate={{
          x: [0, -100, 80, 0],
          y: [0, 100, -70, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
  className="profile-wrapper"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  <img
    src={profile}
    alt="Pranamya"
    className="profile-image"
  />
</motion.div>


      {/* Hero content */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="intro"
      >
        Hello, I'm
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Pranamya Prakash Rayakar
      </motion.h1>

      <motion.h2
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.7 }}
>
  <TypeAnimation
    sequence={[
  "Java Developer",
  2000,
  "Spring Boot Developer",
  2000,
  "Software Developer",
  2000,
  "Problem Solver",
  2000,
]}
    speed={50}
    repeat={Infinity}
  />
</motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="description"
      >
        Information Science student at BMSCE building scalable applications
        with Java, Spring Boot, React and modern technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="buttons"
      >
        <a href="#projects" className="primary-button">
    View My Work
  </a>

  <a href="#contact" className="secondary-button">
    Contact Me
  </a>
      </motion.div>

          {/* About Section */}
      <section id="about" className="about-section">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-label">ABOUT ME</p>

          <h2 className="section-title">
            Turning ideas into working software.
          </h2>

          <p className="about-text">
            I'm an Information Science Engineering student at BMS College of
            Engineering with a strong interest in software development.
            I enjoy building applications using Java, Spring Boot, React and
            modern technologies.
          </p>

          <p className="about-text">
            I'm particularly interested in backend development, problem solving,
            and creating practical applications that solve real-world problems.
          </p>

          <div className="about-stats">
            <div>
              <strong>9.57</strong>
              <span>CGPA</span>
            </div>

            <div>
              <strong>350+</strong>
              <span>LeetCode Problems</span>
            </div>

            <div>
              <strong>3+</strong>
              <span>Projects</span>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-label">MY SKILLS</p>

          <h2 className="section-title">
            Technologies I work with.
          </h2>

          <div className="skills-grid">
            {[
              "Java",
              "Spring Boot",
              "React.js",
              "JavaScript",
              "Python",
              "PostgreSQL",
              "MySQL",
              "MongoDB",
              "Git & GitHub",
              "REST APIs",
              "JWT",
              "DSA",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
            {/* Projects Section */}
      <section id="projects" className="projects-section">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="section-label">MY PROJECTS</p>

          <h2 className="section-title">
            Things I've built.
          </h2>

          <div className="project-card">
            <div className="project-content">
              <span className="project-number">01</span>

              <h3>AI Placement Coach</h3>

              <p>
                A full-stack platform designed to help students prepare for
                placements with AI-powered resume analysis, personalized
                recommendations, job tracking and interview preparation.
              </p>

              <div className="tech-stack">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>React</span>
                <span>PostgreSQL</span>
                <span>JWT</span>
              </div>

              <div className="project-buttons">
  <a
    href="https://github.com/Pranamya-11/PlacementCoach"
    target="_blank"
    rel="noreferrer"
    className="primary-button"
  >
    GitHub ↗
  </a>

  {/* <a
    href="#contact"
    className="secondary-button"
  >
    Live Demo ↗
  </a> */}
</div>
            </div>
          </div>
          <div className="project-card">
  <div className="project-content">
    <span className="project-number">02</span>

    <h3>AI Expense Tracker</h3>

    <p>
      An AI-powered expense management application that helps users track
      spending, organize expenses and gain useful insights from their
      financial data.
    </p>

    <div className="tech-stack">
      <span>React</span>
      <span>JavaScript</span>
      <span>MongoDB</span>
      <span>AI</span>
    </div>

    <div className="project-buttons">
      <a
        href="https://github.com/Pranamya-11/AI-Expense-Tracker"
        target="_blank"
        rel="noopener noreferrer"
        className="primary-button"
      >
        GitHub ↗
      </a>
    </div>

  </div>
</div>

<div className="project-card">
  <div className="project-content">
    <span className="project-number">03</span>

    <h3>Pothole Reporter</h3>

    <p>
      An Android application that helps users report potholes by capturing
      their location and details, making it easier to identify and track
      road issues.
    </p>

    <div className="tech-stack">
      <span>Kotlin</span>
      <span>Android</span>
    </div>

    
    <div className="project-buttons">
      <a
        href="https://github.com/Pranamya-11/PotholeRepo"
        target="_blank"
        rel="noopener noreferrer"
        className="primary-button"
      >
        GitHub ↗
      </a>
    </div>

  </div>
</div>
        </motion.div>
      </section>
      {/* Experience Section */}
<section className="experience-section">
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <p className="section-label">EXPERIENCE</p>

    <h2 className="section-title">
      Where I've contributed.
    </h2>

    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h3>Pentagram Mathematical Society, BMSCE</h3>
          <p>Event Organizing Head</p>
        </div>

        <span>2025 — Present</span>
      </div>

      <p className="experience-description">
        Planned and executed technical and cultural events while coordinating
        volunteers and managing event operations.
      </p>
    </div>

    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h3>Volunteer</h3>
          <p>BMSCE</p>
        </div>

        <span>2023 — 2024</span>
      </div>

      <p className="experience-description">
        Supported Utsav, PhaseShift, and IEEE events through logistics,
        registrations, and participant coordination.
      </p>
    </div>
  </motion.div>
</section>
      {/* Education & Achievements */}
<section className="education-section">
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <p className="section-label">EDUCATION & ACHIEVEMENTS</p>

    <h2 className="section-title">
      My journey so far.
    </h2>

    <div className="education-card">
      <span className="project-number">2022 — Present</span>

      <h3>B.E. Information Science & Engineering</h3>

      <p>
        BMS College of Engineering, Bengaluru
      </p>

      <strong>CGPA: 9.57 / 10</strong>
    </div>

    <div className="achievement-grid">
      <div className="achievement-card">
        <strong>300+</strong>
        <span>LeetCode Problems</span>
      </div>

      <div className="achievement-card">
        <strong>97.16%</strong>
        <span>Class X</span>
      </div>

      <div className="achievement-card">
        <strong>96.83%</strong>
        <span>Class XII</span>
      </div>
    </div>

    <div className="certifications">
  <h3>Certifications</h3>

  <div className="certification-list">
    <div className="certification-card">
      <span>HackerRank</span>
      <p>Java (Basic) Certification</p>
    </div>

    <div className="certification-card">
      <span>HackerRank</span>
      <p>SQL (Basic) Certification</p>
    </div>
  </div>
</div>
  </motion.div>
</section>

{/* Beyond Coding Section */}
<section className="hobbies-section" id="hobbies">
  <motion.div
    className="section-container"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <h2>Beyond Coding</h2>
    <p className="hobbies-subtitle">
      A little creativity beyond the world of technology.
    </p>

    <div className="hobbies-grid">
      <motion.div
        className="hobby-card"
        whileHover={{ y: -8, scale: 1.03 }}
        transition={{ duration: 0.25 }}
      >
        <span className="hobby-icon">🎶</span>
        <h3>Flute</h3>
        <p>Finding calm and expression through music.</p>
      </motion.div>

      <motion.div
        className="hobby-card"
        whileHover={{ y: -8, scale: 1.03 }}
        transition={{ duration: 0.25 }}
      >
        <span className="hobby-icon">💃</span>
        <h3>Bharatanatyam</h3>
        <p>Exploring stories through classical dance.</p>
      </motion.div>

      <motion.div
        className="hobby-card"
        whileHover={{ y: -8, scale: 1.03 }}
        transition={{ duration: 0.25 }}
      >
        <span className="hobby-icon">🎨</span>
        <h3>Rangoli Art</h3>
        <p>Expressing creativity through traditional art.</p>
      </motion.div>
    </div>
  </motion.div>
</section>

{/* Contact Section */}
<section id="contact" className="contact-section">
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <p className="section-label">GET IN TOUCH</p>

    <h2 className="section-title">
      Let's build something together.
    </h2>

    <p className="contact-text">
      I'm currently looking for opportunities where I can learn,
      contribute and grow as a software developer.
    </p>

    <div className="contact-links">
  <a
    href="mailto:pranamyaprakash11@gmail.com"
  >
    Email
  </a>

  <a
    href="https://www.linkedin.com/in/pranamya-prakash-rayakar-883483738"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>

  <a
    href="https://github.com/pranamya-11"
    target="_blank"
    rel="noreferrer"
  >
    GitHub ↗
  </a>

  <a
    href="https://leetcode.com/u/PranamyaPrakash/"
    target="_blank"
    rel="noreferrer"
  >
    LeetCode ↗
  </a>
</div>
  </motion.div>
</section>
{/* Footer */}
<footer className="footer">
  <p>© 2026 Pranamya Prakash Rayakar</p>

  <div className="footer-links">
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>

  <p className="footer-built">
    Built with React & Framer Motion
  </p>
</footer>
    </div>
    
  );
}

export default App;