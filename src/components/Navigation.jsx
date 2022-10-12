import { useState, useEffect } from "react";
import debounce from "../utilities/helpers";
import home from "../assets/home.png";
import projects from "../assets/projects.png";
import tech from "../assets/tech.png";
import "./Navigation.css";

function Navigation() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 90) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 80);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '5vw',
    backgroundColor: 'rgb(15, 15, 15)',
    transition: 'left 0.6s'
  }

  return (
    <div className="nav" style={{ ...navbarStyles, left: visible ? '0' : '-60px' }}>
      <div className="nav-items">
        <img src={home}></img>
        <img src={tech}></img>
        <img src={projects}></img>
      </div>
    </div>
  );
}

export default Navigation;
