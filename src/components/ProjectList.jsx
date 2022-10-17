import Project from "./Project";
import "./ProjectList.css";

const projects = [
  {
    name: "PAWs",
    description: "A social app that matches and links dogs, and their owners, for walks and play-dates. Matches are made based on detailed user profiles.",
    tech: ["/images/icons/react.svg", "/images/icons/node.svg","/images/icons/postgresql.svg"],
    img: "/images/paws.png",
  },
  {
    name: "Tool Crush",
    description: "A mini-game frontend app build with React (Candy Crush Saga style). Players need to get as many points as they can in 30 seconds",
    tech: ["/images/icons/react.svg"],
    img: "/images/tool_crush.png",
  },
  {
    name: "Scheduler",
    description: "Application built with React that allows users to book, cancel and edit their appointments.",
    tech: ["/images/icons/react.svg", "/images/icons/node.svg","/images/icons/postgresql.svg"],
    img: "/images/scheduler.png",
  },
  {
    name: "FunkyFuuds",
    description: "Full Stack food-ordering app built with Vanilla JS and Express.js. Connected to Twilio API to send text messages when the order is ready",
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

  return (
    <div>
      <div className="projects-title">My Projects</div>
      <main className="project-list">{projList}</main>;
    </div>
  );
}

export default ProjectList;
