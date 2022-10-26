import Project from "./Project";
import "./ProjectList.css";

const projects = [
  {
    name: "PAWs",
    description: "A social app that matches and links dogs, and their owners, for walks and play-dates. Matches are made based on detailed user profiles.",
    tech: ["/images/icons/react.svg", "/images/icons/node.svg","/images/icons/postgresql.svg"],
    img: "/images/paws.png",
    link: "https://github.com/Markjust1/PAWs"
  },
  {
    name: "Tool Crush",
    description: "A mini-game frontend app build with React (Candy Crush Saga style). Players need to get as many points as they can in 30 seconds",
    tech: ['', "/images/icons/react.svg", ''],
    img: "/images/tool_crush.png",
    link: "https://github.com/Markjust1/Tool_Crush"
  },
  {
    name: "Scheduler",
    description: "Application built with React that allows users to book, cancel and edit their appointments.",
    tech: ["/images/icons/react.svg", "/images/icons/node.svg","/images/icons/postgresql.svg"],
    img: "/images/scheduler.png",
    link: "https://github.com/Markjust1/scheduler"
  },
  {
    name: "FunkyFuuds",
    description: "Full Stack food-ordering app built with Vanilla JS and Express.js. Connected to Twilio API to send text messages when the order is ready",
    tech: ["/images/icons/js.svg", "/images/icons/node.svg","/images/icons/postgresql.svg"],
    img: "./images/funkyfuuds.png",
    link: "https://github.com/Markjust1/FunkyFuuds"
  },
  {
    name: "Jungle",
    description: "A mini e-commerce application built with Ruby on Rails",
    tech: ["/images/icons/node.svg", "/images/icons/ruby.svg","/images/icons/postgresql.svg"],
    img: "./images/jungle.png",
    link: "https://github.com/Markjust1/jungle-rails"
  },
  {
    name: "Tweeter",
    description: "Single-page app which is a twitter clone built with Vanilla JS",
    tech: ["/images/icons/js.svg", "","/images/icons/node.svg"],
    img: "./images/tweeter.png",
    link: "https://github.com/Markjust1/tweeter"
  },
  {
    name: "Tiny App",
    description: "Full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).",
    tech: ["/images/icons/js.svg", "","/images/icons/node.svg"],
    img: "./images/tiny_app.png",
    link: "https://github.com/Markjust1/tinyapp"
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
          link={proj.link}
        />
    );
  });

  return (
    <div>
      <div className="projects-title">My Projects</div>
      <main className="project-list">{projList}</main>
    </div>
  );
}

export default ProjectList;
