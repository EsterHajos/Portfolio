import Projects from "./data/Projects";
import Projectcard from "./components/Projectcard";

function App() {
  return (
    <div>
      <h1>My Portfolio</h1>

      <div className="projects-container">
        {Projects.map((project) => (
          <Projectcard
            key={project.projectname}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}

export default App;