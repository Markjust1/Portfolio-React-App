import "./Project.css";

function Project(props) {


  return (
    <div className="project">
      <div className="name">{props.name}</div>
      <div className="proj_desc">
        <div className="image">
          <img src={props.image} alt="" />
        </div>
        <div className="description">{props.description}</div>
        <div>
          <div className="tech"><img src={props.tech[0]}></img></div>
          <div className="tech"><img src={props.tech[1]}></img></div>
          <div className="tech"><img src={props.tech[2]}></img></div>
        </div>
      </div>
    </div>
  );
}

export default Project;
