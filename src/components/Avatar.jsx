import "./Avatar.css";
import artem from "../assets/Artem.jpeg";

function Avatar() {
  return (
    <div>
      <img className="avatar" src={artem} alt="artem" />
    </div>
  );
}

export default Avatar;
