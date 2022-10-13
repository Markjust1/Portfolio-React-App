import "./Avatar.css";
import artem from "../assets/artem.png";

function Avatar() {
  return (
    <div className="avatar">
      <img src={artem} alt="" />
    </div>
  );
}

export default Avatar;