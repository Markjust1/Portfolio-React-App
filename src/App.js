import Navigation from "./components/Navigation";
import Tech_stack from "./components/Tech_stack";
import ProjectList from "./components/ProjectList";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="curved">
        <Navigation />
        <About />
      </div>
      <Tech_stack />
      <ProjectList />
    </div>
  );
}

export default App;
