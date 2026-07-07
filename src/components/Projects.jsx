import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "DreamDealer",
      description:
        "A modern e-commerce marketplace where users can buy and sell products.",
      tech: "HTML • CSS • JavaScript • Php • MySQL ",
      github: "https://github.com/NightMare0456/DreamDealer-Website",
      live: "http://localhost/dreamdealer/",
    },
    {
      title: "Product Management System",
      description:
        "A CRUD-based application to manage products with database integration.",
      tech: "Linux",
      github: "https://github.com/NightMare0456",
      live: "https://github.com/NightMare0456/-Product-Management-System",
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website built with React to showcase my skills and projects.",
      tech: "React • CSS • Vite",
      github: "https://github.com/NightMare0456",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.tech}</span>

            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}