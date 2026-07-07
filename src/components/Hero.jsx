import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const texts = [
    "Python Developer",
    "Full-Stack Web Developer",
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
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hello">👋 Hello, I'm</p>

        <h1>Asif Bin Saif</h1>

        <h2 className="typing">
          {displayText}
          <span className="cursor">|</span>
        </h2>

        <p className="desc">
          Passionate CSE student focused on Python, Full-Stack Web Development,
          AI & Machine Learning. I enjoy building real-world applications and
          solving challenging problems.
        </p>

        <div className="buttons">
          <a href="/resume.pdf" className="btn">
            Download Resume
          </a>

          <a
            href="https://github.com/NightMare0456"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/asif-bin-saif-366241389"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src="/profile.jpg" alt="Asif Bin Saif" />
      </div>
    </section>
  );
}