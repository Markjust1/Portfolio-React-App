import "./Navigation.css";
import home from "../assets/home.png"
import projects from "../assets/projects.png"


function Navigation() {
  return (
    <div className="nav">
      <div className="nav-items">
        <img src={home}></img>
        <img src={projects}></img>
        <h4>Tech Stack</h4>
      </div>
    </div>
  );
}

export default Navigation;
