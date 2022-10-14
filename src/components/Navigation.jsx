import home from "../assets/home.png";
import projects from "../assets/projects.png";
import tech from "../assets/tech.png";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <div className="nav-items">
        <img src={home} alt=''></img>
        <img src={tech} alt=''></img>
        <img src={projects} alt=''></img>
      </div>
    </div>
  );
}

export default Navigation;
