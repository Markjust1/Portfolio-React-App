import Navigation from "./components/Navigation";
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
      <ProjectList />
    </div>
  );
}

export default App;
