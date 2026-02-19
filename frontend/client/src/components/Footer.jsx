import { Github, Linkedin, Twitter, ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Scroll to top */}
      <a href="#home" className="scroll-top">
        <ChevronUp size={22} />
      </a>

      {/* Social icons */}
      <div className="footer-socials">
       
        <a href="https://www.linkedin.com/in/tharasri/" aria-label="LinkedIn">
          <Linkedin />
        </a>
        <a href="https://github.com/Tharasri78" aria-label="GitHub">
          <Github />
        </a>
      </div>

      <div className="footer-line" />

      <p className="footer-text">
        © {new Date().getFullYear()} Tharasri. All rights reserved.
      </p>
    </footer>
  );
}