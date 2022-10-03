import Navigation from "./components/Navigation";
import ProjectList from "./components/ProjectList";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <About />
      <ProjectList />
    </div>
  );
}

export default App;
