import { useState } from "react";
import projects from "../data/projects";
import Projectcard from "../components/Projectcard";
import Popup from "../components/Popup";



function Portfolio() {
const [selectedProject, setSelectedProject] = useState(null);

  return ( 

    <div>
      <h1>My Portfolio</h1>
      <div className="project-container">
        {projects.map((project) => (
          <div key={project.projectname}
            onClick={() => setSelectedProject(project)} 
            >
          <Projectcard {...project} />

          </div>
        ))}
      </div>

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