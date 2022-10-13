import "./Avatar.css";
import artem from "../assets/artem.png";

function Avatar() {
  return (
    <div className="avatar-container">
      <img className="avatar" src={artem} alt="artem" />
    </div>
  );
}

export default Avatar;