import Navigation from "./components/Navigation";
import Project from "./components/Project";

const projects = [
  {
    name: "Paws",
    description: "Social media for dogs",
    img: 'image_link'
  }
];

function App() {
  return (
    <div className="App">
      <Navigation />
      <Project
        name={projects[0].name}
        description={projects[0].description}
        image={projects[0].img}
      />
    </div>
  );
}

export default App;
