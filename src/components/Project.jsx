import "./Project.css";

function Project(props) {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="project" onClick={() => openInNewTab(props.link)}>
      <div className="name-proj">{props.name}</div>
      <div className="proj_desc">
        <div className="image">
          <img src={props.image} alt="" />
        </div>
      </div>
      <div className="description">{props.description}</div>
        <div className="tech-container">
          <div className="tech">
            <img src={props.tech[0]} alt=""></img>
          </div>
          <div className="tech">
            <img src={props.tech[1]} alt=""></img>
          </div>
          <div className="tech">
            <img src={props.tech[2]} alt=""></img>
          </div>
        </div>
    </div>
  );
}

export default Project;
