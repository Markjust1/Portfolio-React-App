import Hello from "./Hello";
import Name from "./Name";
import Avatar from "./Avatar";
import Engineer from "./Engineer";
import "./About.css";

function About() {
  return (
    <div className="me">
        <Hello />
        <Avatar />
        <Name />
        <Engineer />
    </div>
  );
}

export default About;
