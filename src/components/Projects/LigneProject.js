import { Button } from "@mui/material";

function LigneProject({project,setProjectOpened}){
    
    const changerProjetEnCours = () => {
        setProjectOpened(project.id);
    };

    return (
        <div className="ligne">
            <Button fullWidth={true} variant="outlined" title={project.nom} onClick={changerProjetEnCours}>{project.nom} ({project.tasks.length})</Button>
        </div>
    );
}

export default LigneProject;