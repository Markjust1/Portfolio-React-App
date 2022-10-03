import Hello from "./Hello";
import "./About.css";

function About() {
  return (
    <div className="me">
      <Hello />
      <div className="engineer">Full Stack Software Engineer</div>
      <div className="name">Artem Novikov</div>
    </div>
  );
}

export default About;
