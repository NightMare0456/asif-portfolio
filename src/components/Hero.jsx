import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  const texts = [
    "Computer Science Student",
    "Full Stack Web Developer",
    "Python Developer",
    "React Developer",
    "AI & Machine Learning Enthusiast",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));

        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 90);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-left">

        <div className="availability">
          <span className="dot"></span>
          Available for Internship
        </div>

        <p className="hello">👋 Hello, I'm</p>

        <h1>Asif Bin Saif</h1>

        <h2 className="typing">
          {displayText}
          <span className="cursor">|</span>
        </h2>

        <p className="desc">
          I'm a passionate Computer Science & Engineering student who enjoys
          building modern web applications and solving real-world problems.

          <br /><br />

          Currently learning React, Node.js, Python and Artificial Intelligence
          while building projects that strengthen my software development
          skills.
        </p>

        <div className="buttons">

          <a href="/resume.pdf" download className="btn">
            <FaDownload />
            Resume
          </a>

          <a
            href="https://github.com/NightMare0456"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/asif-bin-saif-366241389"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a href="#contact" className="btn-outline">
            <FaEnvelope />
            Contact
          </a>

        </div>

        <div className="hero-stats">

          <div className="stat-card">
            <h3>15+</h3>
            <p>Projects</p>
          </div>

          <div className="stat-card">
            <h3>3+</h3>
            <p>Years Learning</p>
          </div>

          <div className="stat-card">
            <h3>Open</h3>
            <p>Internship</p>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <img
          src="/profile.jpg"
          alt="Asif Bin Saif"
        />

      </div>
    </section>
  );
}