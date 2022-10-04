import Hello from "./Hello";
import Name from "./Name";
import "./About.css";

function About() {
  return (
    <div>
      <div className="me">
        <Hello />
        <Name />
      </div>
      <div className="engineer">
        <div>Full Stack</div>
        <div className="typing_text">Software Engineer</div>
      </div>
    </div>
  );
}

export default About;
