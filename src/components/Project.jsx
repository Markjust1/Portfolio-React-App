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
        <div className="tech">{props.tech}</div>
      </div>
    </div>
  );
}

export default Project;
