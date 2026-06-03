import { useState } from "react";
import projects from "../data/projects";
import Projectcard from "../components/Projectcard";
import Popup from "../components/Popup";



function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return ( 

    <div>
      <h1>My Portfolio</h1>

      <button onClick={() => {
        setShowProjects(!showProjects); setSelectedProject(null);
      }}>
          {showProjects ? "Hide Projects" : "Show Projects"}
        </button>

         {showProjects && (
        <div className="projects-container">
          {projects.map((project) => (
            <Projectcard
              key={project.projectname}
              projectname={project.projectname}
              onClick={() => setSelectedProject(project)}
            />  
          ))}
        </div>
      )}
  
      {selectedProject && (
        <Popup 
         {...selectedProject}
         onClose={() => setSelectedProject(null)}
        />  
      )}
    </div>

  );
  

}

export default Portfolio;