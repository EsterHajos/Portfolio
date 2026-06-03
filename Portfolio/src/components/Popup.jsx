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
                <a href={githubRepo} target="_blank" rel="noreferrer">GitHub Repository</a>
                <p>{techUsed}</p>
                <p>{writeUp}</p>
                <p>{projectfunction}</p>
                <p>{learned}</p>
                <p>{role}</p>
                <p>{challanges}</p>

                <button onClick={onClose}>Close</button>
                
            </div>
        </div>
    );
}

export default Popup;