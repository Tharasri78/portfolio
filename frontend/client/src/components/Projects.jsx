import pro1 from "../assets/projects/pro1.png";
import pro2 from "../assets/projects/pro2.png";

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h1>Projects</h1>

        <div className="projects-list">
          {/* PROJECT 1 — PORTFOLIO */}
          <div className="project-row">
            {/* IMAGE */}
            <div className="project-media">
              <img src={pro1} alt="Portfolio Website" />
            </div>

            {/* CONTENT */}
            <div className="project-content">
              <h3>Portfolio Website</h3>

              <p>
                Personal portfolio showcasing projects, skills, and a contact
                form, built with React and designed with a responsive,
                performance-focused layout.
              </p>

              <div className="project-actions">
                <a
                  href="https://portfolio-xi-livid-95.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  See Live
                </a>
                <a
                  href="https://github.com/Tharasri78/portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* PROJECT 2 — MICROBLOGGING */}
          <div className="project-row">
            {/* IMAGE */}
            <div className="project-media">
              <img src={pro2} alt="Microblogging Platform" />
            </div>

            {/* CONTENT */}
            <div className="project-content">
              

              <h3>Microblogging Platform</h3>

              <p>
                A MERN stack application for creating and displaying short posts
                using RESTful APIs and MongoDB.
              </p>

              <div className="project-actions">
                <a
                  href="https://micro-blogging-web.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  See Live
                </a>
                <a
                  href="https://github.com/Tharasri78/FWD-capstone"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}