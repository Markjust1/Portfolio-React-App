import { useState } from "react";
import Scroll from "react-scroll";
import home from "../assets/home.png";
import projects from "../assets/projects.png";
import tech from "../assets/tech.png";
import connect from "../assets/connect.png"
import "./Navigation.css";

function Navigation() {
  var scroll = Scroll.animateScroll;
  const [hm, setHm] = useState(false);
  const [tch, setTch] = useState(false);
  const [proj, setProj] = useState(false);
  const [conn, setConn] = useState(false);
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
          <li
            onMouseEnter={() => setHm(true)}
            onMouseLeave={() => setHm(false)}
          >
            <img
              src={home}
              alt=""
              onClick={() => {
                scroll.scrollTo(0);
              }}
            />
            {hm && (<div className="home">Home</div>)}
          </li>
          <li
            onMouseEnter={() => setTch(true)}
            onMouseLeave={() => setTch(false)}
          >
            <img
              src={tech}
              alt=""
              onClick={() => {
                scroll.scrollTo(1050);
              }}
            />
            {tch && (<div className="tch">Tech Stack</div>)}
          </li>
          <li
            onMouseEnter={() => setProj(true)}
            onMouseLeave={() => setProj(false)}
          >
            <img
              src={projects}
              alt=""
              onClick={() => {
                scroll.scrollTo(2000);
              }}
            />
            {proj && (<div className="projects">Projects</div>)}
          </li>
          <li
            onMouseEnter={() => setConn(true)}
            onMouseLeave={() => setConn(false)}
          >
            <img
              src={connect}
              alt=""
              onClick={() => {
                scroll.scrollTo(7850);
              }}
            />
            {conn && (<div className="connect">Connect</div>)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
