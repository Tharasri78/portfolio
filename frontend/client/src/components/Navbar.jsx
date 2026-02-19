export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* LEFT */}
        <div className="nav-brand">
          
        </div>

        {/* RIGHT */}
        <nav>
          <ul className="nav-links">
            <li><a href="#home"className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
