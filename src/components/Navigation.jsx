import home from "../assets/home.png";
import projects from "../assets/projects.png";
import tech from "../assets/tech.png";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <div className="nav-items">
        <img src={home}></img>
        <img src={tech}></img>
        <img src={projects}></img>
      </div>
    </div>
  );
}

export default Navigation;
