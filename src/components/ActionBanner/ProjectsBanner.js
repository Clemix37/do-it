import { Button } from "@mui/material";

function ProjectsBanner({
	projects,
	setProjectOpened,
}) {
	const changerProjetEnCours = (id) => {
		setProjectOpened(id);
	};

	return (
		<div className="di-action-banner ligne">
			{projects.map((project) => (
				<Button
					variant="outlined"
					key={project.id}
					title={project.nom}
					onClick={() => changerProjetEnCours(project.id)}
				>
					{project.nom} ({project.tasks.length})
				</Button>
			))}
		</div>
	);
}

export default ProjectsBanner;
