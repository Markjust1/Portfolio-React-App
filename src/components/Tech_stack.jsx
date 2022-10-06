import "./Tech_stack.css";
import js from "../assets/js.svg";
import css from "../assets/css.svg";
import html from "../assets/html.svg";
import react from "../assets/react.svg";
import ruby from "../assets/ruby.svg";
import git from "../assets/git.svg";
import jquery from "../assets/jquery.svg";
import bootstrap from "../assets/bootstrap.svg";
import postgresql from "../assets/postgresql.svg";
import node from "../assets/node.svg";

function Tech_stack() {
  return (
    <div className="tech_stack">
      <div className="animate-charcter">My Tech Stack:</div>
      <div className="stack-container">
        <div className="first-stack">
          <img src={html}></img>
          <img src={css}></img>
          <img src={js}></img>
          <img src={react}></img>
          <img src={ruby}></img>
        </div>
        <div className="second-stack">
          <img src={postgresql}></img>
          <img src={node}></img>
          <img src={git}></img>
          <img src={jquery}></img>
          <img src={bootstrap}></img>
        </div>
      </div>
    </div>
  );
}

export default Tech_stack;
