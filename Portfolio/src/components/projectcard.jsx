function Projectcard({
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

      {screenshot && (
        <img src={screenshot} alt={projectname} />
      )}

      {githubRepo && (
        <a href={githubRepo} target="_blank" rel="noreferrer">
          GitHub Repository link
        </a>
      )}

      <p>
        Tech Used: {Array.isArray(techUsed) ? techUsed.join(", ") : techUsed}
      </p>

      <p>About the project: {writeUp}</p>

      <p>What the project does: {projectfunction}</p>

      <p>What I learned: {learned}</p>

      <p>My project role: {role}</p>

      <p>Challenges: {challenges}</p>

    </div>
  );
}

export default Projectcard;