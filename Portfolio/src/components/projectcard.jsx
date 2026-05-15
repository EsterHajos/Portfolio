function projectcard ({
projectname,
screenshot,
githubRepo,
techUsed,
writeUp,
projectfunction,
learned,
role, 
challenges,
}) { 

return (
<div className="project-card">

<h2>{projectname}</h2>

<img src={screenshot} alt={projectname} > </img>

<a href={githubRepo}>GitHub Repository link</a>

<p>Tech Used: {techUsed.toString()}</p>  

<p>About the project: {writeUp}</p>

<p>What the project does: {projectfunction}</p>

<p>What I learned: {learned}</p>

<p>My project role: {role}</p>

<p>Challenges: {challenges}</p>

</div>
);

}


export default projectcard;