import Project from "./Project";
import "./ProjectList.css";

const projects = [
  {
    name: "PAWs",
    description: "Social media for dogs",
    tech: ["/images/icons/react.svg", "/images/icons/node.svg","/images/icons/postgresql.svg"],
    img: "/images/paws.png",
  },
  {
    name: "Tool Crush",
    description: "Candy Crush Saga clone",
    tech: ["/images/icons/react.svg"],
    img: "/images/tool_crush.png",
  },
  {
    name: "Scheduler",
    description: "Candy Crush Saga clone",
    tech: ["/images/icons/react.svg", "/images/icons/node.svg","/images/icons/postgresql.svg"],
    img: "/images/scheduler.png",
  },
  {
    name: "FunkyFuuds",
    description: "Food ordering app",
    tech: ["/images/icons/js.svg", "/images/icons/node.svg","/images/icons/postgresql.svg"],
    img: "./images/funkyfuuds.png",
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
