import pro1 from "../assets/projects/pro1.png";
import pro2 from "../assets/projects/pro2.png";
// import pro3 from "../assets/projects/pro1.png";


export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h1>Projects</h1>

        <div className="projects-list">
          {/* PROJECT 1 */}
          {/* <div className="project-row">
            <div className="project-content">
              <span className="project-tag">MERN + Blockchain</span>

              <h3>Disaster Fund Management System</h3>

              <p>
                Transparent donation platform with blockchain-based fund
                tracking, smart contracts, and a MERN stack backend to ensure
                accountability and real-time reporting.
              </p>

              <div className="project-actions">
                <a href="#" className="btn btn-primary">
                  See Live
                </a>
                <a href="#" className="btn btn-outline">
                  Source Code
                </a>
              </div>
            </div>

            <div className="project-media">
<img src={pro1} alt="Disaster Fund Project" />
            </div>
          </div> */}

          {/* PROJECT 2 */}
          <div className="project-row">
            <div className="project-content">
              <span className="project-tag"></span>

              <h3>Portfolio Website</h3>

              <p>
                Personal portfolio showcasing skills, projects, and contact
                functionality with modern UI principles, responsive layout,
                and performance-optimized React architecture.
              </p>

              <div className="project-actions">
                <a href="https://portfolio-xi-livid-95.vercel.app/" className="btn btn-primary">
                  See Live
                </a>
                <a href="https://github.com/Tharasri78/portfolio" className="btn btn-outline">
                  Source Code
                </a>
              </div>
            </div>

            <div className="project-media">
<img src={pro1} alt="Disaster Fund Project" />
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="project-row">
            <div className="project-content">
              <span className="project-tag">MERN</span>

              <h3>Microblogging Platform</h3>

              <p>
                A MERN stack application for creating and displaying short posts, featuring RESTful APIs, MongoDB persistence, and a responsive React frontend with clear separation of frontend and backend responsibilities.
              </p>

              <div className="project-actions">
                <a href="https://micro-blogging-web.vercel.app/" className="btn btn-primary">
                  See Live
                </a>
                <a href="https://github.com/Tharasri78/FWD-capstone" className="btn btn-outline">
                  Source Code
                </a>
              </div>
            </div>

            <div className="project-media">
<img src={pro2} alt="Disaster Fund Project" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
