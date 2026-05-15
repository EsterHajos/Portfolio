function Component ({
projectname,
screenshot,
githudRepo,
techUsed,
writeUp,
projectfunction,
learned,
role, 
challanges,
})

return (
<div className="project-card">

<h2>{projectname}</h2>

<img src={screenshot} alt={projectname} /> //lägg till storlek på bilden om de behövs

<a href={githudRepo}>GitHub Repository link</a>

<p>Tech Used: {techUsed.join(', ')}</p>

<p>About the project: {writeUp}</p>

<p>What the project does: {projectfunction}</p>

<p>What I learned: {learned}</p>

<p>My project role: {role}</p>

<p>Challenges: {challanges}</p>

</div>
);

export default Component;