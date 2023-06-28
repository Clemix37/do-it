import LigneProject from "../Projects/LigneProject";


function LeftPanel({projects, setProjectOpened}){
    return (
        <div className="colonne" style={{width:"100px"}}>
            <div className="ligne">
                <h3>Projects</h3>
            </div>
            {
                projects.map(project => <LigneProject project={project} setProjectOpened={setProjectOpened} />)
            }
        </div>
    )
}

export default LeftPanel;