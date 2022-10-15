import home from "../assets/home.png";
import projects from "../assets/projects.png";
import tech from "../assets/tech.png";
import "./Navigation.css";

function Navigation() {
  return (
    // <div className="nav">
    //   <div className="nav-items">
    //     <img src={home} alt=''></img>
    //     <img src={tech} alt=''></img>
    //     <img src={projects} alt=''></img>
    //   </div>
    // </div>
<div>

    <div className="header"></div>
  <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
  <label for="openSidebarMenu" className="sidebarIconToggle">
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>
  <div id="sidebarMenu">
    <ul className="sidebarMenuInner">
      <li><img src={home} alt="" /></li>
      <li><img src={projects} alt="" /></li>
      <li><img src={tech} alt="" /></li>
    </ul>
  </div>
</div>
  );
}

export default Navigation;
