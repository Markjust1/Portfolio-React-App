import Project from "./Project";

const projects = [
  {
    name: "Paws",
    description: "Social media for dogs",
    tech: ['React', 'Express.js', 'PostgreSQL'],
    img: 'image_link'
  }, 
  {
    name: "Tool Crush",
    description: "Candy Crush Saga clone",
    tech: ['React'],
    img: 'image_link'
  },
  {
    name: "Scheduler",
    description: "Candy Crush Saga clone",
    tech: ['React', 'Express.js', 'PostgreSQL'],
    img: 'image_link'
  },
  {
    name: "FunkyFuuds",
    description: "Food ordering app",
    tech: ['Javascript', 'Express.js', 'PostgreSQL'],
    img: 'image_link'
  }
];

function ProjectList() {
  return (
    <main>
      <Project />
      <Project />
      <Project />
    </main>
  );
}

export default ProjectList;