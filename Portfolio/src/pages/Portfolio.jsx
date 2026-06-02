import { useState } from "react";
import projects from "../data/projects";
import Projectcard from "../components/Projectcard";



function Portfolio() {
const [showProjects, setShowProjects] = useState(false);

  return ( 

    <div>
      <h1>My Portfolio</h1>
        <button onClick={() => setShowProjects(!showProjects)}>
          {showProjects ? "Hide Projects" : "Show Projects"} 
        </button>

      {showProjects && (
        <div className="projects-container">
          {projects.map((project, index) => (
            <Projectcard key={index} project={project} />
          ))}
        </div>
      )}
    </div>

  )
  

}

export default Portfolio;