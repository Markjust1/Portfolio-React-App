import Project from "./Project";
import "./ProjectList.css"

const projects = [
  {
    name: "PAWs",
    description: "Social media for dogs",
    tech: "React, Express.js, PostgreSQL",
    img: "image_link",
  },
  {
    name: "Tool Crush",
    description: "Candy Crush Saga clone",
    tech: "React",
    img: "image_link",
  },
  {
    name: "Scheduler",
    description: "Candy Crush Saga clone",
    tech: "React, Express.js, PostgreSQL",
    img: "image_link",
  },
  {
    name: "FunkyFuuds",
    description: "Food ordering app",
    tech: "Javascript, Express.js, PostgreSQL",
    img: "image_link",
  },
];

function ProjectList() {
  const projList = projects.map((proj) => {
    return (
      <Project
        key={proj.name}
        name={proj.name}
        description={proj.description}
        tech={proj.tech}
        image={proj.img}
      />
    );
  });

  return <main className="project-list">{projList}</main>;
}

export default ProjectList;
