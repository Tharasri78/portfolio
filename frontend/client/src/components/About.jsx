
export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-layout">

        {/* LEFT – STORY */}
        <div className="about-story">
<span className="about-eyebrow">About Me</span>

         

          <p className="about-description">
I’m Tharasri, a MERN stack developer who builds complete web applications with clean frontend–backend integration, readable code, and maintainable systems.          </p>

          <blockquote className="about-quote">
            {/* “Design is intelligence made visible. Code brings it to life.” */}
          </blockquote>
        </div>

        {/* RIGHT – HIGHLIGHTS */}
        <div className="about-highlights">
          <div className="about-card">
            <span>Location</span>
            <strong>Coimbatore, India</strong>
          </div>

          <div className="about-card">
            <span>Email</span>
            <strong>tharasribaskaran@gmail.com</strong>
          </div>

          <div className="about-card">
            <span>Availability</span>
            <strong>Open to opportunities</strong>
          </div>
        </div>

      </div>
    </section>
  );
}
