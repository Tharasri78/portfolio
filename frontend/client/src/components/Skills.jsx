import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
import reactIcon from "../assets/react.png";
import nodeIcon from "../assets/nodejs.png";
import mongoIcon from "../assets/MongoDB.png";
import expressicon from "../assets/express.png";

const skills = [
  { name: "HTML",  icon: htmlIcon },
  { name: "CSS",  icon: cssIcon },
  { name: "JavaScript",  icon: jsIcon },
  { name: "React",  icon: reactIcon },
  { name: "Node.js",icon: nodeIcon },
  { name: "MongoDB",  icon: mongoIcon },
  { name: "Express.js",  icon: expressicon },
];

export default function Skills() {
  return (
<section id="skills" className="section skills-section">
      <div className="container">
        <h1>Skills</h1>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <img
                src={skill.icon}
                alt={skill.name}
                className="skill-icon"
              />
              <h3>{skill.name}</h3>
              <span>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
