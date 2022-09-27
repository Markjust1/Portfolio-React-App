import "./Project.css";


function Project(props) {
  console.log('props', props);
  return (
    <div className="project">
      <div>{props.name}</div>
      <div>{props.image}</div>
      <p>{props.description}</p>
      <div>{props.tech}</div>
    </div>
  );
}

export default Project;
