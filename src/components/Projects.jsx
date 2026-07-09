import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "DreamDealer Marketplace",
      description:
        "A complete full-stack e-commerce marketplace where users can buy and sell products securely. Features include user authentication, admin dashboard, product management, shopping cart, order processing, and MySQL database integration.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/NightMare0456/DreamDealer-Website",
      live: "#",
      featured: true,
    },

    {
      title: "Personal Portfolio Website",
      description:
        "A modern responsive portfolio website built with React and Vite. Showcases my education, technical skills, projects, and contact information with smooth animations and a professional UI.",
      tech: ["React", "Vite", "CSS", "JavaScript"],
      github: "https://github.com/NightMare0456/asif-portfolio",
      live: "https://asifbinsaif10.netlify.app/",
    },

    {
      title: "Product Management System",
      description:
        "A Linux terminal-based inventory and product management system developed using Shell scripting. Supports CRUD operations, stock management, searching, and report generation.",
      tech: ["Shell", "Linux", "Bash"],
      github:
        "https://github.com/NightMare0456/Product-Management-System",
      live: "#",
    },

    {
      title: "Chat Application",
      description:
        "A real-time chat application developed in C++ using socket programming concepts that enables communication between multiple users over a network.",
      tech: ["C++", "Socket Programming"],
      github: "https://github.com/NightMare0456/Chat-Application",
      live: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${
              project.featured ? "featured-card" : ""
            }`}
          >
            {project.featured && (
              <span className="featured-badge">⭐ Featured</span>
            )}

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub /> GitHub
                </a>

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}