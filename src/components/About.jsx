import { FaGraduationCap, FaCode, FaBrain } from "react-icons/fa";

export default function About() {
  return (
    <section className="about" id="about">

      <span className="eyebrow">Who I Am</span>

      <h2>About Me</h2>

      <div className="about-grid">

        <div className="about-left">

          <p>
            I'm <strong>Asif Bin Saif</strong>, a Computer Science &
            Engineering student passionate about software engineering,
            artificial intelligence and modern web development.
          </p>

          <p>
            I enjoy transforming ideas into real-world applications using
            modern technologies. My goal is to become a skilled Full Stack
            Software Engineer while continuously exploring AI and Machine
            Learning.
          </p>

          <p>
            I believe programming is more than writing code—it's solving
            problems that make people's lives easier.
          </p>

        </div>

        <div className="about-right">

          <div className="about-box">

            <FaGraduationCap className="about-icon"/>

            <h3>Education</h3>

            <p>B.Sc. Computer Science & Engineering</p>

          </div>

          <div className="about-box">

            <FaCode className="about-icon"/>

            <h3>Development</h3>

            <p>Full Stack Web Development</p>

          </div>

          <div className="about-box">

            <FaBrain className="about-icon"/>

            <h3>AI</h3>

            <p>Machine Learning & Python</p>

          </div>

        </div>

      </div>

    </section>
  );
}