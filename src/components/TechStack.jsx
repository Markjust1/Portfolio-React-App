import "./TechStack.css";
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

function TechStack() {
  return (
    <div className="tech_stack">
      <div className="animate-charcter">My Tech Stack:</div>
      <div className="stack-container">
        <div className="first-stack">
          <div>
            <div className="html">HTML</div>
            <img src={html} alt="html"></img>
          </div>
          <div>
            <div className="css">CSS</div>
            <img src={css} alt="css"></img>
          </div>
          <div>
            <div className="js">JS</div>
            <img src={js} alt="js"></img>
          </div>
          <div>
            <div className="react">React</div>
            <img src={react} alt="react.js"></img>
          </div>
          <div>
            <div className="ruby">Ruby</div>
            <img src={ruby} alt="Ruby"></img>
          </div>
        </div>
        <div className="second-stack">
          <div>
            <div className="postgresql">Postgresql</div>
            <img src={postgresql} alt="Postgresql"></img>
          </div>
          <div>
            <div className="node">Node</div>
            <img src={node} alt="Node"></img>
          </div>
          <div>
            <div className="git">Git</div>
            <img src={git} alt="Git"></img>
          </div>
          <div>
            <div className="jquery">jQuery</div>
            <img src={jquery} alt="jQuery"></img>
          </div>
          <div>
            <div className="bootstrap">bootstrap</div>
            <img src={bootstrap} alt="Bootstrap"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
