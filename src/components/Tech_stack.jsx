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
          <div>
            <div className="html">HTML</div>
            <img src={html}></img>
          </div>
          <div>
            <div className="css">CSS</div>
            <img src={css}></img>
          </div>
          <div>
            <div className="js">JS</div>
            <img src={js}></img>
          </div>
          <div>
            <div className="react">React</div>
            <img src={react}></img>
          </div>
          <div>
            <div className="ruby">Ruby</div>
            <img src={ruby}></img>
          </div>
        </div>
        <div className="second-stack">
          <div>
            <div className="postgresql">Postgresql</div>
            <img src={postgresql}></img>
          </div>
          <div>
            <div className="node">Node</div>
            <img src={node}></img>
          </div>
          <div>
            <div className="git">Git</div>
            <img src={git}></img>
          </div>
          <div>
            <div className="jquery">jQuery</div>
            <img src={jquery}></img>
          </div>
          <div>
            <div className="bootstrap">bootstrap</div>
            <img src={bootstrap}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tech_stack;
