function Popup ({
projectname,
screenshot,
githubRepo,
techUsed,
writeUp,
projectfunction,
learned,
role,
challanges,
onClose,

})


{    return (
        <div className="popup">
            <div className="popup-content">

                <h2>{projectname}</h2>
                <img src={screenshot} alt={`${projectname} screenshot`} />
                <p><strong>GitHub Repository:</strong> <a href={githubRepo} target="_blank" rel="noopener noreferrer">{githubRepo}</a></p>
                <p><strong>Technologies Used:</strong> {techUsed}</p>
                <p><strong>Write-Up:</strong> {writeUp}</p>
                <p><strong>Project Function:</strong> {projectfunction}</p>
                <p><strong>What I Learned:</strong> {learned}</p>
                <p><strong>My Role:</strong> {role}</p>
                <p><strong>Challenges Faced:</strong> {challanges}</p>
                
                <button onClick={onClose}>Close</button>

            </div>
        </div>
    );
}

export default Popup;