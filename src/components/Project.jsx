import "./Project.css";


function Project(props) {
  console.log('props', props);
  return (
    <div className="project">
      <div className="name">{props.name}</div>
      <div className="image">{props.image}</div>
      <div className="description">Description{props.description}</div>
      <div className="tech">Tech Stack: {props.tech}</div>
    </div>
  );
}

export default Project;
