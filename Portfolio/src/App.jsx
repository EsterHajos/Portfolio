import projects from "./data/projects";
import projectcard from "./components/projectcard";

function App() {
  return (

    <div>
      <h1>My Portfolio</h1>

      <div className="projects.conatiner"> 
        {projects.map((project) => (
          <ProjectCard
            key={project.projectname}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}


export default App;



