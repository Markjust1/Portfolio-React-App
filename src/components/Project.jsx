import "./Project.css";


function Project(props) {
  console.log('props', props);
  return (
    <div className="project">
      <div>{props.name}</div>
      <div>{props.image}</div>
      <div>Description{props.description}</div>
      <div>Tech Stack: {props.tech}</div>
    </div>
  );
}

export default Project;
