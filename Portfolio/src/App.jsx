import projects from "./data/projects";
import ProjectCard from "./components/projectcard";

function App() {
  return (
    <div>
      <h1>My Portfolio from Front End Development 2026 VT</h1>

      <div class="projects-container">
        {projects.map((project) => (
          <ProjectCard 
            key={project.projectname}
            {...project}

          />
        ))}
      </div>
    </div>


export default App;