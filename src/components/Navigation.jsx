import "./Navigation.css";
import home from "../assets/home.png"


function Navigation() {
  return (
    <div className="nav">
      <div className="nav-items">
        <img src={home}></img>
        <h4>Projects</h4>
        <h4>Tech Stack</h4>
      </div>
    </div>
  );
}

export default Navigation;
