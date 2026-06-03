import { useState } from "react";
import projects from "../data/projects";
import Projectcard from "../components/Projectcard";
import Popup from "../components/Popup";



function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [tempSearch, setTempSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(project =>
    project.projectname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    setSearchTerm(tempSearch);
  }

  return ( 

    <div>
      <h1>My Portfolio</h1>


      <div>
       <button onClick={() => {
        setShowProjects(!showProjects); setSelectedProject(null);
      }}>
          {showProjects ? "Hide Projects" : "Show Projects"}
        </button>
      </div>  

      <div>
      <input placeholder="Search after project name" value={tempSearch} onChange={(e) => setTempSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      </div>

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