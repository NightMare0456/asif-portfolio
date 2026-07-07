import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-card">
        <p>
          <FaEnvelope /> <strong>Email:</strong> asifgalaxy200@gmail.com
        </p>

        <p>
          <FaPhone /> <strong>Phone:</strong> +8801841426788
        </p>

        <p>
          <FaGithub />{" "}
          <a
            href="https://github.com/NightMare0456"
            target="_blank"
            rel="noreferrer"
          >
            github.com/NightMare0456
          </a>
        </p>

        <p>
          <FaLinkedin />{" "}
          <a
            href="https://www.linkedin.com/in/asif-bin-saif-366241389"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
      </div>
    </section>
  );
}