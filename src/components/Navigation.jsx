import * as Scroll from 'react-scroll';
import home from "../assets/home.png";
import projects from "../assets/projects.png";
import tech from "../assets/tech.png";
import "./Navigation.css";

function Navigation() {
  var Scroll = require('react-scroll');
  var scroll = Scroll.animateScroll;
  return (
    <div>
      <div className="header"></div>
      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </label>
      <div id="sidebarMenu">
        <ul className="sidebarMenuInner">
          <li>
            <img src={home} alt="" onClick={() => { scroll.scrollTo(0)}} />
          </li>
          <li>
            <img src={tech} alt="" onClick={() => { scroll.scrollTo(1150)}}/>
          </li>
          <li>
            <img src={projects} alt="" onClick={() => { scroll.scrollTo(2100)}}/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
