import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-layout">
        
        {/* LEFT CONTENT */}
        <div className="hero-content">
          {/* <span className="hero-badge">MERN Stack Developer</span> */}

          <h1 className="hero-title">
            I build <span>scalable</span><br />
            web applications<br />
            that actually work.
          </h1>

<p className="hero-subtitle">
  MERN stack developer focused on building deployable, real-world applications.
</p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
           <a href="/Resume.pdf" className="btn outline" download>
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-visual">
          <div className="hero-shape"></div>
          <img src={profile} alt="Tharasri profile" />
        </div>

      </div>
    </section>
  );
}
