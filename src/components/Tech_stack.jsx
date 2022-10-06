import "./Tech_stack.css";
import js from "../assets/js.svg";

function Tech_stack() {

  return (
    <div className="tech_stack">
      <div className="animate-charcter">My Tech Stack:</div>
      <div className="stack-container">
        <img src={js}></img>
      </div>
    </div>
  );
}

export default Tech_stack;