import "./Project.css";


function Project(props) {
  return (
    <div className="project">
      <div className="name">{props.name}</div>
      <div className="image"><img src={props.image} alt="" /></div>
      <div className="description">Description{props.description}</div>
      <div className="tech">Tech Stack: {props.tech}</div>
    </div>
  );
}

export default Project;
